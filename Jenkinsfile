pipeline{
    agent{
        node {
            label 'slave-1'
        }
    }
    stages{
        stage('build'){
            steps{
            sh '''
                npm install
                npm start
            '''
            }
        }
        post {
            failure {
                emailext {
                    attachLog: 'true',
                    body: '''$DEFAULT_CONTENT
                    test failed and rollback initiated''',
                    subject: '$DEFAULT_SUBJECT',
                    to: 'techifystag@gmail.com'
                }
            }
        }
    }
}
        
   
