import google.generativeai as genai
import json
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64
from xhtml2pdf import pisa

# Configure Gemini API
genai.configure(api_key="AIzaSyDuvmeL9rg-dZ0EH5XtOHCfUujE4dyMwoA")

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

def create_module_visualizations(module_wise_df):
    """Generate module performance graphs."""
    plots = {}

    def plot_module_accuracy():
        plt.figure(figsize=(8,4))
        sns.barplot(x='Module Name', y='Quiz Accuracy Rate (%)', data=module_wise_df, palette='coolwarm')
        plt.title('Quiz Accuracy Rate by Module')
        plt.xlabel('Module Name')
        plt.ylabel('Quiz Accuracy Rate (%)')
        plt.xticks(rotation=0)
        plt.tight_layout()

    plots['module_accuracy'] = create_plot_image(plot_module_accuracy)

    def plot_time_taken():
        plt.figure(figsize=(8,4))
        sns.barplot(x='Module Name', y='Time Taken for Quiz (minutes)', data=module_wise_df, palette='viridis')
        plt.title('Time Taken for Quiz by Module')
        plt.xlabel('Module Name')
        plt.ylabel('Time Taken (minutes)')
        plt.xticks(rotation=0)
        plt.tight_layout()

    plots['time_taken'] = create_plot_image(plot_time_taken)

    return plots

def create_plot_image(plot_func):
    """Convert a matplotlib plot into a base64-encoded image."""
    img = io.BytesIO()
    plot_func()
    plt.savefig(img, format='png')
    plt.close()
    img.seek(0)
    return base64.b64encode(img.read()).decode()

def generate_pdf_report(overall_data, module_wise_df, module_plots, recommendations):
    """Generate a PDF report including student data, module performance, and AI-generated recommendations."""

    recommendation_html = recommendations.replace("\n", "<br>")  # Fix: Convert to HTML

    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Student Performance Report</title>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 20px; padding: 20px; }}
            h1, h2, h3, h4 {{ color: #2E3B55; text-align: center; font-size : 25px;}}
            .performance-box {{
                border: 2px solid #4CAF50;
                padding: 15px;
                margin: 20px auto;
                border-radius: 8px;
                background-color: #ffffff;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                font-size : 25px;
            }}
            .performance-box p {{ font-size: 16px; color: #333; }}
            img {{
                display: block;
                margin: 20px auto;
                max-width: 100%;
                border-radius: 5px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                margin-botton : 50px;            }}
            .recommendation-section {{
                border: 2px solid #FF9800;
                padding: 15px;
                margin: 20px auto;
                border-radius: 8px;
                background-color: #FFF3E0;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 800px;
                margin-botton : 50px;
                margin-top: 200px            }}

            .recommendation-section p {{ margin-top:250px; font-size: 16px; color: #444; }}
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

    def convert_html_to_pdf(source_html, output_filename):
        """Convert HTML content to a PDF file."""
        with open(output_filename, "wb") as result_file:
            pisa_status = pisa.CreatePDF(source_html, dest=result_file)
        return pisa_status.err

    pdf_status = convert_html_to_pdf(html_content, "student_performance_report.pdf")

    if pdf_status == 0:
        print("PDF report generated successfully!")
    else:
        print(f"Error generating PDF: {pdf_status}")


def generate_student_report(json_input):
    """Main function: Get AI recommendations, generate plots, and create the final PDF report."""

    # Get AI-generated recommendations
    recommendations = analyze_student_performance(json_input)

    # Parse student data
    student_data = json.loads(json_input)
    overall_data = student_data['overall_performance']
    module_wise_df = pd.DataFrame(student_data['module_wise_performance'])

    # Generate module performance visualizations
    module_plots = create_module_visualizations(module_wise_df)

    # Generate PDF report with recommendations
    generate_pdf_report(overall_data, module_wise_df, module_plots, recommendations)

# Sample JSON Input
json_input = '''
{
  "overall_performance": {
    "Student ID": "S1",
    "Student Name": "Student 1",
    "Total Modules Completed": 4,
    "Overall Accuracy Rate (%)": 85.5,
    "Overall Time Spent (minutes)": 450,
    "Progress Percentage (%)": 80.0
  },
  "module_wise_performance": [
    {
      "Module ID": 1,
      "Module Name": "Module 1",
      "Module Completion Status": "Completed",
      "Quiz Score": 90,
      "Quiz Accuracy Rate (%)": 90,
      "Time Taken for Quiz (minutes)": 30
    },
    {
      "Module ID": 2,
      "Module Name": "Module 2",
      "Module Completion Status": "In Progress",
      "Quiz Score": 80,
      "Quiz Accuracy Rate (%)": 80,
      "Time Taken for Quiz (minutes)": 25
    }
  ]
}
'''

# Generate PDF with recommendations
generate_student_report(json_input)