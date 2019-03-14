import React from 'react'

function MainContent() {
  return (

    <div className="MainContent">

      <section id="base">
        <div className="base">
         <img src={require("../Images/base.jpeg")} alt="base image"/>
        </div>
      </section>

      <section id="me">
        <div className= "me">
          <img src={require("../Images/me.jpeg")} alt="me image"/>
          <h1>Hi! </h1>
          <h2>my name is</h2>
          <h3>NEHA CHOUDHARY</h3>
          <h4>and</h4>
          <h5>I AM JAVASCRIPT DEVELOPER</h5>
          <h6>creating modern and responsive design</h6>
          <p>nice to meet you!</p>
        </div>
      </section>

      <section id="profile" className="profile" >
          <img src={require("../Images/profile.jpg")} alt="profile image"/>
            <div className="info">
                <h2>PROFILE</h2><br/>
                <h3 style={{top:'250px'}}>fullname</h3><br/>
                <p style={{top:'250px'}}>Neha Choudhary</p><br/>
                <h3 style={{top:'340px'}}>birth</h3>
                <p style={{top:'340px'}}>12th July 1995</p>
                <h3 style={{top:'430px'}}>address</h3>
                <p style={{top:'430px'}}>Delhi, India</p>
                <h3 style={{top:'520px'}}>nationality</h3>
                <p style={{top:'520px'}}>Indian</p>
            </div>
      </section>

      <section id="skills" className="skills">
          <img src={require("../Images/skills.png")} alt="skills image"/>
          <div className="hard-skill">
              <h2>Hard skills</h2>
              <ul>
                  <li>html 5</li>
                  <li>css 3</li>
                  <li>javascript</li>
                  <li>core java</li>
                  <li>graceful degradation</li>
                  <li>coding</li>
                  <li>and...</li>
              </ul>
              <p>Working <br/>to be<br/><strong style={{color: '#41969c'}}>greater</strong></p>
          </div>

          <div className="soft-skill">
              <h2>Soft skills</h2>
              <ul>
                  <li>creative</li>
                  <li>problem solving</li>
                  <li>team work</li>
                  <li>determination</li>
                  <li>patience</li>
                  <li>decision making</li>
                  <li>and...</li>
              </ul>
              <p>Working<br/>to be<br/><strong style={{color: '#41969c'}}>stronger</strong></p>
          </div>
      </section> 

      <section id="work-education" className="work-education">
            <h2>work and education</h2>
            <div className="work">
                <img src={require("../Images/work.jpg")} alt="work image"/> 
                <h3 style={{top:'6em'}}>Instant System</h3>
                <p style={{top: '16em'}}>Started my carrer as a javascript developer with Instant System.</p>
                <h3 style={{top:'9em'}}>Jspider</h3>
                <p style={{top: '22em'}}>Completed my training from Jspider as a full stack developer.</p>
            </div>

            <div className="education">
                <img src={require("../Images/education.jpg")} alt="education image"/>
                <h3 style={{top:'14em'}}>College</h3>
                <p style={{top:'32em'}}>IEC College of Engineering and Technology, Greater Noida</p>
                <h3 style={{top:'17em'}}>School</h3>
                <p style={{top:'38em'}}>Silver Bells Public School, Shamli</p>
            </div>
        </section>

        <section id="colleague" className="colleague">
                <h2>Team</h2>
                <a href="https://deepakdroi.github.io/portfolio/"> <img src={require("../Images/portfolio1.jpeg")} alt="Deepak Portfolio"/></a>

                <a href="https://chakshusaxena.github.io/portfolio/"  target="_blank"> <img src={require("../Images/portfolio2.jpg")} alt="Chakshu Portfolio"/></a>

                <a href="https://vikas095.github.io/portfolio/" > <img src={require("../Images/portfolio3.jpeg")} alt="Vikas Portfolio"/></a>
        </section> 

        <section id="contact" className="contact">
          <div className="circle">
            <h2>contact me</h2>
              <center>
                <div className="form">
                  <h3>Write me something</h3>
                    <form>
                        <input type="text" name="name" placeholder="Name" style={{width:'190px', height: '25px'}}/><br/><br/>
                        <input type="email" name="email" placeholder="Email" style={{width:'190px', height: '25px'}}/><br/><br/>
                        <textarea type="text" name="message" placeholder="Message" style={{width:'190px', height: '60px'}}></textarea><br/><br/>
                        <input type="submit" value="Send"/><br/><br/>
                        <input type="reset" value="Reset"/>
                    </form>
                </div>
              </center>
          </div>
        </section>
    </div>
    )
}
export default MainContent