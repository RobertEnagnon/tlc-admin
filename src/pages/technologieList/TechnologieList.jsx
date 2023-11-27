import './technologieList.css'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { useState } from 'react';
import useFetch from '../../utils/useFetch';
import { apiUrl, onlineStyle } from '../../utils/constants';
import axios from 'axios';

function TechnologieList() {
    // const [data, setData] = useState(technologiesRows);
    const { isLoading, setIsLoading, apiData, setApiData, serverError } = useFetch(`${apiUrl}/technologies`)
    const [inputError, setInputError] = useState();

    const handleDelete = async (id) => {
        try {
          if (id) {
            const resp = await axios.delete(`${apiUrl}/technologies/${id}`);
            const data = await resp?.data;
            setApiData(apiData.filter((item) => item.id !== id));
            console.log(data);
          }
        } catch (error) {
          console.log(error.response.data.message);
        }
    
      };
      
    const handleAdd = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const online = formData.get('online');

      
        try {
            if (title && description) {
                const resp = await axios.post(`${apiUrl}/technologies`, { title, description, online });
                const data = await resp?.data;
                console.log(data);
                setApiData([...apiData, data])
                form.reset();
            } else {
                setInputError("Veuillez remplir tous les champs!")
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error.response.data.message);
        }
    }
    

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "title",
            headerName: "Titre",
            width: 200,
        },
        {
            field: "online",
            headerName: "Status",
            width: 120,
            renderCell: (params) => {
                return (
                    <span style={onlineStyle(params.row.online)}>
                        {params.row.online ? "En ligne" : "Hors ligne"}
                    </span>
                );
            }
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
        <>
            {isLoading && <span>Loading...</span>}

            {!isLoading && serverError ?
                <span>Error in fetching data</span>
                : <div className="user">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Liste des Technologies</h1>
                        {/* <Link >
                            <button className="userAddButton">Créer</button>
                        </Link> */}
                    </div>
                    <div className="userContainer">
                        <div className="userShow ">
                            {apiData && <DataGrid
                                rows={apiData}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={8}
                                checkboxSelection
                                autoHeight={true}
                            />}
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Ajouter une Nouvelle</span>
                            {inputError && <p className="error">
                                {inputError}
                            </p>}
                            <form onSubmit={handleAdd} className="userUpdateForm">
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
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    </div>
                                    <button className="userAddButton" style={{ marginTop: 20 }}>Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default TechnologieList