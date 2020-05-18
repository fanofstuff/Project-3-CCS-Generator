import React from "react";

export function Section({ title, children }) {
  return (
    <div className="container">
      <div className="row">
        <form className="col">
          <h3 className="border-bottom border-top border-dark pb-2 mb-3">
            {title}
          </h3>
          <div className="row">{children}</div>
        </form>
      </div>
    </div>
  );
}

export default Section;
