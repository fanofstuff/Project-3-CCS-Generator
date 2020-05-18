const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  // <!-- character document (array of following object model;
  // inclusion of user_id simply allows us to access that data if necessary;
  // is this the best way of doing things? Rather, what does having the user info let us do?
  // Thought for later.) -->
  {
    // <!--_id: ObjectId2 (auto-generated), -->
    // user_id: ObjectId1,
    // instead, do this the other way around; include character_id under the User model
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
        // _id: ObjectId(),
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
    // <!-- ideally, we could skip storing the mods and just invoke logic to calculate them instead;
    // would save space and provide a feature in one.
    // We might also be able to make this into an array with each position corresponding to
    // ability_scores[0] through [11]; probably not worth it.
    // As-is, the scores and mods let us do a bit of auto-calcing. -->
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
    // <!-- these two should probably be expanded in some way, but for now this is fine -->
    cmd: {
      type: Number,
      default: 10,
    },
    cmd_bonuses: [
      {
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
        cmb_label_and_value: {
          type: String,
          default: "",
        },
      },
    ],
    // Melee and Ranged are abnormal; probably, should be a Label with a "+" Button for each
    // Clicking this creates a new Section. Each Section is associated with one Attack.
    // It has the following information: Label (changes Section Title), Vector, Total Attack Bonus,
    // Total Damage, Critical Range, Damage Types, (Ammunition for Ranged), and Notes.
    // Both Total Attack Bonus and Total Damage are Buttons that open up Modals.
    melee_attacks: [
      {
        // _id: ObjectId(),
        ma_label: {
          type: String,
          default: "",
        },
        // <!-- that is, what you're using to attack, whether weapon or spell -->
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
        // _id: ObjectId(),
        ra_label: {
          type: String,
          default: "",
        },
        ra_vector: {
          type: String,
          default: "",
        },
        // <!-- that is, what you're using to attack, whether weapon or spell -->
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
        // _id: ObjectId(),
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
        // <!-- again, do we want Number or String; latter lets us use + symbol... -->
        skill_ranks: {
          type: String,
          default: "0",
        },
        // <!-- might want this to be internal logic; if (class_skill),
        // class_skill_bonus value = 3; display it automatically -->
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
    // _id: ObjectId(),
    martial_practitioner_modifier: {
      type: String,
      default: "",
    },
    martial_base_spheres: [
      {
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
        // _id: ObjectId(),
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
  }
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
