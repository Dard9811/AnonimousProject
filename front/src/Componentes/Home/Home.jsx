import React, {useState} from "react";
import {Link} from "react-router-dom";

const Home = (props) => {
  const [idPaciente] = useState(Math.floor(Math.random()*999999));

  return(
    <div className="pt-5">
      <div className="row">
        <div className="col-4 text-center mx-auto">
           <h1 className="text-info">HosVital Meet</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="row">
            <h4>Id Paciente</h4>
          </div>
          <div className="row">
            <h2>#{idPaciente}</h2>
          </div>          
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
              Llamar a familiar
            </button>
          </Link>
        </div>
        <div className="col-4 text-center mx-auto">
          <Link to="/">
            <button className="btn text-center btn-info btn-circle btn-xl">
              Dar de Alta
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;