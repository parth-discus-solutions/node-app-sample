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
            '''
            build 'ghost'
            }
        }
    }
    post {
        success {
            emailext attachLog: true, body: '''$DEFAULT_CONTENT
test failed and rollback initiated''', subject: '$DEFAULT_SUBJECT', to: 'techifystag@gmail.com'
        }
        failure {
                emailext attachLog: true, body: '''$DEFAULT_CONTENT
test failed and rollback initiated''', subject: '$DEFAULT_SUBJECT', to: 'techifystag@gmail.com'

            }
    }
}
