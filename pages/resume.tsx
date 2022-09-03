import React, { useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Experience } from '../src/Resume/Experience';
import ResumeJSON from '../src/Resume/resume.json';
import { IExperience } from '../src/Resume/ResumeInterfaces';

const Resume = () =>
{
    return (
        <div style={{ padding: 20 }}>
            <h2>Experience</h2>
            {(ResumeJSON.experience as IExperience[]).map(e => <Experience key={e.title} {...e} />)}
        </div>
    );
};

export default Resume;