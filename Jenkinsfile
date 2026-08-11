pipeline{
    agent any

    environment{
        RP_TOKEN = credentials('reportportal-token')
    }
    triggers{
        cron('H H/2 * * *')
    }
    stages{
        stage('Checkout') {
            steps{
                // Pull github code
                git branch: 'main', url: 'https://github.com/valentin-gardev/EPAM-Module5-Playwright-UIAutomationTask.git'
            }
        }
        stage('Install dependencies') {
            steps{
                echo 'Installing project dependencies'
                bat 'npm ci'

                echo 'Installing playwright browsers'
                bat 'npx playwright install --with-deps'
            }

        }

        stage('Run UI Tests') {
            steps{
                echo 'Run UI Tests'
                bat 'npx playwright test example'
            }
        }
    }
}
