import { closeApp } from '../helpers/ipc';

export default function App() {
    return (
        <div className='window-decoration'>
            <div className='draggable'>
                <div className='title'></div>
            </div>
            <div className='buttons'>
                <button onClick={closeApp}>X</button>
            </div>
        </div>
    );
}
