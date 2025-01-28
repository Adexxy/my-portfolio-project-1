pipeline{
    agent any

    tools{
        nodejs 'nodejs_23'
    }

    environment {
        CI = 'false'
    }

    stages{
        stage('Checkout Code'){
            steps{
                checkout scm
            }
        }

        stage('Install Dependencies - Frontend'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'npm install'
                }
            }
        }

        stage('Install Dependencies - Backend'){
            steps{
                dir('recipe_app/recipe-app-backend'){
                    sh 'npm install'
                }
            }
        }

        stage('Test Frontend'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'npm test'
                }
            }
        }

        // stage('Test - Backend'){
        //     steps{
        //         dir('recipe_app/recipe-app-backend'){
        //             sh 'npm test'
        //         }
        //     }
        // }

        stage('Build -Frontend'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'npm run build'
                }
            }
        }

        stage('Preview and Approve'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'npm start &'
                    sh "echo 'Now...Visit http://localhost:3000 to see your Node.js/React application in action.'"
                    input 'Preview the application and approve to proceed'
                }
            }
        }

        stage('Package App'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'tar -czf recipe-app-frontend.tar.gz build/'
                }
            }
        }

        stage('Build Container Images of Frontend and Backend'){
            steps{
                sh 'docker build -t adexxy/node-react-frontend:latest recipe_app/recipe-app-frontend/'
                sh 'docker build -t adexxy/node-react-backend:latest recipe_app/recipe-app-backend/'
            }
        }

        stage('Push to Dockerhub'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerid', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_NAME')]){
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_NAME'
                    sh 'docker push adexxy/node-react-frontend:latest'
                    sh 'docker push adexxy/node-react-backend:latest'
                }
            }
        }

        stage('Deploy to Kubernetes Server'){
            steps{
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]){
                    sh 'kubectl apply -f kubernetes-deplyment.yaml'
                }
            }
        }
    }
}




// form AI - as Template
// pipeline {
//     agent any

//     tools {
//         nodejs 'nodejs_23' // Ensure this tool is configured in Jenkins
//     }

//     environment {
//         DOCKER_IMAGE_BACKEND = "your-dockerhub-username/recipe-app-backend"
//         DOCKER_IMAGE_FRONTEND = "your-dockerhub-username/recipe-app-frontend"
//         DOCKER_TAG = "latest"
//         KUBE_NAMESPACE = "your-namespace"
//     }

//     stages {
//         // Stage 1: Checkout Code
//         stage('Checkout Code') {
//             steps {
//                 checkout scm // Checkout the code from the repository
//             }
//         }

//         // Stage 2: Build and Test Backend
//         stage('Build and Test Backend') {
//             steps {
//                 dir('recipe_app/recipe-app-backend') {
//                     sh 'npm install' // Install backend dependencies
//                     sh 'npm test' // Run backend tests
//                 }
//             }
//         }

//         // Stage 3: Build and Test Frontend
//         stage('Build and Test Frontend') {
//             steps {
//                 dir('recipe_app/recipe-app-frontend') {
//                     sh 'npm install' // Install frontend dependencies
//                     sh 'npm test' // Run frontend tests
//                     sh 'npm run build' // Build the frontend
//                 }
//             }
//         }

//         // Stage 4: Containerize Backend
//         stage('Containerize Backend') {
//             steps {
//                 script {
//                     docker.build("${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}", "recipe_app/recipe-app-backend")
//                 }
//             }
//         }

//         // Stage 5: Containerize Frontend
//         stage('Containerize Frontend') {
//             steps {
//                 script {
//                     docker.build("${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}", "recipe_app/recipe-app-frontend")
//                 }
//             }
//         }

//         // Stage 6: Push Docker Images
//         stage('Push Docker Images') {
//             steps {
//                 script {
//                     docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
//                         docker.image("${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}").push()
//                         docker.image("${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}").push()
//                     }
//                 }
//             }
//         }

//         // Stage 7: Deploy to Kubernetes
//         stage('Deploy to Kubernetes') {
//             steps {
//                 sh "kubectl apply -f recipe_app/kubernetes/backend-deployment.yaml --namespace=${KUBE_NAMESPACE}"
//                 sh "kubectl apply -f recipe_app/kubernetes/backend-service.yaml --namespace=${KUBE_NAMESPACE}"
//                 sh "kubectl apply -f recipe_app/kubernetes/frontend-deployment.yaml --namespace=${KUBE_NAMESPACE}"
//                 sh "kubectl apply -f recipe_app/kubernetes/frontend-service.yaml --namespace=${KUBE_NAMESPACE}"
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Pipeline completed successfully!'
//         }
//         failure {
//             echo 'Pipeline failed!'
//         }
//     }
// }