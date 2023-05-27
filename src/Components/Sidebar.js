import React, { useState } from 'react'
import SidebarItems from './SidebarItems';

const Sidebar = () => {

    const [isOpen, setIsopen] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const toggleSidebar = () => {
        setIsopen(!isOpen);
        setIsClosed(!isClosed);
    };

    return (
        <div>
            <div id='menu' onClick={toggleSidebar} style={{
                zIndex: '999',
            }}>
                <span style={{
                    top: isClosed ? '50%' : '75%',
                    transform: isClosed ? 'rotate(-45deg)' : 'rotate(0deg)',
                    backgroundColor: isOpen ? '#fff' : 'rgb(255, 52, 63)'
                }}></span>
                <span style={{
                    display: isClosed ? 'none' : 'block',
                    backgroundColor: isOpen ? '#fff' : 'rgb(255, 52, 63)'
                }}></span>
                <span style={{
                    bottom: isClosed ? '45%' : '75%',
                    transform: isClosed ? 'rotate(45deg)' : 'rotate(0deg)',
                    backgroundColor: isOpen ? '#fff' : 'rgb(255, 52, 63)'
                }}></span>
            </div>
            <div style={{
                backgroundColor: 'rgb(255, 52, 63)',
                minHeight: '100vh',
                position: 'fixed',
                top: '0',
                left: '0',
                transition: 'all .4s ease',
                zIndex: '10',
                transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
                textAlign: 'center',
                alignItems: 'center',
                minWidth: '100%'
            }}>
                <div style={{
                    zIndex: '5',
                }}>
                    <SidebarItems />
                </div>
            </div>
        </div>
    )
}

export default Sidebar