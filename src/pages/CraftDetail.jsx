import { useLoaderData, useParams } from "react-router-dom";

const CraftDetail = () => {
  const crafts = useLoaderData();
  const { id } = useParams();
  const craft = crafts.find(craft => craft._id === id)
  return (
    <div>
      <h2>{craft.craftName}</h2>
      <img src={craft.craftIamge} alt="" />
    </div>
  );
};

export default CraftDetail;