import React, { useState } from "react";

const Department = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Human Resources", head: "Priya Singh" },
    { id: 2, name: "Information Technology", head: "Rahul Sharma" },
    { id: 3, name: "Finance", head: "Amit Kumar" },
    { id: 4, name: "Marketing", head: "Neha Verma" },
  ]);

  const [department, setDepartment] = useState({
    name: "",
    head: "",
  });

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  };

  const addDepartment = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setDepartments(
        departments.map((dept) =>
          dept.id === editId
            ? { ...dept, ...department }
            : dept
        )
      );

      alert("Department Updated Successfully");
      setEditId(null);
    } else {
      const newDepartment = {
        id: Date.now(),
        ...department,
      };

      setDepartments([...departments, newDepartment]);

      alert("Department Added Successfully");
    }

    setDepartment({
      name: "",
      head: "",
    });
  };

  const editDepartment = (dept) => {
    setDepartment({
      name: dept.name,
      head: dept.head,
    });

    setEditId(dept.id);
  };

  const deleteDepartment = (id) => {
    if (window.confirm("Delete this department?")) {
      setDepartments(departments.filter((dept) => dept.id !== id));

      if (editId === id) {
        setEditId(null);
        setDepartment({
          name: "",
          head: "",
        });
      }
    }
  };

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(search.toLowerCase()) ||
      dept.head.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Department Management</h2>

      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h4>{editId ? "Update Department" : "Add Department"}</h4>
        </div>

        <div className="card-body">
          <form onSubmit={addDepartment}>
            <div className="row">
              <div className="col-md-5 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department Name"
                  name="name"
                  value={department.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-5 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department Head"
                  name="head"
                  value={department.head}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-2 mb-3">
                <button
                  className={`btn ${
                    editId ? "btn-warning" : "btn-success"
                  } w-100`}
                  type="submit"
                >
                  {editId ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Department Head</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredDepartments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td>{dept.name}</td>
              <td>{dept.head}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editDepartment(dept)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteDepartment(dept.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredDepartments.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No Departments Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Department;