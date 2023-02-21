import React from 'react';
import main from "../Images/main.jpg";

const Hero = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={main} alt="hero"/>
        </section>
    );
};

export default Hero;