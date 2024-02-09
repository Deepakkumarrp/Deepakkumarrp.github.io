// import React, { useContext } from 'react';
// import { Button } from '@material-ui/core';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { makeStyles } from '@material-ui/core/styles';

// import './Landing.css';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { headerData } from '../../data/headerData';
// import { socialsData } from '../../data/socialsData';

// import {
//     FaTwitter,
//     FaLinkedin,
//     FaGithub,
//     FaYoutube,
//     FaBlogger,
// } from 'react-icons/fa';

// function Landing() {
//     const { theme, drawerOpen } = useContext(ThemeContext);

//     const useStyles = makeStyles((t) => ({
//         resumeBtn: {
//             color: theme.primary,
//             borderRadius: '30px',
//             textTransform: 'inherit',
//             textDecoration: 'none',
//             width: '150px',
//             fontSize: '1rem',
//             fontWeight: '500',
//             height: '50px',
//             fontFamily: 'var(--primaryFont)',
//             border: `3px solid ${theme.primary}`,
//             transition: '100ms ease-out',
//             '&:hover': {
//                 backgroundColor: theme.tertiary,
//                 color: theme.secondary,
//                 border: `3px solid ${theme.tertiary}`,
//             },
//             [t.breakpoints.down('sm')]: {
//                 width: '180px',
//             },
//         },
//         contactBtn: {
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             borderRadius: '30px',
//             textTransform: 'inherit',
//             textDecoration: 'none',
//             width: '150px',
//             height: '50px',
//             fontSize: '1rem',
//             fontWeight: '500',
//             fontFamily: 'var(--primaryFont)',
//             border: `3px solid ${theme.primary}`,
//             transition: '100ms ease-out',
//             '&:hover': {
//                 backgroundColor: theme.secondary,
//                 color: theme.tertiary,
//                 border: `3px solid ${theme.tertiary}`,
//             },
//             [t.breakpoints.down('sm')]: {
//                 display: 'none',
//             },
//         },
//     }));

//     const classes = useStyles();

