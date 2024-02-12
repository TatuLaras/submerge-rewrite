import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.js'),
        },
        minHeight: 700,
        minWidth: 1000,
    });

    // Vite DEV server URL
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(() => {
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

ipcMain.on('minimize', () => {
    mainWindow?.minimize();
});

ipcMain.on('maximize', () => {
    mainWindow?.isMaximized() ? mainWindow?.unmaximize() : mainWindow?.maximize();
});

function closeApp() {
    if (process.platform !== 'darwin') app.quit();
}
