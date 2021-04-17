import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";


class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <h4>Ajouter une todo</h4>
        <hr className="my-4" />
        <div className="d-flex mb-4">
          <input type="text" className="form-control mr-5"/>
          <button className="btn btn-success">Ajouter</button>
        </div>
        <hr className="my-4" />
        <div className="card">
          <div className="card-header d-flex flex-row align-items-center">
            <span className="flex-fill">Todo list</span>
            <button className="btn btn-primary mr-2">Tout</button>
            <button className="btn btn-primary mr-2">Fini</button>
            <button className="btn btn-primary">En cours</button>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex flex-row justify-content-between">
                <span> x </span>
                <span>
                  <input className="mx-3" type="checkbox" />
                  <button className="btn btn-sm btn-danger">delete</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
