// pipeline{
//     agent any

//     tools{
//         nodejs 'nodejs_23'
//     }

//     environment {
//         CI = 'false'

//         // If you want to use a custom versioning scheme (e.g., Git commit SHA), you can set IMAGE_VERSION like this
//         // IMAGE_VERSION = env.BUILD_ID
//         // IMAGE_VERSION = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
//     }

//     stages{
//         stage('Checkout Code'){
//             steps{
//                 checkout scm
//             }
//         }

        // stage('Install Dependencies - Frontend'){
        //     steps{
        //         dir('recipe_app/recipe-app-frontend'){
        //             sh 'npm install'
        //         }
        //     }
        // }

        // stage('Install Dependencies - Backend'){
        //     steps{
        //         dir('recipe_app/recipe-app-backend'){
        //             sh 'npm install'
        //         }
        //     }
        // }

        // stage('Test Frontend'){
        //     steps{
        //         dir('recipe_app/recipe-app-frontend'){
        //             sh 'npm test'
        //         }
        //     }
        // }

        // // stage('Test - Backend'){
        // //     steps{
        // //         dir('recipe_app/recipe-app-backend'){
        // //             sh 'npm test'
        // //         }
        // //     }
        // // }

        // stage('Build -Frontend'){
        //     steps{
        //         dir('recipe_app/recipe-app-frontend'){
        //             sh 'npm run build'
        //         }
        //     }
        // }

        // stage('Preview and Approve'){
        //     steps{
        //         dir('recipe_app/recipe-app-frontend'){
        //             sh 'npm start &'
        //             sh "echo 'Now...Visit http://localhost:3000 to see your Node.js/React application in action.'"
        //             input 'Preview the application and approve to proceed'
        //         }
        //     }
        // }

        // stage('Package App'){
        //     steps{
        //         dir('recipe_app/recipe-app-frontend'){
        //             sh 'tar -czf recipe-app-frontend.tar.gz build/'
        //         }
        //     }
        // }

        // stage('Build Container Images of Frontend and Backend'){
        //     steps{
        //         sh 'docker build -t adexxy/node-react-frontend:latest recipe_app/recipe-app-frontend/'
        //         sh 'docker build -t adexxy/node-react-backend:latest recipe_app/recipe-app-backend/'
        //     }
        // }

        // stage('Push to Dockerhub'){
        //     steps{
        //         withCredentials([usernamePassword(credentialsId: 'dockerid', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_NAME')]){
        //             sh 'echo $DOCKER_PASS | docker login -u $DOCKER_NAME --password-stdin'
        //             sh 'docker push adexxy/node-react-frontend:latest'
        //             sh 'docker push adexxy/node-react-backend:latest'
        //         }
        //     }
        // }

//         stage('Deploy to Kubernetes Server'){
//             steps{
//                 withCredentials([file(credentialsId: 'microk8s-config', variable: 'KUBECONFIG')]){
//                     sh '''
//                     # echo "Using kubeconfig from: $KUBECONFIG"
//                     # cat $KUBECONFIG  # Debug: Show kubeconfig file contents
//                     # kubectl config view  # Debug: Show active kubeconfig
//                     # kubectl apply -f kubernetes-deployment.yaml
//                     kubectl delete -f kubernetes-deployment.yaml
//                     '''
//                 }
//             }
//         }
//     }
// }




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



// pipeline {
//     agent any
   
//     environment {
//         AWS_REGION = '<REGION-CODE>'
//         ECR_REPO = '<ECR-REPO-LINK>'
//         DOCKER_IMAGE_NAME = '<Your-IMG-NAME>'
//         KUBECONFIG = "/var/lib/jenkins/.kube/config" //locate in jenkins EC2 serevr
//     }
   
//     stages {
//         stage('Build Docker Image') {
//             steps {
//                 script {
//                     // Build Docker image
//                     docker.build("$DOCKER_IMAGE_NAME:${env.GIT_COMMIT}")
//                 }
//             }
//         }
       
//         stage('Tag Docker Image') {
//             steps {
//                 script {
//                     // Tag Docker image using Docker command directly
//                     sh "docker tag $DOCKER_IMAGE_NAME:${env.GIT_COMMIT} $ECR_REPO:${env.GIT_COMMIT}"
//                 }
//             }
//         }


//         stage('Push to ECR') {
//             steps {
//                 script {
//                     // Authenticate Docker client to ECR using AWS CLI
//                     withCredentials([aws(credentialsId: 'AWS-Credentials', region: AWS_REGION)]) {
//                         sh "aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REPO"
//                     }
                   
//                     // Push Docker image to ECR
//                     sh "docker push $ECR_REPO:${env.GIT_COMMIT}"
//                 }
//             }
//         }

