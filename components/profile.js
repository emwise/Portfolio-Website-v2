import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './profile.module.css'

export default function Profile(){
  return (
    <div className={utilStyles.mainContainer}>
      <div className={styles.container}>
        <Image
          priority
          src="/images/headshot2resized.png"
          className={styles.image}
          height={250}
          width={250}
          alt="Profile picture of Emma Wise"
        />
      </div>
      <h1>Hello!</h1>
      <div>
        <p>I am Emma, a Software Engineer living in Chicago. I started learning to program in my free time, and it quickly became an obsession as I took courses from all over the web.</p>
        <p>Now, I am committed to improving my skill as I study the web's core concepts like UI/UX design, SEO, and website performance.</p>
      </div>
    </div>
  )
}