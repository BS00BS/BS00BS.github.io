import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import useMediaQuery from '@mui/material/useMediaQuery';

function AboutMe() {
    const isTablet = useMediaQuery('(max-width: 800px)');
    const isMobile = useMediaQuery('(max-width: 530px)');

    return (
        <>
            {
                isTablet ? (
                    <div className="row text-center py-5">
                        <div className='d-flex justify-content-center'>
                            <img style={{ width: '20vw', borderRadius: '50%' }} src='/BS-Avatar.png' />
                            {isMobile ?
                                (
                                    <h6 style={{ transform: 'rotate(-10deg) translate(0, -20px)' }} className='pb-4 me-5 mt-3'>Hello! I'm <RoughNotation type='underline' show={true}>Bashkim</RoughNotation>.</h6>
                                ) :
                                (
                                    <h5 style={{ transform: 'rotate(-10deg) translate(0, -20px)' }} className='pb-4 me-5 mt-3'>Hello! I'm <RoughNotation type='underline' show={true}>Bashkim</RoughNotation>.</h5>
                                )}
                        </div>
                        <div className="px-5 mt-5" style={isMobile ? ({ fontSize: '0.9rem' }) : ({})}>
                            <p style={{ transform: 'rotate(-2deg)', letterSpacing: '0.1px' }} className='pb-2 m-0 text-start'>
                                A dedicated web developer, passionate about crafting digital experiences that seamlessly blend creativity and functionality.
                            </p>
                            <p style={{ transform: 'rotate(-2deg)', letterSpacing: '0.1px' }} className='pb-2 m-0 text-start'>
                                My journey in web development has been enriched through diverse experiences, from collaborating on projects with colleagues during my university years to tackling personal coding challenges. I firmly believe that a thriving professional environment, characterized by collaborative synergy among colleagues, serves as a catalyst for individual and collective growth.
                            </p>
                            <p style={{ transform: 'rotate(-2deg)', letterSpacing: '0.1px' }} className='pb-5 m-0 text-start'>
                                I aspire to bring this dedication and expertise to a dynamic and ambitious project, team, or company. Let's explore how we can work together to create exceptional digital experiences.
                            </p>
                            <div className='d-flex justify-content-center gap-3'>
                                    <a href='#contact'><div className='btn btn-outline-light'>Contact me</div></a>
                                    <a href='https://github.com/BS000BS' target='_blank'><div className='btn btn-outline-light'>View GitHub</div></a>
                            </div>
                        </div>
                    </div>
                ) :
                    (
                        <div className="row text-center py-5 my-5">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3 d-flex justify-content-center align-items-start pt-5">
                                <img style={{ width: '60%', borderRadius: '50%' }} src='/BS-Avatar.png' />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-9">
                                <div className='d-flex justify-content-start'>
                                    <h4 style={{ transform: 'rotate(-10deg) translate(-100px)' }} className='pb-4 me-5 mt-3'>Hello! I'm <RoughNotation type='underline' show={true}>Bashkim</RoughNotation>.</h4>
                                </div>
                                <p style={{ transform: 'rotate(-2deg)', letterSpacing: '0.1px' }} className='pb-2 m-0 text-start'>
                                    A dedicated web developer, passionate about crafting digital experiences that seamlessly blend creativity and functionality.
                                </p>
                                <p style={{ transform: 'rotate(-2deg)', letterSpacing: '0.1px' }} className='pb-2 m-0 text-start'>
                                    My journey in web development has been enriched through diverse experiences, from collaborating on projects with colleagues during my university years to tackling personal coding challenges. I firmly believe that a thriving professional environment, characterized by collaborative synergy among colleagues, serves as a catalyst for individual and collective growth.
                                </p>
                                <p style={{ transform: 'rotate(-2deg)', letterSpacing: '0.1px' }} className='pb-4 m-0 text-start'>
                                    I aspire to bring this dedication and expertise to a dynamic and ambitious project, team, or company. Let's explore how we can work together to create exceptional digital experiences.
                                </p>
                                <div className='d-flex justify-content-center gap-3' style={{ transform: 'rotate(-2deg)' }}>
                                    <a href='#contact'><div className='btn btn-outline-light'>Contact me</div></a>
                                    <a href='https://github.com/BS000BS' target='_blank'><div className='btn btn-outline-light'>View GitHub</div></a>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default AboutMe