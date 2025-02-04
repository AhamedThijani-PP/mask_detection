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
