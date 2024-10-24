import Swal from "sweetalert2";

const AddCraft = () => {
  const handleAddCraft = (event) => {
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
    const newCraft = { craftIamge, craftName, category, price, rating, customization, processingTime, stockStatus, email, userName, shortDescription }
    console.log(newCraft);
    // send data to the server
    fetch('http://localhost:5000/craft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCraft)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div className="mx-auto px-24">
      <h2 className="text-3xl">Add New Craft</h2>
      <form onSubmit={handleAddCraft}>
        <div className="flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Craft Image</span>
            </div>
            <input type="text" name="craftIamge" placeholder="Image Url" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Craft Name</span>
            </div>
            <input type="text" name="craftName" placeholder="Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input type="text" name="rating" placeholder="1 - 5" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Customization</span>
            </div>
            <input type="text" name="customization" placeholder="example- yes, no" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Processing Time</span>
            </div>
            <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Stock Status</span>
            </div>
            <input type="text" name="stockStatus" placeholder="example- In stock, Made to Order" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Short Description</span>
            </div>
            <textarea name="shortDescription" placeholder="Short Description" className="textarea textarea-bordered textarea-sm w-full"></textarea>
          </label>
        </div>
        <div className="mt-4">
          <input type="submit" className="btn btn-outline" value="Add Craft" />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;