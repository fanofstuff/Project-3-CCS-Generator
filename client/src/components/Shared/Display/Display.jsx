import React from "react";
import Modal from "react-bootstrap/Modal";
import ListInput from "../ListInput/ListInput";
import CharacterInput from "../CharacterInput/CharacterInput";
import "./Display.css";

const Display = ({
  onTextChange,
  deleteInputRow,
  handleEvent,
  title,
  titleValue,
  titleName,
  saveCharacter,
  array,
  section,
  name,
  label,
  width,
  tracker,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const saveAndHideModal = (event) => {
    saveCharacter(event);
    hideModal();
  };

  return (
    <>
      <div className={`col-md-${width}`}>
        <button
          className="btn btn-primary display-style"
          type="button"
          data-toggle="modal"
          onClick={showModal}
        >
          {title + titleValue}
        </button>
        <Modal show={isOpen} onHide={hideModal} size="lg" animation={false}>
          <Modal.Header>
            {tracker ? (
              <CharacterInput
                onTextChange={handleEvent}
                value={titleValue}
                label={title}
                name={titleName}
                width={12}
              />
            ) : (
              <Modal.Title>{title}</Modal.Title>
            )}
          </Modal.Header>
          <Modal.Body>
            {(array || []).map((element, index) => {
              return (
                <ListInput
                  key={index}
                  id={"inputLine" + index}
                  index={index}
                  onTextChange={onTextChange}
                  deleteInputRow={deleteInputRow}
                  value={element[name]}
                  label={label}
                  section={section}
                  name={name}
                  width={12}
                />
              );
            })}
            {children}
          </Modal.Body>
          <Modal.Footer>
            {/* <button onClick={hideModal}>Cancel</button> */}
            <button
              className="btn btn-primary positioning-style"
              onClick={saveAndHideModal}
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Display;
