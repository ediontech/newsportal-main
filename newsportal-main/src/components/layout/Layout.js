import React, { useState } from 'react'
import HeaderNav from '../navigations/HeaderNav'
import Footer from '../navigations/Footer'
import MobileMenu from '../navigations/MobileMenu'

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="bg-gray-200 relative">
            {showMenu === true && (
                <MobileMenu setShowMenu={setShowMenu} />
            )}
            <HeaderNav setShowMenu={setShowMenu} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout