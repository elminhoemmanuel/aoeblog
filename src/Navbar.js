import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>AOE blog</h1>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    backgroundColor:"#f1356d",
                    color:"white",
                    borderRadius:"6px",
                    padding:"10px"
                }}>New post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;