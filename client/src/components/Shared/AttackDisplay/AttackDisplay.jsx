import React from "react";
import Modal from "react-bootstrap/Modal";

const AttackDisplay = (props) => {
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
          {`${props.label} ${props.totalAttackBonus} (${props.totalDamage}), (${props.criticals})`}
        </button>
        <Modal show={isOpen} onHide={hideModal} size="lg" animation={false}>
          <Modal.Header>
            <Modal.Title>
              {`${props.label} ${props.totalAttackBonus} (${props.totalDamage}), (${props.criticals})`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={"col-md-6"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Weapon Name</div>
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
            <div className={"col-md-6"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Attack Bonus</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"attack" + props.id}
                  index={props.index}
                  value={props.totalAttackBonus}
                  onChange={handleChange}
                  name={props.totalAttackBonusName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-6"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Attack Damage</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"damage" + props.id}
                  index={props.index}
                  value={props.totalDamage}
                  onChange={handleChange}
                  name={props.totalDamageName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-6"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Crit Info</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"crit" + props.id}
                  index={props.index}
                  value={props.criticals}
                  onChange={handleChange}
                  name={props.criticalsName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-6"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Reach/Range</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"range" + props.id}
                  index={props.index}
                  value={props.range}
                  onChange={handleChange}
                  name={props.rangeName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            <div className={"col-md-6"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Damage Type(s)</div>
                </div>
                <textarea
                  className="form-control"
                  rows="1"
                  id={"damageType" + props.id}
                  index={props.index}
                  value={props.damageTypes}
                  onChange={handleChange}
                  name={props.damageTypesName}
                  section={props.section}
                ></textarea>
              </div>
            </div>
            {props.ammunition && (
              <div className={"col-md-6"}>
                <div className="input-group mb-3 text-box">
                  <div className="input-group-prepend">
                    <div className="input-group-text display-style">Ammunition</div>
                  </div>
                  <textarea
                    className="form-control"
                    rows="1"
                    id={"ammunition" + props.id}
                    index={props.index}
                    value={props.ammunition}
                    onChange={handleChange}
                    name={props.ammunitionName}
                    section={props.section}
                  ></textarea>
                </div>
              </div>
            )}
            <div className={"col-md-12"}>
              <div className="input-group mb-3 text-box">
                <div className="input-group-prepend">
                  <div className="input-group-text display-style">Additional Notes</div>
                </div>
                <textarea
                  className="form-control"
                  rows="10"
                  id={"notes" + props.id}
                  index={props.index}
                  value={props.notes}
                  onChange={handleChange}
                  name={props.notesName}
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

export default AttackDisplay;
