# Use the official Python image as the base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY . /app

# Install the required Python dependencies
RUN pip install -r requirements.txt

# Expose port 5000 for Flask
EXPOSE 5000

# Set the command to run the Flask application
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
