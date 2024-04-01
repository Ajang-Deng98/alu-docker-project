# containerization of web application
Description of the work.

This is a project developed to manage web applications like personal tasks and projects using HTML, CSS, and JavaScript. And containerize using Docker to ensure it can be easily deployed and scaled across different environments without any issues.

Properties

Add new tasks
View list of tasks
Mark tasks as completed
Tools used
Docker
CSS
JavaScript
HTML
How to use the application
You should Clone this repository to your local machine.
Then, Navigate to the project directory.
And Build the Docker image using the available Dockerfile:
 docker build -t ajangdengimage 


To run the Docker container:
docker run -p 8080:80 ajangdengimage 


Now to access type this    http://localhost:8080

Link to the Docker Hub page.

https://hub.docker.com/repository/docker/ajangdeng/alu-docker-project-repo/general
