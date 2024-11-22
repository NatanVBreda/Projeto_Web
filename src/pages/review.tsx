import '../styles/reviews.css';
import Will from '../assets/images/Will.jpg';
import Ednaldo from '../assets/images/Ednaldo.png';
import Xandao from '../assets/images/Xandao.jpg';
import Prince from '../assets/images/nigerianPrince.png';

const reviews = [
  {
    id: 1,
    name: "Will Smith",
    reviewText: "Very good this Hamburger!! 👀",
    image: Will,
    stars: 4
  },
  {
    id: 2,
    name: "Ednaldo Pereira",
    reviewText: "Top esse CheeseBurger 😎👍",
    image: Ednaldo,
    stars: 5
  },
  {
    id: 3,
    name: "Nigerian Prince",
    reviewText: "Wannan DoubleCheese yayi kyau kwarai da gaske 👑👑",
    image: Prince,
    stars: 5
  },
  {
    id: 4,
    name: "Super Xandao",
    reviewText: "Esse DoubleCheese tá igual meu DoubleBiceps 💪💪",
    image: Xandao,
    stars: 5
  }
];

const ReviewsPage = () => {
  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h2>Avaliações de quem conhece</h2>
        <h1>Todo cliente importa!</h1>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-borders left"></div>
        <div className="reviews-grid">
          {[...reviews, ...reviews].map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.image} alt={`${review.name} photo`} className="review-image" />
              <p>{review.reviewText}</p>
              <div className="review-footer">
                <h3>{review.name}</h3>
                <div className="stars">
                  {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-borders right"></div>
      </div>
    </div>
    
  );
};


export default ReviewsPage;
