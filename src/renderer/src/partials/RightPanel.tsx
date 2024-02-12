import ImmersionItem from './ImmersionItem';

export default function RightPanel() {
    return (
        <>
            <div id='right-panel' className='panel'>
                <div className='panel-title'>
                    <div className='icon'>
                        <i className='fa-solid fa-calendar-day'></i>
                    </div>
                    <div className='text'>Today</div>
                </div>
                <div className='items'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <ImmersionItem key={i} />
                    ))}
                </div>
            </div>
        </>
    );
}
