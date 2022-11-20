import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((i) => ({
      ...i,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Log into your account</p>
      </section>

      <section className="form">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="enter your email"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="enter your password"
              onChange={(e) => onChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export { Login };
