Project Name: Laravel Product Catalog API + React App

Description
This project is a full-stack application that combines a Laravel 11 API with a React.js frontend, all running within a Docker environment. The API serves as a product catalog, and the React app provides an interactive user interface for managing and displaying products. The application also integrates Redis for caching, RabbitMQ for message queuing, and MySQL as the database.

Project Stack
Docker: Containerized environment for easy setup and deployment.
Laravel 11: Backend API for handling product data and business logic.
React.js: Frontend application for displaying and interacting with product catalog data.
Redis: In-memory data store for caching API responses.
RabbitMQ: Message broker for managing background tasks.
MySQL: Relational database for storing product data.

Setup Instructions
Follow the steps below to set up the project locally or in any environment that supports Docker.

1. Clone the Repository
   First, clone the project repository:

git clone https://github.com/shakibzaman/Docker-Product-Catalog.git
cd Docker-Product-Catalog

2. Install Docker and Docker Compose
   Ensure that you have Docker and Docker Compose installed on your system. You can download and install them from the following links:

Docker Installation Guide
Docker Compose Installation Guide

3. Build the Docker Containers
   Navigate to the project folder, then build the Docker containers for both Laravel and React:

docker-compose up -d --build
This will build the required Docker images for both the backend API (Laravel) and the frontend (React).

4. Set Up the Environment Variables
   Copy the .env.example file and create your own .env file for configuration:

cp .env.example .env
Make sure to update the database, Redis, and RabbitMQ configurations in the .env file as needed.

5. Migrate the Database
   Once the containers are up and running, migrate the database for Laravel:

docker-compose exec app php artisan migrate
This will set up the necessary tables in the MySQL database.

6. Install Dependencies
   For the Laravel API:

docker-compose exec app composer install
For the React app:

docker-compose exec react npm install 7. Run the Application
After all dependencies are installed, you can run the application:

Laravel API should be accessible at: http://localhost:8000
React frontend should be accessible at: http://localhost:3000
