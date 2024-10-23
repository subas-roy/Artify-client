import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const crafts = useLoaderData()
  const { _id, craftIamge, craftName, category, price, rating, customization, processingTime, stockStatus, email, userName, shortDescription } = crafts;

  const handleUpdateCraft = event => {
    event.preventDefault();
    const form = event.target;
    const craftIamge = form.craftIamge.value;
    const craftName = form.craftName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const shortDescription = form.shortDescription.value;
    const updatedCraft = { craftIamge, craftName, category, price, rating, customization, processingTime, stockStatus, email, userName, shortDescription };
    console.log(updatedCraft);

    // send data to the server
    fetch(`http://localhost:5000/crafts/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCraft)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }
  return (
    <div>
      <h2 className="text-3xl">Update {craftName}</h2>
      <form onSubmit={handleUpdateCraft}>
        <div className="flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Craft Image</span>
            </div>
            <input type="text" name="craftIamge" defaultValue={craftIamge} placeholder="Image Url" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Craft Name</span>
            </div>
            <input type="text" name="craftName" defaultValue={craftName} placeholder="Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input type="text" name="rating" defaultValue={rating} placeholder="1 - 5" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Customization</span>
            </div>
            <input type="text" name="customization" defaultValue={customization} placeholder="example- yes, no" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Processing Time</span>
            </div>
            <input type="text" name="processingTime" defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Stock Status</span>
            </div>
            <input type="text" name="stockStatus" defaultValue={stockStatus} placeholder="example- In stock, Made to Order" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input type="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input type="text" name="userName" defaultValue={userName} placeholder="User Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Short Description</span>
            </div>
            <textarea name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" className="textarea textarea-bordered textarea-sm w-full"></textarea>
          </label>
        </div>
        <div className="mt-4">
          <input type="submit" className="btn btn-outline" value="Update Craft" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCraft;