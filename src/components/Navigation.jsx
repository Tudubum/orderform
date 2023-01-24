import { NavLink } from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
        <h2>NAVIGATION PAGE</h2>
        <nav className="navBar">
          <ul>
            <li><NavLink 
            to="/" 
            style={({ isActive}) => {
              return {color: isActive ? 'red' : 'black'};}}
              >Home</NavLink></li>
            <li><NavLink to="/add" 
            style={({ isActive}) => {
              return {color: isActive ? 'red' : 'black'};}}
            >Add</NavLink></li>
            <li><NavLink to="/edit"
            style={({ isActive}) => {
              return {color: isActive ? 'red' : 'black'};}}
            >Edit</NavLink></li>
          </ul>
        </nav>
        </>
     );
}
 
export default Navigation;