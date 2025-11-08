// import React, { useEffect, useState } from "react";
// import "../css/bootstrap.min.css";
// import "../css/font-awesome.min.css";
// import "../css/magnific-popup.css";
// import "../css/owl.carousel.min.css";
// import "../css/slicknav.min.css";
// import "../css/style.css";
// import { Link } from "react-router-dom";
// const Navbar = () => {

//   return (
//     <header class="header-section">
//       <div
//         class="container"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div class="logo">
//           <a href="/">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220620/original/pngtree-orange-gym-logo-design-templete-png-png-image_8128901.png"
//               alt=""
//               width={90}
//               height={90}
//             />
//           </a>
//         </div>
//         <div class="nav-menu">
//           <nav class="mainmenu mobile-menu">
//             <ul>
//               <li class="active">
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/classes">Classes</Link>
//               </li>
//               <li>
//                 <Link to="/blog">Blog</Link>
//               </li>
//               <li>
//                 <Link to="/gallery">Gallery</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contacts</Link>
//               </li>
//             </ul>
//           </nav>
//           {/* <a href="#" class="primary-btn signup-btn">
//             Sign Up Today
//           </a> */}
//         </div>
//         <div id="mobile-menu-wrap"></div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/magnific-popup.css";
import "../css/owl.carousel.min.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { BsMenuButtonFill } from "react-icons/bs";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize(); // Run immediately on first render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header class="header-section">
        <div
          class="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div class="logo">
            <a href="/">
              <img
                src="https://png.pngtree.com/png-clipart/20220620/original/pngtree-orange-gym-logo-design-templete-png-png-image_8128901.png"
                alt=""
                width={90}
                height={90}
              />
            </a>
          </div>
          <div class="nav-menu">
            <nav class="mainmenu mobile-menu">
              <ul>
                <li class="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/classes">Classes</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </nav>
            {/* <a href="#" class="primary-btn signup-btn">
            Sign Up Today
          </a> */}
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
        {openSidebar && (
          <HamburgerMenu
            setOpenSidebar={setOpenSidebar}
            openSidebar={openSidebar}
          />
        )}

        {isOpen && (
          <div
            style={{
              width: "100vw",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              margin: "20px",
              position: "absolute",
              top: "40px",
              right: "5px",
            }}
          >
            <BsMenuButtonFill
              className="hamIcon_icon"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
