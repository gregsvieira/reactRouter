import { NavLink  } from 'react-router-dom';
import './MenuLink.css';

const MenuLink = ({ children, to }) => {


  return (
    <NavLink className={({ isActive }) => `link 
    ${isActive ? 'linkHighlighted' : ''
    }` } to={to}
    end
    >
          {children}
    </NavLink>
  )
}

export default MenuLink;