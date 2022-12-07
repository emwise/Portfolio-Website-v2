import styles from "./contactForm.module.css";
import { useState } from 'react';

export default function ContactForm(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      subject,
      email,
      message
    }
  fetch('https://4pc6wve37j.execute-api.us-east-1.amazonaws.com/prod/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Origin': 'https://emmanwise.com'

      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setSubject('')
        setEmail('')
        setMessage('')
      }
    })
  }
  

  return(
    <div className={styles.container}>
      <div>
        <h1 >Contact</h1>
      </div>
      <div >
        <h3 >Craft a Message</h3>
        <form >  
          <label className={styles.label}>Your Name </label>   
          <input className={styles.input} type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required />  
          <br/>
          <label className={styles.label}>Email </label>   
          <input className={styles.input} type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />  
          <br/>
          <label className={styles.label}>Subject </label>   
          <input className={styles.input} type="text" name="subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} required />  
          <br/>
          <label className={styles.label}>Message </label>   
          <textarea className={styles.textarea} type="text" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  required />  
          <br/>
          <input className={styles.button} type="submit" value="Submit" onClick={(e)=>{handleSubmit(e)}} />  
        </form>    
      </div>
    </div>)
}