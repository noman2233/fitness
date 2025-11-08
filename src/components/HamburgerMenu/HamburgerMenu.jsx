import { FiX } from "react-icons/fi";
import "./hamburger.css";

const HamburgerMenu = ({ setOpenSidebar, openSidebar }) => {
  const toggleMenu = () => setOpenSidebar(!openSidebar);
 
  return (
    <div className="hamburger_container">
      <button className="ham_ham_menuBtn">
        <FiX size={28} onClick={toggleMenu} color="white" />
      </button>

      {open && (
        <div className="overlay">
          <nav className="nav">
            <ul>
              {[
                "Home",
                "About",
                "Classes",
                "Gallery",
                "Blog",
                "Contact",
               
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`${item.toLowerCase()}`}
                    
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
