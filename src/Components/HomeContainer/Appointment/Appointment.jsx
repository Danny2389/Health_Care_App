import React from "react";
import styles from "./Appointment.module.css";

export const Appointment = () => {
  return (
    <div className={styles.container}>
      {/* Left Section - Appointment Info */}
      <div className={styles.left}>
        <h3>Appointment</h3>
        <p className={styles.far}>Get in touch to book &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    your first appointment</p>
        <p  >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <p>📞 +91 63016680 400</p>
        <p>📧 ashainfo@gmail.com</p>
      </div>

      {/* Right Section - Appointment Form */}
      <div className={styles.right}>
        <p>
          Name
          <input type="text" className={styles.input} />
        </p>
        <p>
          Phone
          <input type="tel" className={styles.input} />
        </p>
        <p>
          Visit Reason
          <textarea
            className={styles.textarea}
            placeholder="Describe the reason for your visit..."
            rows="4"
          ></textarea>
        </p>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
};
