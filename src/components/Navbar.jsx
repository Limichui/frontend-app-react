import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to="/">INICIO</Link> |
            <Link to="/login">LOGIN</Link> |
            <Link to="/registro">REGISTRO</Link>
        </>
    )
}

export default Navbar;