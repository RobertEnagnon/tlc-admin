import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouveau utilisateur</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Prénom(s)</label>
          <input type="text" name="firstname" placeholder="Enagnon Robert" />
        </div>
        <div className="newUserItem">
          <label>Nom </label>
          <input type="text" name="lastname" placeholder="SODJINOU" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Mot de passe</label>
          <input type="password"  name="password" placeholder="Mot de passe" />
        </div>
        <div className="newUserItem">
          <label>Confirmez le mot de passe</label>
          <input type="password"  name="confirmedPassword" placeholder="Confirmer le mot de passe" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+33 123 456 78" />
        </div>
        {/* <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}
        <div className="newUserItem">
          <label>Genre</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select className="newUserSelect" name="role" id="role">
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Activez</label>
          <select className="newUserSelect" name="isActive" id="isActive">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
