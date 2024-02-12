export default function ImmersionItem() {
    return (
        <div className='item'>
            <button className='delete'>
                <i className='fa-solid fa-trash delete-icon'></i>
                <i className='fa-brands fa-youtube icon'></i>
            </button>
            <div className='details'>
                <div className='minutes'>90 min (listening)</div>
                <div className='content'>YouTube</div>
            </div>
        </div>
    );
}
