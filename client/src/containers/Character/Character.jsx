import React, { Component } from "react";
import API from "../../utils/API";
import "./Character.css";
import $ from "jquery";
import update from "immutability-helper";
import CharacterInput from "../../components/Shared/CharacterInput/CharacterInput";
import ModifierOutput from "../../components/Shared/ModifierOutput/ModifierOutput";
import Section from "../../components/Shared/Section/Section";
import Display from "../../components/Shared/Display/Display";

class Character extends Component {
  state = {
    characterData: {},
  };

  getCharacterInfo = () => {
    API.getCharacter(window.location.pathname)
      .then((response) => {
        console.log(window.location.pathname);
        var characterData = response.data;
        this.setState({
          characterData,
        });
      })
      .catch((err) => console.log(err));
  };

  saveCharacter = () => {
    API.saveCharacter(window.location.pathname, this.state.characterData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
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
    const id = event.id;
    this.setState((state) => {
      const newArray = update(state, {
        characterData: {
          [section]: { [id]: { $merge: { [name]: value } } },
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

  render() {
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
        <Section
          saveCharacter={this.saveCharacter}
          title="Character Description"
        >
          <CharacterInput
            onTextChange={this.handleEvent}
            saveCharacter={this.saveCharacter}
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
            <button
              name={"class_name_and_level"}
              section={"class_levels"}
              onClick={this.onAddItem}
            >
              Add a Class
            </button>
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
        <Section saveCharacter={this.saveCharacter} title="Attributes">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.str_score}
            label={"STR Score"}
            name="str_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.str_score}
            label={"STR Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_str_score}
            label={"Temp STR Score"}
            name="temp_str_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_str_score}
            label={"Temp STR Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.dex_score}
            label={"DEX Score"}
            name="dex_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.dex_score}
            label={"DEX Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_dex_score}
            label={"Temp DEX Score"}
            name="temp_dex_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_dex_score}
            label={"Temp DEX Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.con_score}
            label={"CON Score"}
            name="con_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.con_score}
            label={"CON Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_con_score}
            label={"Temp CON Score"}
            name="temp_con_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_con_score}
            label={"Temp CON Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.int_score}
            label={"INT Score"}
            name="int_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.int_score}
            label={"INT Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_int_score}
            label={"Temp INT Score"}
            name="temp_int_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_int_score}
            label={"Temp INT Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.wis_score}
            label={"WIS Score"}
            name="wis_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.wis_score}
            label={"WIS Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_wis_score}
            label={"Temp WIS Score"}
            name="temp_wis_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_wis_score}
            label={"Temp WIS Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.cha_score}
            label={"CHA Score"}
            name="cha_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.cha_score}
            label={"CHA Mod"}
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_cha_score}
            label={"Temp CHA Score"}
            name="temp_cha_score"
            width={3}
          />
          <ModifierOutput
            onTextChange={this.handleEvent}
            value={this.state.characterData.temp_cha_score}
            label={"Temp CHA Mod"}
            width={3}
          />
        </Section>
        <Section saveCharacter={this.saveCharacter} title="Defenses">
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
            <button
              name={"cmd_label_and_value"}
              section={"cmd_bonuses"}
              onClick={this.onAddItem}
            >
              Add a CMD Modifier
            </button>
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
            <button
              name={"ac_label_and_value"}
              section={"ac_bonuses"}
              onClick={this.onAddItem}
            >
              Add an AC Modifier
            </button>
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
            <button
              name={"touch_ac_label_and_value"}
              section={"touch_ac_bonuses"}
              onClick={this.onAddItem}
            >
              Add an AC Modifier
            </button>
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
            <button
              name={"ff_ac_label_and_value"}
              section={"ff_ac_bonuses"}
              onClick={this.onAddItem}
            >
              Add an AC Modifier
            </button>
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
            <button
              name={"fort_label_and_value"}
              section={"fort_bonuses"}
              onClick={this.onAddItem}
            >
              Add a FORT Save Modifier
            </button>
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
            <button
              name={"ref_label_and_value"}
              section={"ref_bonuses"}
              onClick={this.onAddItem}
            >
              Add a REF Save Modifier
            </button>
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
            <button
              name={"will_label_and_value"}
              section={"will_bonuses"}
              onClick={this.onAddItem}
            >
              Add a WILL Save Modifier
            </button>
          </Display>
        </Section>
        <br />
        <Section saveCharacter={this.saveCharacter} title="Attacks">
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
            <button
              name={"initiative_label_and_value"}
              section={"initiative_bonuses"}
              onClick={this.onAddItem}
            >
              Add an Initiative Modifier
            </button>
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
            <button
              name={"cmb_label_and_value"}
              section={"cmb_bonuses"}
              onClick={this.onAddItem}
            >
              Add a CMB Modifier
            </button>
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
            <button
              name={"speed_label_and_value"}
              section={"other_speeds"}
              onClick={this.onAddItem}
            >
              Add an Alternative Movement Speed
            </button>
          </Display>
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.melee_attacks}
            label={"ADD MELEE ATTACKS BUTTON"}
            name="melee_attacks"
            width={6}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.ranged_attacks}
            label={"ADD RANGED ATTACKS BUTTON"}
            name="ranged_attacks"
            width={6}
          />
        </Section>
        <Section saveCharacter={this.saveCharacter} title="Skills">
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
          {/* 


           */}
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.skills}
            label={"SKILLS SECTION; WILL NEED CUSTOM WORK"}
            name="skills"
            width={12}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.languages}
            label={"Languages"}
            name="languages"
            width={12}
          />
        </Section>
        <Section saveCharacter={this.saveCharacter} title="Equipment">
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
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.trade_goods}
            label={"Trade Goods BUTTON"}
            name="trade_goods"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.other_treasure}
            label={"Other Treasure BUTTON"}
            name="other_treasure"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.adventuring_gear}
            label={"Adventuring Gear BUTTON"}
            name="adventuring_gear"
            width={4}
          />
        </Section>
        <Section
          saveCharacter={this.saveCharacter}
          title="Feats and Class Features"
        >
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.feats}
            label={"Feats SECTION"}
            name="feats"
            width={12}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.traits}
            label={"Traits SECTION"}
            name="traits"
            width={12}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.racial_traits}
            label={"Racial Traits SECTION"}
            name="racial_traits"
            width={12}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.classes}
            label={"Class Abilities SECTION"}
            name="classes"
            width={12}
          />
        </Section>
        <Section
          saveCharacter={this.saveCharacter}
          title="Casting and Sub-Systems"
        >
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.vancian_spells}
            label={"Vancian Spellcasting SECTION"}
            name="vancian_spells"
            width={12}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.sphere_casting}
            label={"Sphere Casting SECTION"}
            name="sphere_casting"
            width={12}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.sphere_practitioning}
            label={"Sphere Practitioning SECTION"}
            name="adventuring_gear"
            width={6}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.has_martial_focus}
            label={"Martial Focus"}
            name="has_martial_focus"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.veilweaving}
            label={"Veilweaving SECTION"}
            name="veilweaving"
            width={12}
          />
        </Section>
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary positioning-style"
                type="submit"
                name="action"
                onClick={this.saveCharacter}
              >
                Save
              </button>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Character;
