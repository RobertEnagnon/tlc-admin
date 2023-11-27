import React, { useState } from 'react'
import useFetch from '../../utils/useFetch';
import { apiUrl } from '../../utils/constants';
import axios from 'axios';

function NewImage() {
  const tutorials = useFetch(`${apiUrl}/tutorials`);

  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState();

  const handleImageTutorial = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    console.log(formData);

    try {
      if(formData.get('title') && formData.get('image') && formData.get('tutorialId')){
        const resp = await axios.post(`${apiUrl}/images/upload`, formData);
        const data = await resp?.data;
        console.log(data);
        setIsLoading(false);
      }else{
        setInputError("Veuillez remplir tous les champs!")
        setIsLoading(false);
      }
    } catch (error) {
      // setServerError(error);
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
        <h3>Ajouter une image Pour la bannière du tutoriel</h3>
        {inputError &&<p className="error">
          {inputError}
        </p>}
        <form onSubmit={handleImageTutorial} encType='multipart/form-data'>
            <div className="addProductItem">
              <label>Images</label>
              <input type="file" name="image" id="image" />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input type="text" name="title" id="title" />
            </div>
            <div className="addProductItem">
            <label>Tutoriel</label>
            <select name="tutorialId"  id="tutorialId">
              <option>--Selectionnez un tutoriel--</option>
              {tutorials?.apiData?.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            </div>
            {!isLoading ? 
            <button className="addProductButton">Ajouter</button>
            :
            <button disabled={true} className="addProductButton">Chargement...</button>
          }
        </form>
    </div>
  )
}

export default NewImage