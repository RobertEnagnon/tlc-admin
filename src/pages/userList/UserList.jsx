import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../utils/useFetch";
import { apiUrl, onlineStyle } from "../../utils/constants";



export default function UserList() {
  // const [data, setData] = useState(userRows);

  const { isLoading, apiData, setApiData, serverError } = useFetch(`${apiUrl}/users`);

  console.log(apiData);

  const handleDelete = (id) => {
    setApiData(apiData?.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Utilisateur",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={`${apiUrl}/${params.row.photo?.src}`} alt="" />
            {params.row.firstname + params.row.lastname}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isActive",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
         <span style={onlineStyle(params.row.isActive)}> {params.row.isActive ? "Activé": "Desactivé"}</span>
        );
      }
    },
    {
      field: "role",
      headerName: "Role",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ?
        <span>Error in fetching data </span>
        : <div className="userList">
          <div className="userTitleContainer">
            <h1 className="userTitle">Liste des utilisateurs</h1>
            <Link to="/newUser">
              <button className="userAddButton">Créer</button>
            </Link>
          </div>
          {apiData && <DataGrid
            rows={apiData}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            autoHeight={true}
          />}
        </div>}
    </>
  );
}
