pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Kulshanperera/playwright-automation-framework.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npx playwright show-report'
            }
        }

    }
}