import Project from './project'
import styles from './projects.module.css'

export default function Projects( props ){
  const projectsObject = props.projects.projects.projects.projects
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <h1 className={styles.title}>Portfolio</h1>
        {projectsObject.map((project, index) => {
          return(
            <Project 
              project={project}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}