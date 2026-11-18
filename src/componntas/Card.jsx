import Btn from "./Btn";
import "./Card.css";
import avatar from "./male-silhouette-avatar-placeholder-vector-56412953.jpg";

function Card(props) {
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="avatar profile" />
      <h1 className="name">{props.name}</h1>
      <p>{props.description}</p>
      <Btn type={props.type}/>
    </div>
  );
}
export default Card;
