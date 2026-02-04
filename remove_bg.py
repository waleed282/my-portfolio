from PIL import Image
import shutil
import os

def remove_background(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if pixel is white (or very close to white)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

try:
    logo_path = "public/images/logo.png"
    temp_path = "public/images/logo_temp.png"
    
    # Process logo
    remove_background(logo_path, temp_path)
    
    # Overwrite original
    shutil.move(temp_path, logo_path)
    
    # Update favicon
    shutil.copy(logo_path, "public/images/favicon.png")
    
    print("Successfully removed background and updated logo/favicon")
except Exception as e:
    print(f"Error: {e}")
