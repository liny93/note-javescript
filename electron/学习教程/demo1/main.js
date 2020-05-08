const electron = require('electron')

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 1500, height: 800, webPreferences: { nodeIntegration: true } })
    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
})

