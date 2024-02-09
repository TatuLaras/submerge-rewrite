import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    on: (channel: string, callback: any) => {
        ipcRenderer.on(channel, callback);
    },
    send: (channel: string, args: any[]) => {
        ipcRenderer.send(channel, args);
    },
});
