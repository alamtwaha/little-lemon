import logo from  "../logo.png";

const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="little lemon logo"/>
        <ul>
            <a href="https://www.coursera.com"><li> Home</li></a>
            <a href="https://www.coursera.com"><li> About</li></a>
            <a href="https://www.coursera.com"><li> Menu</li></a>
            <a href="https://www.coursera.com"><li> Reservation</li></a>
            <a href="https://www.coursera.com"><li> Order Online</li></a>
            <a href="https://www.coursera.com"><li> Login</li></a>
        </ul>
    </nav>
  )
}

export default Nav