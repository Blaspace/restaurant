import React from "react";

function Footer() {
  return (
    <div className="footer-con">
      <div className="footer">
        <section style={{width:"25%"}}>
          <h1>OderUK</h1>
          <br/>
          <img src={require('../public/Group.png')} width={'80%'}/>
          <br/>
          <p>Company #783639hr, registered with house of companies</p>
        </section>
        <section style={{width:"30%"}}>
          <p><b>Get exclusive deals in your inbox</b></p>
          <br/>
          <form className="header-form">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
          <br/>
          <p>We wont spam: read our <a href="#">email policy</a></p>
        </section>
        <section style={{width:"20%"}}>
          <ul>
            <li>
              <b>Legal pages</b>
            </li>
            <br/>
            <li>Terms and Condition</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Mordern slavery statement</li>
          </ul>
        </section>
        <section style={{width:"20%"}}>
          <ul>
            <li>
              <b>Important links</b>
            </li>
            <br/>
            <li>Get help</li>
            <li>Add your restaurant</li>
            <li>Signup to deliver</li>
            <li>Create a business account</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;
