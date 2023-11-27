import './widgetSm.css';
import {Visibility} from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">Nouveaux membres</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgeteSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">France</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className="widgetSmIcon"/>
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgeteSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Bénin</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className="widgetSmIcon"/>
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgeteSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Bénin</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className="widgetSmIcon"/>
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgeteSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Bénin</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className="widgetSmIcon"/>
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgeteSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Bénin</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className="widgetSmIcon"/>
            Afficher
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm