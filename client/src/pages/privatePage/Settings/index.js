import React, { Suspense, useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import Loading from "../../../components/Loading";

import * as Constants from "../../../constants";
import "./Profile.scss";
import { ReactComponent as Circle } from "../../../assets/icons/circle.svg";
import { URL_USER_BASE } from "../../../constants";

function Settings() {
  const [users, setUsers] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);

  useEffect(() => {
    fetch(Constants.URL_LIST)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [updatePage]);

  const deleteUser = (id) => {
    fetch(Constants.URL_USER_BASE + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setUpdatePage(!updatePage));
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "red",
            padding: "0",
            cursor: "pointer",
          }}
          onClick={(e) => deleteUser(row._id)}
        >
          Delete
        </button>
      ),
      width: "100px",
    },
  ];

  return (
    <>
      <h1 className="dashboard-title">Settings</h1>
      <h2 className="dashboard-subtitle">Users</h2>
      <Suspense fallback={<Loading />}>
        <DataTable columns={columns} data={users} />
      </Suspense>
    </>
  );
}

export default Settings;
