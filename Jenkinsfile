pipeline{
    agent any

    
    stages{
        stage ("prod"){
            when{
                branch "prod"
            }
            steps{
                build 'test-prod'
            }
        }
        stage ("dev"){
            when{
                branch "dev"
            }
            steps{
                build 'test-dev'
            }
        }
        
    }
}
