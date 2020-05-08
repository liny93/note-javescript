var { ipcMain } = require('electron');


//接收渲染进程广播的数据

ipcMain.on('toMain', (event, data) => {

    console.log('1111')
    console.log(data.toString());
})