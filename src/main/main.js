import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow;

async function handleFileOpen() {
    const { canceled, filePaths } = await dialog.showOpenDialog({});
    if (!canceled) {
        return filePaths[0];
    }
}

function createWindow() {
    mainWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.js'),
            webSecurity: false,
        },
    });

    // Vite DEV server URL
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(() => {
    ipcMain.handle('dialog:openFile', handleFileOpen);
    createWindow();
});

app.on('window-all-closed', () => {
    closeApp();
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});

ipcMain.on('close', () => {
    closeApp();
});

function closeApp() {
    if (process.platform !== 'darwin') app.quit();
}
