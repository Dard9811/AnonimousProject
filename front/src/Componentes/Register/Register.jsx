import React from "react";
import {Link} from "react-router-dom";
import "./Register.css";

const Register = () => {
  return(
    <div className="pt-5">
      <div className="row">
        <div className="col-4 text-center mx-auto">
           <h1 className="text-info">HosVital Meet</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col-4 text-center mx-auto">
          <Link to="/home">
            <button className="btn text-center btn-info btn-circle btn-xl">
              Registrar paciente nuevo
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register;