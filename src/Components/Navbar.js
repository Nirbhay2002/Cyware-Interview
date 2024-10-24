import reactLogo from './react-logo2.png'

const Navbar = () => {

    const title1 = 'React';
    const title2 = 'Facts';
    return ( 
        <div className="nav">

            <img src = {reactLogo} class="nav-img"></img>

            <h1>{title1}{title2}</h1>
            <ul className="list-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
     );
}
 
export default Navbar;