//         stage('Deploy to EKS') {
//             steps {
//                 script {
//                     // Set KUBECONFIG environment variable
//                     withEnv(["KUBECONFIG=${KUBECONFIG}"]) {
//                         // Get the latest image tag from the GIT_COMMIT environment variable
//                         def imageTag = env.GIT_COMMIT
                        
//                         // Replace the placeholder ${IMAGE_TAG} in deployment.yaml with the actual image tag
//                         sh "sed -i 's|\${IMAGE_TAG}|${imageTag}|' deployment.yaml"
                        
//                         // Apply deployment.yaml to the EKS cluster
//                         sh "kubectl apply -f deployment.yaml"
//                         sh "kubectl apply -f service.yaml"
//                     }
//                 }
//             }
//         }
//     }

// }





// pipeline{
//     agent any

//     environment{
//         DOCKER_IMAGE_F = frontend
//         DOCKER_IMAGE_B = backend
//         IMAGE_TAG = 'latest'
//     }

//     stages{
//         stage('Checkout Code'){
//             steps(
//                 checkout scm
//             )
//         }

//         stage('Install Dependencies and Build'){
//             steps{
//                 sh 'npm install'
//             }
//         }

//         stage('Test'){
//             steps{
//                 sh 'npm test'
//             }
//         }

//         stage('Preview and Approve'){
//             steps{
//                 sh 'npm start &'
//                 sh "echo 'Now...Visit http://localhost:3000 to see your Node.js/React application in action.' "
//                 input 'Preview the application and approve to proceed'
//             }
//         }

//         stage('Build Container Image'){
//             steps{
//                 sh 'docker build -t $DOCKER_IMAGE_F:$IMAGE_TAG .'
//                 sh 'docker build -t $DOCKER_IMAGE_B:$IMAGE_TAG .'
//             }
//         }

//         stage('Push to Repository'){
//             steps{
//                 withCredentials([usernamePassword(credntialsId: 'dockerid', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_NAME')]){
//                     sh 'docker push $DOCKER_IMAGE_F:$IMAGE_TAG'
//                     sh 'docker push $DOCKER_IMAGE_B:$IMAGE_TAG'
//                 }
//             }
//         }

//         stage("Deploy to Kubernetes Server"){
//             steps{
//                 withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBCONFIG')]){
//                     sh 'kubectl apply -f deployment.yaml'
//                 }
//             }
//         }
//     }
// }



pipeline{
    agent any

    tools{
        nodejs 'nodejs_23'
    }

    environment {
        CI = 'false'
        IMAGE_VERSION = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    }

    stages{
        stage('Checkout Code'){
            steps{ checkout scm }
        }

        stage('Install Dependencies'){
            parallel{
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
            }
        }

        stage('Test Frontend'){
            parallel{
                stage('Test Frontend'){
                    steps{
                        dir('recipe_app/recipe-app-frontend'){
                            sh 'npm test'
                        }
                    }
                }

                // stage('Test Backend'){
                //     steps{
                //         dir('recipe_app/recipe-app-backend'){
                //             sh 'npm test'
                //         }
                //     }
                // }
            }
        }

        stage('Build - Frontend'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'npm run build'
                }
            }
        }

        stage('Preview and Approve'){
            steps{
                sh '''
                docker compose up -d
                echo 'Visit http://localhost:3000 for frontend, http://localhost:5000 for backend.'
                '''
                input 'Approve deployment?'
            }
        }

        stage('Package App'){
            steps{
                dir('recipe_app/recipe-app-frontend'){
                    sh 'tar -czf build.tar.gz -C build .'
                }
            }
        }

        stage('Build Container Images'){
            steps{
                sh '''
                docker build -t adexxy/node-react-frontend:$IMAGE_VERSION --build-arg BUILD_ARCHIVE=recipe_app/recipe-app-frontend/build.tar.gz -f Dockerfile-frontend .
                docker build -t adexxy/node-react-backend:$IMAGE_VERSION -f Dockerfile-backend .
                '''
            }
        }

        stage('Push to Dockerhub'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerid', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_NAME')]){
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_NAME --password-stdin
                    docker push adexxy/node-react-frontend:$IMAGE_VERSION
                    docker push adexxy/node-react-backend:$IMAGE_VERSION
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes'){
            steps{
                withCredentials([file(credentialsId: 'microk8s-config', variable: 'KUBECONFIG')]){
                    sh '''
                    kubectl apply -f kubernetes-deployment.yaml
                    kubectl rollout restart deployment frontend-deployment
                    kubectl rollout restart deployment backend-deployment
                    '''
                }
            }
        }
    }
}
