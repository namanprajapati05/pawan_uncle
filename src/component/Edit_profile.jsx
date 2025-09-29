import React from "react";
import style from "./Edit_profile.module.css";

const Edit_profile = () => {
  return (
    <>
      <div className={style.nav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>

      <h1>Edit Profile</h1>

      <div className={style.main}>
        <div className={style.line}></div>
        <div className={style.inputs}>
          <div className={style.input_tag}>
            {" "}
            <span>share/ Refer Link</span> <input type="text" placeholder="" />{" "}
            <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Status</span> <button>Action</button> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Registration ID</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Spomser ID</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Name</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Father's Name</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Mobile</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Address</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Pincode</span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>ward no. </span> <input type="text" /> <br />{" "}
          </div>
          <div className={style.input_tag}>
            {" "}
            <span>Email</span> <input type="text" />{" "}
          </div>
        </div>
      </div>
      <button className={style.update}>Update Profile</button>
    </>
  );
};

export default Edit_profile;
