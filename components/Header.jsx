import React from "react";
//internal import 
import { shortenAddress } from "../utils";
const Header = ({address, connect}) => {
  const menu = [
    {name: "Home",
      link: "#home"
    },
    {name: "About us",
      link: "#about "
    },
    {name: "How e dey work",
      link: "#howworks"
    },
    {name: "q&a",
      link: "#question"
    },
    {name: "Blog",
      link: "#blog"
    },
    {name: "Contact",
      link: "#contact"
    }
  ]
  return <div className="mein-menu">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
        <img src="assets/img/logo.png" alt="swap"  /></a>
        <button className="navbar-toggler" type="button" 
        data-bs-toggle = "collapse"
        data-bs-target = "#navbarNavDropdown"
         aria-controls="navbarNavDropdown"
         aria-expanded= "false"
         aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a href= "#home"
              className="nav-link"
              >Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
};

export default Header;
