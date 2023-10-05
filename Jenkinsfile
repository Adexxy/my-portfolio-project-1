pipeline{
    agent{
        docker{
            image 'maven:latest'
        }
    }

    stages (build) {
        steps {
            stage {
                // Check out the source code into the workspace
                checkout scm
            }
        }
    }
}