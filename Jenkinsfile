pipeline{
    agent any

    tools{
        nodejs 'nodejs_23'
    }

    stages{
        stage('Checkout Code'){
            steps{
                checkout scm
            }
        }

        stage('Install Dependencies'){
            steps{
                dir('recipe-app-frontend'){
                    sh 'npm install'
                }
            }
        }

        stage('Test'){
            steps{
                dir('recipe-app-frontend'){
                    sh 'npm test'
                }
            }
        }

        stage('Build'){
            steps{
                dir('recipe-app-frontend'){
                    sh 'npm run build'
                }
            }
        }

        stage('Preview and Approve'){
            steps{
                dir('recipe-app-frontend'){
                    sh 'npm start &'
                    sh "echo 'Now...Visit http://localhost:3000 to see your Node.js/React application in action.'"
                    input 'Preview the application and approve to proceed'
                }
            }
        }
    }
}