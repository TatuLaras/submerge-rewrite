import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WindowDecoration from './partials/WindowDecoration';

import {
    Outlet,
    RouterProvider,
    Link,
    createRouter,
    createRoute,
    createRootRoute,
} from '@tanstack/react-router';
import LeftPanel from './partials/LeftPanel';

const rootRoute = createRootRoute({
    component: () => (
        <div id='main-wrapper'>
            <WindowDecoration />
            <div className='global-layout app-content'>
                <div className='global-layout cols'>
                    <LeftPanel />
                    <div className='global-layout route-content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: function Index() {
        return (
            <div className='p-2'>
                <h3>
                    Welcome Home! <Link to='/about'>About</Link>
                </h3>
            </div>
        );
    },
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: function About() {
        return (
            <div className='p-2'>
                Hello from About! <Link to='/'>Home</Link>
            </div>
        );
    },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
