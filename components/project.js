import styles from './project.module.css'
import Image from 'next/image'


export default function Project( props ){
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.project.title}</h2>
      <div>
        <div className={styles.right}>
          <a href={props.project.url} target="_blank">
            <Image
              priority
              src={props.project.picture1}
              className={styles.projectImage}
              height={400}
              width={400}
              alt={props.project.alt1}
            />  
          </a>
        </div>
        <h3 className={styles.title}>Goal:</h3>
        <p className={styles.caption}>{props.project.goal}</p>
        <div className={styles.left}>
          <a href={props.project.url} target="_blank">
            <Image
              priority
              src={props.project.picture2}
              className={styles.projectImage}
              height={400}
              width={400}
              alt={props.project.alt2}
            />  
          </a>
        </div>
        <h3 className={styles.title}>Description:</h3>
        <p className={styles.caption}>{props.project.description}</p>
      </div>
    </div>
  )
}