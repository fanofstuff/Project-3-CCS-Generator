import React from "react";

export function Section ({ saveCharacter, title, children }) {
  return (
    <div className="container">
      <div className="row">
        <form
          className="col"
        >
          <h3>{title} <button className="btn btn-primary positioning-style" onClick={saveCharacter}>Save</button></h3>
          <div className="row">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default Section;
