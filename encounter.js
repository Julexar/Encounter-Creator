/*
Encounter Creator for 5e in Roll20
Made by Julexar (https://app.roll20.net/users/9989180/julexar)
API Commands (GM Only):
!enc - Pulls up the Encounter Menu
    --create {Insert Name} - Creates an Encounter and pulls up the Edit Menu
    --{Insert Name/Number} - Shows the specifics of an Encounter by Name/Number
        --edit - Edit a specific Encounter
            --name {Insert Name} - Change the name of the Encounter
            --party add/rem --name/id {Insert Character Name/ID} - Adds/Removes a Character
            --cr min/max {Insert min/max CR} - Change the min/max CR of the Monsters in the Encounter
            --monsters add/rem {Insert Monster Name} - Adds/Removes a Monster
            --monster {Insert Monster Name} - Pulls up the Monster Editor
                (check !monster under edit for further options)
            --loot add {Insert Item Name} --val {Insert Item value} - Adds an item to the loot table
            --loot rem {Insert Item Name} - Removes an item from the loot table
        --loot gen {Insert amount} --minrare {Insert minimum rarity} --maxrare {Insert maximum rarity} - Generates a loot table
            --overwrite true/false - Specifies if the old loot table should be replaced
        --submit - Finishes the encounter creation and creates Monsters as well as a Handout for loot
!monster - Pulls up the Monster Menu
    --{Insert Monster name} - Selects a specific Monster
        --edit - Pulls up the Monster Editor
            --name {Insert Name} - Sets the Name of the Monster
            --type {Insert Type} - Sets the Monster's type
            --ac {Insert Numer} --type {Insert AC Type} - Sets the Monster's AC
            --hp {Insert Number} - Sets the Monster's HP
            --speed {Insert Speed} - Sets the Monster's Speed
            --attr {Insert Attribute} --{Insert value} - Sets the Attribute of a Monster
            --save {Insert Attribute} --{Insert value} - Sets the save bonus of a Monster
            --skill {Insert Skill} --{Insert value} - Sets the skill bonus of a Monster
            --vul {Insert Vulnerabilities} - Sets the Monster's Damage Vulnerabilities
            --res {Insert Resistances} - Sets the Monster's Resistances
            --dmg_immune {Insert Immunities} - Sets the Monster's Immunities
            --cond_immune {Insert Condition Immunities} - Sets the Monster's condition immunities
            --sense {Insert Senses} - Sets the Monster's Senses
            --lang {Insert Languages} - Sets the Monster's languages
            --cr {Insert Number} - Sets the Monster's CR
            --pb {Insert Number} - Sets the Monster's prof. bonus
            --caster true/false --{Insert Ability} --lvl {Insert number} - Sets whether the Monster can cast Spells and the spellcasting ability and caster lvl
            --spellmod {Insert number} - Sets the Monster's spell attack modifier
            --spelldc {Insert number} - Sets the Monster's spell save dc
            --ba true/false - Sets whether the Monster has Bonus Actions
            --react true/false - Sets whether the Monster has Reactions
            --legendact {Insert Number} - Sets the Monster's Number of Legendary Actions
            --myth true/false --desc {Insert description} - Sets whether the Monster has Mythic Actions and sets the description
            --traits - Pulls up the trait editor
                --{Insert Trait name} - Selects a specific trait
                    --setname {Insert Name} - Sets the name of a trait
                    --setdesc {Insert Desc} - Sets the description of a trait
                --add {Insert Trait name} --desc {Insert desc} - Adds a trait
                --rem {Insert Trait name} - Removes a trait
            --bonusactions - Pulls up the Bonus action editor
                --{Insert Bonus action name} - Selects a specific bonus action
                    --setname {Insert Name} - Sets the name of a bonus action
                    --setdesc {Insert Desc} - Sets the Description of a bonus action
                    --toggleatk --range {Insert range} --tohit {Insert number} - Toggles the bonus action to be an attack and sets the range and to hit
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage of the bonus action
                --add {Insert Bonus action name} - adds a bonus action
                    --desc {Insert Desc} - Sets the description
                    --dmg {Insert damage dice} --type {Insert damage type} - Sets the damage (and damage type)
                    --atk true/false - toggles attack and sets range and to hit
                        Required when true:
                        --range {Insert range} --tohit {Insert number}
                --rem {Insert Bonus action name} - removes a bonus action
            --actions - Pulls up the Action Editor
                --{Insert Action name} - Selects a specific action
                    --setname {Insert Name} - Sets the name of an Action
                    --setdesc {Insert Desc} - Sets the Description of an Action
                    --toggleatk --range {Insert range} - Toggles the action to be an attack and sets the range
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type of an Action
                --add {Insert Action name} - adds an action
                    --desc {Insert Desc} - Sets the description
                    --dmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type
                    --atk true/false - toggles attack and sets range and to hit
                        Required when true:
                        --range {Insert range} --tohit {Insert number}
                --rem {Insert action name} - removes an action
            --reactions - Pulls up the reaction editor
                --{Insert Reaction name} - Selects a specific reaction
                    --setname {Insert Name} - Sets the name of a Reaction
                    --setdesc {Insert Desc} - Sets the Description of a Reaction
                --add {Insert Reaction name} - adds a reaction
                    --desc {Insert Desc} - Sets the description
                --rem {Insert Reaction name} - removes a reaction
            --legend_actions - pulls up the legendary actions editor
                --{Insert Leg. Action name} - Selects a specific legendary action
                    --setname {Insert Name} - Sets the name of a legendary Action
                    --setdesc {Insert Desc} - Sets the Description of a legendary Action
                    --toggleatk --range {Insert range} - Toggles the legendary action to be an attack and sets the range
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type of a legendary Action
                --add {Insert Leg. Action name} - Adds a legendary action
                    --desc {Insert Desc} - Sets the description
                        --dmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type
                        --atk true/false - toggles attack and sets range and to hit
                            Required when true:
                            --range {Insert range} --tohit {Insert number}
                --rem {Insert Leg. Action name} - Removes a legendary action
            --mythic_actions - pulls up the mythic action editor
                --{Insert myth. Action name} - Selects a specific mythic action
                    --setname {Insert Name} - Sets the name of a mythic Action
                    --setdesc {Insert Desc} - Sets the Description of a mythic Action
                    --toggleatk --range {Insert range} - Toggles the mythic action to be an attack and sets the range
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type of a mythic Action
                --add {Insert Leg. Action name} - Adds a mythic action
                    --desc {Insert Desc} - Sets the description
                        --dmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type
                        --atk true/false - toggles attack and sets range and to hit
                            Required when true:
                            --range {Insert range} --tohit {Insert number}
                --rem {Insert Leg. Action name} - Removes a mythic action
        --reset - Resets the monster to the defaults
!party - pulls up the Party Menu
    --new {Insert Name} - creates a new Party
    --{Insert Party name} - Selects a Party
        --add --name/id {Insert Character Name/ID} - Adds a Character to the Party
        --rem --name/id {Insert Character Name/ID} - Removes a Character from the Party
        --del - Deletes the Party
*/
var EncounterCreator = EncounterCreator || (function() {
    'use strict';

    var version='0.1',

    setEncounterDefaults = function() {
        state.encounter = [
            {
                //Basics
                name: "",
                mincr: 0,
                maxcr: 0,
                loot: [],
            },
        ];
    },

    setLootDefaults = function() {
        state.loot = [
            {
                //Basics
                items: [],
            },
        ];
    },

    setPartyDefaults = function() {
        state.party = [
            {
                //Basics
                name: "",
                members: [],
            },
        ];
    },

    setMonsterDefaults = function() {
        state.monster = [
            {
                //Basics
                name: "",
                type: "",
                ac: 10,
                actype: "",
                hp: 0,
                speed: "",
                save: [
                    {
                        //Basics
                        name: "",
                        val: 0
                    },
                ],
                skill: [
                    {
                        //Basics
                        name: "",
                        val: 0
                    },
                ],
                vuln: "",
                res: "",
                dmgimm: "",
                condimm: "",
                cr: 0,
                pb: 0,
                caster: false,
                caster_lvl: 0,
                spell_atk_mod: 0,
                spell_dc_mod: 0,
                cast_ability: "",
                bonusact: false,
                react: false,
                legendary: 0,
                mythic: false,
                mythic_desc: "",
                traits: [
                    {
                        //Basics
                        name: "",
                        desc: "",
                        id: ""
                    }
                ],
                actions: [
                    {
                        //Basics
                        name: "",
                        desc: "",
                        attack: false,
                        atktype: "",
                        dmg: "",
                        dmgtype: "",
                        range: "",
                        tohit: 0,
                        id: ""
                    },
                ],
                bonus_actions: [
                    {
                        //Basics
                        name: "",
                        desc: "",
                        attack: false,
                        atktype: "",
                        dmg: "",
                        dmgtype: "",
                        range: "",
                        tohit: 0,
                        id: ""
                    },
                ],
                reactions: [
                    {
                        //Basics
                        name: "",
                        desc: "",
                        id: ""
                    },
                ],
                legendary_actions: [
                    {
                        //Basics
                        name: "",
                        desc: "",
                        attack: false,
                        atktype: "",
                        dmg: "",
                        dmgtype: "",
                        range: "",
                        tohit: 0,
                        id: ""
                    },
                ],
                mythic_actions: [
                    {
                        //Basics
                        name: "",
                        desc: "",
                        attack: false,
                        atktype: "",
                        dmg: "",
                        dmgtype: "",
                        range: "",
                        tohit: 0,
                        id: ""
                    },
                ]
            },
        ];
    },

    handleInput = function(msg) {
        var args=msg.content.split(/\s+--/);
        if (msg.type!=="api") {
            return;
        }
        if (playerIsGM(msg.playerid)) {
            switch (args[0]) {
                case '!enc':

                return;
                case '!monster':

                return;
                case '!party':

                return;
            }
        }
    },

    checkDefaults = function() {
        if (!state.encounter) {
            setEncounterDefaults();
        }
        if (!state.loot) {
            setLootDefaults();
        }
        if (!state.party) {
            setPartyDefaults();
        }
        if (!state.monster) {
            setMonsterDefaults();
        }
    },

    registerEventHandlers = function() {
        on('chat:message', handleInput);
    };

    return {
        CheckDefaults: checkDefaults,
        RegisterEventHandlers: registerEventHandlers
    };
}());
on("ready", function() {
    "use strict";
    EncounterCreator.CheckDefaults();
    EncounterCreator.RegisterEventHandlers();
});