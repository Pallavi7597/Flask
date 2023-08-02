# Use the official Python image as the base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install the required Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files into the container
COPY app.py .

# Expose port 5000 for Flask
EXPOSE 5000

# Set the command to run the Flask application
CMD ["python", "app.py"]
