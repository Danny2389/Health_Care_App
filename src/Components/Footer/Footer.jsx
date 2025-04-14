import React from "react";
import Styles from "./Footer.module.css";


export const Footer = () => {
  return (<>
    <footer className={Styles.footer}>
    <div className={Styles.rightSection}>
      {/* First Column - Icons & Buttons */}
      <div className={Styles.iconsColumn}>
        <div className={Styles.logoContainer}>
          <img src="/assets/op.jpg"  alt="op" />
        </div>
        <div className={Styles.socialIcons}>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <div className={Styles.buttonGroup}>
          <button className={Styles.appointmentButton}>Book Appointment</button>
          <a href="https://wa.me/91799XXXXXX5" target="_blank" rel="noopener noreferrer">
            <button className={Styles.whatsappButton}>Connect on WhatsApp</button>
          </a>
        </div>
      </div>
  
      {/* Second Column - Use Cases */}
      <div className={Styles.footerSection}>
        <h3>Use Cases</h3>
        <ul>
          <li>UI Design</li>
          <li>UX Design</li>
          <li>Wireframing</li>
          <li>Diagramming</li>
          <li>Brainstorming</li>
          <li>Online Whiteboard</li>
          <li>Team Collaboration</li>
        </ul>
      </div>
  
      {/* Third Column - Explore */}
      <div className={Styles.footerSection}>
        <h3>Explore</h3>
        <ul>
          <li>Design</li>
          <li>Prototyping</li>
          <li>Development Features</li>
          <li>Design Systems</li>
          <li>Collaboration Features</li>
          <li>Design Process</li>
          <li>FigJam</li>
        </ul>
      </div>
  
      {/* Fourth Column - Resources */}
      <div className={Styles.footerSection}>
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Best Practices</li>
          <li>Colors</li>
          <li>Color Wheel</li>
          <li>Support</li>
          <li>Developers</li>
          <li>Resource Library</li>
        </ul>
      </div>
    </div>
  
  </footer>
  
  <p className={Styles.footerText}>&copy; 2025 eAsha. Designed by Asha 24x7 Healthcare Pvt. Ltd.</p></>
  );
};

