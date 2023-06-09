import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const navigate = useNavigate("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, email, phone, active };

    fetch("https://crud-operations-7sf7.onrender.com/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ margin: "16px" }}>Employee Create</h2>
                <div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>ID</label>
                          <input
                            value={id}
                            disabled="disabled"
                            className="form-control"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            value={name}
                            onChange={(e) => namechange(e.target.value)}
                            className="form-control"
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            value={email}
                            onChange={(e) => emailchange(e.target.value)}
                            className="form-control"
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            value={phone}
                            onChange={(e) => phonechange(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-check">
                          <input
                            checked={active}
                            onChange={(e) => activechange(e.target.checked)}
                            type="checkbox"
                            className="form-check-input"
                          ></input>
                          <label className="form-check-label mb-3">
                            Is Active
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button
                            className="btn btn-success me-3"
                            type="submit"
                          >
                            Save
                          </button>
                          <Link to="/" className="btn btn-danger">
                            Back
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
