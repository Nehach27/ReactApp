import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

function Footer() {
  return (
    <div className="footer">
            <h2>Thank you</h2>
            <h3>for your time!</h3>
          
            <a href="#base"><img src={require("../Images/up.png")} alt="Thank you image" /></a>
            <p>go back</p>

            <div className="connect-me">
                <center>
                   <a href="https://www.facebook.com/nehach27" className="fa fa-facebook-official" aria-hidden="true"></a>

                   <a href="https://www.linkedin.com/in/neha-choudhary-073/" className="fa fa-linkedin-square" aria-hidden="true"></a>
                   
                   <a href="https://github.com/Nehach27" className="fa fa-github-square" aria-hidden="true"></a>
                 
                   <a href="https://www.instagram.com/neha___choudhary/" className="fa fa-instagram" aria-hidden="true"></a>
                   
                   <a href="live:nehachoudhary073_1" className="fa fa-skype" aria-hidden="true"></a>
               </center>
           </div>
    </div>
  )
}

export default Footer