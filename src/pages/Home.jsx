import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import Slider from "../components/Slider";

const Home = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <Slider />
      <div className="my-16">
        <h2 className="text-4xl w-3/4 mx-auto text-center my-6">Discover Art You Love From the World's Leading Online Gallery</h2>
        <div className="grid grid-cols-4 gap-4 mx-auto px-24">
          {crafts.map(craft => <CraftCard key={craft._id} craft={craft} />)}
        </div>
      </div>

      <div className="mx-auto px-24 my-16">
        <h2 className="text-3xl py-6">Featured Collections</h2>
        <div className="flex gap-4">
          <div>
            <img src="/src/assets/Hybrid-collections_bestsellers_room-large.jpg" alt="" />
            <h3>2024 Best Sellers</h3>
            <p>Discover caurator-approved collector favorite.</p>
          </div>
          <div>
            <img src="/src/assets/hybrid-collections_abstract_room-large.jpg" alt="" />
            <h3>Arresting Abstract</h3>
            <p>Make a statement with a one-of-a-kind abstract.</p>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-8 my-20">
        <div className="grid grid-cols-2 mx-auto px-24">
          <div>
            <img src="/src/assets/Hybrid-Homepage-RW-Prog-large.jpg" alt="" />
          </div>
          <div className="ml-16 flex flex-col justify-center">
            <h2 className="text-3xl py-4">Find Art You Love</h2>
            <p>“At Saatchi Art, we make it our mission to help you discover and buy from the best emerging artists around the world. Whether you’re looking to discover a new artist, add a statement piece to your home, or commemorate an important life event, Saatchi Art is your portal to thousands of original works by today’s top artists.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;