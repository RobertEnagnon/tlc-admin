import { useState } from "react";
import { apiUrl } from "../../utils/constants";
import useFetch from "../../utils/useFetch";
import "./newTutorial.css";
import axios from "axios";

export default function NewTutorial() {
  const technologies = useFetch(`${apiUrl}/technologies`);
  const levels = useFetch(`${apiUrl}/levels`);

  const [isLoading, setIsLoading] = useState(false);
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [technologieIds, setTechnologieIds] = useState([]);
  const [levelId, setLevelId] = useState('');
  const [duration, setDuration] = useState('');
  const [content, setContent] = useState('');
  const [online, setOnline] = useState(0);

  const [tutorial, setTutorial] = useState(null);

  const [inputError, setInputError] = useState();


  const handleCreateTutorial = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setCreatedSuccess(false)
    try {
      if (title && video && technologieIds.length > 0 && levelId && duration) {
        const resp = await axios.post(`${apiUrl}/tutorials`, {
          title,
          video,
          technologieIds,
          levelId,
          duration,
          content,
          online,
          userId: 3
        });
        const data = await resp?.data;
        console.log(data);
        setTutorial(data);
        setIsLoading(false);
        setCreatedSuccess(true)
      } else {
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
    <div className="newProduct">
      <h1 className="addProductTitle">Nouvel Tutoriel</h1>
      {inputError && <p className="error">
        {inputError}
      </p>}
      <form className="addProductForm">
        <div className="formGroupOnline">
          <div className="addProductItem">
            <label>Titre</label>
            <input type="text" value={title} name="title" onChange={(event) => setTitle(event.target.value)} placeholder="Apprendre du PHP" />
          </div>
          <div className="addProductItem">
            <label>Video</label>
            <input type="text" value={video} name="video" onChange={(event) => setVideo(event.target.value)} placeholder="https://youtu.be/bOOs_YvxOnE?si=dQPe1X8sa1WEhy7V" />
          </div>
          <div className="addProductItem">
            <label>Technologies</label>
            <select name="technologieIds" onChange={(event) => setTechnologieIds(Array.from(event.target.selectedOptions, (option) => option.value))} multiple>
              {technologies?.apiData?.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </div>

          <div className="addProductItem">
            <label>Niveau</label>
            <select name="levelId" value={levelId} onChange={(event) => setLevelId(event.target.value)} id="levelId">
              <option>--Selectionnez un niveau--</option>
              {levels?.apiData?.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </div>
          <div className="addProductItem">
            <label>Durée</label>
            <input value={duration} name="duration" onChange={(event) => setDuration(event.target.value)} type="text" placeholder="1h30" />
          </div>
        </div>
        <div className="formGroupOnline">
          <div className="addProductItem">
            <label htmlFor="">Contenu</label>
            <textarea value={content} name="content" onChange={(event) => setContent(event.target.value)} id="" cols="30" rows="10"></textarea>
          </div>
          <div className="addProductItem">
            <label>En ligne</label>
            <select name="online" onChange={(event) => setOnline(event.target.value)} id="online">
              <option value={0}>Non</option>
              <option value={1}>Oui</option>
            </select>
          </div>
          {!isLoading ?
            <button onClick={handleCreateTutorial} disabled={createdSuccess && !isLoading} className="addProductButton">Ajouter</button>
            :
            <button disabled={true} className="addProductButton">Chargement...</button>
          }
        </div>
        {/* {createdSuccess &&
          <div className="formGroupOnline">
            <h3>Ajouter une image Pour la bannière du tutoriel</h3>
            <div className="addProductItem">
              <label>Images</label>
              <input type="file" name="images" id="image" />
            </div>
            <button className="addProductButton">Ajouter</button>
          </div>
        } */}

      </form>
    </div>
  );
}
