import "./tutorialList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { apiUrl, onlineStyle } from "../../utils/constants";
import useFetch from "../../utils/useFetch";
import axios from "axios";

export default function TutorialList() {
  // const [data, setData] = useState(productRows);

  const { isLoading, apiData, setApiData, serverError } = useFetch(`${apiUrl}/tutorials`);

  const handleDelete = async (id) => {
    try {
        if (id) {
            const resp = await axios.delete(`${apiUrl}/tutorials/${id}`);
            const data = await resp?.data;
            setApiData(apiData.filter((item) => item.id !== id));
            console.log(data);
        }
    } catch (error) {
        console.log(error.response.data.message);
    }

};


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "tutorial",
      headerName: "Tutoriel",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={`${apiUrl}/${params.row.images[0]?.src}`} alt="tutoriel" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "level", headerName: "Niveau", width: 200, renderCell: (params) => <span>{params.row.level?.title}</span> },
    {
      field: "technologies",
      headerName: "Technologies",
      width: 120,
      renderCell: (params) => {
        return (
          params.row.technologies?.map(techno => <span style={{textDecoration: 'underline', color:'blueviolet'}}> {techno.title+' -- '} </span>)
        );
      }
    },
    {
      field: "online",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <span style={onlineStyle(params.row.online)}> {params.row.online ? "en ligne" : "hors ligne"}</span>
        );
      }
    },
    {
      field: "duration",
      headerName: "Durée",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/tutorial/" + params.row.id}>
              <button className="productListEdit">Modifier</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
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
        :
        <div className="productList">
          <div className="productTitleContainer">
            <h1 className="productTitle">Liste des Tutoriels</h1>
            <Link to="/newtutorial">
              <button className="productAddButton">Créer</button>
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
        </div>
      }
    </>
  );
}
