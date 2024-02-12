import { useEffect } from 'react';

export default function DataView() {
    useEffect(() => {
        document.title = 'Submerge - Data view';
    }, []);
    return (
        <>
            <h1>DataView!</h1>
        </>
    );
}