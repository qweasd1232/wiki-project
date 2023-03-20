#!groovy

// http://183.3.136.70:33973/project/linkseeks/mocro/v1

pipeline {
    // 声明Jenkins节点
    agent any

    // 每个阶段运行结束时的操作
    options {
        buildDiscarder(logRotator(numToKeepStr: '7', artifactNumToKeepStr: '10', daysToKeepStr: '5'))
        // 构建超时时间
        timeout(time: 12, unit: 'MINUTES')
        // 不允许同时执行流水线。 可被用来防止同时访问共享资源等
        disableConcurrentBuilds()
    }

    // 声明变量
    environment {
        // 项目名称
        SERVER_NAME = "wiki数商云知识库"
        BUILD_ENV = "master"

        // ssh 传输信息
        SSH_NAME = "linkseeks-utils"
        SSH_FILE_SOURCE_NAME = "wiki.tar.gz"
        // 远程存放压缩包的路径
        SSH_REMOTE_PATH = "/home/www/wiki"
        // nginx访问解压后的路径
        SSH_TARGET_HTML_PATH = "/home/www/wiki"

        // jenkins url
        JENKINS_URL = "http://10.0.1.159:8080/"

    }

    // 声明自定义变量
    // parameters {
        // string(name: 'JENKINS_URL', defaultValue: 'http://10.0.1.159:8080/', description: 'jenkins访问地址')
        // booleanParam(name: 'OPEN_JACOCO_VALVE_BUILD', defaultValue: false, description: '开启jacoco阀值认证构建')
        // booleanParam(name: 'JACOCO_SKIP', defaultValue: true, description: '跳过jacoco覆盖率统计')
        // booleanParam(name: 'TEST_SKIP', defaultValue: true, description: '跳过单元测试。')
        // booleanParam(name: 'SONARQUBE_SKIP', defaultValue: true, description: '跳过sonarqube代码扫描')
    // }

    stages {
        stage('init') {
            steps {
                script {
                    env.GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
                    sh 'node --version'
                    dingtalk (
                        robot: "linkseeks-docs",
                        type:'ACTION_CARD',
                        atAll: false,
                        title: "${SERVER_NAME} 开始构建!",
                        messageUrl: "${JENKINS_URL}",
                        text: [
                            "### [${env.JOB_NAME}](${env.JOB_URL}) ",
                            '---',
                            "- 任务名称：[${currentBuild.displayName}](${env.BUILD_URL})",
                            '- 任务状态：<font color=#40a9ff >开始</font>',
                            "- 持续时间：${currentBuild.durationString}".split("and counting")[0],
                            "- 执行人员：${currentBuild.buildCauses.shortDescription}",
                        ]
                    )
                    // genaratePackAgeFactory()
                    sh "echo projectName : ${currentBuild.projectName}"
                    sh "echo changeSets : ${currentBuild.changeSets}"
                    sh "echo CHANGE_FORK : ${env.CHANGE_FORK}"
                    sh "echo JOB_BASE_NAME : ${env.JOB_BASE_NAME}"
                    sh "echo BRANCH_NAME 当前分支 : ${env.BRANCH_NAME}"
                    sh "echo BUILD_ENV 当前环境 : ${env.BUILD_ENV}"
                    // sh "echo commit 当前提交 : ${env.GIT_COMMIT_MSG}"
                    sh "echo WORKSPACE : ${env.WORKSPACE}"
                    sh "echo GIT_BRANCH : ${env.GIT_BRANCH}"
                    sh "echo BUILD_NUMBER : ${env.BUILD_NUMBER}"
                    sh "echo JOB_NAME : ${env.JOB_NAME}"
                    // sh "echo OPEN_JACOCO_VALVE_BUILD 开启jacoco阀值校验 : ${OPEN_JACOCO_VALVE_BUILD}"
                    // sh "echo TEST_SKIP 跳过单元测试 : ${TEST_SKIP}"
                    // sh "echo SONARQUBE_SKIP 跳过sonarqube代码扫描 : ${SONARQUBE_SKIP}"

                    // def open_test_skip = Boolean.valueOf("${TEST_SKIP}")
                    // def openTestSkip = true
                    // if (!open_test_skip) {
                    //     def branch_name = env.BRANCH_NAME
                    //     if (branch_name.equals('local-dev')) {
                    //         openTestSkip = false
                    //     }

                    //     if (branch_name.equals('hotfix')) {
                    //         openTestSkip = false
                    //     }

                    //     if (branch_name.equals('release')) {
                    //         openTestSkip = false
                    //     }
                    // }

                    // sh "mvn clean package -P dev -U -Dmaven.test.skip=${openTestSkip}"
                }
            }
        }

        stage("NPM INSTALL") {
            steps {
                script {
                    nodejs("Node 16.16.0") {
                        sh "source /etc/profile"
                        sh "yarn install"
                    }
                    
                }
            }
        }

        stage("build") {
          steps {
              script {
                  nodejs("Node 16.16.0") {
                    sh "yarn build"
                  }

              }
          }
        }

        // stage("jacoco") {
        //     when {
        //         anyOf {
        //             // branch 'local-dev'
        //             // branch 'hotfix'
        //             // branch 'release'
        //              environment name: 'JACOCO_SKIP', value: 'false'
        //         }
        //     }

        //     steps {
        //         script {

        //             def open_jacoco_valve_build = Boolean.valueOf("${OPEN_JACOCO_VALVE_BUILD}")
        //             def jacoco_valve = String.valueOf("${JACOCO_VALVE}")
        //             sh "echo open_jacoco_valve_build 开启jacoco阀值校验 : ${open_jacoco_valve_build}"
        //             jacoco(
        //                     // 如果为true，则只有所有维度的覆盖率变化量的绝对值小于相应的变化量阈值时，构建结果才为成功
        //                     buildOverBuild: open_jacoco_valve_build,
        //                     // buildOverBuild: true,
        //                     // 如果为true,则对各维度的覆盖率进行比较。如果任何一个维度的当前覆盖率小于最小覆盖率阈值，则构建状态为失败：
        //                     // 如果当前覆盖率在最大阈值和最小阈值之间，则当前构建状态为不稳定； 如果当前覆盖率大于最大阈值，则构建成功
        //                     changeBuildStatus: open_jacoco_valve_build,
        //                     // changeBuildStatus: true,
        //                     // 字节码执行覆盖率
        //                     maximumInstructionCoverage: '70', minimumInstructionCoverage: '30',
        //                     // 行覆盖率
        //                     maximumLineCoverage: '70', minimumLineCoverage: '30',
        //                     // 圈复杂度覆盖率
        //                     maximumComplexityCoverage: '70', minimumComplexityCoverage: '30',
        //                     // 方法覆盖率
        //                     maximumMethodCoverage: '70', minimumMethodCoverage: '30',
        //                     // 类覆盖率
        //                     maximumClassCoverage: '70', minimumClassCoverage: '30',
        //                     //分支覆盖率
        //                     maximumBranchCoverage: '70', minimumBranchCoverage: '30',
        //                     // 各个维度覆盖率的变化量阈值
        //                     deltaBranchCoverage: jacoco_valve, deltaClassCoverage: jacoco_valve,
        //                     deltaComplexityCoverage: jacoco_valve, deltaInstructionCoverage: jacoco_valve,
        //                     deltaLineCoverage: jacoco_valve, deltaMethodCoverage: jacoco_valve,
        //             )

        //             def currentBuildResult = currentBuild.result
        //             if (currentBuildResult.equals("FAILURE")) {
        //                 dingtalk(
        //                         robot: 'dev-jenkins',
        //                         type: 'TEXT',
        //                         atAll: true,
        //                         title: "${SERVER_NAME} 单元测试没有满足阀值覆盖率!",
        //                         text: ["- 单元测试没有满足阀值覆盖率"],
        //                         messageUrl: "http://10.0.15.184:5210/",
        //                         hideAvatar: false
        //                 )
        //                 error "单元测试没有满足阀值覆盖率"
        //             }
        //         }
        //     }
        // }

        // stage('sonarqube') {
        //     when {
        //         anyOf {
        //             // 当指定的环境变量是给定的值时, 执行这个步骤
        //             // environment name: 'BRANCH_NAME', value: 'local-dev'
        //             // environment name: 'BRANCH_NAME', value: 'hotfix'
        //             // environment name: 'BRANCH_NAME', value: 'release'
        //             environment name: 'SONARQUBE_SKIP', value: 'false'
        //         }
        //     }

        //     steps {
        //         script {
        //             withSonarQubeEnv("DEV-Sonarqube") {
        //                 sh "mvn clean verify sonar:sonar"
        //             }
        //         }
        //     }
        // }

        // stage("远程仓库推送") {
        //     steps {
        //         script {
        //             mergeMsg = getChanges()
        //             if (mergeMsg.contains("deploy")) {
        //                 echo "mvn 推送 ${mergeMsg}"
        //             }
        //         }
        //     }
        // }

        stage("发布应用") {
            steps {
                script {
                    sh "tar -czf ${SSH_FILE_SOURCE_NAME} build"
                    sshPublisher(
                            publishers: [
                                    sshPublisherDesc(
                                            configName: SSH_NAME,
                                            transfers: [sshTransfer(
                                                    cleanRemote: false,
                                                    excludes: '',
                                                    execCommand: "tar -xf ${SSH_REMOTE_PATH}/${SSH_FILE_SOURCE_NAME} -C ${SSH_TARGET_HTML_PATH}",
                                                    execTimeout: 1200000,
                                                    flatten: false,
                                                    makeEmptyDirs: false,
                                                    noDefaultExcludes: false,
                                                    patternSeparator: '[, ]+',
                                                    remoteDirectory: SSH_REMOTE_PATH,
                                                    remoteDirectorySDF: false,
                                                    removePrefix: '',
                                                    sourceFiles: SSH_FILE_SOURCE_NAME
                                            )],
                                            usePromotionTimestamp: false,
                                            useWorkspaceInPromotion: false,
                                            verbose: false)
                            ])
                }
            }
        }

    }

    post {
        always {
            echo ' One way or another, I have finished'
        }

        // 构建成功执行逻辑
        success {
            echo ' I succeeeded!'
            dingtalk (
                robot: "linkseeks-docs",
                type:'ACTION_CARD',
                atAll: false,
                title: "${SERVER_NAME} 构建成功!",
                messageUrl: "${JENKINS_URL}",
                text: [
                    "### [${env.JOB_NAME}](${env.JOB_URL}) ",
                    '---',
                    "- 任务名称：[${currentBuild.displayName}](${env.BUILD_URL})",
                    '- 任务状态：<font color=#00A98F >成功</font>',
                    "- 持续时间：${currentBuild.durationString}".split("and counting")[0],
                    "- 执行人员：${currentBuild.buildCauses.shortDescription}",
                ]
            )
            // 备份当前构建
        }

        // 构建不稳定执行逻辑
        unstable {
            dingtalk (
                robot: "linkseeks-docs",
                type:'ACTION_CARD',
                atAll: false,
                title: "${SERVER_NAME} 构建流产!",
                messageUrl: "${JENKINS_URL}",
                text: [
                    "### [${env.JOB_NAME}](${env.JOB_URL}) ",
                    '---',
                    "- 任务名称：[${currentBuild.displayName}](${env.BUILD_URL})",
                    '- 任务状态：<font color=#ff4d4f >流产</font>',
                    "- 持续时间：${currentBuild.durationString}".split("and counting")[0],
                    "- 执行人员：${currentBuild.buildCauses.shortDescription}",
                ]
            )
        }

        // 构建失败
        failure {
            dingtalk (
                robot: "linkseeks-docs",
                type:'ACTION_CARD',
                atAll: false,
                title: "${SERVER_NAME} 构建失败!",
                messageUrl: "${JENKINS_URL}",
                text: [
                    "### [${env.JOB_NAME}](${env.JOB_URL}) ",
                    '---',
                    "- 任务名称：[${currentBuild.displayName}](${env.BUILD_URL})",
                    '- 任务状态：<font color=#ff4d4f >失败</font>',
                    "- 持续时间：${currentBuild.durationString}".split("and counting")[0],
                    "- 执行人员：${currentBuild.buildCauses.shortDescription}",
                ]
            )
        }

        changed {
            sh 'echo Things were different before...'
        }
    }
}

