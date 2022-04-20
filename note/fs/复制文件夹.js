const fs = require("fs")
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// 原始地址
const originPath = 'E:\\code'

// 目标地址
const targetPath = 'C:\\Users\\Administrator.SC-202005281417\\Desktop\\faetest2'

// true: 单线程复制，false：对originPath下一级目录进行多线程复制
const single = false

async function main() {
    if (isMainThread) {
        if (single) {
            copyFloderSync(originPath, targetPath)
        } else {
            const files = fs.readdirSync(originPath)
            for (let val of files) {
                new Worker(__filename, { workerData: { origin: `${originPath}\\${val}`, target: `${targetPath}\\${val}` } });
            }
        }
    } else {
        copyFloderSync(workerData.origin, workerData.target)
    }
}

function copyFloderSync(origin, target) {
    fs.cpSync(origin, target, {
        recursive: true, filter(name) {
            // 可以跳过指定名称的文件或文件夹
            // if (name.endsWith('node_modules')) return false 
            return true
        }
    })
    console.log(`copy ${origin} success`)
}

main()

