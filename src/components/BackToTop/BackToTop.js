// import React, { useState, useContext } from 'react';
// import { IoIosArrowDropupCircle } from 'react-icons/io';
// import { makeStyles } from '@material-ui/core/styles';

// import { ThemeContext } from '../../contexts/ThemeContext';
// import './BackToTop.css';

// function BackToTop() {
//     const [visible, setVisible] = useState(false);

//     const { theme } = useContext(ThemeContext);

//     const toggleVisible = () => {
//         const scrolled = document.documentElement.scrollTop;
//         if (scrolled > 300) {
//             setVisible(true);
//         } else if (scrolled <= 300) {
//             setVisible(false);
//         }
//     };

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth',
//         });
//     };

//     window.addEventListener('scroll', toggleVisible);

//     const useStyles = makeStyles(() => ({
//         icon: {
//             fontSize: '3rem',
//             color: theme.tertiary,
//         },
//     }));

//     const classes = useStyles();

//     return (
//         <div
//             style={{ display: visible ? 'inline' : 'none' }}
//             className='backToTop'
//         >
//             <button onClick={scrollToTop} aria-label='Back to top'>
//                 <IoIosArrowDropupCircle className={classes.icon} />
//             </button>
//         </div>
//     );
// }

// export default BackToTop;


import React, { useState, useEffect, useContext } from 'react';
// import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useTheme } from '@mui/material/styles';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const { theme: contextTheme } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div style={{ display: visible ? 'inline' : 'none' }} className='backToTop'>
      <Fab color='primary' onClick={scrollToTop} aria-label='Back to top'>
        <KeyboardArrowUpIcon style={{ fontSize: '3rem', color: contextTheme.tertiary }} />
      </Fab>
    </div>
  );
}

export default BackToTop;

