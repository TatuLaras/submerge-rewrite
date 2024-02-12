import { useEffect } from 'react';

export default function Settings() {
    useEffect(() => {
        document.title = 'Submerge - Settings';
    }, []);

    return (
        <>
            <h1>Settings!</h1>
        </>
    );
}
