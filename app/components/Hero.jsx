import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/logo/3.jpg" className="rounded-lg shadow-2xl w-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Steelhead Electric</h1>
          <p className="py-6">
            Our expert electricians tackle every project with innovation and
            expertise. From simple repairs to complex installations, we’re the
            trusted partner you need.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
