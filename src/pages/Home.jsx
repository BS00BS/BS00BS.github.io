import React, { useEffect, useState } from 'react'
import AboutMe from './AboutMe'
import { Container } from '@mui/material'
import Projects from './Projects'
import Contact from './Contact'
import { Link } from 'react-scroll';

function Home() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Function to check the scroll position
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Show the scroll button when scrolled down 2x the viewport height
            setShowScrollButton(scrollY > 2 * viewportHeight);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Container>
                <section id='about-me' className='pb-5'>
                    <AboutMe />
                </section>
                <section id='projects' className='pb-5'>
                    <Projects />
                </section>
                <section id='contact' className='pb-5'>
                    <Contact />
                </section>

                {showScrollButton && (
                    <Link
                        to='navbar'
                        smooth={true}
                        duration={300}
                        className='scroll-to-top-button'
                    >
                        <i className="bi bi-chevron-up"></i>
                    </Link>
                )}
            </Container>
        </>
    )
}

export default Home