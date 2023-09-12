import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useMediaQuery from '@mui/material/useMediaQuery';

function Contact() {
    const isMobile = useMediaQuery('(max-width: 500px)');
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const notify = (text) => toast.success(text, {
    duration: 2000,
    position: 'bottom-center'
  });

  const handleCopyToClipboard = (textToCopy) => {
    const text = textToCopy === 'PHONE_NUMBER' ? '+383 45 475 216' : 'bashkim00bs@gmail.com';

    navigator.clipboard.writeText(text).then(() => {
      // The text has been copied to the clipboard
      if (textToCopy === 'PHONE_NUMBER') {
        notify('Phone number copied to clipboard');
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000); // Reset after 2 seconds
      } else if (textToCopy === 'EMAIL_ADDRESS') {
        notify('E-mail copied to clipboard')
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
      }
    });
  };

  return (
    <>
      <div className='pt-5 pb-5 text-center'>
        <h3>Contact</h3>
      </div>
      <div className={`d-flex justify-content-center align-items-center pt-5 ${isMobile ? 'gap-3' : 'gap-5'}`} style={isMobile ? { marginBottom: '30vw' } : { marginBottom: '10vw' }}>
        <div
          className={`btn btn-outline-light ${phoneCopied ? 'disabled' : ''}`}
          onClick={() => handleCopyToClipboard('PHONE_NUMBER')}
          style={isMobile ? { fontSize: '0.8rem' } : { }}
        >
          Contact me via phone{' '}
          <i className={`bi bi${phoneCopied ? '-check-lg' : '-telephone'}`}></i>
        </div>
        <div
          className={`btn btn-outline-light ${emailCopied ? 'disabled' : ''}`}
          onClick={() => handleCopyToClipboard('EMAIL_ADDRESS')}
          style={isMobile ? { fontSize: '0.8rem' } : { }}
        >
          Contact me via e-mail{' '}
          <i className={`bi bi-envelope${emailCopied ? '-check' : ''}`}></i>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Contact;
