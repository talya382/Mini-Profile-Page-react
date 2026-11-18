import Btn from "./Btn";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        className="avatar"
        src="male-silhouette-avatar-placeholder-vector-56412953.avif"
        alt="avatar profile"
      />
      <h1 className="name">{props.name}</h1>
      <p>{props.description}</p>
      <Btn type={props.type}/>
    </div>
  );
}
export default Card;
