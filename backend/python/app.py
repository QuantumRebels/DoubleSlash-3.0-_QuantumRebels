import os
import json
import base64
import io
import google.generativeai as genai
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from xhtml2pdf import pisa
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

# Load API Key
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

def analyze_student_performance(json_input):
    """Send student performance JSON to Gemini API for analysis."""
    student_data = json.loads(json_input)
    
    prompt = f"""
    The following is a student's performance report in JSON format. 
    Analyze the weaknesses and provide personalized recommendations for improvement:
    
    {json.dumps(student_data, indent=2)}

    Based on the quiz scores, accuracy rate, and time taken, suggest:
    1. Areas where the student needs improvement
    2. Personalized learning strategies
    3. Study resources or techniques to enhance performance
    """

    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)

    return response.text

def create_plot_image(plot_func):
    """Convert a matplotlib plot into a base64-encoded image."""
    img = io.BytesIO()
    plot_func()
    plt.savefig(img, format='png')
    plt.close()
    img.seek(0)
    return base64.b64encode(img.read()).decode()

def create_module_visualizations(module_wise_df):
    """Generate module performance graphs."""
    plots = {}

    def plot_module_accuracy():
        plt.figure(figsize=(8, 4))
        sns.barplot(x='Module Name', y='Quiz Accuracy Rate (%)', data=module_wise_df, palette='coolwarm')
        plt.title('Quiz Accuracy Rate by Module')
        plt.xlabel('Module Name')
        plt.ylabel('Quiz Accuracy Rate (%)')
        plt.xticks(rotation=0)
        plt.tight_layout()

    plots['module_accuracy'] = create_plot_image(plot_module_accuracy)

    def plot_time_taken():
        plt.figure(figsize=(8, 4))
        sns.barplot(x='Module Name', y='Time Taken for Quiz (minutes)', data=module_wise_df, palette='viridis')
        plt.title('Time Taken for Quiz by Module')
        plt.xlabel('Module Name')
        plt.ylabel('Time Taken (minutes)')
        plt.xticks(rotation=0)
        plt.tight_layout()

    plots['time_taken'] = create_plot_image(plot_time_taken)

    return plots

def generate_pdf_report(overall_data, recommendations, module_plots):
    """Generate a PDF report including student data, module performance, and AI-generated recommendations."""
    os.makedirs("reports", exist_ok=True)

    recommendation_html = recommendations.replace("\n", "<br>")  # Convert line breaks for HTML display

    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Student Performance Report</title>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 20px; padding: 20px; }}
            h1, h2, h3, h4 {{ color: #2E3B55; text-align: center; }}
            .performance-box {{
                border: 2px solid #4CAF50;
                padding: 15px;
                margin: 20px auto;
                border-radius: 8px;
                background-color: #ffffff;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 600px;
            }}
            .performance-box p {{ font-size: 16px; color: #333; }}
            img {{
                display: block;
                margin: 20px auto;
                max-width: 100%;
                border-radius: 5px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            }}
            .recommendation-section {{
                border: 2px solid #FF9800;
                padding: 15px;
                margin: 20px auto;
                border-radius: 8px;
                background-color: #FFF3E0;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 800px;
            }}
            .recommendation-section p {{ font-size: 16px; color: #444; }}
        </style>
    </head>
    <body>
        <h1>Student Performance Report</h1>
        
        <h2>Overall Performance</h2>
        <div class="performance-box">
            <p><strong>Student Name:</strong> {overall_data['Student Name']}</p>
            <p><strong>Total Modules Completed:</strong> {overall_data['Total Modules Completed']}</p>
            <p><strong>Overall Accuracy Rate:</strong> {overall_data['Overall Accuracy Rate (%)']}%</p>
            <p><strong>Overall Time Spent:</strong> {overall_data['Overall Time Spent (minutes)']} minutes</p>
            <p><strong>Progress Percentage:</strong> {overall_data['Progress Percentage (%)']}%</p>
        </div>
        
        <h2>Module-wise Performance Analysis</h2>
        <h3>Quiz Accuracy Rate by Module</h3>
        <img src="data:image/png;base64,{module_plots['module_accuracy']}" alt="Module Accuracy">
        
        <h3>Time Taken for Quiz by Module</h3>
        <img src="data:image/png;base64,{module_plots['time_taken']}" alt="Time Taken">
        
        <h2>AI-Generated Personalized Recommendations</h2>
        <div class="recommendation-section">
            <p>{recommendation_html}</p>
        </div>
    </body>
    </html>
    """
    pdf_path = "reports/student_performance_report.pdf"
    with open(pdf_path, "wb") as result_file:
        pisa.CreatePDF(html_content, dest=result_file)

    return pdf_path

@app.route("/generate-report", methods=["POST"])
def generate_report():
    """Receives student data, analyzes it, and stores a PDF report locally."""
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Invalid JSON input"}), 400

        # AI-generated recommendations
        recommendations = analyze_student_performance(json.dumps(data))

        # Parse student data
        overall_data = data['overall_performance']
        module_wise_df = pd.DataFrame(data['module_wise_performance'])

        # Generate performance graphs
        module_plots = create_module_visualizations(module_wise_df)

        # Generate and store PDF report
        pdf_path = generate_pdf_report(overall_data, recommendations, module_plots)

        return jsonify({"message": "Report generated successfully!", "file_path": pdf_path})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/download-report", methods=["GET"])
def download_report():
    """Endpoint to download the latest generated report."""
    pdf_path = "reports/student_performance_report.pdf"
    if os.path.exists(pdf_path):
        return send_file(pdf_path, as_attachment=True)
    else:
        return jsonify({"error": "No report found. Generate a report first."}), 404

if __name__ == "__main__":
    app.run(debug=True,port=8001)
