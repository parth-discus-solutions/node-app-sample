pipeline{
    agent any
    
    stages{
        stage ("prod"){
            when{
                branch "prod"
            }
            steps{
                sh '''
                npm install 
                cp -r * ~/prod/
                cd ~/prod/
                pm2 start index.js --name=prod
                '''
            }
        }
        stage ("dev"){
            when{
                branch "dev"
            }
            steps{
                sh '''
                npm install 
                cp -r * ~/staging/
                cd ~/staging/
                pm2 start index.js --name=staging
                '''
            }
        }     
    }
}

