const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  character_name: {
    type: String,
    default: "Unnamed",
  },
  alignment: {
    type: String,
    default: "",
  },
  player_name: {
    type: String,
    default: "",
  },
  character_level: {
    type: Number,
    default: 1,
  },
  class_levels: [
    {
      class_name_and_level: {
        type: String,
        default: "",
      },
    },
  ],
  deity_name: {
    type: String,
    default: "",
  },
  homeland: {
    type: String,
    default: "",
  },
  race: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: 20,
  },
  weight: {
    type: String,
    default: "",
  },
  hair_description: {
    type: String,
    default: "",
  },
  eyes_description: {
    type: String,
    default: "",
  },
  str_score: {
    type: Number,
    default: 10,
  },
  dex_score: {
    type: Number,
    default: 10,
  },
  con_score: {
    type: Number,
    default: 10,
  },
  int_score: {
    type: Number,
    default: 10,
  },
  wis_score: {
    type: Number,
    default: 10,
  },
  cha_score: {
    type: Number,
    default: 10,
  },
  temp_str_score: {
    type: Number,
    default: 10,
  },
  temp_dex_score: {
    type: Number,
    default: 10,
  },
  temp_con_score: {
    type: Number,
    default: 10,
  },
  temp_int_score: {
    type: Number,
    default: 10,
  },
  temp_wis_score: {
    type: Number,
    default: 10,
  },
  temp_cha_score: {
    type: Number,
    default: 10,
  },
  ac: {
    type: Number,
    default: 10,
  },
  ac_bonuses: [
    {
      ac_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  touch_ac: {
    type: Number,
    default: 10,
  },
  touch_ac_bonuses: [
    {
      touch_ac_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  flat_footed_ac: {
    type: Number,
    default: 10,
  },
  ff_ac_bonuses: [
    {
      ff_ac_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  total_hp: {
    type: Number,
    default: 0,
  },
  current_hp: {
    type: Number,
    default: 0,
  },
  nonlethal_damage: {
    type: Number,
    default: 0,
  },
  temp_hp: {
    type: Number,
    default: 0,
  },
  dr: {
    type: String,
    default: "",
  },
  sr: {
    type: String,
    default: "",
  },
  fort_save: {
    type: String,
    default: "+0",
  },
  fort_bonuses: [
    {
      fort_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  ref_save: {
    type: String,
    default: "+0",
  },
  ref_bonuses: [
    {
      ref_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  will_save: {
    type: String,
    default: "+0",
  },
  will_bonuses: [
    {
      will_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  resistances: {
    type: String,
    default: "",
  },
  immunities: {
    type: String,
    default: "",
  },
  cmd: {
    type: Number,
    default: 10,
  },
  cmd_bonuses: [
    {
      cmd_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  initiative: {
    type: String,
    default: "+0",
  },
  initiative_bonuses: [
    {
      init_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  bab: {
    type: String,
    default: "+0",
  },
  base_speed: {
    type: String,
    default: "30ft",
  },
  speed_with_armor: {
    type: String,
    default: "20ft",
  },
  other_speeds: [
    {
      speed_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  cmb: {
    type: String,
    default: "+0",
  },
  cmb_bonuses: [
    {
      cmb_label_and_value: {
        type: String,
        default: "",
      },
    },
  ],
  melee_attacks: [
    {
      ma_label: {
        type: String,
        default: "",
      },
      ma_total_attack_bonus: {
        type: String,
        default: "",
      },
      ma_total_damage: {
        type: String,
        default: "",
      },
      ma_criticals: {
        type: String,
        default: "",
      },
      ma_reach: {
        type: String,
        default: "5ft",
      },
      ma_damage_types: {
        type: String,
        default: "",
      },
      ma_notes: {
        type: String,
        default: "",
      },
    },
  ],
  ranged_attacks: [
    {
      ra_label: {
        type: String,
        default: "",
      },
      ra_total_attack_bonus: {
        type: String,
        default: "",
      },
      ra_total_damage: {
        type: String,
        default: "",
      },
      ra_criticals: {
        type: String,
        default: "",
      },
      ra_range: {
        type: String,
        default: "",
      },
      ra_damage_types: {
        type: String,
        default: "",
      },
      ra_ammunition: {
        type: String,
        default: "",
      },
      ra_notes: {
        type: String,
        default: "",
      },
    },
  ],
  total_ranks: {
    type: Number,
    default: 0,
  },
  armor_check_penalty: {
    type: Number,
    default: 0,
  },
  skills: [
    {
      class_skill: {
        type: Boolean,
        default: false,
      },
      trained_only: {
        type: Boolean,
        default: false,
      },
      skill_name: {
        type: String,
        default: "",
      },
      skill_total: {
        type: String,
        default: "+0",
      },
      skill_ranks: {
        type: String,
        default: "0",
      },
    },
  ],
  languages: {
    type: String,
    default: "",
  },
  current_xp: {
    type: Number,
    default: 0,
  },
  xp_for_next_level: {
    type: Number,
    default: 0,
  },
  platinum: {
    type: Number,
    default: 0,
  },
  gold: {
    type: Number,
    default: 0,
  },
  silver: {
    type: Number,
    default: 0,
  },
  copper: {
    type: Number,
    default: 0,
  },
  trade_goods: [
    {
      goods_label: {
        type: String,
        default: "",
      },
      goods_description: {
        type: String,
        default: "",
      },
      goods_value: {
        type: String,
        default: "0gp",
      },
    },
  ],
  other_treasure: [
    {
      treasure_label: {
        type: String,
        default: "",
      },
      treasure_description: {
        type: String,
        default: "",
      },
      treasure_value: {
        type: String,
        default: "0gp",
      },
    },
  ],
  adventuring_gear: [
    {
      gear_label: {
        type: String,
        default: "",
      },
      gear_description: {
        type: String,
        default: "",
      },
      gear_value: {
        type: String,
        default: "0gp",
      },
    },
  ],
  feats: [
    {
      feat_name: {
        type: String,
        default: "",
      },
      feat_type: {
        type: String,
        default: "",
      },
      feat_description: {
        type: String,
        default: "",
      },
    },
  ],
  traits: [
    {
      trait_name: {
        type: String,
        default: "",
      },
      trait_type: {
        type: String,
        default: "",
      },
      trait_description: {
        type: String,
        default: "",
      },
    },
  ],
  racial_traits: [
    {
      trait_name: {
        type: String,
        default: "",
      },
      trait_type: {
        type: String,
        default: "",
      },
      trait_description: {
        type: String,
        default: "",
      },
    },
  ],
  class_abilities: [
    {
      ability_name: {
        type: String,
        default: "",
      },
      ability_type: {
        type: String,
        default: "",
      },
      ability_description: {
        type: String,
        default: "",
      },
    },
  ],
  sphere_casting_modifier: {
    type: String,
    default: "",
  },
  total_sp: {
    type: Number,
    default: 0,
  },
  current_sp: {
    type: Number,
    default: 0,
  },
  base_cl: {
    type: Number,
    default: 0,
  },
  base_spheres: [
    {
      sphere_name: {
        type: String,
        default: "",
      },
      sphere_cl: {
        type: Number,
        default: 0,
      },
      sphere_dc: {
        type: Number,
        default: 0,
      },
    },
  ],
  sphere_talents: [
    {
      talent_name: {
        type: String,
        default: "",
      },
      talent_description: {
        type: String,
        default: "",
      },
      talent_type: {
        type: String,
        default: "",
      },
    },
  ],
  sphere_drawbacks: [
    {
      drawback_name: {
        type: String,
        default: "",
      },
      drawback_description: {
        type: String,
        default: "",
      },
      drawback_type: {
        type: String,
        default: "",
      },
    },
  ],
  martial_practitioner_modifier: {
    type: String,
    default: "",
  },
  martial_base_spheres: [
    {
      sphere_name: {
        type: String,
        default: "",
      },
      sphere_level: {
        type: Number,
        default: 0,
      },
      sphere_dc: {
        type: Number,
        default: 0,
      },
    },
  ],
  martial_sphere_talents: [
    {
      talent_name: {
        type: String,
        default: "",
      },
      talent_description: {
        type: String,
        default: "",
      },
      talent_description: {
        type: String,
        default: "",
      },
    },
  ],
  martial_sphere_drawbacks: [
    {
      drawback_name: {
        type: String,
        default: "",
      },
      drawback_description: {
        type: String,
        default: "",
      },
      drawback_type: {
        type: String,
        default: "",
      },
    },
  ],
  has_martial_focus: {
    type: Boolean,
    default: true,
  },
  has_second_martial_focus: {
    type: Boolean,
    default: true,
  },
  veilweaving_modifier: {
    type: String,
    default: "",
  },
  veilweaving_level: {
    type: Number,
    default: 0,
  },
  base_essence: {
    type: Number,
    default: 0,
  },
  uninvested_essence: {
    type: Number,
    default: 0,
  },
  maximum_veils: {
    type: Number,
    default: 0,
  },
  available_binds: {
    type: String,
    default: "",
  },
  veils: [
    {
      veil_name: {
        type: String,
        default: "",
      },
      veil_location: {
        type: String,
        default: "",
      },
      max_invested_essence: {
        type: Number,
        default: 0,
      },
      current_invested_essence: {
        type: Number,
        default: 0,
      },
      is_shaped: {
        type: Boolean,
        default: false,
      },
      is_bound: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
