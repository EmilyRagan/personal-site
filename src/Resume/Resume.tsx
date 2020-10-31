import React, { useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Experience } from './Experience';
import ResumeJSON from './resume.json';
import { IExperience } from './ResumeInterfaces';

export const Resume = () =>
{
    const [experiences, setExperiences] = useState<IExperience[]>([]);

    useEffect(() =>
    {
        setExperiences(ResumeJSON.experience as IExperience[]);
    }, []);

    return (
        <div>
            {/* <Jumbotron>
                <h1>Emily Ragan</h1>
                <h2>Hyattsville, MD | <a href="mailto:emily.lynn.ragan@gmail.com">emily.lynn.ragan@gmail.com</a> | 302-521-9641</h2>
            </Jumbotron> */}
            <div style={{ padding: 20 }}>
                <h2>Experience</h2>
                {experiences.map(e => <Experience
                    {...e}
                />)}
            </div>
        </div>
    );
};
