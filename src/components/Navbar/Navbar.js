

import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-awesome-reveal';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';




function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {headerData.name}
                </h1>

                <IoMenuSharp
                    className='navMenu'
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='right'
                open={open}
                classes={{ paper: 'MuiDrawer' }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className='closebtnIcon'
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade right>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className='drawerItem'>
                                    <IoHomeSharp
                                        className='drawerIcon'
                                    />
                                    <span className='drawerLinks'>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className='drawerItem'>
                                    <FaUser className='drawerIcon' />
                                    <span className='drawerLinks'>
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink
                                // href={headerData.resumePdf}
                                // href="https://drive.google.com/file/d/11KShrVD9uM056qgVAzoKQDid0rAuy1HT/view"
                                to='https://drive.google.com/file/d/11KShrVD9uM056qgVAzoKQDid0rAuy1HT/view'
                                // download='Deepak-Purohit-Resume'
                                // target='_blank'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                {/* <div className='drawerItem'>
                                    <HiDocumentText
                                        className='drawerIcon'
                                    />
                                    <span className='drawerLinks'>
                                        Resume
                                    </span>
                                </div> */}
                                <a
                                    href={headerData.resumePdf}
                                    download='Deepak-Purohit-Resume.pdf'
                                    target='_blank'
                                    rel='noreferrer'
                                    onClick={() => {
                                        window.open(
                                          "https://drive.google.com/file/d/11KShrVD9uM056qgVAzoKQDid0rAuy1HT/view",
                                          "_blank"
                                        )}}
                                        smooth
                                >
                                    <div className='drawerItem'>
                                        <HiDocumentText className='drawerIcon' />
                                        <span className='drawerLinks'>
                                            Resume
                                        </span>
                                    </div>
                                </a>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink
                                to='/#skills'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className='drawerItem'>
                                    <BsFillGearFill
                                        className='drawerIcon'
                                    />
                                    <span className='drawerLinks'>
                                        Skills
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink
                                to='/#projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className='drawerItem'>
                                    <FaFolderOpen
                                        className='drawerIcon'
                                    />
                                    <span className='drawerLinks'>
                                        Projects
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade right>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className='drawerItem'>
                                    <MdPhone className='drawerIcon' />
                                    <span className='drawerLinks'>
                                        Contact
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;