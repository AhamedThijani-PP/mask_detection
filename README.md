*Python Version *3.12.4* for error free experience*

# Mask Detection Model

This project implements a mask detection system using a deep learning model deployed with Django. It identifies whether individuals in images are wearing masks, contributing to health and safety measures.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Mask Detection**: Accurately detects the presence of masks in images.
- **Web Interface**: User-friendly web application built with Django for uploading and analyzing images.
- **Real-time Processing**: Capable of processing images in real-time for immediate feedback.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AhamedThijani-PP/mask_detection.git
   cd mask_detection
   
2. **Create a Virtual Environment**:

   ```bash
   python3 -m venv venv
   source venv/bin/activate

3. **Install Dependencies**:

   ```bash
   pip install -r requirements.txt

4. **Apply Migrations**:

   ```bash
   python manage.py migrate

5. **Run the Development Server**:

   ```bash
   python manage.py runserver

- Access the application at **http://127.0.0.1:8000/**

## Usage
- Upload Image: Use the web interface to upload an image.
- View Results: The application will display the image with annotations indicating mask detection results.

## Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch: git checkout -b feature/YourFeature.
- Commit your changes: git commit -m 'Add YourFeature'.
- Push to the branch: git push origin feature/YourFeature.
- Open a pull request.

## Project Structure

   ```bash
   mask_detection/
   ├── mask_detect/
   │   ├── migrations/
   │   ├── __init__.py
   │   ├── admin.py
   │   ├── apps.py
   │   ├── models.py
   │   ├── tests.py
   │   └── views.py
   ├── mask_detection/
   │   ├── __init__.py
   │   ├── asgi.py
   │   ├── settings.py
   │   ├── urls.py
   │   └── wsgi.py
   ├── models/
   │   └── mask_detector.model
   ├── static/
   │   ├── css/
   │   ├── images/
   │   └── js/
   ├── templates/
   │   └── index.html
   ├── db.sqlite3
   ├── manage.py
   └── requirements.txt
