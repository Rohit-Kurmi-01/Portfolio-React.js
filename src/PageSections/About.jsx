import React from 'react'

function About() {
    return (
        <div>
        <section class="about" id="about">
        <div class="about-img">
            <img src="src/Img/aboutpic.jpg" alt=""/>
        </div>

        <div class="about-content">
            <h2 class="heading">About <span>ME</span></h2>
            <h3>Frontend Developer</h3>
            <p>Passionate <span>React</span> developer proficient in <span>Sass</span>, <span>JavaScript</span>, <span>Bootstrap</span>, and <span>Node.js</span>. Experienced in
                building responsive web applications and leveraging React's ecosystem for dynamic user interfaces.
                Skilled in <span>UI/UX design</span>, <span>state management</span>, and <span>front-end optimization</span>. Actively learning and
                adapting to industry trends. <b className='highlight'>Collaborative team</b> player with a commitment to continuous
                improvement.
                </p>
            <a href="#skill" class="btn">Read More</a>

        </div>
      </section>
      </div>
    )
}

export default About
