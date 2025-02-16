import os
import json
import re
import torch
from transformers import MarianMTModel, MarianTokenizer
from bs4 import BeautifulSoup

# Define the src folder path
SRC_FOLDER = r"E:\web dev\QuantumRebels\DoubleSlash-3.0-_QuantumRebels\src"  # Use raw string (r"...") to avoid escape issues

# Load translation model
model_name = "Helsinki-NLP/opus-mt-en-hi"
tokenizer = MarianTokenizer.from_pretrained(model_name)
model = MarianMTModel.from_pretrained(model_name)

# Move model to CPU
device = torch.device("cpu")
model.to(device)


# Function to extract text from an HTML file
def extract_text_from_html(content):
    soup = BeautifulSoup(content, "html.parser")
    return [
        tag.get_text(strip=True)
        for tag in soup.find_all(text=True)
        if tag.parent.name not in ["script", "style", "meta", "link"]
    ]


# Function to extract text from JavaScript/JSX/TSX files
def extract_text_from_js(content):
    # Improved regex to capture text inside quotes (` ' " `)
    matches = re.findall(r'["\'`]{1}([^"\n\r]+?)["\'`]{1}', content)
    return [m.strip() for m in matches if len(m.strip()) > 1]


# Function to read and extract text from files
def extract_text_from_files(folder):
    extracted_texts = set()

    for root, _, files in os.walk(folder):
        for file in files:
            file_path = os.path.join(root, file)

            try:
                # Skip non-text files
                if not file.endswith((".html", ".js", ".jsx", ".tsx", ".ts")):
                    continue

                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()

                    if file.endswith(".html"):
                        extracted_texts.update(extract_text_from_html(content))
                    elif file.endswith((".js", ".jsx", ".tsx", ".ts")):
                        extracted_texts.update(extract_text_from_js(content))

            except Exception as e:
                print(f"⚠️ Error reading {file_path}: {e}")

    return list(extracted_texts)


# Function to translate text in **batches** (MUCH faster)
def translate_text(text_list, batch_size=5):
    translations = {}

    for i in range(0, len(text_list), batch_size):
        batch = text_list[i : i + batch_size]
        inputs = tokenizer(batch, return_tensors="pt", padding=True, truncation=True, max_length=512).to(device)
        translated_tokens = model.generate(**inputs)
        translated_texts = tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)

        for original, translated in zip(batch, translated_texts):
            translations[original] = translated

        print(f"✅ Translated {i + len(batch)} of {len(text_list)}...")

    return translations


# Main function
def main():
    print(f"🔍 Scanning files in {SRC_FOLDER}...")
    extracted_text = extract_text_from_files(SRC_FOLDER)

    if not extracted_text:
        print("⚠️ No text extracted. Check file paths and content.")
        return

    print(f"✅ Extracted {len(extracted_text)} unique text elements.")

    print("📝 Translating text to Hindi (this may take some time)...")
    translated_data = translate_text(extracted_text)

    # Save translations to JSON file
    with open("translations.json", "w", encoding="utf-8") as json_file:
        json.dump(translated_data, json_file, ensure_ascii=False, indent=2)

    print("🎉 Translation JSON saved as translations.json")


if __name__ == "__main__":
    main()
