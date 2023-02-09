import React, { Suspense, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../../components/Loading";
import Modal from "../../../components/Modal";
import { Form, Input } from "../../../components/Form";
import { AuthContext } from "../../../context/auth";

import imageProfileBanner from "../../../assets/images/image05.jpg";
import "./Profile.scss";
import * as Constants from "../../../constants";

const AdminInfoProfile = React.lazy(() =>
  import("../../../components/AdminInfo/AdminInfoProfile")
);

function Profile() {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    _id: "",
  });
  const { user, logout, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUserData({
      fullName: user.fullName,
      email: user.email,
      _id: user._id,
    });
  }, [user]);

  const deleteProfile = (id) => {
    fetch(Constants.URL_USER_BASE + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        logout();
        navigate("/");
      });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    fetch(Constants.URL_USER_BASE + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: userData.fullName,
        email: userData.email,
        _id: id
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateUser(userData);
        setModal(false);
      });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <h1 className="dashboard-title">Profile</h1>
      <div
        className="profile-banner"
        style={{ backgroundImage: `url('${imageProfileBanner}')` }}
      >
        <Suspense fallback={<Loading />}>
          <AdminInfoProfile user={user} />
        </Suspense>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={openModal}>
          Update
        </button>
        <button
          type="button"
          className="btn btn-red"
          onClick={() => deleteProfile(user._id)}
        >
          Delete
        </button>
      </div>
      {modal ? (
        <Modal closeModal={closeModal}>
          <div className="profile-form">
            <Form handleSubmit={(e) => handleSubmit(e, user._id)}>
              <Input
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                name="fullName"
                value={userData.fullName}
                required
              />
              <Input
                onChange={handleChange}
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                required
              />
              <button type="submit" className="btn-second">
                Send
              </button>
            </Form>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default Profile;
