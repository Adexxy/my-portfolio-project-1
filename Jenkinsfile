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

        stage('Install Dependencies') {
            steps {
                // Navigate to the frontend folder
                dir('recipe_app/recipe-app-frontend') {
                    sh 'npm install --save-dev @babel/preset-env @babel/preset-react babel-jest'
                }
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the React app
                sh 'cd recipe_app/recipe-app-frontend && npm install && npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests if you have any
                sh 'cd recipe_app/recipe-app-frontend && npm test'
            }
        }

        stage('Package') {
            steps {
                // Package your React app
                // For example, create a tar.gz file
                sh 'tar -czvf frontend-package.tar.gz recipe_app/recipe-app-frontend/build'
            }
        }

        stage('Preview & Manual Approval') {
            steps {
                // sh 'cd build && python -m http.server &'
                sh 'npm start &'
                sh "echo 'Now...Visit http://localhost:3000 to see your Node.js/React application in action.'"
                input "Preview the application and approve to proceed"
            }
        }
    }     
}
