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
                curl -X POST http://54.245.21.118:8080/job/front-end/job/ghost-suit-fail-test/build --user admin:16726431fadf74c789dfb952c411aa42
            '''
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
