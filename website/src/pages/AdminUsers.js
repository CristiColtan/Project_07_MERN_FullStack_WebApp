import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/AdminUsers.css";

export default function AdminUsers() {
  const [adminUsers, setAdminUsers] = useState([]);

  const handleShowAdminUsers = async () => {
    try {
      const res = await fetch("http://localhost:8081/backend/admin/get/users");
      const data = await res.json();
      setAdminUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowAdminUsers();
  }, []);

  const handleDeleteAdminUser = async (userID) => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/admin/delete-user/${userID}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log(data.message);

      setAdminUsers((prev) => prev.filter((user) => user._id !== userID));
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(adminUsers);

  return (
    <div className="my-listings-main">
      <div>
        <h3>Admin - Users</h3>
        <br></br>
        <br></br>
        <div className="container-list">
          {adminUsers &&
            adminUsers.length > 0 &&
            adminUsers.map((user) => (
              <div
                key={user._id}
                className="card my-bg-light-subtle mt-4 my-card"
              >
                <img
                  src={user.avatar}
                  className="card-img-top my-card-img"
                  alt="..."
                />
                <div className="card-body my-card-body">
                  <div className="my-text-section">
                    <h5 className="my-card-title card-title">
                      {user.username}
                    </h5>

                    <p className="card-text">{user.email}</p>
                  </div>
                  <div className="my-cta-section">
                    <Button
                      onClick={() => handleDeleteAdminUser(user._id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
