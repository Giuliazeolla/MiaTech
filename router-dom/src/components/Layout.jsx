import React from "react";
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
            <Link to="/todo-detail">TodoDetail</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;