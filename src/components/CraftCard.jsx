import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  const {_id, craftIamge, craftName, shortDescription } = craft;
  return (
    <div className="card card-compact w-full">
      <figure>
        <img src={craftIamge} alt="Craft" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{craftName}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`craftDetail/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;