/*
Encounter Creator for 5e in Roll20
Made by Julexar (https://app.roll20.net/users/9989180/julexar)
API Commands (GM Only):
!enc - Pulls up the Encounter Menu
    --create {Insert Name} - Creates an Encounter and pulls up the Edit Menu
    --{Insert Name/Number} - Shows the specifics of an Encounter by Name/Number
        --edit - Edit a specific Encounter
            --name {Insert Name} - Change the name of the Encounter
            --party {Insert Party name} - Selects a Party
                --add/rem --name/id {Insert Character Name/ID} - Adds/Removes a Character
            --cr min/max {Insert min/max CR} - Change the min/max CR of the Monsters in the Encounter
            --monsters add/rem {Insert Monster Name} - Adds/Removes a Monster
            --monster {Insert Monster Name} - Pulls up the Monster Editor
                (check !monster under edit for further options)
            --loot add {Insert Item Name} --val {Insert Item value} - Adds an item to the loot table
            --loot rem {Insert Item Name} - Removes an item from the loot table
        --loot gen {Insert amount} --minrare {Insert minimum rarity} --maxrare {Insert maximum rarity} - Generates a loot table
            --overwrite true/false - Specifies if the old loot table should be replaced
        --submit - Finishes the encounter creation and creates Monsters as well as a Handout for loot
        --delete - Deletes the Encounter
    --reset - Resets the encounter to the default
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

    var version='0.5',

    setEncounterDefaults = function() {
        state.encounter = [
            {
                //Basics
                name: "",
                mincr: 0,
                maxcr: 0,
                loot: [],
                monsters: [],
                party: []
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
                    if (!args[1]) {
                        encounterMenu(args[1]);
                    } else if (args[1].includes("create")) {
                        let name = args[1].replace("create ","");
                        createEnc(name);
                        encounterMenu(name);
                    } else if (args[1]=="reset") {
                        resetEnc();
                        encounterMenu(undefined);
                    } else if (args[1]!==undefined && !args[1].includes("create") && args[1]!=="reset") {
                        let enc = args[1];
                        if (!args[2]) {
                            encounterMenu(enc);
                        } else if (args[2]=="edit") {
                            if (!args[3]) {
                                encounterMenu(enc);
                            } else if (args[3]!==undefined) {
                                let name,party,charident,cr,monster,item,val;
                                if (args[3].includes("name")) {
                                    name=args[3].replace("name ","");
                                    editEncounter(enc,"name",name);
                                    encounterMenu(name);
                                } else if (args[3].includes("party")) {
                                    party=args[3].replace("party ","");
                                    if (!args[4]) {
                                        encounterMenu(enc,party);
                                    } else if (args[4]=="add" || args[4]=="rem") {
                                        if (!args[5]) {
                                            sendChat("Encounter Creator","/w gm You must define a Character you wish to add!");
                                        } else if (args[5].includes("name") || args[5].includes("id")) {
                                            charident=args[5];
                                            editEncounter(enc,`party${args[4]}`,party,charident);
                                            encounterMenu(enc,party);
                                        }
                                    }
                                } else if (args[3].includes("cr")) {
                                    if (args[3].includes("min")) {
                                        cr=Number(args[3].replace("cr min ",""));
                                        editEncounter(enc,"crmin",cr);
                                    } else if (args[3].includes("max")) {
                                        cr=Number(args[3].replace("cr max ",""));
                                        editEncounter(enc,"crmax",cr);
                                    }
                                    encounterMenu(enc);
                                } else if (args[3].includes("monsters")) {
                                    if (args[3].includes("add")) {
                                        monster=args[3].replace("monsters add ","");
                                        editEncounter(enc,"addmon",monster);
                                    } else if (args[3].includes("rem")) {
                                        monster=args[3].repalce("monsters rem ","");
                                        editEncounter(enc,"remmon",monster);
                                    }
                                    encounterMenu(enc);
                                } else if (args[3].includes("monster")) {
                                    monster=args[3].replace("monster ","");
                                    monsterMenu(monster);
                                } else if (args[3].includes("loot")) {
                                    if (args[3].includes("add")) {
                                        item=args[3].replace("loot add ","");
                                        if (!args[4]) {
                                            sendChat("Encounter Creator","/w gm You need to define a value!");
                                        } else if (args[4].includes("val")) {
                                            val=Number(args[4].replace("val ",""));
                                            editEncounter(enc,"addloot",item,val);
                                        }
                                    } else if (args[3].includes("rem")) {
                                        item=args[3].replace("loot rem ","");
                                        editEncounter(enc,"remloot",item);
                                    }
                                }
                            }
                        } else if (args[2].includes("loot gen")) {
                            let amount = Number(args[2].replace("loot gen ",""));
                            if (!args[3]) {
                                sendChat("Encounter Creator","/w gm You must define a minimum and maximum Rarity!");
                            } else if (args[3].includes("minrare")) {
                                let minrare = args[3].replace("minrare ","");
                                let rarities="common,uncommon,rare,very rare,legendary";
                                if (!rarities.includes(minrare.toLowerCase())) {
                                    sendChat("Encounter Creator","/w gm Invalid Rarity!");
                                } else if (rarities.includes(minrare.toLowerCase())) {
                                    if (!args[4]) {
                                        sendChat("Encounter Creator","/w gm You need to define a maximum Rarity!");
                                    } else if (args[4].includes("maxrare")) {
                                        let maxrare=args[4].replace("maxrare ","");
                                        if (!rarities.includes(maxrare.toLowerCase())) {
                                            sendChat("Encounter Creator","/w gm Invalid Rarity!");
                                        } else if (rarities.includes(maxrare.toLowerCase())) {
                                            if (!args[5]) {
                                                genLoot(enc,amount,minrare,maxrare,true);
                                            } else if (args[5].includes("overwrite")) {
                                                let overwrite = Boolean(args[5].replace("overwrite ",""));
                                                genLoot(enc,amount,minrare,maxrare,overwrite);
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (args[2]=="submit") {
                            submitEnc(enc);
                        } else if (args[2]=="reset") {
                            resetEnc(enc);
                        }
                    }
                return;
                case '!monster':
                    if (!args[1]) {
                        monsterMenu(args[1]);
                    } else if (args[1]) {
                        let monster = args[1];
                        if (!args[2]) {
                            monsterMenu(monster);
                        } else if (args[2]=="edit") {
                            let name,type,ac,actype,hp,speed,attr,attrval,saveattr,saveval,skill,skillval,vul,res,dmg_immune,cond_immune,sense,lang,cr,pb,caster,castattr,castlvl,spellmod,spelldc,ba,react,legendact,myth,mythdesc;
                            if (!args[3]) {
                                monsterMenu(monster);
                            } else if (args[3].includes("name")) {
                                name=args[3].replace("name ","");
                                editMonster(monster,"name",name);
                                monsterMenu(name);
                            } else if (args[3].includes("type")) {
                                type=args[3].repalce("type ","");
                                editMonster(monster,"type",type);
                                monsterMenu(monster);
                            } else if (args[3].includes("ac")) {
                                ac=Number(args[3].replace("ac ",""))
                                if (!args[4]) {
                                    actpye="";
                                } else if (args[4].includes("type")) {
                                    actype=args[4].replace("type ","");
                                }
                                editMonster(monster,"ac",ac,actype);
                                monsterMenu(monster);
                            } else if (args[3].includes("hp")) {
                                hp=Number(args[3].replace("hp ",""));
                                editMonster(monster,"hp",hp);
                                monsterMenu(monster);
                            } else if (args[3].includes("speed")) {
                                speed=args[3].replace("speed ","");
                                editMonster(monster,"speed",speed);
                                monsterMenu(monster);
                            } else if (args[3].includes("attr")) {
                                attr=args[3].replace("attr ","");
                                if (!args[4]) {
                                    sendChat("Encounter Creator","/w gm You need to define a value for the Attribute!");
                                } else if (args[4]) {
                                    attrval=Number(args[4]);
                                    editMonster(monster,"attr",attr,attrval);
                                    monsterMenu(monster);
                                }
                            } else if (args[3].includes("save")) {
                                saveattr=args[3].replace("save ","");
                                if (!args[4]) {
                                    sendChat("Encounter Creator","/w gm You need to define a value for the Save bonus!");
                                } else if (args[4]) {
                                    saveval=Number(args[4]);
                                    editMonster(monster,"save",saveattr,saveval);
                                    monsterMenu(monster);
                                }
                            } else if (args[3].includes("skill")) {
                                skill=args[3].replace("skill ","");
                                if (!args[4]) {
                                    sendChat("Encounter Creator","/w gm You need to define a value for the Skill bonus!");
                                } else if (args[4]) {
                                    saveval=Number(args[4]);
                                    editMonster(monster,"skill",skill,skillval);
                                    monsterMenu(monster);
                                }
                            } else if (args[3].includes("vul")) {
                                vul=args[3].replace("vul ","");
                                editMonster(monster,"vul",vul);
                                monsterMenu(monster);
                            } else if (args[3].includes("res")) {
                                res=args[3].replace("res ","");
                                editMonster(monster,"res",res);
                                monsterMenu(monster);
                            } else if (args[3].includes("dmg_immune")) {
                                dmg_immune=args[3].replace("dmg_immune ","");
                                editMonster(monster,"dmg_immune",dmg_immune);
                                monsterMenu(monster);
                            } else if (args[3].includes("cond_immune")) {
                                cond_immune=args[3].replace("cond_immune ","");
                                editMonster(monster,"dmg_immune",dmg_immune);
                                monsterMenu(monster);
                            } else if (args[3].includes("sense")) {
                                sense=args[3].replace("sense ","");
                                editMonster(monster,"sense",sense);
                                monsterMenu(monster);
                            } else if (args[3].includes("lang")) {
                                lang=args[3].replace("lang ","");
                                editMonster(monster,"lang",lang);
                                monsterMenu(monster);
                            } else if (args[3].includes("cr")) {
                                cr=Number(args[3].replace("cr ",""));
                                editMonster(monster,"cr",cr);
                                monsterMenu(monster);
                            } else if (args[3].includes("pb")) {
                                pb=Number(args[3].replace("pb ",""));
                                editMonster(monster,"pb",cr);
                                monsterMenu(monster);
                            } else if (args[3].includes("caster")) {
                                caster=Boolean(args[3].replace("caster ",""));
                                if (caster==true) {
                                    if (!args[4]) {
                                        sendChat("Encounter Creator","/w gm You need to define a spellcasting ability!");
                                    } else if (args[4]) {
                                        castattr=args[4];
                                        if (!args[5]) {
                                            sendChat("Encounter Creator","/w gm You need to define the caster level!");
                                        } else if (args[5].includes("lvl")) {
                                            castlvl=Number(args[5].replace("lvl ",""));
                                            editMonster(monster,"caster",caster,castattr,castlvl);
                                            monsterMenu(monster);
                                        }
                                    }
                                } else if (caster==false) {
                                    editMonster(monster,"caster",caster);
                                    monsterMenu(monster);
                                }
                            } else if (args[3].includes("spellmod")) {
                                spellmod=Number(args[3].repalce("spellmod ",""));
                                editMonster(monster,"spellmod",spellmod);
                                monsterMenu(monster);
                            } else if (args[3].includes("spelldc")) {
                                spelldc=Number(args[3].replace("spelldc ",""));
                                editMonster(monster,"spelldc",spelldc);
                                monsterMenu(monster);
                            } else if (args[3].includes("ba")) {
                                ba=Boolean(args[3].replace("ba ",""));
                                editMonster(monster,"ba",ba);
                                monsterMenu(monster);
                            } else if (args[3].includes("react")) {
                                react=Boolean(args[3].replace("react ",""));
                                editMonster(monster,"react",react);
                                monsterMenu(monster);
                            } else if (args[3].includes("legendact")) {
                                legendact=Number(args[3].replace("legendact ",""));
                                editMonster(monster,"legendact",legendact);
                                monsterMenu(monster);
                            } else if (args[3].includes("myth")) {
                                myth=Boolean(args[3].replace("myth ",""));
                                if (myth==true) {
                                    if (!args[4]) {
                                        sendChat("Encounter Creator","/w gm You must define a description for Mythic Actions!");
                                    } else if (args[4].includes("desc")) {
                                        mythdesc=args[4].replace("desc ","");
                                        editMonster(monster,"myth",myth,mythdesc);
                                        monsterMenu(monster);
                                    }
                                } else if (myth==false) {
                                    editMonster(monster,"myth",myth);
                                    monsterMenu(monster);
                                }
                            } else if (args[3]=="traits") {
                                if (!args[4].includes("add") && !args[4].includes("rem")) {
                                    let trait=args[4];
                                    if (!args[5]) {
                                        traitEditor(monster,trait);
                                    } else if (args[5].includes("setname")) {
                                        let name=args[5].replace("setname ","");
                                        editTrait(monster,trait,"name",name);
                                        traitEditor(name);
                                    } else if (args[5].includes("setdesc")) {
                                        let desc=args[5].replace("setdesc ","");
                                        editTrait(monster,trait,"desc",desc);
                                        traitEditor(monster,trait);
                                    }
                                } else if (args[4].includes("add")) {
                                    let name=args[4].replace("add ","");
                                    if (!args[5]) {
                                        sendChat("Encounter Creator","/w gm You must define a description for the Trait!");
                                    } else if (args[5].includes("desc")) {
                                        let desc=args[5].replace("desc ","");
                                        createTrait(monster,name,desc);
                                        traitEditor(monster,name);
                                    }
                                } else if (args[4].includes("rem")) {
                                    let name=args[4].replace("rem ","");
                                    removeTrait(monster,name);
                                    traitEditor(monster,undefined);
                                }
                            } else if (args[3]=="bonusactions") {
                                if (!args[4].includes("add") && !args[4].includes("rem")) {
                                    let ba=args[4];
                                    if (!args[5]) {
                                        baEditor(monster,ba);
                                    } else if (args[5].includes("setname")) {
                                        let name=args[5].replace("setname ","");
                                        editBA(monster,ba,"name",name);
                                        baEditor(monster,name);
                                    } else if (args[5].includes("setdesc")) {
                                        let desc=args[5].replace("setdesc ","");
                                        editBA(monster,ba,"desc",desc);
                                        baEditor(monster,ba);
                                    } else if (args[5].includes("toggleatk")) {
                                        let atk=Boolean(args[5].replace("toggle atk ",""));
                                        if (atk==true) {
                                            if (!args[6]) {
                                                sendChat("Encounter Creator","/w gm You neeed to define a type (Melee or Ranged) for the attack!");
                                            } else if (args[6].includes("type")) {
                                                let atktype=args[6].replace("type ","");
                                                if (atktype.toLowerCase()!=="melee" && atktype.toLowerCase()!=="ranged") {
                                                    sendChat("Encounter Creator","/w gm Invalid attack type!");
                                                } else if (atktype.toLowerCase()=="melee" || atktype.toLowerCase()=="ranged") {
                                                    if (atktype.toLowerCase()=="melee") {
                                                        atktype="Melee";
                                                    } else if (atktype.toLowerCase()=="ranged") {
                                                        atktype="Ranged";
                                                    }
                                                    if (!args[7]) {
                                                        sendChat("Encounter Creator","/w gm You need to define the range of the Attack!");
                                                    } else if (args[7].includes("range")) {
                                                        let range=args[7].replace("range ","");
                                                        if (!args[8]) {
                                                            sendChat("Encounter Creator","/w gm You need to define the to hit bonus of the Attack!");
                                                        } else if (args[8].includes("tohit")) {
                                                            let tohit=Number(args[8].replace("tohit ",""));
                                                            editBA(monster,ba,"atk",atk,atktype,range,tohit);
                                                            baEditor(monster,ba);
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (atk==false) {
                                            editBA(monster,ba,"atk",atk);
                                            baEditor(monster,ba);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("type")) {
                                            let dmgtype=args[6].replace("type ","");
                                            editBA(monster,ba,"dmg",dice,dmgtype);
                                            baEditor(monster,ba);
                                        }
                                    }
                                } else if (args[4].includes("add")) {
                                    let ba=args[4].replace("add ","");
                                    createBA(monster,ba);
                                    baEditor(monster,ba);
                                } else if (args[4].includes("rem")) {
                                    let ba=args[4].replace("rem ","");
                                    removeBA(monster,ba);
                                    baEditor(monster,undefined);
                                }
                            } else if (args[3]=="actions") {
                                if (!args[4].includes("add") && !args[4].includes("rem")) {
                                    let act=args[4];
                                    if (!args[5]) {
                                        actEditor(monster,act);
                                    } else if (args[5].includes("setname")) {
                                        let name=args[5].replace("setname ","");
                                        editAct(monster,act,"name",name);
                                        actEditor(monster,name);
                                    } else if (args[5].includes("setdesc")) {
                                        let desc=args[5].replace("setdesc ","");
                                        editAct(monster,act,"desc",desc);
                                        actEditor(monster,act);
                                    } else if (args[5].includes("toggleatk")) {
                                        let atk=Boolean(args[5].replace("toggle atk ",""));
                                        if (atk==true) {
                                            if (!args[6]) {
                                                sendChat("Encounter Creator","/w gm You neeed to define a type (Melee or Ranged) for the attack!");
                                            } else if (args[6].includes("type")) {
                                                let atktype=args[6].replace("type ","");
                                                if (atktype.toLowerCase()!=="melee" && atktype.toLowerCase()!=="ranged") {
                                                    sendChat("Encounter Creator","/w gm Invalid attack type!");
                                                } else if (atktype.toLowerCase()=="melee" || atktype.toLowerCase()=="ranged") {
                                                    if (atktype.toLowerCase()=="melee") {
                                                        atktype="Melee";
                                                    } else if (atktype.toLowerCase()=="ranged") {
                                                        atktype="Ranged";
                                                    }
                                                    if (!args[7]) {
                                                        sendChat("Encounter Creator","/w gm You need to define the range of the Attack!");
                                                    } else if (args[7].includes("range")) {
                                                        let range=args[7].replace("range ","");
                                                        if (!args[8]) {
                                                            sendChat("Encounter Creator","/w gm You need to define the to hit bonus of the Attack!");
                                                        } else if (args[8].includes("tohit")) {
                                                            let tohit=Number(args[8].replace("tohit ",""));
                                                            editAct(monster,act,"atk",atk,atktype,range,tohit);
                                                            actEditor(monster,act);
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (atk==false) {
                                            editAct(monster,act,"atk",atk);
                                            actEditor(monster,act);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("type")) {
                                            let dmgtype=args[6].replace("type ","");
                                            editAct(monster,act,"dmg",dice,dmgtype);
                                            actEditor(monster,act);
                                        }
                                    }
                                } else if (args[4].includes("add")) {
                                    let act=args[4].replace("add ","");
                                    createAct(monster,act);
                                    actEditor(monster,act);
                                } else if (args[4].includes("rem")) {
                                    let act=args[4].replace("rem ","");
                                    removeAct(monster,act);
                                    actEditor(monster,undefined);
                                }
                            } else if (args[3]=="reactions") {
                                if (!args[4].includes("add") && !args[4].includes("rem")) {
                                    let reaction=args[4];
                                    if (!args[5]) {
                                        reactEditor(monster,reaction);
                                    } else if (args[5].includes("setname")) {
                                        let name=args[5].replace("setname ","");
                                        editReact(monster,reaction,"name",name);
                                        reactEditor(monster,name);
                                    } else if (args[5].includes("setdesc")) {
                                        let desc=args[5].replace("setdesc ","");
                                        editReact(monster,reaction,"desc",desc);
                                        reactEditor(monster,reaction);
                                    }
                                } else if (args[4].includes("add")) {
                                    let reaction=args[4].replace("add ","");
                                    if (!args[5]) {
                                        sendChat("Encounter Creator","/w gm You need to define a description for the reaction!");
                                    } else if (args[5].includes("desc")) {
                                        let desc=args[5].repalce("desc ","");
                                        createReact(monster,reaction,desc);
                                        reactEditor(monster,reaction);
                                    }
                                } else if (args[4].includes("rem")) {
                                    let reaction=args[4].replace("rem ","");
                                    removeReact(monster,reaction);
                                    reactEditor(monster,undefined);
                                }
                            } else if (args[3]=="legend_actions") {
                                if (!args[4].includes("add") && !args[4].includes("rem")) {
                                    let leg=args[4];
                                    if (!args[5]) {
                                        legEditor(monster,leg);
                                    } else if (args[5].includes("setname")) {
                                        let name=args[5].replace("setname ","");
                                        editLeg(monster,leg,"name",name);
                                        legEditor(monster,name);
                                    } else if (args[5].includes("setdesc")) {
                                        let desc=args[5].replace("setdesc ","");
                                        editLeg(monster,leg,"desc",desc);
                                        legEditor(monster,leg);
                                    } else if (args[5].includes("toggleatk")) {
                                        let atk=Boolean(args[5].replace("toggle atk ",""));
                                        if (atk==true) {
                                            if (!args[6]) {
                                                sendChat("Encounter Creator","/w gm You neeed to define a type (Melee or Ranged) for the attack!");
                                            } else if (args[6].includes("type")) {
                                                let atktype=args[6].replace("type ","");
                                                if (atktype.toLowerCase()!=="melee" && atktype.toLowerCase()!=="ranged") {
                                                    sendChat("Encounter Creator","/w gm Invalid attack type!");
                                                } else if (atktype.toLowerCase()=="melee" || atktype.toLowerCase()=="ranged") {
                                                    if (atktype.toLowerCase()=="melee") {
                                                        atktype="Melee";
                                                    } else if (atktype.toLowerCase()=="ranged") {
                                                        atktype="Ranged";
                                                    }
                                                    if (!args[7]) {
                                                        sendChat("Encounter Creator","/w gm You need to define the range of the Attack!");
                                                    } else if (args[7].includes("range")) {
                                                        let range=args[7].replace("range ","");
                                                        if (!args[8]) {
                                                            sendChat("Encounter Creator","/w gm You need to define the to hit bonus of the Attack!");
                                                        } else if (args[8].includes("tohit")) {
                                                            let tohit=Number(args[8].replace("tohit ",""));
                                                            editLeg(monster,leg,"atk",atk,atktype,range,tohit);
                                                            legEditor(monster,leg);
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (atk==false) {
                                            editLeg(monster,leg,"atk",atk);
                                            legEditor(monster,leg);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("type")) {
                                            let dmgtype=args[6].replace("type ","");
                                            editLeg(monster,leg,"dmg",dice,dmgtype);
                                            legEditor(monster,leg);
                                        }
                                    }
                                } else if (args[4].includes("add")) {
                                    let leg=args[4].replace("add ","");
                                    createLeg(monster,leg);
                                    legEditor(monster,leg);
                                } else if (args[4].includes("rem")) {
                                    let leg=args[4].replace("rem ","");
                                    removeLeg(monster,leg);
                                    legEditor(monster,undefined);
                                }
                            } else if (args[3]=="mythic_actions") {
                                if (!args[4].includes("add") && !args[4].includes("rem")) {
                                    let myth=args[4];
                                    if (!args[5]) {
                                        mythEditor(monster,myth);
                                    } else if (args[5].includes("setname")) {
                                        let name=args[5].replace("setname ","");
                                        editMyth(monster,myth,"name",name);
                                        mythEditor(monster,name);
                                    } else if (args[5].includes("setdesc")) {
                                        let desc=args[5].replace("setdesc ","");
                                        editMyth(monster,myth,"desc",desc);
                                        mythEditor(monster,myth);
                                    } else if (args[5].includes("toggleatk")) {
                                        let atk=Boolean(args[5].replace("toggle atk ",""));
                                        if (atk==true) {
                                            if (!args[6]) {
                                                sendChat("Encounter Creator","/w gm You neeed to define a type (Melee or Ranged) for the attack!");
                                            } else if (args[6].includes("type")) {
                                                let atktype=args[6].replace("type ","");
                                                if (atktype.toLowerCase()!=="melee" && atktype.toLowerCase()!=="ranged") {
                                                    sendChat("Encounter Creator","/w gm Invalid attack type!");
                                                } else if (atktype.toLowerCase()=="melee" || atktype.toLowerCase()=="ranged") {
                                                    if (atktype.toLowerCase()=="melee") {
                                                        atktype="Melee";
                                                    } else if (atktype.toLowerCase()=="ranged") {
                                                        atktype="Ranged";
                                                    }
                                                    if (!args[7]) {
                                                        sendChat("Encounter Creator","/w gm You need to define the range of the Attack!");
                                                    } else if (args[7].includes("range")) {
                                                        let range=args[7].replace("range ","");
                                                        if (!args[8]) {
                                                            sendChat("Encounter Creator","/w gm You need to define the to hit bonus of the Attack!");
                                                        } else if (args[8].includes("tohit")) {
                                                            let tohit=Number(args[8].replace("tohit ",""));
                                                            editMyth(monster,myth,"atk",atk,atktype,range,tohit);
                                                            mythEditor(monster,myth);
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (atk==false) {
                                            editMyth(monster,myth,"atk",atk);
                                            mythEditor(monster,myth);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("type")) {
                                            let dmgtype=args[6].replace("type ","");
                                            editMyth(monster,myth,"dmg",dice,dmgtype);
                                            mythEditor(monster,myth);
                                        }
                                    }
                                } else if (args[4].includes("add")) {
                                    let myth=args[4].replace("add ","");
                                    createMyth(monster,myth);
                                    mythEditor(monster,myth);
                                } else if (args[4].includes("rem")) {
                                    let myth=args[4].replace("rem ","");
                                    removeMyth(monster,myth);
                                    mythEditor(monster,undefined);
                                }
                            }
                        } else if (args[2]=="reset") {
                            resetMonster(monster);
                        }
                    }
                return;
                case '!party':
                    if (!args[1]) {
                        partyMenu(args[1]);
                    } else if (args[1] && !args[1].includes("new")) {
                        let party = args[1];
                        if (!args[2]) {
                            partyMenu(party);
                        } else if (args[2]=="add") {
                            if (!args[3]) {
                                sendChat("Encounter Creator","/w gm You must submit a Character name or ID!");
                            } else if (args[3].includes("name")) {
                                let name = args[3].replace("name ","");
                                let char = findObjs({
                                    _type: 'character',
                                    name: name
                                }, {caseInsensitive: true})[0];
                                if (!char) {
                                    sendChat("Encounter Creator","/w gm Could not find a Character with that name!");
                                } else if (char) {
                                    let charid = char.get('_id');
                                    partyAdd(party,charid);
                                    partyMenu(party);
                                }
                            } else if (args[3].includes("id")) {
                                let id = args[3].replace("id ","");
                                let char = findObjs({
                                    _type: 'character',
                                    _id: id
                                })[0];
                                if (!char) {
                                    sendChat("Encounter Creator","/w gm Could not find a Character with that ID!");
                                } else if (char) {
                                    let charid = char.get('_id');
                                    partyAdd(party,charid);
                                    partyMenu(party);
                                }
                            }
                        } else if (args[2]=="rem") {
                            if (!args[3]) {
                                sendChat("Encounter Creator","/w gm You must submit a Character name or ID!");
                            } else if (args[3].includes("name")) {
                                let name = args[3].replace("name ","");
                                let char = findObjs({
                                    _type: 'character',
                                    name: name
                                }, {caseInsensitive: true})[0];
                                if (!char) {
                                    sendChat("Encounter Creator","/w gm Could not find a Character with that name!");
                                } else if (char) {
                                    let charid = char.get('_id');
                                    partyRem(party,charid);
                                    partyMenu(party);
                                }
                            } else if (args[3].includes("id")) {
                                let id = args[3].replace("id ","");
                                let char = findObjs({
                                    _type: 'character',
                                    _id: id
                                })[0];
                                if (!char) {
                                    sendChat("Encounter Creator","/w gm Could not find a Character with that ID!");
                                } else if (char) {
                                    let charid = char.get('_id');
                                    partyRem(party,charid);
                                    partyMenu(party);
                                }
                            }
                        } else if (args[2]=="del") {
                            deleteParty(party);
                            partyMenu(undefined);
                        } else if (args[2].includes("setname")) {
                            let part = state.party.find(p => p.name==party);
                            let name=args[2].replace("setname","");
                            part.name=name;
                            for (let i=0;i<state.party.length;i++) {
                                if (state.party[i].name==party) {
                                    state.party[i]=part;
                                }
                            }
                            partyMenu(part);
                        }
                    } else if (args[1].includes("new")) {
                        let name = args[1].replace("new ","");
                        createParty(name);
                        partyMenu(name);
                    }
                return;
            }
        }
    },

    encounterMenu = function(enc,party) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        enc=state.encounter.find(e => e.name==enc);
        let encounters=[];
        for (let i=0;i<state.encounter.length;i++) {
            encounters.push(state.encounter[i].name);
        }
        let len=encounters.length;
        for (let i=0;i<len;i++) {
            encounters=String(encounters).replace(",","|");
        }
        let parties=[];
        for (let i=0;i<enc.party.length;i++) {
            parties.push(enc.party[i].name);
        };
        len=parties.length;
        for (let i=0;i<len;i++) {
            parties=String(parties).replace(",","|");
        }
        if (!enc) {
            sendChat("Encounter Creator","/w gm Invalid Encounter!");
        } else if (enc) {
            let loot=enc.loot;
            let monsters=enc.monsters;
            party=enc.party.find(p => p.name==party);
            let memberlist='';
            let trborder='style="border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"';
            let tdborder='style="border-left: 1px solid #cccccc; border-right: 1px solid #cccccc;"';
            let tdborder2='style="border-rigth: 1px solid #cccccc;"';
            for (let i=0;i<party.members.length;i++) {
                memberlist+='<tr '+trborder+'><td '+tdborder+'>'+party.members[i].level+'</td><td '+tdborder2+'>'+party.members[i].class+'</td><td '+tdborder2+'>'+party.members[i].name+'</td></tr>';
            }
            let members=[];
            for (let i=0;i<party.members.length;i++) {
                members.push(party.members[i].name);
            }
            len=members.length;
            for (let i=0;i<len;i++) {
                members=String(members).replace(",","|");
            }
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Encounter Menu</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<table ' + tablestyle + '>' + //--
                '<tr><td>Encounter: </td><td><a ' + astyle1 + '" href="!enc --?{' + encounters + '}">' + enc.name + '</a></td></tr>' + //--
                '<tr><td>Min CR: </td><td><a ' + astyle3 + '" href="!enc --' + enc.name + ' --edit --cr min ?{Min CR?|0}">' + enc.crmin + '</a></td></tr>' + //--
                '<tr><td>Max CR: </td><td><a ' + astyle3 + '" href="!enc --' + enc.name + ' --edit --cr max ?{Max CR?|0}">' + enc.crmax + '</a></td></tr>' + //--
                '</table>' + //--
                '<br>' + //--
                '<table ' + tablestyle + '>' + //--
                '<tr><td>Party: </td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --party ?{Party?|' + parties + '}">' + party.name + '</a></td></tr>' + //--
                '</table>' + //--
                '<br>' + //--
                '<table>' + //--
                '<thead><tr ' + trstyle + '><th>Lvl.</th><th>Class</th><th>Name</th></tr></thead>' + //--
                '<tbody>' + memberlist + '</tbody>' + //--
                '</table>' + //--
                '<table>' + //--
                '<tr><td style="text-align:left;"><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --party ' + party.name + ' --add --name ?{Member?|' + members + '}">Add Member</a></td>' + //--
                '<td style="text-align:right;"><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --party ' + party.name + '--rem --name ?{Member?|' + members + '}">Rem Member</a></td></tr>' + //--
                '</table>' + //--
                //Monsters

                //Loot

                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --name ?{Name?|Insert Name}">' + enc.name + '</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --submit">Finish Setup</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --reset">Reset Encounters</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --create ?{Name?|Insert Name}">Create Encounter</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --delete">Delete Encounter</a></div>' + //--
                '</div>'
            );
        }
    },

    createEnc = function(enc) {

    },

    editEncounter = function(enc,option,val1,val2) {

    },

    genLoot = function(enc,amount,minrare,maxrare,overwrite) {

    },

    submitEnc = function(enc) {

    },

    resetEnc = function() {

    },

    monsterMenu = function(mon) {

    },

    editMonster = function(mon,option,val1,val2,val3) {

    },

    traitEditor = function(mon,trait) {

    },

    editTrait = function(mon,trait,option,val) {

    },

    baEditor = function(mon,ba) {

    },

    editBA = function(mon,ba,option,val1,val2,val3) {

    },

    actEditor = function(mon,act) {

    },

    editAct = function(mon,act,option,val1,val2,val3) {

    },

    reactEditor = function(mon,react) {

    },

    editReact = function(mon,react,option,val) {

    },

    legEditor = function(mon,leg) {

    },

    editLeg = function(mon,leg,option,val1,val2,val3) {

    },

    mythEditor = function(mon,myth) {

    },

    editMyth = function(mon,myth,option,val1,val2,val3) {

    },

    resetMonster = function(mon) {

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