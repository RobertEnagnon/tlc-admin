import './levelList.css'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { levelRow } from "../../dummyData";
import { useState } from 'react';
import useFetch from '../../utils/useFetch';
import { apiUrl } from '../../utils/constants';
import axios from 'axios';

function LevelList() {
    // const [data, setData] = useState(levelRow);
    const { isLoading, setIsLoading, serverError, apiData, setApiData } = useFetch(`${apiUrl}/levels`);
    const [inputError, setInputError] = useState();

    const handleDelete = async (id) => {
        try {
            if (id) {
                const resp = await axios.delete(`${apiUrl}/levels/${id}`);
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
        setIsLoading(true);

        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get('title');
        try {
            if (title) {
                const resp = await axios.post(`${apiUrl}/levels`, { title });
                const data = await resp?.data;
                console.log(data);
                setApiData([...apiData, data])
                form.reset();
            } else {
                setInputError("Veuillez remplir tous les champs!")
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false);
            console.log(error.response.data.message);
        }
    }


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "title",
            headerName: "Niveau",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/level/" + params.row.id}>
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
            {isLoading && <span>loading...</span>}
            {!isLoading && serverError ?
                <span>Error in fetching data</span>
                : <div className="user">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Liste des Niveaux</h1>
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
                            <span className="userUpdateTitle">Ajouter</span>
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
                                            placeholder={"Débutant"}
                                            className="userUpdateInput"
                                        />
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

export default LevelList