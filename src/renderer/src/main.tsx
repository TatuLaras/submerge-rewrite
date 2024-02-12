import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WindowDecoration from './partials/WindowDecoration';
import Dashboard from './pages/Dashboard';
import DataView from './pages/DataView';
import Settings from './pages/Settings';

import {
    Outlet,
    RouterProvider,
    createRouter,
    createRoute,
    createRootRoute,
} from '@tanstack/react-router';
import LeftPanel from './partials/LeftPanel';
import RightPanel from './partials/RightPanel';

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
                    <RightPanel />
                </div>
            </div>
        </div>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Dashboard />,
});

const dataViewRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dataview',
    component: () => <DataView />,
});

const settingsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/settings',
    component: () => <Settings />,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    dataViewRoute,
    settingsRoute,
]);

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
