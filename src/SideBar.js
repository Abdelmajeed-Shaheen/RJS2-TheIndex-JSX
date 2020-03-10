import React from "react";

const SideBar = () => {
  return (
    <div className="col-2">
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
        </section>
      </div>
    </div>
  );
};

export default SideBar;
