import Swal from "sweetalert2";

const AddCategory = () => {
  const handleAddCategory = (event) => {
    event.preventDefault();
    const form = event.target;
    const categoryImage = form.categoryImage.value;
    const categoryName = form.categoryName.value;
    const categoryDescription = form.categoryDescription.value;
    const newCategory = { categoryImage, categoryName, categoryDescription }
    console.log(newCategory);
    // send data to the server
    fetch('http://localhost:5000/categories', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCategory)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Category added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div className="mx-auto px-24">
      <h2 className="text-3xl">Add New Category</h2>
      <form onSubmit={handleAddCategory}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Category Name</span>
          </div>
          <input type="text" name="categoryName" placeholder="Name" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Category Image</span>
          </div>
          <input type="text" name="categoryImage" placeholder="Image Url" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Category Description</span>
          </div>
          <textarea name="categoryDescription" placeholder="Category Description" className="textarea textarea-bordered textarea-sm w-full"></textarea>
        </label>
        <div className="mt-4">
          <input type="submit" className="btn btn-outline" value="Add Category" />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;