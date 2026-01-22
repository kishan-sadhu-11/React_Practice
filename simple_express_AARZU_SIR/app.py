import cv2
import numpy as np

# Load the image
img = cv2.imread('screws.jpg')
if img is None:
    print("Error: Image not found.")
    exit()

# 1. Convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# 2. Strong Blur to remove metallic reflections (the 'noise')
blurred = cv2.GaussianBlur(gray, (15, 15), 0)

# 3. Thresholding (Adjust the '127' if your image is too dark or too bright)
_, thresh = cv2.threshold(blurred, 127, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

# 4. Clean up the shapes (Dilation & Erosion)
# This fills holes inside the screws and removes tiny dots
kernel = np.ones((5, 5), np.uint8)
closing = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel, iterations=2)

# 5. Find Contours
contours, _ = cv2.findContours(closing, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

exact_count = 0
for cnt in contours:
    area = cv2.contourArea(cnt)
    
    # --- THE FILTERING STAGE ---
    # Only count if the object is big enough to be a screw
    # Adjust 500 based on your image size
    if area > 500: 
        # Calculate Aspect Ratio (Width / Height)
        x, y, w, h = cv2.boundingRect(cnt)
        aspect_ratio = float(w)/h
        
        # Screws are usually long (not square). 
        # This helps ignore square or perfectly round noise.
        exact_count += 1
        
        # Draw the detection
        cv2.drawContours(img, [cnt], -1, (0, 255, 0), 2)
        cv2.putText(img, str(exact_count), (x, y - 10), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

print(f"Exact Count: {exact_count}")
cv2.imshow("Filtered Results", img)
cv2.waitKey(0)
cv2.destroyAllWindows()