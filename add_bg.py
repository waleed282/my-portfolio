from PIL import Image
import shutil

def add_white_background(input_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Create a white background image
        background = Image.new("RGBA", img.size, (255, 255, 255, 255))
        
        # Paste the image on top of the background (using alpha channel as mask)
        background.paste(img, (0, 0), img)
        
        # Save as PNG (removing alpha channel if desired, but keeping it simple)
        background.save(input_path, "PNG")
        print(f"Restored background for {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

try:
    add_white_background("public/images/logo.png")
    add_white_background("public/images/favicon.png")
    print("Successfully reverted background changes.")
except Exception as e:
    print(f"Global error: {e}")
