import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetails = (id) => {
    navigate("employee/detail/" + id);
  };

  const LoadEdit = (id) => {
    navigate("employee/edit/" + id);
  };

  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("https://crud-operations-7sf7.onrender.com/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("https://crud-operations-7sf7.onrender.com/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="pt-4"> Employee Listing </h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success a-link">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td> ID </td>
                <td> Name </td>
                <td> Email </td>
                <td> Phone </td>
                <td> Action </td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success a-table"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          RemoveFunction(item.id);
                        }}
                        className="btn btn-danger a-table"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-primary a-table"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
