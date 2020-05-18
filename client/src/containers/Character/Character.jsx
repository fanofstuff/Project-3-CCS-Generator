import React, { Component } from "react";
import API from "../../utils/API";
import "./Character.css";
import $ from "jquery";
import update from "immutability-helper";
import CharacterInput from "../../components/Shared/CharacterInput/CharacterInput";
import ModifierOutput from "../../components/Shared/ModifierOutput/ModifierOutput";
import Section from "../../components/Shared/Section/Section";
import Display from "../../components/Shared/Display/Display";
import Footer from "../../components/Shared/Footer/Footer";
import AttackDisplay from "../../components/Shared/AttackDisplay/AttackDisplay";
import Table from "react-bootstrap/Table";
import EquipmentDisplay from "../../components/Shared/EquipmentDisplay/EquipmentDisplay";
import AbilityDisplay from "../../components/Shared/AbilityDisplay/AbilityDisplay";
import BaseCastingSphere from "../../components/Shared/BaseCastingSphere/BaseCastingSphere";

class Character extends Component {
  state = {
    characterData: {},
    saved: false,
  };

  getCharacterInfo = () => {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    API.getCharacter(id)
      .then((response) => {
        var characterData = response.data;
        this.setState({
          characterData,
        });
      })
      .catch((err) => console.log(err));
  };

  saveCharacter = (event) => {
    event.preventDefault();
    API.saveCharacter(window.location.pathname, this.state.characterData)
      .then((response) => {
        console.log(response);
        this.setState({ saved: true });
        setTimeout(() => {
          this.setState({ saved: false });
        }, 2000);
        // add something to inform the user of successful save
      })
      .catch((err) => console.log(err));
    // ditto for unsuccessful save
  };

