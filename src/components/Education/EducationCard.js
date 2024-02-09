// import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Fade from 'react-reveal/Fade';

// import { ThemeContext } from '../../contexts/ThemeContext';

// import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
// import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
// import './Education.css'

// function EducationCard({ id, institution, course, startYear, endYear }) {

//     const { theme } = useContext(ThemeContext);

//     const useStyles = makeStyles((t) => ({
//         educationCard : {
//             backgroundColor:theme.primary30,
//             "&:hover": {
//                 backgroundColor:theme.primary50,
//             },
//         },
//     }));

//     const classes = useStyles();

//     return (
//         <Fade bottom>
//             <div key={id} className={`education-card ${classes.educationCard}`} >
//                 <div className="educard-img" style={{backgroundColor: theme.primary}}>
//                     <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
//                 </div>
//                 <div className="education-details">
//                     <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
//                     <h4 style={{color: theme.tertiary}}>{course}</h4>
//                     <h5 style={{color: theme.tertiary80}}>{institution}</h5>
//                 </div>
//             </div>
//         </Fade>        
//     )
// }

// export default EducationCard

import React, { useContext } from 'react';
import { styled } from '@mui/system';
import Reveal, { Fade } from 'react-awesome-reveal';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    // const useStyles = makeStyles((t) => ({
    //     educationCard : {
    //         backgroundColor:theme.primary30,
    //         "&:hover": {
    //             backgroundColor:theme.primary50,
    //         },
    //     },
    // }));

    // const classes = useStyles();

    return (
        <Reveal effect="fadeIn" className="custom-reveal size-lg">
            <div key={id} className={`education-card `} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                </div>
            </div>
        </Reveal>        
    )
}

export default EducationCard




// import React, { useContext } from 'react';
// import { styled } from '@mui/system';
// import { Fade } from 'react-awesome-reveal';

// import { ThemeContext } from '../../contexts/ThemeContext';

// import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
// import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
// import { Typography } from '@mui/material';

// const EducationCardContainer = styled('div')(({ theme }) => ({
//   backgroundColor: theme.primary30,
//   '&:hover': {
//     backgroundColor: theme.primary50,
//   },
// }));

// const EduCardImage = styled('div')(({ theme }) => ({
//   backgroundColor: theme.primary,
// }));

// const EduCardDetails = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   padding: theme.spacing(2),
// }));

// function EducationCard({ id, institution, course, startYear, endYear }) {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Fade triggerOnce cascade damping={0.5}>
//       <EducationCardContainer className={`education-card`} theme={ThemeContext}>
//         <EduCardImage className="educard-img" theme={ThemeContext}>
//           <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
//         </EduCardImage>
//         <EduCardDetails>
//           <Typography variant="h6" style={{ color: theme.primary }}>
//             {startYear}-{endYear}
//           </Typography>
//           <Typography variant="h4" style={{ color: theme.tertiary }}>
//             {course}
//           </Typography>
//           <Typography variant="h5" style={{ color: theme.tertiary80 }}>
//             {institution}
//           </Typography>
//         </EduCardDetails>
//       </EducationCardContainer>
//     </Fade>
//   );
// }

// export default EducationCard;
