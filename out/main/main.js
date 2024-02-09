"use strict";
const electron = require("electron");
const path = require("path");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);
let mainWindow = null;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    frame: false,
    webPreferences: {
      preload: path__namespace.join(__dirname, "../preload/preload.js")
    },
    minHeight: 600,
    minWidth: 800
  });
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.on("closed", () => mainWindow = null);
}
electron.app.whenReady().then(() => {
  createWindow();
});
electron.app.on("window-all-closed", () => {
  closeApp();
});
electron.app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
electron.ipcMain.on("close", () => {
  closeApp();
});
electron.ipcMain.on("minimize", () => {
  mainWindow?.minimize();
});
electron.ipcMain.on("maximize", () => {
  mainWindow?.isMaximized() ? mainWindow?.unmaximize() : mainWindow?.maximize();
});
function closeApp() {
  if (process.platform !== "darwin")
    electron.app.quit();
}
