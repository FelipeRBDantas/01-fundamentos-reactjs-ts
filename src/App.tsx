import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/feliperbdantas.png',
      name: 'Felipe Dantas',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.' },
      { type: 'link', content: 'github.com/feliperbdantas' },
    ],
    publishedAt: new Date('2024-05-03 08:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.' },
      { type: 'link', content: 'github.com/maykbrito' },
    ],
    publishedAt: new Date('2024-05-06 18:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />

        <main>
          { posts && posts.map(post => <Post key={ post.id } post={ post } />) }
        </main>
      </div>
    </div>
  )
}
