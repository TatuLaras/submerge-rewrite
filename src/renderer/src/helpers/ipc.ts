export function closeApp() {
    window.electronAPI.send('close');
}