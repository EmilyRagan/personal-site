import React from 'react';
import Link from 'next/link';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ alignItems: 'center', backgroundColor: 'gray', display: 'flex', padding: 20 }}>
                <h1>Emily Ragan</h1>
                <Link href='/resume'><a className='mr-auto'>Resume</a></Link>
                <Link href='/seniorproject'><a className='mr-auto'>Senior Project</a></Link>
            </div>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