@NonCPS
def getChanges() {
    MAX_MSG_LEN = 1000
    def changeString = ""
    def changeLogSets = currentBuild.changeSets
    for (int i = 0; i < changeLogSets.size(); i++) {
        def entries = changeLogSets[i].items
        for (int j = 0; j < entries.length; j++) {
            def entry = entries[j]
            change_msg = entry.msg.take(MAX_MSG_LEN)
            changeString += " ${change_msg} \n"
        }
    }
    return changeString
}

/**
* 初始化依赖环境
*/
def genaratePackAgeFactory() {
    if (!validateShell('node')) {
        installNodeJS()
    } else {
        sh("node -v")
    }
}

// 检测shell命令是否存在
def validateShell(scriptName) {
    def scriptResult = sh(script: "command -v ${scriptName}", returnStatus: true)
    return scriptResult == 0
}

def installNodeJS() {
    def nodeShell = '''
        #! /bin/bash
        echo "install node ..."
        yum -y install gcc gcc-c++ kernel-devel
        wget https://nodejs.org/dist/v14.17.0/node-v14.17.0.tar.gz
        tar -xzvf node-v14.17.0.tar.gz -C /usr/local/
        mv /usr/local/node-v14.17.0 /usr/local/nodejs
        cd /usr/local/nodejs
        ./configure
        make && make install
    '''

    sh(script: nodeShell, returnStdout: true)
}
