import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Please login to view your profile.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">My Profile</h3>
            </div>

            <div className="card-body">

              <div className="text-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  width="120"
                  className="rounded-circle border"
                />
              </div>

              <table className="table table-bordered">

                <tbody>

                  <tr>
                    <th width="30%">Full Name</th>
                    <td>{user.name}</td>
                  </tr>

                  <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                  </tr>

                  <tr>
                    <th>Role</th>
                    <td>{user.role || "Candidate"}</td>
                  </tr>

                  <tr>
                    <th>Mobile</th>
                    <td>{user.mobile || "Not Available"}</td>
                  </tr>

                  <tr>
                    <th>Address</th>
                    <td>{user.address || "Not Available"}</td>
                  </tr>

                </tbody>

              </table>

              <button className="btn btn-primary me-2">
                Edit Profile
              </button>

              <button className="btn btn-success">
                Change Password
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;