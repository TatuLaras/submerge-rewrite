import { useState } from 'react';
import Clock from './Clock';

export default function ImmersionTimePanel() {
    const [timerMode, setTimerMode] = useState<'timer' | 'goal'>('timer');

    function expandLeftPanel() {
        document.querySelector('#left-panel')!.style.width = '100%';
    }

    return (
        <>
            <div
                id='immersion-time-panel-placeholder'
                className='panel'
                onClick={expandLeftPanel}
            >
                <i className='fa-solid fa-hourglass-half'></i>
            </div>
            <div id='immersion-time-panel' className='panel'>
                <div className='panel-title'>
                    <div className='icon'>
                        <i className='fa-solid fa-hourglass-half'></i>
                    </div>
                    <div className='text'>Immersion time</div>
                </div>
                <div className='capsule-select'>
                    <div
                        className={`item ${timerMode === 'timer' ? 'selected' : ''}`}
                        onClick={() => setTimerMode('timer')}
                    >
                        Timer
                    </div>
                    <div
                        className={`item ${timerMode === 'goal' ? 'selected' : ''}`}
                        onClick={() => setTimerMode('goal')}
                    >
                        Goal
                    </div>
                </div>
                <Clock time={{ minutes: 40, seconds: 31 }} progress={0} />
                <button className='generic-btn commit-btn'>Commit</button>
            </div>
        </>
    );
}
