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
            build 'ghost-fail'
            }
        }
    }
    post {
        success {
            echo " pass"
            emailext attachLog: true, body: '''$DEFAULT_CONTENT
test failed and rollback initiated''', subject: '$DEFAULT_SUBJECT', to: 'techifystag@gmail.com'
        }
        failure {
                echo "fail"
                emailext attachLog: true, body: '''$DEFAULT_CONTENT
test failed and rollback initiated''', subject: '$DEFAULT_SUBJECT', to: 'techifystag@gmail.com'

            }
    }
}
