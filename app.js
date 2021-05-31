const {app, BrowserWindow} = require('electron');
const path = require('path')
const {pathToFileURL} = require('url');
function createWindow () {
      const win = new BrowserWindow({
        width: 1280,
        height: 720,
        devTools: false,
        resizable: true,
        webPreferences: {
          contextIsolation: true
        },
        icon: path.join(__dirname, 'assets/img/music.png')
      })
win.loadURL('https://music.lumzapp.com');
    }
app.whenReady().then(createWindow)
app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
