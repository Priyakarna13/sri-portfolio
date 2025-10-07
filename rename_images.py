import os


folder_path = "/Users/srilakshmipriyadwarakanath/Documents/projects/sri-portfolio/public/hobbies" 


new_name = "image" 


extensions =  ".jpeg"


for i, filename in enumerate(sorted(os.listdir(folder_path))):
    ext = os.path.splitext(filename)[1].lower()
    if ext in extensions:
        new_filename = f"{new_name}_{i+1:03d}{ext}" 
        src = os.path.join(folder_path, filename)
        dst = os.path.join(folder_path, new_filename)
        os.rename(src, dst)
        print(f"Renamed: {filename} → {new_filename}")

print("✅ All images renamed successfully!")
