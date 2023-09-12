import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

function IndividualProject({ title, description, githubLink, imgSrc }) {
    const isTablet = useMediaQuery('(max-width: 800px)');
    const isMobile = useMediaQuery('(max-width: 530px)');

    return (
        <>
            <div className='mb-5 py-5 d-flex justify-content-center'>
                {isTablet ? (
                    <div className={`col-11 row py-5 d-flex align-items-center justify-content-center gap-5 ${isMobile ? 'p-1' : 'p-4'}`} style={{ backgroundColor: 'rgb(178, 227, 250, 0.1)', borderRadius: '50px', border: '1px double white' }}>
                        <div className='col-12'>
                            <img src={imgSrc} style={{ width: '100%', borderRadius: '60px' }} />
                        </div>
                        <div className='col-12'>
                            <h4 className='text-center'>{title}</h4>
                            <p className='text-center'>{description}</p>
                            <div className='d-flex justify-content-center pt-2'>
                                <a href={githubLink} target='_blank'><div className='btn btn-outline-light'>View on GitHub</div></a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='row p-4 d-flex align-items-center' style={{ backgroundColor: 'rgb(178, 227, 250, 0.1)', borderRadius: '50px', border: '1px double white' }}>
                        <div className='col-5'>
                            <h4 className='text-center'>{title}</h4>
                            <p className='text-center'>{description}</p>
                            <div className='d-flex justify-content-center'>
                                <a href={githubLink} target='_blank'><div className='btn btn-outline-light'>View on GitHub</div></a>
                            </div>
                        </div>
                        <div className='col-7'>
                            <img src={imgSrc} style={{ width: '100%', borderRadius: '60px' }} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default IndividualProject