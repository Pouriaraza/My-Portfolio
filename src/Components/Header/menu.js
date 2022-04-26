import React from "react";

const Menu = () => {
  return (
      <div className="Menu">

    <nav>
      <button className="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
        </svg>
      </button>
      <ul>
        <li>
          <a href="#Profile">Profile</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Menu;
