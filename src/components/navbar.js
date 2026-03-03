const Navbar = () => {
  return (
    <>
      <div className="title">
        <p>RXFIFRAIS.</p>
      </div>
      <ul>
        <li className="cta">
          <a className="hover-underline-animation" href="#App">
            HOME
          </a>
        </li>
        <li className="cta">
          <a className="hover-underline-animation" href="#Projects">
            PROJECTS
          </a>
        </li>
        <li className="cta">
          <a className="hover-underline-animation" href="#footer">
            CONTACT
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
