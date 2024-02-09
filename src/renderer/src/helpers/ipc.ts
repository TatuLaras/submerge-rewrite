export const closeApp = () => window.electronAPI.send('close');
export const minimize = () => window.electronAPI.send('minimize');
export const maximize = () => window.electronAPI.send('maximize');
