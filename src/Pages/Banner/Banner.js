import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../Assets/images/female-dentist.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="container d-flex mt-5">
            <div>
                <h1>Hello <span className='text-danger'>Dantist <FontAwesomeIcon icon={faTooth} /></span></h1>
                <h1>Hi! my name is <span className='text-primary'>Lania</span> I am a <span className='colorful'>Doctor</span>.</h1>
            </div>
            <div>
                <img className='w-70 img-fluid' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;