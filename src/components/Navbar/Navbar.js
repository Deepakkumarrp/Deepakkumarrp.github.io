// import React, { useContext, useState } from 'react';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import Fade from 'react-Fade/Fade';
// import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
// import { HiDocumentText } from 'react-icons/hi';
// import { BsFillGearFill } from 'react-icons/bs';
// import { MdPhone } from 'react-icons/md';
// import { FaUser, FaFolderOpen } from 'react-icons/fa';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CloseIcon from '@material-ui/icons/Close';

// import './Navbar.css';
// import { headerData } from '../../data/headerData';
// import { ThemeContext } from '../../contexts/ThemeContext';

// function Navbar() {
//     const { theme, setHandleDrawer } = useContext(ThemeContext);

//     const [open, setOpen] = useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//         setHandleDrawer();
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//         setHandleDrawer();
//     };

//     const useStyles = makeStyles((t) => ({
//         navMenu: {
//             fontSize: '2.5rem',
//             color: theme.tertiary,
//             cursor: 'pointer',
//             transform: 'translateY(-10px)',
//             transition: 'color 0.3s',
//             '&:hover': {
//                 color: theme.primary,
//             },
//             [t.breakpoints.down('sm')]: {
//                 fontSize: '2.5rem',
//             },
//             [t.breakpoints.down('xs')]: {
//                 fontSize: '2rem',
//             },
//         },
//         MuiDrawer: {
//             padding: '0em 1.8em',
//             width: '14em',
//             fontFamily: ' var(--primaryFont)',
//             fontStyle: ' normal',
//             fontWeight: ' normal',
//             fontSize: ' 24px',
//             background: theme.secondary,
//             overflow: 'hidden',
//             borderTopRightRadius: '40px',
//             borderBottomRightRadius: '40px',
//             [t.breakpoints.down('sm')]: {
//                 width: '12em',
//             },
//         },
//         closebtnIcon: {
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             color: theme.primary,
//             position: 'absolute',
//             right: 40,
//             top: 40,
//             transition: 'color 0.2s',
//             '&:hover': {
//                 color: theme.tertiary,
//             },
//             [t.breakpoints.down('sm')]: {
//                 right: 20,
//                 top: 20,
//             },
//         },
//         drawerItem: {
//             margin: '2rem auto',
//             borderRadius: '78.8418px',
//             background: theme.secondary,
//             color: theme.primary,
//             width: '85%',
//             height: '60px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-evenly',
//             padding: '0 30px',
//             boxSizing: 'border-box',
//             border: '2px solid',
//             borderColor: theme.primary,
//             transition: 'background-color 0.2s, color 0.2s',
//             '&:hover': {
//                 background: theme.primary,
//                 color: theme.secondary,
//             },
//             [t.breakpoints.down('sm')]: {
//                 width: '100%',
//                 padding: '0 25px',
//                 height: '55px',
//             },
//         },
//         drawerLinks: {
//             fontFamily: 'var(--primaryFont)',
//             width: '50%',
//             fontSize: '1.3rem',
//             fontWeight: 600,
//             [t.breakpoints.down('sm')]: {
//                 fontSize: '1.125rem',
//             },
//         },
//         drawerIcon: {
//             fontSize: '1.6rem',
//             [t.breakpoints.down('sm')]: {
//                 fontSize: '1.385rem',
//             },
//         },
//     }));

//     const classes = useStyles();

//     // const shortname = (name) => {
//     //     if (name.length > 12) {
//     //         return name.split(' ')[0];
//     //     } else {
//     //         return name;
//     //     }
//     // };

//     return (
//         <div className='navbar'>
//             <div className='navbar--container'>
//                 <h1 style={{ color: theme.secondary }}>
//                     {headerData.name}
//                 </h1>

//                 <IoMenuSharp
//                     className={classes.navMenu}
//                     onClick={handleDrawerOpen}
//                     aria-label='Menu'
//                 />
//             </div>
//             <Drawer
//                 variant='temporary'
//                 onClose={(event, reason) => {
//                     if (reason !== 'backdropClick') {
//                         handleDrawerClose();
//                     } else if (reason !== 'escapeKeyDown') {
//                         handleDrawerClose();
//                     }
//                 }}
//                 anchor='right'
//                 open={open}
//                 classes={{ paper: classes.MuiDrawer }}
//                 className='drawer'
//                 disableScrollLock={true}
//             >
//                 <div className='div-closebtn'>
//                     <CloseIcon
//                         onClick={handleDrawerClose}
//                         onKeyDown={(e) => {
//                             if (e.key === ' ' || e.key === 'Enter') {
//                                 e.preventDefault();
//                                 handleDrawerClose();
//                             }
//                         }}
//                         className={classes.closebtnIcon}
//                         role='button'
//                         tabIndex='0'
//                         aria-label='Close'
//                     />
//                 </div>
//                 <br />

