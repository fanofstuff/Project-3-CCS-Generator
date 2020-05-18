import React from "react";
import Modal from "react-bootstrap/Modal";

// Used solely for Base Sphere storage, both magic and martial. 

const BaseCastingSphere = (props) => {
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
          {`${props.label} | CL: ${props.cl}`}
        </button>
        <Modal show={isOpen} onHide={hideModal} size="lg" animation={false}>
          <Modal.Header>
            <Modal.Title>{`${props.label} | CL: ${props.cl}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={"col-md-4"}>
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
                  <div className="input-group-text display-style">CL</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"cl" + props.id}
                  index={props.index}
                  value={props.cl}
                  onChange={handleChange}
                  name={props.clName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">DC</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"dc" + props.id}
                  index={props.index}
                  value={props.dc}
                  onChange={handleChange}
                  name={props.dcName}
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

export default BaseCastingSphere;