  componentDidMount() {
    this.getCharacterInfo();
    $("textarea")
      .each(function () {
        this.setAttribute(
          "style",
          "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
      })
      .on("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      });
  }

  handleEvent = (event) => {
    const value = event.value;
    const name = event.getAttribute("name");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: { $merge: { [name]: value } },
      });
      return newArray;
    });
  };

  handleSubsetData = (event) => {
    const value = event.value;
    const name = event.name;
    const section = event.getAttribute("section");
    const id = event.getAttribute("index");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: { [id]: { $merge: { [name]: value } } },
        },
      });
      return newArray;
    });
  };

  handleSkills = (event) => {
    this.handleSubsetData(event.target);
  };

  handleCheckbox = (event) => {
    const name = event.target.name;
    const section = event.target.getAttribute("section");
    const id = event.target.getAttribute("index");
    const value = !JSON.parse(event.target.value);

    console.log(event.target);
    console.log(name);
    console.log(section);
    console.log(id);
    console.log(value);
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: { [id]: { $merge: { [name]: value } } },
        },
      });
      return newArray;
    });
  };

  handleBasicCheckbox = (event) => {
    const name = event.target.name;
    const value = !JSON.parse(event.target.value);

    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          $merge: { [name]: value },
        },
      });
      return newArray;
    });
  };

  onAddItem = (event) => {
    const name = event.target.getAttribute("name");
    const section = event.target.getAttribute("section");
    console.log(event.target);
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: { $push: [{ [name]: "" }] },
        },
      });
      return newArray;
    });
  };

  onCreateMeleeAttack = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const label = event.target.getAttribute("label");
    const attack = event.target.getAttribute("attack");
    const damage = event.target.getAttribute("damage");
    const critical = event.target.getAttribute("critical");
    const reach = event.target.getAttribute("reach");
    const types = event.target.getAttribute("types");
    const notes = event.target.getAttribute("notes");
    console.log(event.target);
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [label]: "Weapon",
                [attack]: "+0",
                [damage]: "1dX+0",
                [critical]: "20/x2",
                [reach]: "",
                [types]: "",
                [notes]: "",
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  onCreateRangedAttack = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const label = event.target.getAttribute("label");
    const attack = event.target.getAttribute("attack");
    const damage = event.target.getAttribute("damage");
    const critical = event.target.getAttribute("critical");
    const reach = event.target.getAttribute("reach");
    const types = event.target.getAttribute("types");
    const ammunition = event.target.getAttribute("ammunition");
    const notes = event.target.getAttribute("notes");
    console.log(event.target);
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [label]: "Weapon",
                [attack]: "+0",
                [damage]: "1dX+0",
                [critical]: "20/x2",
                [reach]: "",
                [types]: "",
                [ammunition]: "",
                [notes]: "",
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  onAddSkill = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const bonus = event.target.getAttribute("bonus");
    const trained = event.target.getAttribute("trained");
    const name = event.target.getAttribute("name");
    const total = event.target.getAttribute("total");
    const ranks = event.target.getAttribute("ranks");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [bonus]: false,
                [trained]: false,
                [name]: "",
                [total]: "+0",
                [ranks]: "0",
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  onAddVeil = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const label = event.target.getAttribute("label");
    const location = event.target.getAttribute("location");
    const max = event.target.getAttribute("max");
    const current = event.target.getAttribute("current");
    const shaped = event.target.getAttribute("shaped");
    const bound = event.target.getAttribute("bound");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [label]: "",
                [location]: "",
                [max]: "1",
                [current]: "0",
                [shaped]: false,
                [bound]: false,
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  onCreateItem = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const label = event.target.getAttribute("label");
    const description = event.target.getAttribute("description");
    const worth = event.target.getAttribute("worth");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [label]: "Item",
                [description]: "",
                [worth]: "0gp",
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  onCreateAbility = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const label = event.target.getAttribute("label");
    const description = event.target.getAttribute("description");
    const type = event.target.getAttribute("type");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [label]: "Ability",
                [type]: "",
                [description]: "",
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  onAddBCS = (event) => {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    const label = event.target.getAttribute("label");
    const cl = event.target.getAttribute("cl");
    const dc = event.target.getAttribute("dc");
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: {
            $push: [
              {
                [label]: "Sphere",
                [cl]: 1,
                [dc]: 10,
              },
            ],
          },
        },
      });
      return newArray;
    });
  };

  render() {
    var strMod =
      this.state.characterData.str_score &&
      Math.floor((this.state.characterData.str_score - 10) / 2);
    var dexMod =
      this.state.characterData.dex_score &&
      Math.floor((this.state.characterData.dex_score - 10) / 2);
    var conMod =
      this.state.characterData.con_score &&
      Math.floor((this.state.characterData.con_score - 10) / 2);
    var intMod =
      this.state.characterData.int_score &&
      Math.floor((this.state.characterData.int_score - 10) / 2);
    var wisMod =
      this.state.characterData.wis_score &&
      Math.floor((this.state.characterData.wis_score - 10) / 2);
    var chaMod =
      this.state.characterData.cha_score &&
      Math.floor((this.state.characterData.cha_score - 10) / 2);
    var tempStrMod =
      this.state.characterData.temp_str_score &&
      Math.floor((this.state.characterData.temp_str_score - 10) / 2);
    var tempDexMod =
      this.state.characterData.temp_dex_score &&
      Math.floor((this.state.characterData.temp_dex_score - 10) / 2);
    var tempConMod =
      this.state.characterData.temp_con_score &&
      Math.floor((this.state.characterData.temp_con_score - 10) / 2);
    var tempIntMod =
      this.state.characterData.temp_int_score &&
      Math.floor((this.state.characterData.temp_int_score - 10) / 2);
    var tempWisMod =
      this.state.characterData.temp_wis_score &&
      Math.floor((this.state.characterData.temp_wis_score - 10) / 2);
    var tempChaMod =
      this.state.characterData.temp_cha_score &&
      Math.floor((this.state.characterData.temp_cha_score - 10) / 2);

    return (
      <>
        <div id="homepage-cover">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Character Sheet Creation Page</h1>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Section title="Character Description">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.character_name}
            label={"Character Name"}
            name="character_name"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.alignment}
            label={"Alignment"}
            name="alignment"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.player_name}
            label={"Player Name"}
            name="player_name"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.character_level}
            label={"Character Level"}
            name="character_level"
            width={4}
          />
          <Display
            onTextChange={this.handleSubsetData}
            deleteInputRow={this.deleteInputRow}
            handleEvent={this.handleEvent}
            title={"Class Level Tracker"}
            titleValue=""
            titleName=""
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.class_levels}
            section={"class_levels"}
            name="class_name_and_level"
            label="Class"
            width={4}
            tracker={false}
          >
            <div className="col-lg-3">
              <button
                name={"class_name_and_level"}
                section={"class_levels"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add a Class
              </button>
            </div>
          </Display>
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.deity_name}
            label={"Deity Name"}
            name="deity_name"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.homeland}
            label={"Homeland"}
            name="homeland"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.race}
            label={"Race"}
            name="race"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.size}
            label={"Size"}
            name="size"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.gender}
            label={"Gender"}
            name="gender"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.age}
            label={"Age"}
            name="age"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.weight}
            label={"Weight"}
            name="weight"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.hair_description}
            label={"Hair Description"}
            name="hair_description"
            width={6}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.eyes_description}
            label={"Eyes Description"}
            name="eyes_description"
            width={6}
          />
        </Section>
        <br />
        <Section title="Attributes">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.str_score}
            label={"STR Score"}
            name="str_score"
            width={3}
          />
          <ModifierOutput value={strMod} label={"STR Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_str_score}
            label={"Temp STR Score"}
            name="temp_str_score"
            width={3}
          />
          <ModifierOutput value={tempStrMod} label={"Temp STR Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.dex_score}
            label={"DEX Score"}
            name="dex_score"
            width={3}
          />
          <ModifierOutput value={dexMod} label={"DEX Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_dex_score}
            label={"Temp DEX Score"}
            name="temp_dex_score"
            width={3}
          />
          <ModifierOutput value={tempDexMod} label={"Temp DEX Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.con_score}
            label={"CON Score"}
            name="con_score"
            width={3}
          />
          <ModifierOutput value={conMod} label={"CON Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_con_score}
            label={"Temp CON Score"}
            name="temp_con_score"
            width={3}
          />
          <ModifierOutput value={tempConMod} label={"Temp CON Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.int_score}
            label={"INT Score"}
            name="int_score"
            width={3}
          />
          <ModifierOutput value={intMod} label={"INT Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_int_score}
            label={"Temp INT Score"}
            name="temp_int_score"
            width={3}
          />
          <ModifierOutput value={tempIntMod} label={"Temp INT Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.wis_score}
            label={"WIS Score"}
            name="wis_score"
            width={3}
          />
          <ModifierOutput value={wisMod} label={"WIS Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_wis_score}
            label={"Temp WIS Score"}
            name="temp_wis_score"
            width={3}
          />
          <ModifierOutput value={tempWisMod} label={"Temp WIS Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.cha_score}
            label={"CHA Score"}
            name="cha_score"
            width={3}
          />
          <ModifierOutput value={chaMod} label={"CHA Mod"} width={3} />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_cha_score}
            label={"Temp CHA Score"}
            name="temp_cha_score"
            width={3}
          />
          <ModifierOutput value={tempChaMod} label={"Temp CHA Mod"} width={3} />
        </Section>
        <br />
        <Section title="Defenses">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.total_hp}
            label={"Total HP"}
            name="total_hp"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.current_hp}
            label={"Current HP"}
            name="current_hp"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.nonlethal_damage}
            label={"Nonlethal"}
            name="nonlethal_damage"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_hp}
            label={"Temp HP"}
            name="temp_hp"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.dr}
            label={"DR"}
            name="dr"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.sr}
            label={"SR"}
            name="sr"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.resistances}
            label={"Resistances"}
            name="resistances"
            width={5}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.immunities}
            label={"Immunities"}
            name="immunities"
            width={5}
          />

          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"CMD: "}
            titleValue={this.state.characterData.cmd}
            titleName="cmd"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.cmd_bonuses}
            section={"cmd_bonuses"}
            name="cmd_label_and_value"
            label={"CMD Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"cmd_label_and_value"}
                section={"cmd_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add a CMD Modifier
              </button>
            </div>
          </Display>
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"Total AC: "}
            titleValue={this.state.characterData.ac}
            titleName="ac"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.ac_bonuses}
            section={"ac_bonuses"}
            name="ac_label_and_value"
            label={"AC Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"ac_label_and_value"}
                section={"ac_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add an AC Modifier
              </button>
            </div>
          </Display>
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"Touch AC: "}
            titleValue={this.state.characterData.touch_ac}
            titleName="touch_ac"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.touch_ac_bonuses}
            section={"touch_ac_bonuses"}
            name="touch_ac_label_and_value"
            label={"Touch AC Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"touch_ac_label_and_value"}
                section={"touch_ac_bonuses"}
                onClick={this.onAddItem}
                className="display-primary btn btn-primary"
              >
                Add an AC Modifier
              </button>
            </div>
          </Display>
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"Flat-Footed AC: "}
            titleValue={this.state.characterData.flat_footed_ac}
            titleName="flat_footed_ac"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.ff_ac_bonuses}
            section={"ff_ac_bonuses"}
            name="ff_ac_label_and_value"
            label={"Flat-Footed AC Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"ff_ac_label_and_value"}
                section={"ff_ac_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add an AC Modifier
              </button>
            </div>
          </Display>

          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"FORT Save: "}
            titleValue={this.state.characterData.fort_save}
            titleName="fort_save"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.fort_bonuses}
            section={"fort_bonuses"}
            name="fort_label_and_value"
            label={"FORT Save Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"fort_label_and_value"}
                section={"fort_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add a FORT Save Modifier
              </button>
            </div>
          </Display>
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"REF Save: "}
            titleValue={this.state.characterData.ref_save}
            titleName="ref_save"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.ref_bonuses}
            section={"ref_bonuses"}
            name="ref_label_and_value"
            label={"REF Save Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"ref_label_and_value"}
                section={"ref_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add a REF Save Modifier
              </button>
            </div>
          </Display>
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"WILL Save: "}
            titleValue={this.state.characterData.will_save}
            titleName="will_save"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.will_bonuses}
            section={"will_bonuses"}
            name="will_label_and_value"
            label={"WILL Save Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"will_label_and_value"}
                section={"will_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add a WILL Save Modifier
              </button>
            </div>
          </Display>
        </Section>
        <br />
        <Section title="Attacks">
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"Initiative: "}
            titleValue={this.state.characterData.initiative}
            titleName="initiative"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.initiative_bonuses}
            section={"initiative_bonuses"}
            name="initiative_label_and_value"
            label={"Initiative Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"initiative_label_and_value"}
                section={"initiative_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add an Initiative Modifier
              </button>
            </div>
          </Display>
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.bab}
            label={"BAB"}
            name="bab"
            width={2}
          />
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"CMB: "}
            titleValue={this.state.characterData.cmb}
            titleName="cmb"
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.cmb_bonuses}
            section={"cmb_bonuses"}
            name="cmb_label_and_value"
            label={"CMB Modifier"}
            width={2}
            tracker={true}
          >
            <div className="col-lg-4">
              <button
                name={"cmb_label_and_value"}
                section={"cmb_bonuses"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add a CMB Modifier
              </button>
            </div>
          </Display>
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.base_speed}
            label={"Speed"}
            name="base_speed"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.speed_with_armor}
            label={"with Armor"}
            name="speed_with_armor"
            width={2}
          />
          <Display
            onTextChange={this.handleSubsetData}
            handleEvent={this.handleEvent}
            title={"Other Speeds"}
            titleValue=""
            titleName=""
            saveCharacter={this.saveCharacter}
            array={this.state.characterData.other_speeds}
            section={"other_speeds"}
            name="speed_label_and_value"
            label={"Alternative Movement Speed"}
            width={2}
            tracker={false}
          >
            <div className="col-lg-6">
              <button
                name={"speed_label_and_value"}
                section={"other_speeds"}
                onClick={this.onAddItem}
                className="display-style btn btn-primary"
              >
                Add an Alternative Movement Speed
              </button>
            </div>
          </Display>
        </Section>
        <br />
        <Section title="Melee">
          <div className="col-md-12">
            <button
              section={"melee_attacks"}
              label={"ma_label"}
              attack={"ma_total_attack_bonus"}
              damage={"ma_total_damage"}
              critical={"ma_criticals"}
              reach={"ma_reach"}
              types={"ma_damage_types"}
              notes={"ma_notes"}
              onClick={this.onCreateMeleeAttack}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Melee Attack
            </button>
          </div>
          {(this.state.characterData.melee_attacks || []).map(
            (element, index) => {
              return (
                <AttackDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"meleeAttack" + index}
                  index={index}
                  label={element.ma_label}
                  labelName={"ma_label"}
                  totalAttackBonus={element.ma_total_attack_bonus}
                  totalAttackBonusName={"ma_total_attack_bonus"}
                  totalDamage={element.ma_total_damage}
                  totalDamageName={"ma_total_damage"}
                  criticals={element.ma_criticals}
                  criticalsName={"ma_criticals"}
                  range={element.ma_reach}
                  rangeName={"ma_reach"}
                  damageTypes={element.ma_damage_types}
                  damageTypesName={"ma_damage_types"}
                  notes={element.ma_notes}
                  notesName={"ma_notes"}
                  section={"melee_attacks"}
                />
              );
            }
          )}
        </Section>
        <br />
        <Section title="Ranged">
          <div className="col-md-12">
            <button
              section={"ranged_attacks"}
              label={"ra_label"}
              attack={"ra_total_attack_bonus"}
              damage={"ra_total_damage"}
              critical={"ra_criticals"}
              reach={"ra_reach"}
              types={"ra_damage_types"}
              ammunition={"ra_ammunition"}
              notes={"ra_notes"}
              onClick={this.onCreateRangedAttack}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Ranged Attack
            </button>
          </div>
          {(this.state.characterData.ranged_attacks || []).map(
            (element, index) => {
              return (
                <AttackDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"rangedAttack" + index}
                  index={index}
                  label={element.ra_label}
                  labelName={"ra_label"}
                  totalAttackBonus={element.ra_total_attack_bonus}
                  totalAttackBonusName={"ra_total_attack_bonus"}
                  totalDamage={element.ra_total_damage}
                  totalDamageName={"ra_total_damage"}
                  criticals={element.ra_criticals}
                  criticalsName={"ra_criticals"}
                  range={element.ra_reach}
                  rangeName={"ra_reach"}
                  damageTypes={element.ra_damage_types}
                  damageTypesName={"ra_damage_types"}
                  ammunition={element.ra_ammunition}
                  ammunitionName={"ra_ammunition"}
                  notes={element.ra_notes}
                  notesName={"ra_notes"}
                  section={"ranged_attacks"}
                />
              );
            }
          )}
        </Section>
        <br />
        <Section title="Skills">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.total_ranks}
            label={"Total Ranks"}
            name="total_ranks"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.armor_check_penalty}
            label={"Armor Check Penalty"}
            name="armor_check_penalty"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.current_xp}
            label={"Current XP"}
            name="current_xp"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.xp_for_next_level}
            label={"XP to Level-Up"}
            name="xp_for_next_level"
            width={3}
          />
          <div className="col-md-12">
            <Table hover>
              <thead className="display-style">
                <tr>
                  <th className="border border-dark">Class Skill?</th>
                  <th className="border border-dark">Trained?</th>
                  <th className="border border-dark">Skill Name</th>
                  <th className="border border-dark">Total Bonus</th>
                  <th className="border border-dark">Total Ranks</th>
                </tr>
              </thead>
              <tbody>
                {(this.state.characterData.skills || []).map(
                  (element, index) => {
                    return (
                      <tr key={index} className="gentler-panels">
                        <td className="border border-dark">
                          <div className="checkbox">
                            <input
                              id={"classSkill" + index}
                              index={index}
                              type="checkbox"
                              name={"class_skill"}
                              value={element.class_skill}
                              section={"skills"}
                              onChange={this.handleCheckbox}
                              {...(element.class_skill
                                ? { checked: true }
                                : {})}
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div className="checkbox">
                            <input
                              id={"trainedOnly" + index}
                              index={index}
                              type="checkbox"
                              name={"trained_only"}
                              value={element.trained_only}
                              section={"skills"}
                              onChange={this.handleCheckbox}
                              {...(element.trained_only
                                ? { checked: true }
                                : {})}
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"skill_name"}
                              value={element.skill_name || ""}
                              section={"skills"}
                              id={"skillName" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-100 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"skill_total"}
                              value={element.skill_total || ""}
                              section={"skills"}
                              id={"skillTotal" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-25 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"skill_ranks"}
                              value={element.skill_ranks || "0"}
                              section={"skills"}
                              id={"skillRanks" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-25 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
          </div>
          <div className="col-md-12">
            <button
              section={"skills"}
              bonus={"class_skill"}
              trained={"trained_only"}
              name={"skill_name"}
              total={"skill_total"}
              ranks={"skill_ranks"}
              onClick={this.onAddSkill}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Skill
            </button>
          </div>

          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.languages}
            label={"Languages"}
            name="languages"
            width={12}
          />
        </Section>
        <br />
        <Section title="Equipment">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.platinum}
            label={"Platinum"}
            name="platinum"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.gold}
            label={"Gold"}
            name="gold"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.silver}
            label={"Silver"}
            name="silver"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.copper}
            label={"Copper"}
            name="copper"
            width={3}
          />
          <div className="col-md-12">
            <button
              section={"trade_goods"}
              label={"goods_label"}
              description={"goods_description"}
              worth={"goods_value"}
              onClick={this.onCreateItem}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add a Trade Good (i.e. Gems, Artwork, Raw Materials)
            </button>
          </div>
          {(this.state.characterData.trade_goods || []).map(
            (element, index) => {
              return (
                <EquipmentDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"tradeGood" + index}
                  index={index}
                  label={element.goods_label}
                  labelName={"goods_label"}
                  description={element.goods_description}
                  descriptionName={"goods_description"}
                  worth={element.goods_value}
                  worthName={"goods_value"}
                  section={"trade_goods"}
                />
              );
            }
          )}

          <div className="col-md-12">
            <button
              section={"adventuring_gear"}
              label={"gear_label"}
              description={"gear_description"}
              worth={"gear_value"}
              onClick={this.onCreateItem}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Adventuring Gear (i.e. Torches, Alchemist's Fire)
            </button>
          </div>
          {(this.state.characterData.adventuring_gear || []).map(
            (element, index) => {
              return (
                <EquipmentDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"adventuringGear" + index}
                  index={index}
                  label={element.gear_label}
                  labelName={"gear_label"}
                  description={element.gear_description}
                  descriptionName={"gear_description"}
                  worth={element.gear_value}
                  worthName={"gear_value"}
                  section={"adventuring_gear"}
                />
              );
            }
          )}

          <div className="col-md-12">
            <button
              section={"other_treasure"}
              label={"treasure_label"}
              description={"treasure_description"}
              worth={"treasure_value"}
              onClick={this.onCreateItem}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Treasure (i.e. Non-Combat Wands or Scrolls, Wondrous Items)
            </button>
          </div>
          {(this.state.characterData.other_treasure || []).map(
            (element, index) => {
              return (
                <EquipmentDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"otherTreasure" + index}
                  index={index}
                  label={element.treasure_label}
                  labelName={"treasure_label"}
                  description={element.treasure_description}
                  descriptionName={"treasure_description"}
                  worth={element.treasure_value}
                  worthName={"treasure_value"}
                  section={"other_treasure"}
                />
              );
            }
          )}
        </Section>
        <Section title="Feats, Traits and Class Features">
          <div className="col-md-12">
            <button
              section={"feats"}
              label={"feat_name"}
              description={"feat_description"}
              type={"feat_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Feat
            </button>
          </div>
          {(this.state.characterData.feats || []).map((element, index) => {
            return (
              <AbilityDisplay
                onTextChange={this.handleSubsetData}
                saveCharacter={this.saveCharacter}
                key={index}
                id={"feat" + index}
                index={index}
                label={element.feat_name}
                labelName={"feat_name"}
                description={element.feat_description}
                descriptionName={"feat_description"}
                type={element.feat_type}
                typeName={"feat_type"}
                section={"feats"}
              />
            );
          })}
          <div className="col-md-12">
            <button
              section={"traits"}
              label={"trait_name"}
              description={"trait_description"}
              type={"trait_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Trait
            </button>
          </div>
          {(this.state.characterData.traits || []).map((element, index) => {
            return (
              <AbilityDisplay
                onTextChange={this.handleSubsetData}
                saveCharacter={this.saveCharacter}
                key={index}
                id={"trait" + index}
                index={index}
                label={element.trait_name}
                labelName={"trait_name"}
                description={element.trait_description}
                descriptionName={"trait_description"}
                type={element.trait_type}
                typeName={"trait_type"}
                section={"traits"}
              />
            );
          })}
          <div className="col-md-12">
            <button
              section={"racial_traits"}
              label={"trait_name"}
              description={"trait_description"}
              type={"trait_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Racial Trait
            </button>
          </div>
          {(this.state.characterData.racial_traits || []).map(
            (element, index) => {
              return (
                <AbilityDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"racialTrait" + index}
                  index={index}
                  label={element.trait_name}
                  labelName={"trait_name"}
                  description={element.trait_description}
                  descriptionName={"trait_description"}
                  type={element.trait_type}
                  typeName={"trait_type"}
                  section={"racial_traits"}
                />
              );
            }
          )}
          <div className="col-md-12">
            <button
              section={"class_abilities"}
              label={"ability_name"}
              description={"ability_description"}
              type={"ability_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Class Ability
            </button>
          </div>
          {(this.state.characterData.class_abilities || []).map(
            (element, index) => {
              return (
                <AbilityDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"classAbility" + index}
                  index={index}
                  label={element.ability_name}
                  labelName={"ability_name"}
                  description={element.ability_description}
                  descriptionName={"ability_description"}
                  type={element.ability_type}
                  typeName={"ability_type"}
                  section={"class_abilities"}
                />
              );
            }
          )}
        </Section>
        <h1 className="text-center mb-2 pb-3">Casting and Sub-Systems</h1>
        <Section title="Spheres of Power">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.sphere_casting_modifier}
            label={"Casting Mod"}
            name="sphere_casting_modifier"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.total_sp}
            label={"Total SP"}
            name="total_sp"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.current_sp}
            label={"Current SP"}
            name="current_sp"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.base_cl}
            label={"Base CL"}
            name="base_cl"
            width={3}
          />
          <div className="col-md-12">
            <button
              section={"base_spheres"}
              label={"sphere_name"}
              cl={"sphere_cl"}
              dc={"sphere_dc"}
              onClick={this.onAddBCS}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Base Sphere
            </button>
          </div>
          {(this.state.characterData.base_spheres || []).map(
            (element, index) => {
              return (
                <BaseCastingSphere
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"bcs" + index}
                  index={index}
                  label={element.sphere_name}
                  labelName={"sphere_name"}
                  cl={element.sphere_cl}
                  clName={"sphere_cl"}
                  dc={element.sphere_dc}
                  dcName={"sphere_dc"}
                  section={"base_spheres"}
                />
              );
            }
          )}
          <div className="col-md-12">
            <button
              section={"sphere_talents"}
              label={"talent_name"}
              description={"talent_description"}
              type={"talent_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add a Sphere Talent
            </button>
          </div>
          {(this.state.characterData.sphere_talents || []).map(
            (element, index) => {
              return (
                <AbilityDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"cst" + index}
                  index={index}
                  label={element.talent_name}
                  labelName={"talent_name"}
                  description={element.talent_description}
                  descriptionName={"talent_description"}
                  type={element.talent_type}
                  typeName={"talent_type"}
                  section={"sphere_talents"}
                />
              );
            }
          )}
          <div className="col-md-12">
            <button
              section={"sphere_drawbacks"}
              label={"drawback_name"}
              description={"drawback_description"}
              type={"drawback_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add a Sphere Drawback
            </button>
          </div>
          {(this.state.characterData.sphere_drawbacks || []).map(
            (element, index) => {
              return (
                <AbilityDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"csd" + index}
                  index={index}
                  label={element.drawback_name}
                  labelName={"drawback_name"}
                  description={element.drawback_description}
                  descriptionName={"drawback_description"}
                  type={element.drawback_type}
                  typeName={"drawback_type"}
                  section={"sphere_drawbacks"}
                />
              );
            }
          )}
        </Section>
        <Section title="Spheres of Might">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.martial_practitioner_modifier}
            label={"Practitioner Mod"}
            name="martial_practitioner_modifier"
            width={3}
          />
          <div className={`col-md-3`}>
            <div className="btn btn-primary display-style w-75">1st Focus?</div>
            <div className="checkbox pt-2 float-right">
              <input
                type="checkbox"
                name={"has_martial_focus"}
                value={this.state.characterData.has_martial_focus}
                onChange={this.handleBasicCheckbox}
                {...(this.state.characterData.has_martial_focus
                  ? { checked: true }
                  : {})}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="btn btn-primary display-style w-75">2nd Focus?</div>
            <div className="checkbox pt-2 float-right">
              <input
                type="checkbox"
                name={"has_second_martial_focus"}
                value={this.state.characterData.has_second_martial_focus}
                onChange={this.handleBasicCheckbox}
                {...(this.state.characterData.has_second_martial_focus
                  ? { checked: true }
                  : {})}
              />
            </div>
          </div>
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.bab}
            label={"Base Practitioner Level"}
            name="bab"
            width={3}
          />
          <div className="col-md-12">
            <button
              section={"martial_base_spheres"}
              label={"sphere_name"}
              cl={"sphere_level"}
              dc={"sphere_dc"}
              onClick={this.onAddBCS}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add Base Sphere
            </button>
          </div>
          {(this.state.characterData.martial_base_spheres || []).map(
            (element, index) => {
              return (
                <BaseCastingSphere
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"bms" + index}
                  index={index}
                  label={element.sphere_name}
                  labelName={"sphere_name"}
                  cl={element.sphere_level}
                  clName={"sphere_level"}
                  dc={element.sphere_dc}
                  dcName={"sphere_dc"}
                  section={"martial_base_spheres"}
                />
              );
            }
          )}
          <div className="col-md-12">
            <button
              section={"martial_sphere_talents"}
              label={"talent_name"}
              description={"talent_description"}
              type={"talent_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add a Sphere Talent
            </button>
          </div>
          {(this.state.characterData.martial_sphere_talents || []).map(
            (element, index) => {
              return (
                <AbilityDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"mst" + index}
                  index={index}
                  label={element.talent_name}
                  labelName={"talent_name"}
                  description={element.talent_description}
                  descriptionName={"talent_description"}
                  type={element.talent_type}
                  typeName={"talent_type"}
                  section={"martial_sphere_talents"}
                />
              );
            }
          )}
          <div className="col-md-12">
            <button
              section={"martial_sphere_drawbacks"}
              label={"drawback_name"}
              description={"drawback_description"}
              type={"drawback_type"}
              onClick={this.onCreateAbility}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add a Sphere Drawback
            </button>
          </div>
          {(this.state.characterData.martial_sphere_drawbacks || []).map(
            (element, index) => {
              return (
                <AbilityDisplay
                  onTextChange={this.handleSubsetData}
                  saveCharacter={this.saveCharacter}
                  key={index}
                  id={"msd" + index}
                  index={index}
                  label={element.drawback_name}
                  labelName={"drawback_name"}
                  description={element.drawback_description}
                  descriptionName={"drawback_description"}
                  type={element.drawback_type}
                  typeName={"drawback_type"}
                  section={"martial_sphere_drawbacks"}
                />
              );
            }
          )}
        </Section>
        <Section title="Veilweaving">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.veilweaving_level}
            label={"Veilweaving Level"}
            name="veilweaving_level"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.veilweaving_modifier}
            label={"Veilweaving Mod"}
            name="veilweaving_modifier"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.base_essence}
            label={"Total Essence"}
            name="base_essence"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.uninvested_essence}
            label={"Uninvested Essence"}
            name="uninvested_essence"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.maximum_veils}
            label={"Maximum Veils/Once"}
            name="maximum_veils"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.available_binds}
            label={"Available Binds"}
            name="available_binds"
            width={9}
          />
          <div className="col-md-12">
            <Table hover>
              <thead className="display-style">
                <tr>
                  <th className="border border-dark">Name</th>
                  <th className="border border-dark">Location</th>
                  <th className="border border-dark">Max Essence</th>
                  <th className="border border-dark">Current Essence</th>
                  <th className="border border-dark">Shaped?</th>
                  <th className="border border-dark">Bound?</th>
                </tr>
              </thead>
              <tbody>
                {(this.state.characterData.veils || []).map(
                  (element, index) => {
                    return (
                      <tr key={index} className="gentler-panels">
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"veil_name"}
                              value={element.veil_name || ""}
                              section={"veils"}
                              id={"veilName" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-100 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"veil_location"}
                              value={element.veil_location || ""}
                              section={"veils"}
                              id={"veilLocation" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-100 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"max_invested_essence"}
                              value={element.max_invested_essence || ""}
                              section={"veils"}
                              id={"maxEssence" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-50 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div>
                            <input
                              type="text"
                              name={"current_invested_essence"}
                              value={element.current_invested_essence || "0"}
                              section={"veils"}
                              id={"currentEssence" + index}
                              index={index}
                              onChange={this.handleSkills}
                              className="w-50 p-1 px-3 text-center"
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div className="checkbox">
                            <input
                              id={"shaped" + index}
                              index={index}
                              type="checkbox"
                              name={"is_shaped"}
                              value={element.is_shaped}
                              section={"veils"}
                              onChange={this.handleCheckbox}
                              {...(element.is_shaped ? { checked: true } : {})}
                            />
                          </div>
                        </td>
                        <td className="border border-dark">
                          <div className="checkbox">
                            <input
                              id={"bound" + index}
                              index={index}
                              type="checkbox"
                              name={"is_bound"}
                              value={element.is_bound}
                              section={"veils"}
                              onChange={this.handleCheckbox}
                              {...(element.is_bound ? { checked: true } : {})}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
          </div>

          <div className="col-md-12">
            <button
              section={"veils"}
              label={"veil_name"}
              location={"veil_location"}
              max={"max_invested_essence"}
              current={"current_invested_essence"}
              shaped={"is_shaped"}
              bound={"is_bound"}
              onClick={this.onAddVeil}
              className="btn btn-primary display-style float-right mb-3"
            >
              Add a Veil
            </button>
          </div>
        </Section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer saveCharacter={this.saveCharacter} saved={this.state.saved} />
      </>
    );
  }
}

export default Character;
