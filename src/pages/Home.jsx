import { Link, useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";

const Home = () => {
  const crafts = useLoaderData();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadedCategories = async () => {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      console.log;
      setCategories(data);
    };
    loadedCategories();
  }, []);

  return (
    <div className="m-w">
      <Slider />
      <div className="my-16">
        <h2 className="text-4xl w-3/4 mx-auto text-center my-6">
          Discover Art You Love From the World's Leading Online Gallery
        </h2>
        <div className="grid grid-cols-4 gap-4 mx-auto px-24">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft} />
          ))}
        </div>
      </div>

      <div className="px-16 mx-auto">
        <h2 className="text-3xl my-6">Display By Category</h2>
        <div className="grid grid-cols-2">
          {categories.map((category) => (
            <div
              key={category._id}
              className="card bg-base-100 image-full w-96 shadow-xl"
            >
              <figure>
                <img src={category.categoryImage} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.categoryName}</h2>
                <p>{category.categoryDescription}</p>
                <div className="card-actions justify-end">
                  <Link to={`/categoryDetail/${category._id}`}>
                    <button className="btn btn-primary">View</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-24 my-16">
        <h2 className="text-3xl py-6">Featured Collections</h2>
        <div className="flex gap-4">
          <div>
            <img
              src="/src/assets/Hybrid-collections_bestsellers_room-large.jpg"
              alt=""
            />
            <h3>2024 Best Sellers</h3>
            <p>Discover caurator-approved collector favorite.</p>
          </div>
          <div>
            <img
              src="/src/assets/hybrid-collections_abstract_room-large.jpg"
              alt=""
            />
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
            <p>
              “At Artify, we make it our mission to help you discover and buy
              from the best emerging artists around the world. Whether you’re
              looking to discover a new artist, add a statement piece to your
              home, or commemorate an important life event, Artify is your
              portal to thousands of original works by today’s top artists.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
