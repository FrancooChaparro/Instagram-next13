import Nav from '@/components/nav/Nav'
import styles from './page.module.css'
import { Historys } from '@/components/Historys/Historys'
import Posts from '@/components/posts/Posts'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.hola}>
        <Historys />
        <Posts/>
        <Posts/>
        <Posts/>
        <div className={styles.menu}><Menu /></div>
      </div>
    </div>
  )
}
