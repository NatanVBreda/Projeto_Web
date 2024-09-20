
import '../styles/productCard.css';
import hamburger from '../assets/images/hamburger_promotion.png'
import cheeseBurger from '../assets/images/cheeseburger_promotion.png'
import doubleCheese from '../assets/images/double_cheeseburger.png'
import chickenBurger from '../assets/images/chicken_burger_promotion.png'

const ProductCard = () => {

  return (
    <div className="containerP">
      <section className="solutions">
        
        <h2 className="main-title">Seu próximo hambúrguer perfeito está aqui!</h2>
        <br />
        <br />
        <div className="cards-container">
          <div className="card">
            <img src={hamburger} alt="Ícone 1" className="card-img" />
            <p>
              Hamburger
            </p>
            <h2>
              R$ 19,98
            </h2>
          </div>
          <div className="card">
            <img src={cheeseBurger} alt="Ícone 2" className="card-img" />
            <p>
              Cheeseburger
            </p>
            <h2>
              R$ 22,98
            </h2>
          </div>
          <div className="card">
            <img src={doubleCheese} alt="Ícone 3" className="card-img" />
            <p>
              Double Cheeseburger
            </p>
            <h2>
              R$ 24,98
            </h2>
          </div>
          <div className="card">
            <img src={chickenBurger} alt="Ícone 3" className="card-img" />
            <p>
              Chickenburger
            </p>
            <h2>
              R$ 29,98
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;