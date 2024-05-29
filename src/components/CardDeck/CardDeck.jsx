import Card from '../Card/Card';
import styles from './CardDeck.module.css';

const CardDeck = () => {
  return (
    <div className={styles.deck}>
    <div>
      <Card 
        header='Goals'
        body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?'
      />
    </div>
      <div>
        <Card 
          header='Experiences'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?'
        />
      </div>
      <div>
        <Card 
          header='Interests'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?'
        />
      </div>
      <div>
        <Card 
          header='Intro'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?'
        />
      </div>
    </div>
  )
}

export default CardDeck
