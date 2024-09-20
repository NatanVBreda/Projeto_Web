
import '../styles/reviews.css';
import Will from '../assets/images/Will.jpg'
import Ednaldo from '../assets/images/Ednaldo.png'
import Xandao from '../assets/images/Xandao.jpg'
import Prince from '../assets/images/nigerianPrince.png'


const reviews = [
  {
    id: 1,
    name: "Will smith",
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
    id: 2,
    name: "Nigerian Prince",
    reviewText: "Wannan DoubleCheese yayi kyau kwarai da gaske 👑👑",
    image: Prince,
    stars: 5
  },
  {
    id: 2,
    name: "Super Xandao",
    reviewText: "Esse DoubleChesse ta Igual meu DoubleBiceps 💪💪",
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
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img src={review.image} alt={`${review.name} photo`} className="review-image" />
            <p>{review.reviewText}</p>
            <h3>{review.name}</h3>
            <div className="stars">
              {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
