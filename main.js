const { app, BrowserWindow } = require('electron');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadFile('./src/index.html');

    win.once('ready-to-show', () => {
        win.show();
    });
};

app.on('ready', createWindow);

