pipeline {
    agent {
        docker {
            image 'node:14' // Use the official Node.js image with version 14.x
            args '-p 3000:3000 -p 5000:5001' // If your React app is running on port 3000
        }
    }

    environment {
        CI = 'true'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Check out your repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the React app
                sh 'npm install && npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests if you have any
                sh 'npm install && npm run build'
            }
        }

    }     
}
Completed-Projects/my-portfolio-project-1/recipe_app/recipe-app-frontend