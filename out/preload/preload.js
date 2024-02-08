"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => electron.ipcRenderer.invoke("dialog:openFile"),
  on: (channel, callback) => {
    electron.ipcRenderer.on(channel, callback);
  },
  send: (channel, args) => {
    electron.ipcRenderer.send(channel, args);
  }
});
