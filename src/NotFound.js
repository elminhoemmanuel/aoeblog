import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>We couldn't find the page you are looking for.</p>
            <Link to='/'>Back to home</Link>
        </div>
    );
}
 
export default NotFound;