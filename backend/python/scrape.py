import json
from transformers import MarianMTModel, MarianTokenizer

def translate_text(text, model_name="Helsinki-NLP/opus-mt-en-hi"):
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)
    
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    translated = model.generate(**inputs)
    return tokenizer.decode(translated[0], skip_special_tokens=True)

def translate_json(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    translated_data = {key: translate_text(value) for key, value in data.items()}
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(translated_data, f, indent=4, ensure_ascii=False)
    
    print(f"Translation completed. Output saved to {output_file}")

# Example usage:
input_json_file = "english.json"  # Replace with your input JSON file
output_json_file = "hindi.json"  # Output file
translate_json(input_json_file, output_json_file)