//                 <div onClick={handleDrawerClose}>
//                     <div className='navLink--container'>
//                         <Fade right>
//                             <NavLink
//                                 to='/'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div className={classes.drawerItem}>
//                                     <IoHomeSharp
//                                         className={classes.drawerIcon}
//                                     />
//                                     <span className={classes.drawerLinks}>
//                                         Home
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#about'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div className={classes.drawerItem}>
//                                     <FaUser className={classes.drawerIcon} />
//                                     <span className={classes.drawerLinks}>
//                                         About
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#resume'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div className={classes.drawerItem}>
//                                     <HiDocumentText
//                                         className={classes.drawerIcon}
//                                     />
//                                     <span className={classes.drawerLinks}>
//                                         Education
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#skills'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div className={classes.drawerItem}>
//                                     <BsFillGearFill
//                                         className={classes.drawerIcon}
//                                     />
//                                     <span className={classes.drawerLinks}>
//                                         Skills
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#projects'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div className={classes.drawerItem}>
//                                     <FaFolderOpen
//                                         className={classes.drawerIcon}
//                                     />
//                                     <span className={classes.drawerLinks}>
//                                         Projects
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#contacts'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div className={classes.drawerItem}>
//                                     <MdPhone className={classes.drawerIcon} />
//                                     <span className={classes.drawerLinks}>
//                                         Contact
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>
//                     </div>
//                 </div>
//             </Drawer>
//         </div>
//     );
// }

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { Link as NavLink } from 'react-router-dom';
// import Fade from 'react-awesome-reveal';
// import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
// import { HiDocumentText } from 'react-icons/hi';
// import { BsFillGearFill } from 'react-icons/bs';
// import { MdPhone } from 'react-icons/md';
// import { FaUser, FaFolderOpen } from 'react-icons/fa';
// import Drawer from '@mui/material/Drawer';
// import CloseIcon from '@mui/icons-material/Close';

// import './Navbar.css';
// import { headerData } from '../../data/headerData';
// import { ThemeContext } from '../../contexts/ThemeContext';

// const Navbar = () => {
//     const { theme, setHandleDrawer } = useContext(ThemeContext);
//     const [open, setOpen] = useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//         setHandleDrawer();
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//         setHandleDrawer();
//     };

//     const navMenu = {
//         fontSize: 'var(--font-size, 2.5rem',
//         color: `var(--color, ${theme.tertiary})`,
//         cursor: 'pointer',
//         transform: 'translateY(var(--translateY, -10px))',
//         transition: 'color 0.3s',
//         '&:hover': {
//           color: `var(--hover-color, ${theme.primary})`,
//         },
//         '@media (max-width: 600px)': {
//           fontSize: 'var(--mobile-font-size, 2.5rem)',
//         },
//         '@media (max-width: 400px)': {
//           fontSize: 'var(--mobile-font-size-xs, 2rem)',
//         },
//       };
      
//       const closebtnIcon = {
//         fontSize: 'var(--font-size, 2rem)',
//         fontWeight: 'var(--font-weight, bold)',
//         cursor: 'pointer',
//         color: `var(--color, ${theme.tertiary})`,
//         position: 'absolute',
//         right: 'var(--right, 40px)',
//         top: 'var(--top, 40px)',
//         transition: 'color 0.2s',
//         '&:hover': {
//           color:`var(--color, ${theme.tertiary})`,
//         },
//         '@media (max-width: 600px)': {
//           right: 'var(--mobile-right, 20px)',
//           top: 'var(--mobile-top, 20px)',
//         },
//       };
      
//       const MuiDrawer = {
//         padding: 'var(--padding-y, 0em) var(--padding-x, 1.8em)',
//         width: 'var(--width, 14em)',
//         fontFamily: 'var(--font-family, var(--primaryFont))',
//         fontStyle: 'var(--font-style, normal)',
//         fontWeight: 'var(--font-weight, normal)',
//         fontSize: 'var(--font-size, 24px)',
//         background: 'var(--background, theme.secondary)',
//         overflow: 'hidden',
//         borderTopRightRadius: 'var(--border-top-right-radius, 40px)',
//         borderBottomRightRadius: 'var(--border-bottom-right-radius, 40px)',
//         '@media (max-width: 600px)': {
//           width: 'var(--mobile-width, 12em)',
//         },
//       };

