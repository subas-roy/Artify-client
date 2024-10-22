import { Link, useLoaderData } from "react-router-dom";

const All = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <h2>All Crafts: {crafts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              crafts.map((craft, index) => <tr key={craft._id}>
                <th>{index + 1}</th>
                <td>{craft.craftName}</td>
                <td>{craft.category}</td>
                <td>{craft.price}</td>
                <td><Link className="link">View</Link></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All;