import React from "react";
import "./Footer.css";

const Footer = ({ saveCharacter, saved }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-success border-0 positioning-style"
              type="submit"
              name="action"
              onClick={saveCharacter}
            >
              {saved ? "Saved!" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
