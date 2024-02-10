import React from 'react'
import Appbar from './appbar';
import SimpleBottomNavigation from './bottom';
const Layout = ({ children }) => {
    return (
        <>
            <Appbar />
            <div>
                {children}
            </div>
            <SimpleBottomNavigation />
        </>
    )
}

export default Layout;