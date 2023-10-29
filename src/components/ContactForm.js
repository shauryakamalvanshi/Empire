"use client"
import React, { useState } from "react";
import styles from "@/styles/contactform.module.css";

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("trying");
      const res = await fetch(`/api/users/contact/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          message,
          subject,
        }),
      });

      const msg = await res.json();
      // Do something with msg
      console.log(msg);
    } catch (error) {
      console.error(error + " ERROR");
    }

    setUsername("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSuccess("Message sent successfully");
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          required={true}
          className={styles.input_field}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label className={styles.label}>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required={true}
          placeholder="email"
          className={styles.input_field}
        />
      </div>
      <div>
        <label className={styles.label}>Subject</label>
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          type="text"
          required={true}
          placeholder="Subject"
          className={styles.input_field}
        />
      </div>
      <div>
        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          name="message"
          className={styles.textarea}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required={true}
        ></textarea>
      <button type="submit" className={styles.submit_button}>
  Submit
</button>

      </div>
      <div className={styles.success}>{success}</div>
    </form>
  );
};

export default ContactForm;