//     return (
//         <div className='landing'>
//             <div className='landing--container'>
//                 <div
//                     className='landing--container-left'
//                     style={{ backgroundColor: theme.primary }}
//                 >
//                     <div className='lcl--content'>
//                         {socialsData.linkedIn && (
//                             <a
//                                 href={socialsData.linkedIn}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaLinkedin
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='LinkedIn'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.github && (
//                             <a
//                                 href={socialsData.github}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaGithub
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='GitHub'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.twitter && (
//                             <a
//                                 href={socialsData.twitter}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaTwitter
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='Twitter'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.youtube && (
//                             <a
//                                 href={socialsData.youtube}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaYoutube
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='YouTube'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.blogger && (
//                             <a
//                                 href={socialsData.blogger}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaBlogger
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='Blogger'
//                                 />
//                             </a>
//                         )}
//                     </div>
//                 </div>
//                 <img
//                     src={headerData.image}
//                     alt=''
//                     className='landing--img'
//                     style={{
//                         opacity: `${drawerOpen ? '0' : '1'}`,
//                         borderColor: theme.secondary,
//                     }}
//                 />
//                 <div
//                     className='landing--container-right'
//                     style={{ backgroundColor: theme.secondary }}
//                 >
//                     <div
//                         className='lcr--content'
//                         style={{ color: theme.tertiary }}
//                     >
//                         <h6>{headerData.title}</h6>
//                         <h1>{headerData.name}</h1>
//                         <p>{headerData.desciption}</p>

//                         <div className='lcr-buttonContainer'>
//                             {headerData.resumePdf && (
//                                 <a
//                                     href={headerData.resumePdf}
//                                     download='resume'
//                                     target='_blank'
//                                     rel='noreferrer'
//                                 >
//                                     <Button className={classes.resumeBtn}>
//                                         Download CV
//                                     </Button>
//                                 </a>
//                             )}
//                             <NavLink
//                                 to='/#contacts'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <Button className={classes.contactBtn}>
//                                     Contact
//                                 </Button>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Landing;


// 

import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className="resumeBtn">
                                        Download CV
                                    </button>
                                </a>
                                
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <button className="contactBtn">
                                    Contact
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

// 

// import React, { useContext } from 'react';
// import { styled } from '@mui/system';
// import { Button } from '@mui/material';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { headerData } from '../../data/headerData';
// import { socialsData } from '../../data/socialsData';

// import {
//     FaTwitter,
//     FaLinkedin,
//     FaGithub,
//     FaYoutube,
//     FaBlogger,
// } from 'react-icons/fa';

// import './Landing.css';

// const LandingContainer = styled('div')(({ theme, drawerOpen }) => ({
//     display: 'flex',
// }));

// const LeftContainer = styled('div')(({ theme }) => ({
//     flex: '1',
//     backgroundColor: theme.primary,
// }));

// const SocialIconsContainer = styled('div')(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     paddingTop: '20px',
// }));

// const SocialIcon = styled('a')(({ theme }) => ({
//     color: theme.secondary,
//     '&:hover': {
//         color: theme.tertiary,
//     },
// }));

// const RightContainer = styled('div')(({ theme }) => ({
//     flex: '1',
//     backgroundColor: theme.secondary,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: theme.tertiary,
// }));

// const Content = styled('div')({
//     textAlign: 'center',
//     padding: '20px',
// });

// const Image = styled('img')(({ theme, drawerOpen }) => ({
//     opacity: drawerOpen ? '0' : '1',
//     borderColor: theme.secondary,
//     borderStyle: 'solid',
//     borderWidth: '5px',
//     maxWidth: '100%',
// }));

// const ButtonContainer = styled('div')({
//     display: 'flex',
//     marginTop: '20px',
//     '& a': {
//         marginRight: '10px',
//         textDecoration: 'none',
//     },
// });

// const LandingButton = styled(Button)(({ theme }) => ({
//     borderRadius: '30px',
//     textTransform: 'inherit',
//     textDecoration: 'none',
//     width: '150px',
//     fontSize: '1rem',
//     fontWeight: '500',
//     height: '50px',
//     fontFamily: 'var(--primaryFont)',
//     border: `3px solid ${theme.primary}`,
//     transition: '100ms ease-out',
//     '&:hover': {
//         backgroundColor: theme.tertiary,
//         color: theme.secondary,
//         border: `3px solid ${theme.tertiary}`,
//     },
//     '@media (max-width: 600px)': {
//         width: '180px',
//     },
// }));

// function Landing() {
//     const { theme, drawerOpen } = useContext(ThemeContext);

//     return (
//         <LandingContainer className="landing">
//             <LeftContainer>
//                 <SocialIconsContainer>
//                     {socialsData.linkedIn && (
//                         <SocialIcon href={socialsData.linkedIn} target="_blank" rel="noreferrer">
//                             <FaLinkedin />
//                         </SocialIcon>
//                     )}
//                     {socialsData.github && (
//                         <SocialIcon href={socialsData.github} target="_blank" rel="noreferrer">
//                             <FaGithub />
//                         </SocialIcon>
//                     )}
//                     {socialsData.twitter && (
//                         <SocialIcon href={socialsData.twitter} target="_blank" rel="noreferrer">
//                             <FaTwitter />
//                         </SocialIcon>
//                     )}
//                     {socialsData.youtube && (
//                         <SocialIcon href={socialsData.youtube} target="_blank" rel="noreferrer">
//                             <FaYoutube />
//                         </SocialIcon>
//                     )}
//                     {socialsData.blogger && (
//                         <SocialIcon href={socialsData.blogger} target="_blank" rel="noreferrer">
//                             <FaBlogger />
//                         </SocialIcon>
//                     )}
//                 </SocialIconsContainer>
//             </LeftContainer>
//             <Image src={headerData.image} alt="" className="landing--img" />
//             <RightContainer>
//                 <Content>
//                     <h6>{headerData.title}</h6>
//                     <h1>{headerData.name}</h1>
//                     <p>{headerData.desciption}</p>
//                     <ButtonContainer>
//                         {headerData.resumePdf && (
//                             <a href={headerData.resumePdf} download="resume" target="_blank" rel="noreferrer">
//                                 <LandingButton>Download CV</LandingButton>
//                             </a>
//                         )}
//                         <NavLink to="/#contacts" smooth={true} spy={true} duration={2000}>
//                             <LandingButton>Contact</LandingButton>
//                         </NavLink>
//                     </ButtonContainer>
//                 </Content>
//             </RightContainer>
//         </LandingContainer>
//     );
// }

// export default Landing;
