import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diogo Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam beatae delectus atque, aut eius officiis repudiandae cumque? Ab, debitis exercitationem maxime quis veritatis sapiente blanditiis dolorum id autem facilis fugiat."
          />
          <Post
            author="Antonio Dias"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam beatae delectus atque, aut eius officiis repudiandae cumque? Ab, debitis exercitationem maxime quis veritatis sapiente blanditiis dolorum id autem facilis fugiat."
          />
        </main>
      </div>
    </div>

  )
}
