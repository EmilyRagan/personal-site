import React from 'react';
import Link from 'next/link';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ alignItems: 'center', backgroundColor: 'gray', display: 'flex', padding: 20 }}>
                <h1 className='mr-auto'>Emily Ragan</h1>
                <Link href='/resume'><a className='mr-auto' style={{ color: '#5a151c' }}>Resume</a></Link>
                <Link href='/seniorproject'><a className='mr-auto' style={{ color: '#5a151c' }}>Senior Project</a></Link>
            </div>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
