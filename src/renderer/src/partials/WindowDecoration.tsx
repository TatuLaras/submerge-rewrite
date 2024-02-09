import { useState } from 'react';
import { closeApp, minimize, maximize } from '../helpers/ipc';

export default function App() {
    const [maximized, setMaximized] = useState<boolean>(false);

    return (
        <div className='window-decoration'>
            <div className='draggable'>
                <div className='title'>Submerge</div>
            </div>
            <div className='buttons'>
                <button onClick={minimize} tabIndex={-1}>
                    <i className='fa-solid fa-window-minimize'></i>
                </button>
                <button onClick={maximize} tabIndex={-1}>
                    <i className='fa-solid fa-expand'></i>
                </button>
                <button onClick={closeApp} tabIndex={-1}>
                    <i className='fa-solid fa-x'></i>
                </button>
            </div>
        </div>
    );
}
