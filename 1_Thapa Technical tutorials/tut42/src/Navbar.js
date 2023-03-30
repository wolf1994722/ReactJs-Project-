import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/about">About Us </Link>
            <Link to="/contact">Contact US </Link>
            <Link to="/contact/vishal">Name </Link>
        </div>
    );
};

export default Navbar