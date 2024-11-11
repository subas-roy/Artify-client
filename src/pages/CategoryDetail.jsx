import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryDetail = () => {
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    const loadedCrafts = async () => {
      const response = await fetch('http://localhost:5000/crafts');
      const data = await response.json();
      setCrafts(data)
    };
    loadedCrafts()
  }, [])

  const loadedCategories = useLoaderData();
  const { id } = useParams();
  const specific = loadedCategories.find(craft => craft._id === id);
  const cat_name = specific.categoryName;
  const common = crafts.filter(craft => craft.categoryName === cat_name)
  // console.log(cat_name, )
  // console.log(loadedCategories, 'common:', common)

  return (
    <div className="px-24 mx-auto">
      <h2>Category Detail</h2>
      <div>
        {
          common?.map(craft => <p>{craft.craftName}</p>)
        }
      </div>
    </div>
  );
};

export default CategoryDetail;