//     const drawerItem = {
//         margin: '2rem auto',
//         borderRadius: 'var(--border-radius, 78.8418px)',
//         background: 'var(--background, theme.secondary)',
//         color: 'var(--color, theme.primary)',
//         width: 'var(--width, 85%)',
//         height: 'var(--height, 60px)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         padding: 'var(--padding, 0 30px)',
//         boxSizing: 'border-box',
//         border: '2px solid',
//         borderColor: 'var(--border-color, theme.primary)',
//         transition: 'background-color 0.2s, color 0.2s',
//         ':hover': {
//           background: 'var(--hover-background, theme.primary)',
//           color: 'var(--hover-color, theme.secondary)',
//         },
//         '@media (max-width: 600px)': {
//           width: 'var(--mobile-width, 100%)',
//           padding: 'var(--mobile-padding, 0 25px)',
//           height: 'var(--mobile-height, 55px)',
//         },
//       };

      
//       const drawerLinks = {
//         fontFamily: 'var(--font-family, var(--primaryFont))',
//         width: 'var(--width, 50%)',
//         fontSize: 'var(--font-size, 1.3rem)',
//         fontWeight: 'var(--font-weight, 600)',
//         '@media (max-width: 600px)': {
//           fontSize: 'var(--mobile-font-size, 1.125rem)',
//         },
//       };
      
//       const drawerIcon = {
//         fontSize: 'var(--font-size, 1.6rem)',
//         '@media (max-width: 600px)': {
//           fontSize: 'var(--mobile-font-size, 1.385rem)',
//         },
//       };
      
//     return (
//         <div className='navbar'>
//             <div className='navbar--container'>
//                 <h1 style={{ color: theme.secondary }}>
//                     {headerData.name}
//                 </h1>

//                 <IoMenuSharp
//                     style={navMenu}
//                     onClick={handleDrawerOpen}
//                     aria-label='Menu'
//                 />
//             </div>
//             <Drawer
//                 variant='temporary'
//                 onClose={(event, reason) => {
//                     if (reason !== 'backdropClick') {
//                         handleDrawerClose();
//                     } else if (reason !== 'escapeKeyDown') {
//                         handleDrawerClose();
//                     }
//                 }}
//                 anchor='right'
//                 open={open}
//                 classes={{ paper: MuiDrawer }}
//                 style={MuiDrawer}
//                 disableScrollLock={true}
//             >
//                 <div className='div-closebtn'>
//                     <CloseIcon
//                         onClick={handleDrawerClose}
//                         onKeyDown={(e) => {
//                             if (e.key === ' ' || e.key === 'Enter') {
//                                 e.preventDefault();
//                                 handleDrawerClose();
//                             }
//                         }}
//                         style={closebtnIcon}
//                         role='button'
//                         tabIndex='0'
//                         aria-label='Close'
//                     />
//                 </div>
//                 <br />

//                 <div onClick={handleDrawerClose}>
//                     <div className='navLink--container'>
//                         <Fade right>
//                             <NavLink
//                                 to='/'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div style={drawerItem}>
//                                     <IoHomeSharp
//                                         style={drawerIcon}
//                                     />
//                                     <span style={drawerLinks}>
//                                         Home
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#about'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div style={drawerItem}>
//                                     <FaUser style={drawerIcon} />
//                                     <span style={drawerLinks}>
//                                         About
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#resume'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div style={drawerItem}>
//                                     <HiDocumentText
//                                         style={drawerIcon}
//                                     />
//                                     <span style={drawerLinks}>
//                                         Education
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#skills'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div style={drawerItem}>
//                                     <BsFillGearFill
//                                         style={drawerIcon}
//                                     />
//                                     <span style={drawerLinks}>
//                                         Skills
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#projects'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div style={drawerItem}>
//                                     <FaFolderOpen
//                                         style={drawerIcon}
//                                     />
//                                     <span style={drawerLinks}>
//                                         Projects
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>

//                         <Fade right>
//                             <NavLink
//                                 to='/#contacts'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <div style={drawerItem}>
//                                     <MdPhone style={drawerIcon} />
//                                     <span style={drawerLinks}>
//                                         Contact
//                                     </span>
//                                 </div>
//                             </NavLink>
//                         </Fade>
//                     </div>
//                 </div>
//             </Drawer>
//         </div>
//     );
// }

// export default Navbar;


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
                                to='/#resume'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className='drawerItem'>
                                    <HiDocumentText
                                        className='drawerIcon'
                                    />
                                    <span className='drawerLinks'>
                                        Education
                                    </span>
                                </div>
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