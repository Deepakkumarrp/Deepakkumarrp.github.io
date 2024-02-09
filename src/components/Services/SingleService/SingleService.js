// import React,{useContext} from 'react';
// import Fade from 'react-reveal/Fade';

// import { ThemeContext } from '../../../contexts/ThemeContext';

// import './SingleService.css'


// function SingleService({id, title, icon}) {

//     const { theme } = useContext(ThemeContext);
//     return (
//         <Fade bottom>
//             <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
//                 <div className="service-content"  style={{color:theme.tertiary}}>
//                     <i className="service-icon">{icon}</i>
//                     <h4  style={{color:theme.tertiary}}>{title}</h4>  
//                 </div>         
//             </div>
//         </Fade>
//     )
// }

// export default SingleService

import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { Fade } from 'react-awesome-reveal';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css';

const ServiceContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.primary400,
    color: theme.tertiary,
}));

const ServiceContent = styled('div')(({ theme }) => ({
    color: theme.tertiary,
}));

const ServiceIcon = styled('i')(({ theme }) => ({
    color: theme.tertiary,
}));

const SingleService = ({ id, title, icon }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Fade triggerOnce>
            <ServiceContainer key={id} className="single-service">
                <ServiceContent className="service-content">
                    <ServiceIcon className="service-icon">{icon}</ServiceIcon>
                    <h4>{title}</h4>
                </ServiceContent>
            </ServiceContainer>
        </Fade>
    );
};

export default SingleService;
