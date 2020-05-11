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
  character_description: {
    character_name: String, 
    alignment: String, 
    player_name: String, 
    character_level: Number, 
    classes: [
      {
        class_name: String,
        class_level: Number,
      },
    ],
    deity_name: String, 
    homeland: String, 
    race: String, 
    size: String, 
    gender: String,
    age: Number, 
    weight: Number, 
    hair_description: String,
    eyes_description: String,
  }, 
  ability_scores: { 
    // <!-- ideally, we could skip storing the mods and just invoke logic to calculate them instead; 
    // would save space and provide a feature in one. 
    // We might also be able to make this into an array with each position corresponding to 
    // ability_scores[0] through [11]; probably not worth it. 
    // As-is, the scores and mods let us do a bit of auto-calcing. -->
    str_score: Number,
    dex_score: Number,
    con_score: Number,
    int_score: Number,
    wis_score: Number,
    cha_score: Number,
    // <!-- str_mod: Number, <-- these would be irrelevant in that case. 
    // dex_mod: Number,
    // con_mod: Number,
    // int_mod: Number,
    // wis_mod: Number,
    // cha_mod: Number, -->
    temp_str_score: Number,
    temp_dex_score: Number,
    temp_con_score: Number,
    temp_int_score: Number,
    temp_wis_score: Number,
    temp_cha_score: Number,
    // <!-- temp_str_mod: Number,
    // temp_dex_mod: Number,
    // temp_con_mod: Number,
    // temp_int_mod: Number,
    // temp_wis_mod: Number,
    // temp_cha_mod: Number, -->
  }, 
  defenses: {
    ac: Number,
    ac_bonuses: [
      {
        ac_label: String, 
        ac_value:  Number 
        // <!-- can we do it this way? This would let us make the actual bonuses and penalties 
        // completely up the the user, right? And then we could just iterate over the array, 
        // adding {label} and {value} pairs to the modal!  -->
      }
    ],
    touch_ac: Number, 
    flat_footed_ac: Number,
    total_hp: Number,
    current_hp: Number,
    nonlethal_damage: Number,
    hit_die: String,
    dr: String,
    sr: Number,
    fort_save: Number,
    fort_bonuses: [
      {
        fort_label: String,
        fort_value: Number,
      }
    ],
    ref_save: Number,
    ref_bonuses: [
      {
        ref_label: String,
        ref_value: Number,
      }
    ],
    will_save: Number,
    will_bonuses: [
      {
        will_label: String,
        will_value: Number,
      }
    ],
    resistances: String,
    immunities: String, 
    // <!-- these two should probably be expanded in some way, but for now this is fine -->
    cmd: Number, 
    cmd_bonuses: [
      {
        cmd_label: String,
        cmd_value: Number
      }
    ]
  },
  offenses: {
    init: Number,
    init_bonuses: [
      {
        init_label: String,
        init_value: Number,
      }
    ],
    bab: Number,
    speeds: {
      base_speed: Number,
      speed_with_armor: Number,
      fly_speed_with_maneuv: String,
      swim_speed: Number,
      climb_speed: Number,
      burrow_speed: Number,
      teleport_speed: String,
    },
    cmb: Number, 
    cmb_bonuses: [
      {
        cmb_label: String,
        cmb_value: Number,
      }
    ],
    melee_attacks: [
      {
        ma_label: String,
        ma_vector: String, 
        // <!-- that is, what you're using to attack, whether weapon or spell -->
        ma_total_attack_bonus: String,
        ma_attack_bonuses: [
          {
            ma_attack_label: String,
            ma_attack_bonus: Number,
          }
        ],
        ma_total_damage: String,
        ma_damage_bonuses: [
          {
            ma_damage_label: String,
            ma_damage_bonus: Number,
          }
        ],
        ma_criticals: String,
        ma_damage_types: String,
        ma_notes: [
          {
            ma_note_details: String,
          }
        ]
      }
    ],
    ranged_attacks: [
      {
        ra_label: String,
        ra_vector: String, 
        // <!-- that is, what you're using to attack, whether weapon or spell -->
        ra_total_attack_bonus: String,
        ra_attack_bonuses: [
          {
            ra_attack_label: String,
            ra_attack_bonus: Number,
          }
        ],
        ra_total_damage: String,
        ra_damage_bonuses: [
          {
            ra_damage_label: String,
            ra_damage_bonus: Number,
          }
        ],
        ra_criticals: String,
        ra_damage_types: String,
        ra_ammunition: String,
        ra_notes: [
          {
            ra_note_details: String,
          }
        ]
      }
    ],
  },
  skills_section: {
    total_ranks: Number,
    armor_check_penalty: Number,
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
        skill_name: String,
        skill_total: Number, 
        // <!-- again, do we want Number or String; latter lets us use + symbol... -->
        ability_modifier: {
          ability_label: {
            type: String, 
            default: "Str" 
            // <!-- might be unnecessary; see above; as-is, this makes ALL skills default to STR... -->
          },
          ability_value: Number
        },
        skill_ranks: Number,
        class_skill_bonus: Number, 
        // <!-- might want this to be internal logic; if (class_skill), 
        // class_skill_bonus value = 3; display it automatically -->
        skill_bonuses: [
          {
            skill_label: String,
            skill_value: Number,
          }
        ]
      }
    ],
    languages: String,
    current_xp: Number, 
    xp_for_next_level: Number,
  },
  equipment: {
    money: {
      platinum: Number,
      gold: Number,
      silver: Number,
      copper: Number
    },
    trade_goods: [
      {
        goods_label: String,
        goods_description: String,
        goods_value: Number,
      }
    ],
    other_treasure: [
      {
        treasure_label: String,
        treasure_description: String,
        treasure_value: Number,
      }
    ],
    adventuring_gear: [
      {
        gear_label: String,
        gear_description: String,
        gear_value: Number,
      }
    ]
  },
  special_abilities: {
    feats: [
      {
        feat_name: String,
        feat_type: String,
        feat_source: String,
        feat_description: String,
      }
    ],
    traits: [
      {
        trait_name: String,
        trait_type: String,
        trait_source: String,
        trait_description: String,
      }
    ],
    racial_traits: [
      {
        trait_name: String,
        trait_description: String
      }
    ],
    classes: [
      {
        class_name: String,
        class_abilities: [
          {
            ability_name: String,
            ability_type: String,
            ability_source: String,
            ability_description: String,
          }
        ]
      }
    ]
  },
  subsystems: { 
    // <!-- MVP would be getting these 4 working properly; adding more should be easy after that -->
    vancian_spells: [ 
      // <!-- make two buttons; 
      // prepared needs 0th spells/day and doesn't need spells known section, 
      // while spontaneous doesn't need 0th/day but does need spells known section. 
      // Data structure can be the same for both, though. -->
      {
        spell_dcs: [
          {
            zeroth: Number,
            first: Number,
            second: Number,
            third: Number,
            fourth: Number,
            fifth: Number, 
            sixth: Number, 
            seventh: Number, 
            eight: Number, 
            ninth: Number, 
          }
        ],
        spells_per_day: [
          {
            zeroth: Number,
            first: Number,
            second: Number,
            third: Number,
            fourth: Number,
            fifth: Number, 
            sixth: Number, 
            seventh: Number, 
            eight: Number, 
            ninth: Number, 
          }
        ],
        spells_remaining: [ 
          // <!-- mainly for spontaneous -->
          {
            zeroth: Number,
            first: Number,
            second: Number,
            third: Number,
            fourth: Number,
            fifth: Number, 
            sixth: Number, 
            seventh: Number, 
            eight: Number, 
            ninth: Number, 
          }
        ],
        spells_known: [
          {
            zeroth: Number,
            first: Number,
            second: Number,
            third: Number,
            fourth: Number,
            fifth: Number, 
            sixth: Number, 
            seventh: Number, 
            eight: Number, 
            ninth: Number, 
          }
        ],
        spells_by_level: [
          {
            zeroth_spells: [ 
              // <!-- is there a way to abstract this? 
              // Otherwise, I'm going to turn the spells array into a separate document 
              // to reference with a foreign key. We'll have to do this 9 more times, otherwise. -->
              {
                spell_name: String,
                spell_level: Number,
                spell_cl: Number,
                spell_dc: Number,
                spell_school: String,
                spell_subschool: String,
                spell_times_prepared: Number,
                spell_times_cast: Number,
                spell_description: String,
              }
            ]
          }
        ]
      }
    ],
    sphere_casting: [
      {
        casting_modifier: String,
        total_sp: Number, 
        current_sp: Number,
        base_cl: Number,
        spheres: [
          {
            sphere_name: String,
            sphere_cl: Number,
            sphere_dc: Number,
            sphere_talents: [
              {
                talent_name: String,
                talent_description: String,
              }
            ],
            sphere_drawbacks: [
              {
                drawback_name: String,
                drawback_description: String
              }
            ],
            sphere_abilities: [
              {
                ability_name: String,
                ability_cost: Number,
                ability_action: String,
                ability_duration: String,
                ability_description: String
              }
            ]
          }
        ]
      }
    ],
    sphere_practitioning: [
      {
        practitioner_modifier: String,
        spheres: [ 
          // <!-- button creates a new section w/ header; 
          // later arrays make buttons that pull up modals -->
          {
            sphere_name: String,
            sphere_level: Number,
            sphere_dc: Number,
            associated_skill: String,
            free_skill_ranks: Number,
            sphere_talents: [
              {
                talent_name: String,
                talent_description: String,
              }
            ],
            sphere_drawbacks: [
              {
                drawback_name: String,
                drawback_description: String
              }
            ],
            sphere_abilities: [
              {
                ability_name: String,
                ability_cost: Number,
                ability_action: String,
                ability_duration: String,
                ability_description: String
              }
            ]
          }
        ]
      }
    ],
    has_martial_focus: Boolean,
    veilweaving: [
      {
        base_essence: Number,
        uninvested_essense: Number,
        maximum_veils: Number,
        available_binds: String,        
        veils: [
          {
            veil_name: String, 
            veil_location: String,
            veil_description: String,
            max_invested_essense: Number,
            current_invested_essense: Number,
            is_shaped: Boolean,
            is_bound: Boolean,
          }
        ]
      }
    ]
  }
}
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;