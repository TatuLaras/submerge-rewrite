import { Link } from '@tanstack/react-router';
import ImmersionTimePanel from './ImmersionTimePanel';

export default function LeftPanel() {
    return (
        <div id='left-panel'>
            <div className='navigation panel'>
                <Link className='menu-item' to='/'>
                    <div className='icon'>
                        <i className='fa-solid fa-chart-line'></i>
                    </div>
                    <div className='text'>Dashboard</div>
                </Link>
                <Link className='menu-item' to='/'>
                    <div className='icon'>
                        <i className='fa-solid fa-table'></i>
                    </div>
                    <div className='text'>Data view</div>
                </Link>
                <Link className='menu-item' to='/'>
                    <div className='icon'>
                        <i className='fa-solid fa-gear'></i>
                    </div>
                    <div className='text'>Settings</div>
                </Link>
            </div>
            <ImmersionTimePanel />
        </div>
    );
}
