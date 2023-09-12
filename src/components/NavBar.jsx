import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

function NavBar() {
    const isMobile = useMediaQuery('(max-width: 400px)');

  return (
    <>
        <div id='navbar' className='d-flex justify-content-evenly align-items-center px-2 pt-5 pb-5'>
            <ul className='p-0 m-0' style={ + isMobile ? {display: 'flex', gap: '3rem', listStyle: 'none', fontSize: '0.8rem'} : {display: 'flex', gap: '3rem', listStyle: 'none'}}>
                <a href='#about-me' style={{textDecoration: 'none', color: 'var(--text-color)'}}><li ><p className='m-0'>./about-me</p></li></a>
                <a href='#projects' style={{textDecoration: 'none', color: 'var(--text-color)'}}><li ><p className='m-0'>./projects</p></li></a>
                <a href='#contact' style={{textDecoration: 'none', color: 'var(--text-color)'}}><li ><p className='m-0'>./contact</p></li></a>
            </ul>
        </div>
    </>
  )
}

export default NavBar