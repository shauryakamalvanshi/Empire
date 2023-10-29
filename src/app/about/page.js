import React from "react";
import styles from "@/styles/about.module.css";
import Cardclient from "@/components/AboutCard";
import Wepage from "@/components/Weprovide";
import Image from "next/image"; // Import the Next.js Image component

const Page = () => {
  return (
    <div>
      <div className={styles.image}>
        {/* Use the Next.js Image component */}
        <Image
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
          alt="about"
          layout="responsive" 
          width={800} // Set the desired width
          height={500} // Set the desired height
        />
      </div>
      <div className={styles.heading}>
        <h1>ABOUT US</h1>
      </div>
      <hr />

      <div className={styles.whowe}>
        <h1>WHO WE ARE</h1>
        <p>
          Empire technology Web Services is a company committed to providing world-class services that accelerate the growth and success of their clients. Here at Empires tech we are committed to providing effective solutions with our diverse range of services including Software Development, Payment Gateway Solutions, Web Design And Development, Digital Marketing, Search Engine Optimization, and Android Apps. The company creates an environment for its employees, a team of experts across various fields who utilize their expertise and vast domain knowledge to accelerate the growth and success of their clients, and who have enough space to work independently.
        </p>
      </div>

      <Wepage></Wepage>

      <div className={styles.cards}>
        <Cardclient name="Satyam Samele" position="CEO"></Cardclient>
        <Cardclient name="Amit Singh" position="President"></Cardclient>
        <Cardclient name="Sachin Chaturvedi" position="CFO"></Cardclient>
      </div>
    </div>
  );
};

export default Page;
