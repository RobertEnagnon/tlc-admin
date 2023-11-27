import './sidebar.css';
import {ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline} from '@mui/icons-material'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Tableau de board
          </h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" /> Accueil
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytique
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Abonnements
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Ventes de formations
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Menu rapide
          </h3>
          <ul className="sidebarList">
            <Link to="/users" className='link'>
              <li className="sidebarListItem ">
                <PermIdentity className="sidebarIcon" /> Utilisateurs
              </li>
            </Link>
            <Link to="/technologies" className='link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Technologies
              </li>
            </Link>
            <Link to="/levels" className='link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Niveaux de connaissance
              </li>
            </Link>
            <Link to="/tutorials" className='link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Tutoriels
              </li>
            </Link>
            <Link to="/newimage" className='link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Images
              </li>
            </Link>
            <Link to="/tutorials" className='link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Formations
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Notifications
          </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" /> Feedbacks
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
          Personnel
          </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" /> Gérer
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytique
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" /> Rapports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar