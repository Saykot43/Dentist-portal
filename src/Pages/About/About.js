import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container py-5'>
            <div className="about-contents d-flex justify-space-between">
            <div className="about-img">
                <img src="https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/148985726_2799787433621844_5577018204295537974_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGv2Ungx28B9eGsLTAEoR2xO21Vzq-IfEk7bVXOr4h8SbT1Lxsx7NEXni1En3eGvZOx1U3EKvAvMtxAUWM-_RuL&_nc_ohc=7iAbJATqeyoAX_sOSlQ&_nc_ht=scontent.fdac34-1.fna&oh=00_AT-oQzyxM-G4Dlm0842XHck0b2Baw_oN4dXnGx_Hnogb1w&oe=6282E73D" alt="" className='w-100 py-2'/>
            </div>
            <div className="about-text ms-5 mt-5">
                <h1>Hi, This is Saykot Kumar Barmon</h1>
                <h5>Web Developer(Front-end)</h5>
                <p className='text-start'>My goal is work in any fast growing local or large multinational organization with immense responsibility. So that, my situational and transformational leadership style, problem solving, communication, language, and volunteering skills can be utilize efficiently to bring a positive change in the organization. In the long run I want to become a full stack web developer. </p>
            </div>
            </div>
        </div>
    );
};

export default About;