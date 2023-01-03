import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './profile.module.css'

export default function Profile(){
  return (
    <div className={utilStyles.mainContainer}>
      <div className={styles.container}>
        <a href='https://github.com/emwise' target="_blank">
          <Image
            priority
            src="/images/headshot2resized.png"
            className={styles.image}
            height={250}
            width={250}
            alt="Profile picture of Emma Wise"
          />
          </a>
      </div>
      <h1>Hello!</h1>
      <div>
        <p>I am Emma, a Software Engineer living in Chicago. I started learning to program in my free time, and it quickly became an obsession as I took courses from all over the web.</p>
        <p>Now, I am committed to improving my skill as I study the web's core concepts like website performance and hosting.</p>
      </div>
    </div>
  )
}