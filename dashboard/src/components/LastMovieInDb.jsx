import React, { useEffect,useState } from "react";

function LastUserInDb() {
  const [lastUser,setLastUser] = useState({});
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

  useEffect(() => {
    getLastUser();
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last Product in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={lastUser.profilePicture}
              alt={"Foto de"+lastUser.name}
            />
          </div>
          <p>
            {lastUser.name}
          </p>
          <p>
           {lastUser.email}
          </p>
          <p>
            {lastUser.province}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastUserInDb;
