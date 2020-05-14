import React from "react";

export function Section ({ saveCharacter, title, children }) {
  return (
    <div className="container">
      <div className="row">
        <form
          className="col"
          onSubmit={() => {
            saveCharacter();
          }}
        >
          <h3>{title}</h3>
          <div className="row">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default Section;
