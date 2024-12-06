import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const [success, setSuccess] = useState("");
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User logged in successfully!")
          .then((result) => result.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = (e) => {
    e.preventDefault();
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-base-200 py-2">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <div className="flex">
                <p>
                  <button onClick={handleGoogleSignIn} className="btn">
                    Google
                  </button>
                </p>
                <p>
                  <button onClick={handleGithubSignIn} className="btn">
                    GitHub
                  </button>
                </p>
              </div>
              <p className="text-green-700">{success && success}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
