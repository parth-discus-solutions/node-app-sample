pipeline{
    agent{
        node {
            label 'slave-1'
        }
    }
    stages{
        stage('build'){
            sh '''
                npm install
                npm start
            '''
        }
    }
}
        
   
