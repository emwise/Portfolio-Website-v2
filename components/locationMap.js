import styles from "./locationMap.module.css"

export default function LocationMap(){
  return (
    <div className={styles.column}>
      <p>I'm currently living in Chicago, IL, USA.</p>
      <iframe className={styles.iframe}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33982423937!2d-87.87239008007295!3d41.83390324886063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1660332039040!5m2!1sen!2sus" 
      width="600" 
      height="450" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}