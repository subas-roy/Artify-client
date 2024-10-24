import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import Slider from "../components/Slider";

const Home = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <Slider/>
      <h2 className="text-4xl w-3/4 mx-auto text-center my-6">Discover Art You Love From the World's Leading Online Gallery</h2>
      <div className="grid grid-cols-4 gap-4 mx-auto px-24">
        {crafts.map(craft => <CraftCard key={craft._id} craft={craft} />)}
      </div>
    </div>
  );
};

export default Home;