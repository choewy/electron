const { app, BrowserWindow } = await import('electron');

const path = await import('path');
const electronIsDev = await import('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: electronIsDev,
    },
  });

  mainWindow.loadURL(electronIsDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../build/index.html')}`);

  if (electronIsDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.setResizable(true);
  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });

  mainWindow.focus();
}

app.on('ready', createWindow);
app.on('activate', () => {
  if (mainWindow) {
    return;
  }

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    return;
  }

  app.quit();
});
