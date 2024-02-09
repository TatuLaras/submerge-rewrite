import { clamp } from '../helpers/numbers';
import { padWithZeros } from '../helpers/strings';
import { TTime } from '../types/time';

export default function Clock({
    progress,
    time,
}: {
    progress: number;
    time: TTime;
}) {
    return (
        <div className='clock'>
            <div className='time'>{time.minutes}:{padWithZeros(time.seconds, 2)}</div>
            <div className='progress-indicator' style={{'--progress': `${clamp(progress, 0, 1) * 100}%`} as React.CSSProperties}></div>
        </div>
    );
}
