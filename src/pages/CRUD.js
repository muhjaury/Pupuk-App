import React, { useState, useEffect } from "react";
import PreFooter from "./../components/PreFooter";
import Copyright from "./../components/Copyright";
import { NavigationBar } from "./../components/Navigation";
import Axios from "axios";

function CRUD() {
  const [nama, setNama] = useState("");
  const [komentar, setKomentar] = useState("");
  const [updateKomentar, setUpdateKomentar] = useState("");
  const [listKomentar, setListKomentar] = useState([]);

  const select = () => {
    Axios.get("http://localhost:3001/select").then((response) => {
      setListKomentar(response.data);
    });
  };

  useEffect(() => {
    select();
  }, [listKomentar, nama]);

  const submit = (data, e) => {
    Axios.post("http://localhost:3001/insert", {
      nama: nama,
      komentar: komentar,
    });

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setNama("");
    setKomentar("");
  };

  const update = (nama) => {
    Axios.put("http://localhost:3001/update", {
      nama: nama,
      updateKomentar: updateKomentar,
    });

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setUpdateKomentar("");
  };

  const deleteData = (nama) => {
    Axios.delete(`http://localhost:3001/delete/${nama}`);
  };

  return (
    <div>
      <NavigationBar />
      <br />
      <br />
      <br />
      <div className="section-l" style={{ padding: "0px" }}>
        <div className="image-container">
          <div className="overlay">
            <div className="text d-none d-lg-block">
              <p style={{ color: "#fff", fontSize: "50px", fontWeight: "600" }}>
                CRUD Learning
              </p>
            </div>
          </div>
          <img
            className="imgfit"
            src="assets/img/crud-head.jpg"
            alt="product-head"
          ></img>
        </div>
        <div className="container-fluid">
          <br />
          <h1>CRUD React + NodeJS + MySQL</h1>
          <hr className="gradiation" />
          <br />
          <h3>Requirements</h3>
          <div className="row">
            <div className="col-sm-12 col-md-6 justify-content-center product">
              <h5>On Client</h5>
              <ul>
                <li>Axios</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 justify-content-center product">
              <h5>On Server</h5>
              <ul>
                <li>NPM INIT</li>
                <li>Express</li>
                <li>Body-Parser</li>
                <li>MySQL</li>
                <li>Nodemon</li>
                <li>Cors</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 justify-content-center product">
              <h5>Steps on Client</h5>
              <ol>
                <li>None</li>
              </ol>
            </div>
            <div className="col-sm-12 col-md-6 justify-content-center product">
              <h5>Steps on Server</h5>
              <ol>
                <li>init npm</li>
                <li>npm install express body-parser-mysql nodemon</li>
                <li>npm run devStart</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1>Application CRUD</h1>
              <h3>Run App</h3>
              <div className="row">
                <div className="col-sm-12 justify-content-center product">
                  <ol>
                    <li>Run Database</li>
                    <li>Run Server</li>
                    <li>Run Client</li>
                  </ol>
                </div>
              </div>
              <div style={{ margin: "auto", width: "300px" }}>
                <label>Nama</label>
                <input
                  type="text"
                  name="nama"
                  className="form-control"
                  style={{ width: "300px" }}
                  onChange={(nama) => {
                    setNama(nama.target.value);
                  }}
                />
                <label>Komentar</label>
                <input
                  type="text"
                  name="komentar"
                  className="form-control"
                  style={{ width: "300px" }}
                  onChange={(komentar) => {
                    setKomentar(komentar.target.value);
                  }}
                />
                <br />
                <div className="text-center">
                  <button className="btn btn-outline-success" onClick={submit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {listKomentar.map((val) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <div
                    className="card"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <img
                      className="imgfit"
                      src="assets/img/img3.jpg"
                      alt="img1"
                      style={{ height: "400px" }}
                    ></img>
                    <div className="card-text text-center">
                      <h1>{val.nama}</h1>
                      <h3>{val.komentar}</h3>
                      <input
                        type="text"
                        name="updateKomentar"
                        className="form-control"
                        onChange={(e) => {
                          setUpdateKomentar(e.target.value);
                        }}
                        style={{ margin: "auto" }}
                        placeholder="Update Komentar pada Data"
                      />
                      <button
                        onClick={() => {
                          deleteData(val.nama);
                        }}
                        className="btn btn-outline-success"
                        style={{ margin: "10px" }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          update(val.nama);
                        }}
                        style={{ margin: "10px" }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        </div>
      </div>
      <div className="prefooter">
        <PreFooter />
      </div>
      <div className="footer">
        <Copyright />
      </div>
    </div>
  );
}

export default CRUD;
