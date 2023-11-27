
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { technologiesRows } from "../../dummyData";
import { useState } from 'react';

function Technologie() {
    const [data, setData] = useState(technologiesRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Titre",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/technologie/" + params.row.id}>
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
    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Liste des Technologies</h1>
      <Link to="/newTechnologie">
        <button className="userAddButton">Créer</button>
      </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        autoHeight ={true}
      />
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Ajouter</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Titre</label>
              <input
              name='title'
                type="text"
                placeholder={"PHP"}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Description</label>
              <textarea className="userUpdateInput" name="description" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="newUserItem">
              <label>En ligne</label>
              <select className="newUserSelect" name="online" id="online">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Technologie