import React from 'react'

function PortfolioSection() {
    return (
        <div>
             <section class="portfolio" id="portfolio">
    <h2 class="heading">Latest <span>Projects</span></h2>

    <div class="portfolio-container">

        <div class="portfolio-box">
            <img src="src/Img/library.jpg" alt=""/>
            <div class="portfolio-layer">
               <h4>library Management </h4>
               <p> <span className='highlight'>technology : ReactJS</span></p>
               <a href="https://library-management-by-rohit.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>

        <div class="portfolio-box">
            <img src="src/Img/passwordGenerator.png" alt=""/>
            <div class="portfolio-layer">
               <h4>Password Generator</h4>
               <p> <span className='highlight'>technology : ReactJS</span> </p>
               <a href="https://password-genrator-by-rohit.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
        
        <div class="portfolio-box">
            <img src="src/Img/practicRealWebsite.png" alt=""/>
            <div class="portfolio-layer">
               <h4>practic Real Website</h4>
               <p>technology : ReactJS</p>
               <a href="https://practic-real-website.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
        
        <div class="portfolio-box">
            <img src="src/Img/CardMatching.png" alt=""/>
            <div class="portfolio-layer">
               <h4>Card Matching</h4>
               <p>technology : ReactJS</p>
               <a href=""><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
        
        <div class="portfolio-box">
            <img src="src/Img/coming.png" alt=""/>
            <div class="portfolio-layer">
               <h4>Web Design</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.</p>
               <i class="fa-solid fa-up-right-from-square"></i>
            </div>
        </div>
        
        <div class="portfolio-box">
            <img src="src/Img/coming.png" alt=""/>
            <div class="portfolio-layer">
               <h4>Web Design</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.</p>
               <i class="fa-solid fa-up-right-from-square"></i>
            </div>
        </div>
        
    </div>
    <br/>
    <p class="error">In Last Three projects are throwing some errors in deploying by netlyfy hosting . this is resolwing till ....</p>
  </section>
    
        </div>
 
    )
}

export default PortfolioSection
