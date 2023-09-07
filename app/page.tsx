import Nav from '@/components/nav/Nav'
import styles from './page.module.css'
import { Historys } from '@/components/Historys/Historys'
import Posts from '@/components/posts/Posts'

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.hola}>
        <Historys />
        <Posts/>
        <Posts/>
        <Posts/>
      </div>
    </div>
  )
}
