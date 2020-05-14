import React, { Component } from "react";
import API from "../../utils/API";
import "./Character.css";
import $ from "jquery";
// import update from "immutability-helper";
import CharacterInput from "../../components/Shared/CharacterInput/CharacterInput";
import ModifierOutput from "../../components/Shared/ModifierOutput/ModifierOutput";
import Section from "../../components/Shared/Section/Section";

class Character extends Component {
  state = {
    characterData: {},
  };

  getCharacterInfo = () => {
    API.getCharacter(window.location.pathname)
      .then((response) => {
        console.log(response);
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
    this.setState({
      characterData: { [name]: value },
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
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.class_levels}
            label={"FUTURE CLASSES BUTTON"}
            name="class_levels"
            width={4}
          />
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
            value={this.state.characterData.ac}
            label={"FUTURE AC BUTTON"}
            name="ac"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.touch_ac}
            label={"FUTURE TOUCH AC BUTTON"}
            name="touch_ac"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.flat_footed_ac}
            label={"FUTURE FLAT-FOOTED AC BUTTON"}
            name="flat_footed_ac"
            width={4}
          />
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
            value={this.state.characterData.hit_die}
            label={"Hit Die"}
            name="hit_die"
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
            value={this.state.characterData.fort_save}
            label={"FUTURE FORT SAVE BUTTON"}
            name="fort_save"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.ref_save}
            label={"FUTURE REF SAVE BUTTON"}
            name="ref_save"
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.will_save}
            label={"FUTURE WILL SAVE BUTTON"}
            name="will_save"
            width={4}
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
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.cmd}
            label={"CMD BUTTON"}
            name="cmd"
            width={2}
          />
        </Section>
        <Section saveCharacter={this.saveCharacter} title="Attacks">
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.initiative}
            label={"INIT BUTTON"}
            name="initiative"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.bab}
            label={"BAB"}
            name="bab"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.base_speed}
            label={"Speed"}
            name="base_speed"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.speed_with_armor}
            label={"with Armor"}
            name="speed_with_armor"
            width={3}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.fly_speed_with_maneuv}
            label={"Fly Speed"}
            name="fly_speed_with_maneuv"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.swim_speed}
            label={"Swim Speed"}
            name="swim_speed"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.climb_speed}
            label={"Climb Speed"}
            name="climb_speed"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.burrow_speed}
            label={"Burrow Speed"}
            name="burrow_speed"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.teleport_speed}
            label={"Tele-Speed"}
            name="teleport_speed"
            width={2}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.cmb}
            label={"CMB BUTTON"}
            name="cmb"
            width={2}
          />
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
            width={4}
          />
          <CharacterInput
            onTextChange={this.handleEvent}
            value={this.state.characterData.armor_check_penalty}
            label={"Armor Check Penalty"}
            name="armor_check_penalty"
            width={4}
          />
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
            width={6}
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
        <Section saveCharacter={this.saveCharacter} title="Feats and Class Features">
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
        <Section saveCharacter={this.saveCharacter} title="Casting and Sub-Systems">
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
