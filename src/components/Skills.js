import React from 'react';

function Skills() {
  // Updated skill proficiency percentages (adjustable)
  const skills = [
    { name: 'Golang with Gin', },
    { name: 'AWS', },

    { name: 'Android Studio', },
    { name: 'Java', },
    { name: 'C', },
    { name: 'Python', },
    { name: 'Flutter', },
    { name: 'HTML & CSS', },
    { name: 'SQL', },
    { name: 'MongoDB', },
    { name: 'PostgreSQL', },
    { name: 'MySQL', },
    { name: 'AdSense & ADX', },
    { name: 'Digital Marketing', },
    { name: 'Search Arbitrage', },
    { name: 'React Native', },
    { name: 'Nuxt JS', },
    { name: 'Node JS', },
    { name: 'Express JS', },
    { name: 'Docker', },
    { name: 'Wordpress', },
    { name: 'Spring Boot', }

  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-delay="100"
            role="group"
            aria-label={`${skill.name} skill ${skill.level} percent`}
            title={`${skill.name} — ${skill.level}%`}
          >
            <div className="skill-card-header">
              <p className="skill-name">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
