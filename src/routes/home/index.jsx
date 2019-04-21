import { h } from 'preact'
import style from './style'

const Home = () =>
  <div class={style.home}>
    <div class={style.home__content}>
      <h1 class={style.home__heading}>Anvil</h1>
      <p class={style.home__lede}>Gather your friends. Build a campfire. Tell a story.</p>
      <p>Anvil is a game-system-agnostic virtual tabletop solution, built with one focus: get out of the way and let you play some tabletop RPGs with your friends.</p>
      <p>
        <a href='/game'>See it in action</a>, or <a
          href='https://github.com/wyrmisis/anvil-vtt'
          native
          target='_blank'>
          check it out on GitHub
        </a>.
      </p>
      <p class={style.home__attribution}>(Image credits: <a href='https://www.instagram.com/bladvagacian/' native target='_blank'>Vlad Bagacian</a>, <a href='https://www.pexels.com/photo/bonfire-burning-camp-campfire-1368382/' native target='_blank'>Pexels</a>)</p>
    </div>
  </div>

export default Home
