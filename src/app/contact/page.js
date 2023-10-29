import React from "react";
import styles from "@/styles/contact.module.css";
import Contactcard from "@/components/Contactcard";
import ContactForm from "@/components/ContactForm"; // Import the ContactForm component
import Image from "next/image";
import { Hidden } from "@mui/material";

const Page = () => {
  // ... (other code remains the same)

  return (
    <>
      <div className={styles.image}>
      <Image
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
          alt="about"
          layout="responsive" // Set the layout to "responsive"
    width={800} // Set the maximum width
    height={400} // Set the maximum height
    overflow={Hidden}
        />
      </div>

      <div className={styles.Heading}>
        <h1>Contact us</h1>
      </div>
      <Contactcard />

      <div className={styles.bottom}>
        <div className={styles.left}>
        <div className={styles.iframe_container}>
            {" "}
            {/* Apply the CSS class to a containing div */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3367954877317!2d77.49086347539715!3d28.469402175754233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea74cbe81503%3A0x3d100ac5d4e327a!2sKCC%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1697713991529!5m2!1sen!2sin"
              height={400}
              width={600}
              allowFullScreen=""
              loading="lazy"
              // style={iframeStyle}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr />

        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
