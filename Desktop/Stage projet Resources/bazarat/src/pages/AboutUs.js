import React from 'react';
import MainAppBar from '../components/MainAppBar';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <MainAppBar />
            <div className="app-container">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    accumsan viverra nunc non dapibus. Cras auctor facilisis mi, et
                    scelerisque lorem aliquet sit amet. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae; Sed mi sem,
                    luctus nec faucibus vitae, accumsan et neque. Sed malesuada mauris
                    non turpis interdum, non mollis velit porttitor. Fusce tristique nibh
                    ac arcu gravida, ac interdum enim faucibus. Duis eu iaculis erat.
                    Etiam aliquet magna ut sem ullamcorper posuere. Donec vestibulum
                    purus diam, eget tincidunt ex facilisis eu.
                </p>
            </div>
        </>
    );
};

export default AboutUs;
