import Card from '../Card/Card';
import styles from './CardDeck.module.css';

const CardDeck = () => {
  return (
    <div className={styles.deck}>
    <div>
    <Card 
          header='Goals'
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?</p>
        </Card>
    </div>
      <div>
      <Card 
          header='Experience'
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?</p>
        </Card>
      </div>
      <div>
      <Card 
          header='Interests'
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?</p>
        </Card>
      </div>
      <div>
        <Card 
          header='Intro'
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque corporis quasi odit nisi molestias dolores libero, vero tenetur ut. Dolorem iusto aut asperiores commodi eaque vero mollitia sit eligendi?</p>
        </Card>
      </div>
    </div>
  )
}

export default CardDeck
