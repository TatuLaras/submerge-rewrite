import { useEffect } from 'react';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Submerge - Dashboard';
    }, []);

    return (
        <>
            <h1>Dashboard!</h1>
        </>
    );
}
