import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setFormerror] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });
  const navigate = useNavigate();
  const handleError = () => {
    let isError = false;

    console.log(formdata);

    if (formdata.name.trim().length === 0) {
      setFormerror((prev) => {
        return { ...prev, name: "Name is required" };
      });
      isError = true; 
    } else {
      setFormerror((prev) => {
        return { ...prev, name: null };
      });
    }
    if (formdata.username.trim().length === 0) {
      setFormerror((prev) => {
        return { ...prev, username: "username is required" };
      });
      isError = true;
    } else {
      setFormerror((prev) => {
        return { ...prev, username: null };
      });
    }
    if (formdata.email.trim().length === 0) {
      setFormerror((prev) => {
        return { ...prev, email: "Email is required" };
      });
      isError = true;
    } else {
      setFormerror((prev) => {
        return { ...prev, email: null };
      });
    }
    if (formdata.mobile.trim().length === 0) {
      setFormerror((prev) => {
        return { ...prev, mobile: "Mobile is required" };
      });
      isError = true;
    } else {
      setFormerror((prev) => {
        return { ...prev, mobile: null };
      });
    }
    if (formdata.checkbox === false) {
      setFormerror((prev) => {
        return { ...prev, checkbox: "please check the box" };
      });
      isError = true;
    } else {
      setFormerror((prev) => {
        return { ...prev, checkbox: null };
      });
    }
    if (isError) {
      return;
    } else {
     window.localStorage.setItem("userInfo", JSON.stringify(formdata));
      
      navigate("/movies");
    }
  };
  
  return (
    <>
      <div className="full-container">
        <div className="leftside-container">
          <img src="public/image 13.png" className="singimg" />
          <div className="textonimg">Create yor own superapp</div>
        </div>
        <div className="rightside-container">
          <img src="Super app.png" className="superapp" />
          <br />
          <div className="account">Create your new account</div>
          <div className="input-box">
            <input
              type="text"
              value={formdata.name}
              onChange={(e) => {
                setFormdata((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
              placeholder="Name"
              className="input"
            />
            <div id = "errors">{errors.name}</div>
            <br />
            <input
              type="text"
              value={formdata.username}
              onChange={(e) => {
                setFormdata((prev) => {
                  return { ...prev, username: e.target.value };
                });
              }}
              placeholder="Username"
              className="input"
            />
            <div id = "errors">{errors.username}</div>
            <br />

            <input
              type="text"
              value={formdata.email}
              onChange={(e) => {
                setFormdata((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              placeholder="Email"
              className="input"
            />
            <div id = "errors">{errors.email}</div>
            <br />

            <input
              type="text"
              value={formdata.mobile}
              onChange={(e) => {
                setFormdata((prev) => {
                  return { ...prev, mobile: e.target.value };
                });
              }}
              placeholder="Mobile no"
              className="input"
            />
            <div id = "errors">{errors.mobile}</div>
            <br />
          </div>
          <label htmlFor="checkbox">
            {" "}
            Share my registration data with Superapp{" "}
          </label>
          <input
            type="checkbox"
            checked={formdata.checkbox}
            id="checkbox"
            className="checkbox"
          
            onChange= {(e) => {
              setFormdata((prev) => {
                return { ...prev, checkbox: e.target.checked };
              });
            }}
          />

          <div id = "errors">{errors.checkbox}</div>
          <br />
          <button type="submit" className="signup" onClick={handleError}>
            Sign up
          </button>
          <br />
          <div className="text1">
            By clicking on Sign up. you agree to Superapp
            <h5 className="text3">Terms and Conditions of Use</h5>
            <br />
            <div className="text2">
              To learn more about how Superapp collects, uses, shares and <br />
              protects your personal data please head Superapp
              <h5 className="text4">Privacy Policy</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
