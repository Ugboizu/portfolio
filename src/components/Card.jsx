// import './Card.css';
import Button from './Button';

function Card({ title, icon, image, description }) {
  return (
    <div className="card">
      {image ? <img src={image} alt={title} /> : <img src={icon} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text="Read more" />
    </div>
  );
}

export default Card;