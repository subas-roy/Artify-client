import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    // reset error
    setRegisterError("");
    setSuccess("");

    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least one uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password should have at least one lowercase character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // user has been created
        setSuccess("User created successfully");

        const user = { name, email, photo, password };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User registered successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="bg-base-200 py-2">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              {registerError && <p className="text-red-700">{registerError}</p>}
              {success && <p className="text-green-700">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
