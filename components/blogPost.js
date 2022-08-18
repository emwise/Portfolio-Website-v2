import styles from './blogPost.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export default function BlogPost(props){
  return (
    <div className={styles.container}>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  )
}