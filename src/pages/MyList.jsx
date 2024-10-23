import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);

  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('delete confirmed!')
        fetch(`http://localhost:5000/crafts/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Craft has been deleted.",
                icon: "success"
              });
              const remaining = crafts.filter(craft => craft._id !== _id);
              setCrafts(remaining);
            }
          })
      }
    });
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {crafts.map(craft =>
          <div key={craft._id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={craft.craftIamge}
                alt="Craft" />
            </figure>
            <div className="flex gap-2 w-full justify-between pr-4">
              <div>
                <h2 className="card-title">{craft.craftName}</h2>
                <p>{craft.userName}</p>
                <p>{craft.category}</p>
                <p>{craft.price}</p>
              </div>
              <div className="card-actions justify-end">
                <div className="join join-vertical space-y-4">
                  <Link to={`/craftDetail/${craft._id}`}><button className="btn join-item">View</button></Link>
                  <Link to={`/updateCraft/${craft._id}`}>
                    <button className="btn join-item">Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(craft._id)} className="btn join-item bg-red-500">X</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;