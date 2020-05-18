import React from "react";
import Modal from "react-bootstrap/Modal";

const AbilityDisplay = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const saveAndHideModal = (event) => {
    props.saveCharacter(event);
    hideModal();
  };

  const handleChange = (event) => {
    props.onTextChange(event.target);
  };

  return (
    <>
      <div className={`col-md-3`}>
        <button
          className="btn btn-primary display-style mb-3"
          type="button"
          data-toggle="modal"
          onClick={showModal}
        >
          {`${props.label} | ${props.type}`}
        </button>
        <Modal show={isOpen} onHide={hideModal} size="lg" animation={false}>
          <Modal.Header>
            <Modal.Title>{`${props.label} | ${props.type}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={"col-md-12"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Name</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"name" + props.id}
                  index={props.index}
                  value={props.label}
                  onChange={handleChange}
                  name={props.labelName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Type/Source</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"type" + props.id}
                  index={props.index}
                  value={props.type}
                  onChange={handleChange}
                  name={props.typeName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-12"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Description</div>
                </div>
                <textarea
                  className="form-control"
                  rows="10"
                  id={"description" + props.id}
                  index={props.index}
                  value={props.description}
                  onChange={handleChange}
                  name={props.descriptionName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
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

export default AbilityDisplay;
