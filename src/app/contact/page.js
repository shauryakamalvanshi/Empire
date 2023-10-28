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
          {/* ... (existing code) */}
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
