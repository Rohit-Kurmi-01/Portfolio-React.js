import React from 'react'

function Services() {
    return (
       <div>
         <section class="services" id="services">
       <h2 class="heading"> My <span>Services</span></h2>

      <div class="services-container">

        <div class="services-box">
            <i class="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>Skilled React developer proficient in translating Figma designs into responsive and pixel-perfect <span><b>React code</b></span></p>
            <a href="#" class="btn">Read More</a>
           </div>
    
           <div class="services-box">
            <i class="fa-solid fa-palette"></i>
            <h3>UI/UX Designing</h3>
            <p>Skilled Figma Designer proficient in translating thinking into responsive and pixel-perfectly <span><b>Figma Design</b></span></p>
            <a href="#" class="btn">Read More</a>
           </div>
    
           
           <div class="services-box">
            <i class="fa-brands fa-android"></i>
            <h3>Debugger</h3>
            <p>debug the projects effectively and eassily</p>
            <a href="#" class="btn">Read More</a>
           </div>
      </div>
    </section>
       </div>

    
  
    )
}

export default Services
