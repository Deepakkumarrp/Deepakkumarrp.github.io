import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import Github from '../../components/Github/github'

function Main() {

        useEffect(() => {
          // Clean up logic here
          return () => {
            // Cleanup logic when the component is unmounted
          };
        }, []);
    return (
        <div>
            <Helmet>
                <title>{headerData.name} | Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            {/* <Experience /> */}
            <Projects />
            {/* <Achievement /> */}
            {/* <Services /> */}
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Github />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
