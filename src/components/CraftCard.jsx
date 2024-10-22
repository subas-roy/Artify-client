
const CraftCard = ({ craft }) => {
  const { craftIamge, craftName, shortDescription } = craft;
  return (
    <div className="card card-compact w-full">
      <figure>
        <img src={craftIamge} alt="Craft" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{craftName}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;