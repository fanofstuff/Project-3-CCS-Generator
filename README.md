<!-- Mapping out my MongoDB Structure: 

We have one major choice to make at this point - do the efficient thing, and use foreign keys to link our CCS collection to the User collection that we'll need to have user login work properly, OR do the brute force thing and just have our collection include BOTH (i.e. User 1 {dataBitOne: "", dataBitTwo: "", etc}, User 2 {etc, etc}). Benefits of one: probably faster and definitely cleaner. Benefits of two: easier to intuit and doesn't require Foreign Keys. 

...Let's just go with one. We can default back to two if one is too complicated. 

Serious question: if in doubt, should I just default to a String? Like, if we're not doing any logic with the entered values, is there a downside to just having them be Strings instead of Integers? 
 -->

<!-- user document (an array of the following object model) -->
{
  <!-- _id: ObjectId1 (auto-generated),  -->
  email: String,
  <!-- include logic to check @something.com is present, -->
  password: String, 
  <!-- will need encryption of some kind, and probably length logic at minimum -->
}

// <!-- character document (array of following object model; inclusion of user_id simply allows us to access that data if necessary; is this the best way of doing things? Rather, what does having the user info let us do? Thought for later.) -->
{
  // <!--_id: ObjectId2 (auto-generated), -->
  user_id: ObjectId1, 
  character_description: {
    character_name: String, 
    alignment: String, 
    player_name: String, 
    character_level: Integer, 
    classes: [
      {
        class_name: String,
        class_level: Integer,
      }
    ]
    deity_name: String, 
    homeland: String, 
    race: String, 
    size: String, 
    gender: String,
    age: Integer, 
    weight: Integer, 
    hair_description: String,
    eyes_description: String,
  }, 
  ability_scores: { 
    // <!-- ideally, we could skip storing the mods and just invoke logic to calculate them instead; would save space and provide a feature in one. We might also be able to make this into an array with each position corresponding to ability_scores[0] through [11]; probably not worth it. As-is, the scores and mods let us do a bit of auto-calcing. -->
    str_score: Integer,
    dex_score: Integer,
    con_score: Integer,
    int_score: Integer,
    wis_score: Integer,
    cha_score: Integer,
    // <!-- str_mod: Integer, <-- these would be irrelevant in that case. 
    // dex_mod: Integer,
    // con_mod: Integer,
    // int_mod: Integer,
    // wis_mod: Integer,
    // cha_mod: Integer, -->
    temp_str_score: Integer,
    temp_dex_score: Integer,
    temp_con_score: Integer,
    temp_int_score: Integer,
    temp_wis_score: Integer,
    temp_cha_score: Integer,
    // <!-- temp_str_mod: Integer,
    // temp_dex_mod: Integer,
    // temp_con_mod: Integer,
    // temp_int_mod: Integer,
    // temp_wis_mod: Integer,
    // temp_cha_mod: Integer, -->
  }, 
  defenses: {
    ac: Integer,
    ac_bonuses: [
      {
        ac_label: String, 
        ac_value:  Integer 
        // <!-- can we do it this way? This would let us make the actual bonuses and penalties completely up the the user, right? And then we could just iterate over the array, adding {label} and {value} pairs to the modal!  -->
      }
    ],
    touch_ac: Integer, 
    flat_footed_ac: Integer,
    total_hp: Integer,
    current_hp: Integer,
    nonlethal_damage: Integer,
    hit_die: String,
    dr: String,
    sr: Integer,
    fort_save: Integer,
    fort_bonuses: [
      {
        fort_label: String,
        fort_value: Integer,
      }
    ],
    ref_save: Integer,
    ref_bonuses: [
      {
        ref_label: String,
        ref_value: Integer,
      }
    ],
    will_save: Integer,
    will_bonuses: [
      {
        will_label: String,
        will_value: Integer,
      }
    ],
    resistances: String,
    immunities: String, 
    // <!-- these two should probably be expanded in some way, but for now this is fine -->
    cmd: Integer, 
    cmd_bonuses: [
      {
        cmd_label: String,
        cmd_value: Integer
      }
    ]
  },
  offenses: {
    init: Integer,
    init_bonuses: [
      {
        init_label: String,
        init_value: Integer,
      }
    ],
    bab: Integer,
    speeds: {
      base_speed: Integer,
      speed_with_armor: Integer,
      fly_speed_with_maneuv: String,
      swim_speed: Integer,
      climb_speed: Integer,
      burrow_speed: Integer,
      teleport_speed: String,
    },
    cmb: Integer, 
    cmb_bonuses: [
      {
        cmb_label: String,
        cmb_value: Integer,
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
            ma_attack_bonus: Integer,
          }
        ]
        ma_total_damage: String,
        ma_damage_bonuses: [
          {
            ma_damage_label: String,
            ma_damage_bonus: Integer,
          }
        ]
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
            ra_attack_bonus: Integer,
          }
        ]
        ra_total_damage: String,
        ra_damage_bonuses: [
          {
            ra_damage_label: String,
            ra_damage_bonus: Integer,
          }
        ]
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
    total_ranks: Integer,
    armor_check_penalty: Integer,
    skills: [ 
      // <!-- trained only and skill name should be hard coded, I suppose... or maybe set them as default inputs on the front-end, such that they're there as "Acrobatics" or whatever and are saved as if they were real inputs? That would even solve my 'default' problem. Investigate that! MVP might just have the user fill in all of this, however.  -->
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
        skill_total: Integer, 
        // <!-- again, do we want Integer or String; latter lets us use + symbol... -->
        ability_modifier: {
          ability_label: {
            type: String, 
            default: "Str" 
            // <!-- might be unnecessary; see above; as-is, this makes ALL skills default to STR... -->
          },
          ability_value: Integer
        },
        skill_ranks: Integer,
        class_skill_bonus: Integer, 
        // <!-- might want this to be internal logic; if (class_skill), class_skill_bonus value = 3; display it automatically -->
        skill_bonuses: [
          {
            skill_label: String,
            skill_value: Integer,
          }
        ]
      }
    ],
    languages: String,
    current_xp: Integer, 
    xp_for_next_level: Integer,
  },
  equipment: {
    money: {
      platinum: Integer,
      gold: Integer,
      silver: Integer,
      copper: Integer
    },
    trade_goods: [
      {
        goods_label: String,
        goods_description: String,
        goods_value: Integer,
      }
    ],
    other_treasure: [
      {
        treasure_label: String,
        treasure_description: String,
        treasure_value: Integer,
      }
    ],
    adventuring_gear: [
      {
        gear_label: String,
        gear_description: String,
        gear_value: Integer,
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
      // <!-- make two buttons; prepared needs 0th spells/day and doesn't need spells known section, while spontaneous doesn't need 0th/day but does need spells known section. Data structure can be the same for both, though. -->
      {
        spell_dcs: [
          {
            0th: Integer,
            1st: Integer,
            2nd: Integer,
            3rd: Integer,
            4th: Integer,
            5th: Integer, 
            6th: Integer, 
            7th: Integer, 
            8th: Integer, 
            9th: Integer, 
          }
        ]
        spells_per_day: [
          {
            0th: Integer,
            1st: Integer,
            2nd: Integer,
            3rd: Integer,
            4th: Integer,
            5th: Integer, 
            6th: Integer, 
            7th: Integer, 
            8th: Integer, 
            9th: Integer, 
          }
        ],
        spells_remaining: [ 
          // <!-- mainly for spontaneous -->
          {
            0th: Integer,
            1st: Integer,
            2nd: Integer,
            3rd: Integer,
            4th: Integer,
            5th: Integer, 
            6th: Integer, 
            7th: Integer, 
            8th: Integer, 
            9th: Integer, 
          }
        ]
        spells_known: [
          {
            0th: Integer,
            1st: Integer,
            2nd: Integer,
            3rd: Integer,
            4th: Integer,
            5th: Integer, 
            6th: Integer, 
            7th: Integer, 
            8th: Integer, 
            9th: Integer, 
          }
        ],
        spell_levels: [
          {
            0th_spells: [ 
              // <!-- is there a way to abstract this? Otherwise, I'm going to turn the spells array into a separate document to reference with a foreign key. We'll have to do this 9 more times, otherwise. -->
              {
                spell_name: String,
                spell_level: Integer,
                spell_cl: Integer,
                spell_dc: Integer,
                spell_school: String,
                spell_subschool: String,
                spell_times_prepared: Integer,
                spell_times_cast: Integer,
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
        total_sp: Integer, 
        current_sp: Integer,
        base_cl: Integer,
        spheres: [
          {
            sphere_name: String,
            sphere_cl: Integer,
            sphere_dc: Integer,
            sphere_talents: [
              {
                talent_name: String,
                talent_description: String,
              }
            ],
            sphere_drawbacks: [
              {
                drawback_name: String,
                drawback_description: String.
              }
            ],
            sphere_abilities: [
              {
                ability_name: String,
                ability_cost: Integer,
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
          // <!-- button creates a new section w/ header; later arrays make buttons that pull up modals -->
          {
            sphere_name: String,
            sphere_level: Integer,
            sphere_dc: Integer,
            associated_skill: String,
            free_skill_ranks: Integer,
            sphere_talents: [
              {
                talent_name: String,
                talent_description: String,
              }
            ],
            sphere_drawbacks: [
              {
                drawback_name: String,
                drawback_description: String.
              }
            ],
            sphere_abilities: [
              {
                ability_name: String,
                ability_cost: Integer,
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
        base_essence: Integer,
        uninvested_essense: Integer,
        maximum_veils: Integer,
        available_binds: String,        
        veils: [
          {
            veil_name: String, 
            veil_location: String,
            veil_description: String,
            max_invested_essense: Integer,
            current_invested_essense: Integer,
            is_shaped: Boolean,
            is_bound: Boolean,
          }
        ]
      }
    ]
  }
}


Let's think through the logic of this website a bit. You start it up and sign up for an account for the first time. You enter your email and password info, and are redirected to the Home Page. At this point, the login/sign up button in the top right should now be a 'logout button'. Here, you click a button to "Create a New Character". This should do two things immediately. First, it creates a new instance of the Character Schema, generates the associated ID, and links the user's ID from req.params, creating a foreign key/manual reference between the two; specifically, the user should have the character's new Id added to an array of such Ids on the User's schema. This will allow the user to access multiple characters. Later, we'll generate "View Character" buttons based on those Ids. Once that's saved, the user will be redirected to the character sheet in question. The Character ID will be saved in the URL extension for req.params later. The Character sheet should start out in a 'default' state - plenty of spaces, but even more buttons used to specify lots of information that isn't necessary in the average game session. MOST things on the page will initially be pre-generated text, textareas, or buttons. Ideally, this page should have some form of auto-save. Barring that, a prominent SAVE button on the Navbar and at the bottom of the page will do in a pinch. Ah, that's important: each modal that pops up on button press - the text area for defining additional details about a spell, weapon, or stat - has its own save button. Pressing it does two things: saves that information to the database, and creates a button that is associated with that array item. For example, creating a Weapon should open up a box with Label, Description, and Value text boxes, with a save button and a discard button on the bottom. Clicking discard should simply close the window, clearing out the text boxes if necessary. Clicking save should instead take the information printed into those boxes and make an axios call to the backend to save that information with Mongoose. Upon success, it should clear the text boxes, close the window, and then generate a button on the DOM that references those values (or at least the Label). That button should then be able to open up that same window with the references already filled out, requiring another axios call for that information. 



Things to Accomplish Tonight, 5/12/2020: 
1. I want to build my own components. Focus on the character sheet page to the exclusion of all else. Find out what stuff gets copied over and over again, and then extract that out into something we can reuse. For instance, make sure we have a Row, Column, and Container for Bootstrap. Similarly, we're going to want something to chunk up the sections - it doesn't have to be a card, but it should let us make sub-page chunks of this character sheet. 
2. I want to get the backend logic working on the character sheet using Express, Router, Axios, and Mongoose. We have a very simple test succeed earlier; Ideally, we should be able to input the Character Description section by the end of the night. 
3. From there, we can start working on accessing that data via ID - in theory, we should just post the _id to the URL as part of the character pathway. If we can bind that into a button and store it on the front page, we can integrate that tech into the user authentication system that Jonathan is working on. 
4. If I'm stumped and still feel productive, take another crack at getting his system to work; maybe do some research on jsonwebtoken and the like. Also, see if we were supposed to include the SECRET_API_KEY or whatever in an .env file - maybe that's why it's not working. 