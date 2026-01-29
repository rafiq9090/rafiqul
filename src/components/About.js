import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container" data-aos="fade-up">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I am Md Rafiqul Islam, a Computer Science and Engineering (CSE)
            student at Southeast University. My expertise bridges the gap between high-performance
            software engineering and strategic digital marketing. I build scalable backends using
            Golang, AWS, and Microservices, while also developing mobile apps with Flutter
            and Android. Beyond coding, I am an experienced Media Buyer with a deep understanding
            of AdSense, ADX, and Search Arbitrage, aiming to create innovative solutions that drive real value.
          </p>
        </div>
        <div className="about-image">
          <div className="circle-wrapper">
            <img src={process.env.PUBLIC_URL + '/Assets/about.png'} alt="Md Rafiqul Islam" loading="lazy" />
          </div>
        </div>
      </div>
    </section>


  );
}

export default About;
