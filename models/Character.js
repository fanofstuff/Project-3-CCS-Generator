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
        class_name: {
          type: String,
          default: "",
        },
        class_level: {
          type: Number,
          default: 1,
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
    // <!-- str_mod: Number, <-- these would be irrelevant in that case.
    // dex_mod: Number,
    // con_mod: Number,
    // int_mod: Number,
    // wis_mod: Number,
    // cha_mod: Number, -->
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
    // <!-- temp_str_mod: Number,
    // temp_dex_mod: Number,
    // temp_con_mod: Number,
    // temp_int_mod: Number,
    // temp_wis_mod: Number,
    // temp_cha_mod: Number, -->
    ac: {
      type: Number,
      default: 10,
    },
    ac_bonuses: [
      {
        ac_label: {
          type: String,
          default: "",
        },
        ac_value: {
          type: Number,
          default: 0,
        },
        // <!-- can we do it this way? This would let us make the actual bonuses and penalties
        // completely up the the user, right? And then we could just iterate over the array,
        // adding {label} and {value} pairs to the modal!  -->
      },
    ],
    touch_ac: {
      type: Number,
      default: 10,
    },
    flat_footed_ac: {
      type: Number,
      default: 10,
    },
    total_hp: {
      type: Number,
      default: 10,
    },
    current_hp: {
      type: Number,
      default: 10,
    },
    nonlethal_damage: {
      type: Number,
      default: 0,
    },
    hit_die: {
      type: String,
      default: "",
    },
    dr: {
      type: String,
      default: "",
    },
    sr: {
      type: Number,
      default: 0,
    },
    fort_save: {
      type: Number,
      default: 0,
    },
    fort_bonuses: [
      {
        fort_label: {
          type: String,
          default: "",
        },
        fort_value: {
          type: Number,
          default: 0,
        },
      },
    ],
    ref_save: {
      type: Number,
      default: 0,
    },
    ref_bonuses: [
      {
        ref_label: {
          type: String,
          default: "",
        },
        ref_value: {
          type: Number,
          default: 0,
        },
      },
    ],
    will_save: {
      type: Number,
      default: 0,
    },
    will_bonuses: [
      {
        will_label: {
          type: String,
          default: "",
        },
        will_value: {
          type: Number,
          default: 0,
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
        cmd_label: {
          type: String,
          default: "",
        },
        cmd_value: {
          type: Number,
          default: 0,
        },
      },
    ],
    initiative: {
      type: Number,
      default: 0,
    },
    initiative_bonuses: [
      {
        init_label: {
          type: String,
          default: "",
        },
        init_value: {
          type: Number,
          default: 0,
        },
      },
    ],
    bab: {
      type: Number,
      default: 0,
    },
    base_speed: {
      type: Number,
      default: 30,
    },
    speed_with_armor: {
      type: Number,
      default: 20,
    },
    fly_speed_with_maneuv: {
      type: String,
      default: "",
    },
    swim_speed: {
      type: Number,
      default: 0,
    },
    climb_speed: {
      type: Number,
      default: 0,
    },
    burrow_speed: {
      type: Number,
      default: 0,
    },
    teleport_speed: {
      type: String,
      default: "",
    },
    cmb: {
      type: Number,
      default: 0,
    },
    cmb_bonuses: [
      {
        cmb_label: {
          type: String,
          default: "",
        },
        cmb_value: {
          type: Number,
          default: 0,
        },
      },
    ],
    melee_attacks: [
      {
        ma_label: {
          type: String,
          default: "",
        },
        ma_vector: {
          type: String,
          default: "",
        },
        // <!-- that is, what you're using to attack, whether weapon or spell -->
        ma_total_attack_bonus: {
          type: String,
          default: "",
        },
        ma_attack_bonuses: [
          {
            ma_attack_label: {
              type: String,
              default: "",
            },
            ma_attack_bonus: {
              type: Number,
              default: 0,
            },
          },
        ],
        ma_total_damage: {
          type: String,
          default: "",
        },
        ma_damage_bonuses: [
          {
            ma_damage_label: {
              type: String,
              default: "",
            },
            ma_damage_bonus: {
              type: String,
              default: "",
            },
          },
        ],
        ma_criticals: {
          type: String,
          default: "",
        },
        ma_damage_types: {
          type: String,
          default: "",
        },
        ma_notes: [
          {
            ma_note_details: {
              type: String,
              default: "",
            },
          },
        ],
      },
    ],
    ranged_attacks: [
      {
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
        ra_attack_bonuses: [
          {
            ra_attack_label: {
              type: String,
              default: "",
            },
            ra_attack_bonus: {
              type: Number,
              default: 0,
            },
          },
        ],
        ra_total_damage: {
          type: String,
          default: "",
        },
        ra_damage_bonuses: [
          {
            ra_damage_label: {
              type: String,
              default: "",
            },
            ra_damage_bonus: {
              type: String,
              default: "",
            },
          },
        ],
        ra_criticals: {
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
        ra_notes: [
          {
            ra_note_details: {
              type: String,
              default: "",
            },
          },
        ],
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
      // <!-- trained only and skill name should be hard coded, I suppose...
      // or maybe set them as default inputs on the front-end, such that they're there
      // as "Acrobatics" or whatever and are saved as if they were real inputs?
      // That would even solve my 'default' problem. Investigate that!
      // MVP might just have the user fill in all of this, however.  -->
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
          type: Number,
          default: 0,
        },
        // <!-- again, do we want Number or String; latter lets us use + symbol... -->
        ability_modifier: {
          ability_label: {
            type: String,
            default: "Str",
            // <!-- might be unnecessary; see above; as-is, this makes ALL skills default to STR... -->
          },
          ability_value: {
            type: Number,
            default: 0,
          },
        },
        skill_ranks: {
          type: Number,
          default: 0,
        },
        class_skill_bonus: {
          type: Number,
          default: 0,
        },
        // <!-- might want this to be internal logic; if (class_skill),
        // class_skill_bonus value = 3; display it automatically -->
        skill_bonuses: [
          {
            skill_label: {
              type: String,
              default: "",
            },
            skill_value: {
              type: Number,
              default: 0,
            },
          },
        ],
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
          type: Number,
          default: 0,
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
          type: Number,
          default: 0,
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
          type: Number,
          default: 0,
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
        feat_source: {
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
        trait_source: {
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
        trait_description: {
          type: String,
          default: "",
        },
      },
    ],
    classes: [
      {
        class_name: {
          type: String,
          default: "",
        },
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
            ability_source: {
              type: String,
              default: "",
            },
            ability_description: {
              type: String,
              default: "",
            },
          },
        ],
      },
    ],
    // <!-- MVP would be getting these 4 working properly; adding more should be easy after that -->
    vancian_spells: [
      // <!-- make two buttons;
      // prepared needs 0th spells/day and doesn't need spells known section,
      // while spontaneous doesn't need 0th/day but does need spells known section.
      // Data structure can be the same for both, though. -->
      {
        spell_dcs: [
          {
            zeroth: {
              type: Number,
              default: 0,
            },
            first: {
              type: Number,
              default: 0,
            },
            second: {
              type: Number,
              default: 0,
            },
            third: {
              type: Number,
              default: 0,
            },
            fourth: {
              type: Number,
              default: 0,
            },
            fifth: {
              type: Number,
              default: 0,
            },
            sixth: {
              type: Number,
              default: 0,
            },
            seventh: {
              type: Number,
              default: 0,
            },
            eight: {
              type: Number,
              default: 0,
            },
            ninth: {
              type: Number,
              default: 0,
            },
          },
        ],
        spells_per_day: [
          {
            zeroth: {
              type: Number,
              default: 0,
            },
            first: {
              type: Number,
              default: 0,
            },
            second: {
              type: Number,
              default: 0,
            },
            third: {
              type: Number,
              default: 0,
            },
            fourth: {
              type: Number,
              default: 0,
            },
            fifth: {
              type: Number,
              default: 0,
            },
            sixth: {
              type: Number,
              default: 0,
            },
            seventh: {
              type: Number,
              default: 0,
            },
            eight: {
              type: Number,
              default: 0,
            },
            ninth: {
              type: Number,
              default: 0,
            },
          },
        ],
        spells_remaining: [
          // <!-- mainly for spontaneous -->
          {
            zeroth: {
              type: Number,
              default: 0,
            },
            first: {
              type: Number,
              default: 0,
            },
            second: {
              type: Number,
              default: 0,
            },
            third: {
              type: Number,
              default: 0,
            },
            fourth: {
              type: Number,
              default: 0,
            },
            fifth: {
              type: Number,
              default: 0,
            },
            sixth: {
              type: Number,
              default: 0,
            },
            seventh: {
              type: Number,
              default: 0,
            },
            eight: {
              type: Number,
              default: 0,
            },
            ninth: {
              type: Number,
              default: 0,
            },
          },
        ],
        spells_known: [
          {
            zeroth: {
              type: Number,
              default: 0,
            },
            first: {
              type: Number,
              default: 0,
            },
            second: {
              type: Number,
              default: 0,
            },
            third: {
              type: Number,
              default: 0,
            },
            fourth: {
              type: Number,
              default: 0,
            },
            fifth: {
              type: Number,
              default: 0,
            },
            sixth: {
              type: Number,
              default: 0,
            },
            seventh: {
              type: Number,
              default: 0,
            },
            eight: {
              type: Number,
              default: 0,
            },
            ninth: {
              type: Number,
              default: 0,
            },
          },
        ],
        spells_by_level: [
          {
            zeroth_spells: [
              // <!-- is there a way to abstract this?
              // Otherwise, I'm going to turn the spells array into a separate document
              // to reference with a foreign key. We'll have to do this 9 more times, otherwise. -->
              {
                spell_name: {
                  type: String,
                  default: "",
                },
                spell_level: {
                  type: Number,
                  default: 0,
                },
                spell_cl: {
                  type: Number,
                  default: 0,
                },
                spell_dc: {
                  type: Number,
                  default: 0,
                },
                spell_school: {
                  type: String,
                  default: "",
                },
                spell_subschool: {
                  type: String,
                  default: "",
                },
                spell_times_prepared: {
                  type: Number,
                  default: 0,
                },
                spell_times_cast: {
                  type: Number,
                  default: 0,
                },
                spell_description: {
                  type: String,
                  default: "",
                },
              },
            ],
          },
        ],
      },
    ],
    sphere_casting: [
      {
        casting_modifier: {
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
        spheres: [
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
              },
            ],
            sphere_abilities: [
              {
                ability_name: {
                  type: String,
                  default: "",
                },
                ability_cost: {
                  type: Number,
                  default: 0,
                },
                ability_action: {
                  type: String,
                  default: "",
                },
                ability_duration: {
                  type: String,
                  default: "",
                },
                ability_description: {
                  type: String,
                  default: "",
                },
              },
            ],
          },
        ],
      },
    ],
    sphere_practitioning: [
      {
        practitioner_modifier: {
          type: String,
          default: "",
        },
        spheres: [
          // <!-- button creates a new section w/ header;
          // later arrays make buttons that pull up modals -->
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
            associated_skill: {
              type: String,
              default: "",
            },
            free_skill_ranks: {
              type: Number,
              default: 0,
            },
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
              },
            ],
            sphere_abilities: [
              {
                ability_name: {
                  type: String,
                  default: "",
                },
                ability_cost: {
                  type: Number,
                  default: 0,
                },
                ability_action: {
                  type: String,
                  default: "",
                },
                ability_duration: {
                  type: String,
                  default: "",
                },
                ability_description: {
                  type: String,
                  default: "",
                },
              },
            ],
          },
        ],
      },
    ],
    has_martial_focus: {
      type: Boolean,
      default: true,
    },
    veilweaving: [
      {
        base_essence: {
          type: Number,
          default: 0,
        },
        uninvested_essense: {
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
            veil_description: {
              type: String,
              default: "",
            },
            max_invested_essense: {
              type: Number,
              default: 0,
            },
            current_invested_essense: {
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
      },
    ],
  }
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
