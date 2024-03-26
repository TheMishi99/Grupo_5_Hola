//Importamos React, useEffect y useState
import React, { useEffect,useState } from "react";


function LastUserInDb() {
  //Inicializamos un estado lastUser mediante el hook useState para almacenar un objeto 
  const [lastUser,setLastUser] = useState({});
  //Definimos una función asíncrona getLastUser que utiliza el método fetch para hacer 
  //una solicitud a la API (/api/users) y obtener los datos sobre todos los usuarios registrados.
  const getLastUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users`
      );
      const data = await response.json();
      const response2 = await fetch(
        `http://localhost:5000/api/users/${data.users[data.users.length-1].id}`
      );
      const data2 = await response2.json();
      setLastUser(data2)
    } catch (error) {
      console.error(error);
    }
  }

  //Utilizamos el hook useEffect para llamar a la función getLastUser cuando el componente se monta por primera vez,
  useEffect(() => {
    getLastUser();
  },[])

  //Renderizamos la información del último usuario en el documento HTML utilizando la información almacenada en lastUser.
  return (
    <div className="col-lg-4 mb-4" style={{ marginTop: '1em' }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last User in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ maxWidth: 75 + "%" }}
              src={lastUser.profilePicture}
              alt={"Foto de"+lastUser.name}
            />
          </div>
          <p className="text-center" style={{fontWeight:"bold",fontSize:"25px"}}>
            {lastUser.name}
          </p>
          <p className="text-center" style={{fontSize:"20px"}}>
           {lastUser.email}
          </p>
          <p className="text-center" style={{fontSize:"20px"}}>
            {lastUser.province}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastUserInDb;
