const Header = () => {
  return (
    <header className="header container_fluid">
      <nav className="navbar container">
        <div className="nav_list">
          <a className="logo" href="#">
            <img src="./assets/images/white-logo.svg" alt />
          </a>
          <ul className="nav_items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#service_section">Services</a>
            </li>
            <li>
              <a href="#portfolio_section">Portfolio</a>
            </li>
            <li>
              <a href="#pricing_section">Pricing</a>
            </li>
            <li>
              <a href="#team_section">Team</a>
            </li>
            <li>
              <a href="#contact_section">Contact</a>
            </li>
          </ul>
        </div>
        <a className="toggle_btn">
          <i className="fa-solid fa-grip-lines fa-2x" />
        </a>
      </nav>
    </header>
  );
};

export default Header;