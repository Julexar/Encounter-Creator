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
            --monster - Edits a Monster
                --add/rem {Insert existing Monster Name} --amount {Insert Number} - Adds/Removes a Monster
                --{Insert existing Monster Name} - Edits a Monster inside the Encounter
            --loot - Edits Loot Table
                --add {Insert Item Name} --amount {Insert Amount} - Adds an item to the loot table
                --rem {Insert Item Name} --amount {Insert Amount} - Removes an item from the loot table
                --{Insert existing Item Name} - Edits an Item inside the Encounter
        --genloot {Insert amount} --minrare {Insert minimum rarity} --maxrare {Insert maximum rarity} - Generates a loot table
            --overwrite true/false - Specifies if the old loot table should be replaced
        --loot - Shows the Loot table
        --monsters - Shows a list of all Monsters
        --submit - Finishes the encounter creation and creates Monsters as well as a Handout for loot
            --ignorecr - Ignores the minimum and maximum CR when making the Monsters
        --delete - Deletes the Encounter
    --reset - Resets the encounter to the default
!monster - Pulls up the Monster Menu
    --new {Insert Monster name} - Creates a new Monster
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
                    --toggleatk - Toggles the bonus action to be an attack
                    --setrange {Insert range} - Sets the range of the attack
                    --settohit {Insert to hit} - Sets the to hit bonus of the attack
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage dice and type of the bonus action
                    --setatktype Melee/Ranged - Sets the attack to me a Melee or Ranged Attack
                --add {Insert Bonus action name} - adds a bonus action
                --rem {Insert Bonus action name} - removes a bonus action
            --actions - Pulls up the Action Editor
                --{Insert Action name} - Selects a specific action
                    --setname {Insert Name} - Sets the name of an Action
                    --setdesc {Insert Desc} - Sets the Description of an Action
                    --toggleatk - Toggles the Action to have an Attack
                    --setrange {Insert range} - Sets the Range of the Attack
                    --settohit {Insert to hit} - Sets the to hit bonus of the attack
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type of an Action
                    --setatktype Melee/Ranged - Sets the attack to me a Melee or Ranged Attack
                --add {Insert Action name} - adds an action
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
                    --toggleatk - Toggels the legendary Action to have an Attack
                    --setrange {Insert range} - Sets the Range of the Attack
                    --settohit {Insert to hit} - Sets the to hit bonus of the attack
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type of a legendary Action
                    --setatktype Melee/Ranged - Sets the attack to me a Melee or Ranged Attack
                --add {Insert Leg. Action name} - Adds a legendary action
                --rem {Insert Leg. Action name} - Removes a legendary action
            --mythic_actions - pulls up the mythic action editor
                --{Insert myth. Action name} - Selects a specific mythic action
                    --setname {Insert Name} - Sets the name of a mythic Action
                    --setdesc {Insert Desc} - Sets the Description of a mythic Action
                    --toggleatk - Toggles the mythic Action to have an Attack
                    --setrange {Insert range} - Sets the range of the Attack
                    --settohit {Insert to hit} - Sets the to hit bonus of the attack
                    --setdmg {Insert damage dice} --type {Insert damage type} - Sets the damage and damage type of a mythic Action
                    --setatktype Melee/Ranged - Sets the attack to me a Melee or Ranged Attack
                --add {Insert Myth. Action name} - Adds a mythic action
                --rem {Insert Myth. Action name} - Removes a mythic action
        --del - Deletes the Monster
        --reset - Resets the monster to the defaults
!party - pulls up the Party Menu
    --new {Insert Name} - creates a new Party
    --{Insert Party name} - Selects a Party
        --add --name/id/sel {Insert Character Name/ID OR select Character Token} - Adds a Character to the Party
        --rem --name/id/sel {Insert Character Name/ID OR select Character Token} - Removes a Character from the Party
        --del - Deletes the Party
!loot - Pulls up the Loot Menu
    --new {Insert Item Name} - Creates a new Item on the Loot Table
        --value {Insert Number} - Sets the value of the Item
        --desc {Insert Text} - Sets the description of the Item
        --rarity {Insert Rarity} - Sets the rarity of the Item
        --type {Insert Item Type} - Sets the Type of the Item - view the [Wiki](https://github.com/Julexar/encounter-creator/wiki) for Options
    --rem {Insert Item Name} - Removes an Item from the Loot Table
    --{Insert Item Name} - Views a specific Item
        --edit --{Insert Item Name} - Pulls up the Item Editor
            --name {Insert Name} - Edits the Name of the Item
            --value {Insert Number} - Edits the Value of the Item
            --desc {Insert Desc} - Edits the Description of the Item
            --rarity {Insert Rarity} - Edits the Rarity of the Item
            --type {Insert Item Type} - Edits the Type of the Item - view the [Wiki](https://github.com/Julexar/encounter-creator/wiki) for Options
            --attack {true/false} - Toggles the Item to have an attack
            --damage {Insert damage} --type {Insert damage type} - Edits the damage of the Item Attack
            --secdamage {Insert damage} --type {Insert damage type} - Edits the secondary damage of the Item Attack
            --tohit {Insert number} - Edits the To Hit bonus of the Item Attack
            --magic {0/1/2/3} - Edits the magic bonus of the Item Attack
            --confirm - Confirms the edits and applies them
*/
var EncounterCreator = EncounterCreator || (function() {
    'use strict';

    var version='0.6',

    setEncounterDefaults = function() {
        state.encounter = [
            {
                //Basics
                name: "",
                mincr: 0,
                maxcr: 0,
                loot: {
                    items: [],
                    gold: 0,
                },
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
                gold: 0,
            },
        ];
    },

    setTempDefaults = function() {
        state.temp = {
            name:"",
            val:0,
            desc:"",
            rarity:"",
            type:"",
            atk:false,
            dmg:"",
            dmgtype:"",
            secdmg:"",
            secdmgtype:"",
            tohit:0,
            magic:0,
        };
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
                id: "",
                type: "",
                ac: 10,
                actype: "",
                hp: 0,
                speed: "",
                amount: 1,
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
                stat: {
                    str:0,
                    dex:0,
                    con:0,
                    int:0,
                    wis:0,
                    cha:0
                },
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

    setBasicDefaults = function() {
        state.encbasics = {
            dmgtype: "Acid|Bludgeoning|Cold|Fire|Force|Lightning|Magical Bludgeoning|Magical Piercing|Magical Slashing|Necrotic|Piercing|Poison|Psychic|Radiant|Slashing|Thunder",
            atktype: "Melee|Ranged",
        };
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
                                } else if (args[3].includes("monster")) {
                                    if (!args[4]) {
                                        viewMonsters(enc);
                                    } else if (args[4].includes("add")) {
                                        monster=args[4].replace("add ","");
                                        if (!args[5]) {
                                            sendChat("Encounter Creator","/w gm You need to define the amount of Monsters you wish to add!");
                                        } else if (args[5].includes("amount")) {
                                            let amount=Number(args[5].replace("amount ",""));
                                            editEncounter(enc,"addmon",monster,amount);
                                        }
                                    } else if (args[4].includes("rem")) {
                                        monster=args[4].replace("rem ","");
                                        if (!args[5]) {
                                            sendChat("Encounter Creator","/w gm You need to define the amount of Monsters you wish to remove!");
                                        } else if (args[5].includes("amount")) {
                                            let amount=Number(args[5].replace("amount ",""));
                                            editEncounter(enc,"remmon",monster,amount);
                                        }
                                    } else if (!args[4].includes("add") && !args[4].includes("rem")) {
                                        monster=args[4];
                                        editEncounter(enc,"monster",monster);
                                    }
                                } else if (args[3].includes("loot")) {
                                    if (!args[4]) {
                                        viewLoot(enc);
                                    } else if (args[4].includes("add")) {
                                        item=args[4].replace("add ","");
                                        if (!args[5]) {
                                            sendChat("Encounter Creator","/w gm You must define the amount of Items you wish to add!");
                                        } else if (args[5].includes("amount")) {
                                            let amount=Number(args[5].replace("amount ",""));
                                            editEncounter(enc,"addloot",item,amount);
                                        }
                                    } else if (args[4].includes("rem")) {
                                        item=args[4].replace("rem ","");
                                        if (!args[5]) {
                                            sendChat("Encounter Creator","/w gm You must define the amount of Items you wish to remove!");
                                        } else if (args[5].includes("amount")) {
                                            let amount=Number(args[5].replace("amount ",""));
                                            editEncounter(enc,"remloot",item,amount);
                                        }
                                    } else if (!args[4].includes("add") && !args[4].includes("rem")) {
                                        item=args[4];
                                        if (!args[5]) {
                                            editEncounter(enc,"item",item);
                                        } else if (args[5].includes("name")) {
                                            let name = args[5].replace("name ","");
                                            editEncounter(enc,"item","name",name);
                                        } else if (args[5].includes("value")) {
                                            let val = Number(args[5].replace("value ",""));
                                            editEncounter(enc,"item","value",val);
                                        } else if (args[5].includes("desc")) {
                                            let desc = args[5].replace("desc ","");
                                            editEncounter(enc,"item","desc",desc);
                                        } else if (args[5].includes("rarity")) {
                                            let rare = args[5].replace("rarity ","");                                        } else if (args[5].includes("type")) {
                                            editEncounter(enc,"item","rarity",rare);
                                        } else if (args[5].includes("attack")) {
                                            let attack = Boolean(args[5].replace("attack ",""));
                                            editEncounter(enc,"item","attack",attack);
                                        } else if (args[5].includes("sec")) {
                                            let secdmg = args[5].replace("secdamage ","");
                                            if (!args[6]) {
                                                sendChat("Encounter Creator","/w gm Missing Damage Type for secondary damage!");
                                            } else if (args[6].includes("type")) {
                                                let secdmgtype = args[5].replace("type ","");
                                                editEncounter(enc,"item","secdamage",secdmg,secdmgtype);
                                            }
                                        } else if (args[5].includes("damage")) {
                                            let dmg = args[5].replace("damage ","");
                                            if (!args[6]) {
                                                sendChat("Encounter Creator","/w gm Missing Damage Type for primary damage!");
                                            } else if (args[6].includes("type")) {
                                                let dmgtype = args[6].replace("type ","");
                                                editEncounter(enc,"item","damage",dmg,dmgtype);
                                            }
                                        } else if (args[5].includes("tohit")) {
                                            let tohit = args[5].replace("tohit ","");
                                            editEncounter(enc,"item","tohit",tohit);
                                        } else if (args[5].includes("magic")) {
                                            let magic = args[5].replace("magic ","");
                                            editEncounter(enc,"item","magic",magic);
                                        } else if (args[5].includes("confirm")) {
                                            editEncounter(enc,"item","confirm");
                                        }
                                    }
                                }
                            }
                        } else if (args[2].includes("genloot")) {
                            let amount = Number(args[2].replace("genloot ",""));
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
                        } else if (args[2]=="loot") {
                            viewLoot(enc);
                        } else if (args[2]=="monsters") {
                            viewMonsters(enc);
                        } else if (args[2]=="submit") {
                            if (!args[3]) {
                                submitEnc(enc);
                            } else if (args[3].includes("ignorecr")) {
                                let ignore=args[3].replace("ignorecr ","");
                                submitEnc(enc,ignore);
                            }
                        } else if (args[2]=="reset") {
                            resetEnc(enc);
                        }
                    }
                return;
                case '!monster':
                    if (!args[1]) {
                        monsterMenu(args[1]);
                    } else if (!args[1].includes("new")) {
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
                                    createTrait(monster,name);
                                    traitEditor(monster,name);
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
                                        let mon=state.monster.find(m => m.name==monster);
                                        let bonus_act=mon.bonus_actions.find(b => b.name==ba);
                                        let atk=bonus_act.attack;
                                        if (atk==true) {
                                            atk=false;
                                            editBA(monster,ba,"atk",atk);
                                            baEditor(monster,ba);
                                        } else if (atk==false) {
                                            atk=true;
                                            editBA(monster,ba,"atk",atk);
                                            baEditor(monster,ba);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("dmgtype")) {
                                            let dmgtype=args[6].replace("dmgtype ","");
                                            if (!state.encbasics.dmgtype.includes(dmgtype)) {
                                                sendChat("Encounter Creator","/w gm Invalid Damage Type!");
                                            } else if (state.encbasics.dmgtype.includes(dmgtype)) {
                                                editBA(monster,ba,"dmg",dice,dmgtype);
                                                baEditor(monster,ba);
                                            }
                                        }
                                    } else if (args[5].includes("settohit")) {
                                        let tohit=Number(args[5].replace("settohit ",""));
                                        editBA(monster,ba,"tohit",tohit);
                                        baEditor(monster,ba);
                                    } else if (args[5].includes("setatktype")) {
                                        let atktype=args[5].replace("setatktype ","");
                                        if (!state.encbasics.atktype.includes(atktype)) {
                                            sendChat("Encounter Creator","/w gm Invalid Attack Type!");
                                        } else if (state.encbasics.atktype.includes(atktype)) {
                                            editBA(monster,ba,"atktype",atktype);
                                            baEditor(monster,ba);
                                        }
                                    } else if (args[5].includes("setrange")) {
                                        let range=args[5].replace("setrange ","")+" ft.";
                                        editBA(monster,ba,"range",range);
                                        baEditor(monster,ba);
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
                                        let mon=state.monster.find(m => m.name==monster);
                                        let action=mon.actions.find(a => a.name==act);
                                        let atk=action.attack;
                                        if (atk==true) {
                                            atk=false;
                                            editAct(monster,act,"atk",atk);
                                            actEditor(monster,act);
                                        } else if (atk==false) {
                                            atk=true;
                                            editAct(monster,act,"atk",atk);
                                            actEditor(monster,act);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("dmgtype")) {
                                            let dmgtype=args[6].replace("dmgtype ","");
                                            if (!state.encbasics.dmgtype.includes(dmgtype)) {
                                                sendChat("Encounter Creator","/w gm Invalid Damage Type!");
                                            } else if (state.encbasics.dmgtype.includes(dmgtype)) {
                                                editAct(monster,act,"dmg",dice,dmgtype);
                                                actEditor(monster,act);
                                            }
                                        }
                                    } else if (args[5].includes("settohit")) {
                                        let tohit=Number(args[5].replace("settohit ",""));
                                        editAct(monster,act,"tohit",tohit);
                                        actEditor(monster,act);
                                    } else if (args[5].includes("setatktype")) {
                                        let atktype=args[5].replace("setatktype ","");
                                        if (!state.encbasics.atktype.includes(atktype)) {
                                            sendChat("Encounter Creator","/w gm Invalid Attack Type");
                                        } else if (state.encbasics.atktype.includes(atktype)) {
                                            editAct(monster,act,"atktype",atktype);
                                            actEditor(monster,act);
                                        }
                                    } else if (args[5].includes("setrange")) {
                                        let range=args[5].replace("setrange ","")+" ft.";
                                        editAct(monster,act,"range",range);
                                        actEditor(monster,act);
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
                                    createReact(monster,reaction);
                                    reactEditor(monster,reaction);
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
                                        let mon=state.monster.find(m => m.name==monster);
                                        let leg_act=mon.legend_actions.find(l => l.name==leg);
                                        let atk=leg_act.attack;
                                        if (atk==true) {
                                            atk=false;
                                            editLeg(monster,leg,"atk",atk);
                                            legEditor(monster,leg);
                                        } else if (atk==false) {
                                            atk=true;
                                            editLeg(monster,leg,"atk",atk);
                                            legEditor(monster,leg);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("dmgtype")) {
                                            let dmgtype=args[6].replace("dmgtype ","");
                                            if (!state.encbasics.dmgtype.includes(dmgtype)) {
                                                sendChat("Encounter Creator","/w gm Invalid Damage Type!");
                                            } else if (state.encbasics.dmgtype.includes(dmgtype)) {
                                                editLeg(monster,leg,"dmg",dice,dmgtype);
                                                legEditor(monster,leg);
                                            }
                                        }
                                    } else if (args[5].includes("settohit")) {
                                        let tohit=Number(args[5].replace("settohit ",""));
                                        editLeg(monster,leg,"tohit",tohit);
                                        legEditor(monster,leg);
                                    } else if (args[5].includes("setatktype")) {
                                        let atktype=args[5].replace("setatktype ","");
                                        if (!state.encbasics.atktype.includes(atktype)) {
                                            sendChat("Encounter Creator","/w gm Invalid Attack Type!");
                                        } else if (state.encbasics.atktype.includes(atktype)) {
                                            editLeg(monster,leg,"atktype",atktype);
                                            legEditor(monster,leg);
                                        }
                                    } else if (args[5].includes("setrange")) {
                                        let range=args[5].replace("setrange ","")+" ft.";
                                        editLeg(monster,leg,"range",range);
                                        legEditor(monster,leg);
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
                                        let mon=state.monster.find(m => m.name==monster);
                                        let myth_act=mon.mythic_actions.find(m => m.name==myth);
                                        let atk=myth_act.attack;
                                        if (atk==true) {
                                            atk=false;
                                            editMyth(monster,myth,"atk",atk);
                                            mythEditor(monster,myth);
                                        } else if (atk==false) {
                                            atk=true;
                                            editMyth(monster,myth,"atk",atk);
                                            mythEditor(monster,myth);
                                        }
                                    } else if (args[5].includes("setdmg")) {
                                        let dice=args[5].replace("setdmg ","");
                                        if (!args[6]) {
                                            sendChat("Encounter Creator","/w gm You need to define a damage type!");
                                        } else if (args[6].includes("dmgtype")) {
                                            let dmgtype=args[6].replace("dmgtype ","");
                                            if (!state.encbasics.dmgtype.includes(dmgtype)) {
                                                sendChat("Encounter Creator","/w gm Invalid Damage Type!");
                                            } else if (state.encbasics.dmgtype.includes(dmgtype)) {
                                                editMyth(monster,myth,"dmg",dice,dmgtype);
                                                mythEditor(monster,myth);
                                            }
                                        }
                                    } else if (args[5].includes("settohit")) {
                                        let tohit=Number(args[5].replace("settohit ",""));
                                        editMyth(monster,myth,"tohit",tohit);
                                        mythEditor(monster,myth);
                                    } else if (args[5].includes("setatktype")) {
                                        let atktype=args[5].replace("setatktype ","");
                                        if (!state.encbasics.atktype.includes(atktype)) {
                                            sendChat("Encounter Creator","/w gm Invalid Attack Type!");
                                        } else if (state.encbasics.atktype.includes(atktype)) {
                                            editMyth(monster,myth,"atktype",atktype);
                                            mythEditor(monster,myth);
                                        }
                                    } else if (args[5].includes("setrange")) {
                                        let range=args[5].replace("setrange ","")+" ft.";
                                        editMyth(monster,myth,"range",range);
                                        mythEditor(monster,myth);
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
                            monsterMenu(monster);
                        } else if (args[2]=="del") {
                            deleteMon(monster);
                            monsterMenu(undefined);
                        }
                    } else if (args[1].includes("new")) {
                        let monster=args[1].replace("new ","");
                        createMon(monster);
                        monsterMenu(monster);
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
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --monsters">View Monsters</a></div>' + //--
                '<br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --loot">View Loot</a></div>' + //--
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
        let test=state.encounter.find(e => e.name==enc);
        if (test) {
            sendChat("Encounter Creator","/w gm An Encounter with that Name exists already, aborting...");
        } else if (!test) {
            let newenc = [
                {
                    name: enc,
                    mincr: 0,
                    maxcr: 0,
                    loot: {
                        items: [],
                        gold: 0,
                    },
                    monsters: [],
                    party: []
                }
            ];
            state.encounter.push(newenc[0]);
            sendChat("Encounter Creator",`/w gm Created the Encounter \"${enc}\".`);
        }
    },

    editEncounter = function(enc,option,val1,val2,val3) {
        enc=state.encounter.find(e => e.name==enc);
        switch (option) {
            case 'name':
                let name=val1;
                if (!name || name=="") {
                    sendChat("Encounter Creator","/w gm Invalid Name!");
                } else if (name && name!="") {
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i].name=name;
                        }
                    }
                }
            break;
            case 'partyadd':
                if (!val1 || val1=="") {
                    sendChat("Encounter Creator","/w gm Invalid Party!");
                } else if (val1 && val1!="") {
                    let party = enc.party.find(p => p.name==val1);
                    if (!party) {
                        sendChat("Encounter Creator","/w gm Could not find that party. Perhaps it has not been added to the Encounter yet?");
                    } else if (party) {
                        if (val2.includes("name")) {
                            let name = val2.replace("name ","");
                            let char = findObjs({
                                _type: 'character',
                                name: name,
                            }, {caseInsensitive: true})[0];
                            if (!char) {
                                sendChat("Encounter Creator","/w gm Could not find a Character with that Name!");
                            } else if (char) {
                                let charname=char.get('name');
                                let charid=char.get('_id');
                                let found=false;
                                for (let i=0;i<party.members.length;i++) {
                                    if (party.members[i].id==charid) {
                                        found=true;
                                    }
                                }
                                if (found==true) {
                                    sendChat("Encounter Creator","/w gm The Character is already in the Party!");
                                } else if (found==false) {
                                    party.members.push({
                                        name: charname,
                                        id: charid,
                                    });
                                    sendChat("Encounter Creator",`/w gm Added the Character "${charname}" to the Party "${party.name}"!`);
                                    for (let i=0;i<enc.party.length;i++) {
                                        if (enc.party[i].name==party.name) {
                                            enc.party[i].members=party.members;
                                        }
                                    }
                                    for (let i=0;i<state.encounter.length;i++) {
                                        if (state.encounter[i].name==enc.name) {
                                            state.encounter[i]=enc;
                                        }
                                    }
                                    for (let i=0;i<state.party.length;i++) {
                                        if (state.party[i].name=party.name) {
                                            state.party[i]=party;
                                        }
                                    }
                                }
                            }
                        } else if (val2.includes("id")) {
                            let id = val2.replace("id ","");
                            let char = findObjs({
                                _type: 'character',
                                _id: id,
                            }, {caseInsensitive: true})[0];
                            if (!char) {
                                sendChat("Encounter Creator","/w gm Could not find a Character with that ID!");
                            } else if (char) {
                                let charname=char.get('name');
                                let charid=char.get('_id');
                                let found=false;
                                for (let i=0;i<party.members.length;i++) {
                                    if (party.members[i].id==charid) {
                                        found=true;
                                    }
                                }
                                if (found==true) {
                                    sendChat("Encounter Creator","/w gm The Character is already in the Party!");
                                } else if (found==false) {
                                    party.members.push({
                                        name: charname,
                                        id: charid,
                                    });
                                    sendChat("Encounter Creator",`/w gm Added the Character "${charname}" to the Party "${party.name}"!`);
                                    for (let i=0;i<enc.party.length;i++) {
                                        if (enc.party[i].name==party.name) {
                                            enc.party[i].members=party.members;
                                        }
                                    }
                                    for (let i=0;i<state.encounter.length;i++) {
                                        if (state.encounter[i].name==enc.name) {
                                            state.encounter[i]=enc;
                                        }
                                    }
                                    for (let i=0;i<state.party.length;i++) {
                                        if (state.party[i].name=party.name) {
                                            state.party[i]=party;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            break;
            case 'partyrem':
                if (!val1 || val1=="") {
                    sendChat("Encounter Creator","/w gm Invalid Party!");
                } else if (val1 && val1!="") {
                    let party = enc.party.find(p => p.name==val1);
                    if (!party) {
                        sendChat("Encounter Creator","/w gm Could not find that party. Perhaps it has not been added to the Encounter yet?");
                    } else if (party) {
                        if (val2.includes("name")) {
                            let name = val2.replace("name ","");
                            if (name=="") {
                                sendChat("Encounter Creator","/w gm Invalid Charactername!");
                            } else if (name!="") {
                                let char = findObjs({
                                    _type: 'character',
                                    name: name,
                                }, {caseInsensitive: true})[0];
                                if (!char) {
                                    sendChat("Encounter Creator","/w gm Could not find a Character with that Name!");
                                } else if (char) {
                                    let charname = char.get('name');
                                    let charid = char.get('_id');
                                    let found=false;
                                    for (let i=0;i<party.members.length;i++) {
                                        if (party.members[i].id==charid) {
                                            party.members.splice(i);
                                            found=true;
                                        }
                                    }
                                    if (found=true) {
                                        sendChat("Encounter Creator",`/w gm Removed the Character "${charname}" from the Party "${party.name}"!`);
                                        for (let i=0;i<enc.party.length;i++) {
                                            if (enc.party[i].name==party.name) {
                                                enc.party[i]=party;
                                            }
                                        }
                                        for (let i=0;i<state.party.length;i++) {
                                            if (state.party[i].name==party.name) {
                                                state.party[i]=party;
                                            }
                                        }
                                        for (let i=0;i<state.encounter.length;i++) {
                                            if (state.encounter[i].name==enc.name) {
                                                state.encounter[i]=enc;
                                            }
                                        }
                                    } else if (found=false) {
                                        sendChat("Encounter Creator","/w gm No such Character exists in the Party!");
                                    }
                                }
                            }
                        } else if (val2.includes("id")) {
                            let id = val2.replace("id ","");
                            if (id=="") {
                                sendChat("Encounter Creator","/w gm Invalid ID!");
                            } else if (id!="") {
                                let char = findObjs({
                                    _type: 'character',
                                    _id: id,
                                }, {caseInsensitive: true})[0];
                                if (!char) {
                                    sendChat("Encounter Creator","/w gm Could not find a Character with that ID!");
                                } else if (char) {
                                    let charname = char.get('name');
                                    let charid = char.get('_id');
                                    let found=false;
                                    for (let i=0;i<party.members.length;i++) {
                                        if (party.members[i].id==charid) {
                                            party.members.splice(i);
                                            found=true;
                                        }
                                    }
                                    if (found=true) {
                                        sendChat("Encounter Creator",`/w gm Removed the Character "${charname}" from the Party "${party.name}"!`);
                                        for (let i=0;i<enc.party.length;i++) {
                                            if (enc.party[i].name==party.name) {
                                                enc.party[i]=party;
                                            }
                                        }
                                        for (let i=0;i<state.party.length;i++) {
                                            if (state.party[i].name==party.name) {
                                                state.party[i]=party;
                                            }
                                        }
                                        for (let i=0;i<state.encounter.length;i++) {
                                            if (state.encounter[i].name==enc.name) {
                                                state.encounter[i]=enc;
                                            }
                                        }
                                    } else if (found=false) {
                                        sendChat("Encounter Creator","/w gm No such Character exists in the Party!");
                                    }
                                }
                            }
                        }
                    }
                }
            break;
            case 'crmin':
                let mincr=Number(val1);
                if (mincr==null) {
                    sendChat("Encounter Creator","/w gm Invalid Value!");
                } else if (mincr<0 || mincr>30) {
                    sendChat("Encounter Creator","/w gm Invalid Value! Please choose a Number between 0 and 30. For CR 1/2, 1/4 and 1/8, please type: 0.5, 0.25 and 0.125");
                } else if (mincr>enc.maxcr) {
                    sendChat("Encounter Creator","/w gm Minimum CR cannot be above the maximum CR!");
                } else {
                    enc.mincr=mincr;
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                    sendChat("Encounter Creator",`/w gm Set the minimum CR to ${mincr}.`);
                }
            break;
            case 'crmax':
                let maxcr=Number(val1);
                if (maxcr==null) {
                    sendChat("Encounter Creator","/w gm Invalid Value!");
                } else if (maxcr<0 || maxcr>30) {
                    sendChat("Encounter Creator","/w gm Invalid Value! Please choose a Number between 0 and 30. For CR 1/2, 1/4 and 1/8, please type: 0.5, 0.25 and 0.125");
                } else if (maxcr<enc.mincr) {
                    sendChat("Encounter Creator","/w gm Maximum CR cannot be below the minimum CR!");
                } else {
                    enc.maxcr=maxcr;
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                    sendChat("Encounter Creator",`/w gm Set the maximum CR to ${maxcr}.`);
                }
            break;
            case 'addmon':
                let monster = state.monster.find(m => m.name==val1);
                if (!monster) {
                    sendChat("Encounter Creator","/w gm Could not find a Monster with that Name!");
                } else if (monster) {
                    let amount=Number(val2);
                    let found=false;
                    for (let i=0;i<enc.monsters.length;i++) {
                        if (enc.monsters[i].name==monster.name) {
                            found=true;
                            enc.monsters[i].amount+=amount;
                        }
                    }
                    if (found==true) {
                        sendChat("Encounter Creator","/w gm Monster already exists in the Encounter, increased its amount instead!");
                    } else if (found==false) {
                        enc.monsters.push(monster);
                        sendChat("Encounter Creator",`/w gm Added ${amount} "${monster.name}" to the Encounter.`);
                    }
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                }
            break;
            case 'remmon':
                let monst = state.monster.find(m => m.name==val1);
                if (!monst) {
                    sendChat("Encounter Creator","/w gm Could not find a Monster with that Name!");
                } else if (monst) {
                    let amount=Number(val2);
                    let found=false;
                    for (let i=0;i<enc.monsters.length;i++) {
                        if (enc.monsters[i].name==monst.name) {
                            found=true;
                            if (amount>=enc.monsters[i].amount) {
                                enc.monsters.splice(i);
                                sendChat("Encounter Creator",`/w gm Removed the Monster "${monst.name}" from the Encounter.`);
                            } else if (amount<enc.monsters[i].amount) {
                                enc.monsters[i].amount-=amount;
                                sendChat("Encounter Creator",`/w gm Removed ${amount} "${monst.name}" from the Encounter.`);
                            }
                        }
                    }
                    if (found==false) {
                        sendChat("Encounter Creator","/w gm That Monster does not exist within the Encounter!");
                    }
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                }
            break;
            case 'monster':
                let mon = enc.monsters.find(m => m.name==val1);
                if (!mon) {
                    sendChat("Encounter Creator","/w gm Could not find that Monster in the Encounter, trying to find the Monster elsewhere...");
                    mon = state.monster.find(m => m.name==val1);
                    if (!mon) {
                        sendChat("Encounter Creator","/w gm Could not find the Monster anywhere. Perhaps it has not yet been created?");
                    } else if (mon) {
                        monsterMenu(mon.name);
                    }
                } else if (mon) {
                    monsterMenu(mon.name,enc.name);
                }
            break;
            case 'addloot':
                let item = state.loot.items.find(it => it.name==val1);
                if (!item) {
                    sendChat("Encounter Creator","/w gm Could not find an Item with that Name. Perhaps it has not been created yet?");
                } else if (item) {
                    let amount=Number(val2);
                    let found=false;
                    for (let i=0;i<enc.loot.items.length;i++) {
                        if (enc.loot.items[i].name==item.name) {
                            enc.loot.items[i].amount+=amount;
                            found=true;
                        }
                    }
                    item.amount=amount;
                    if (found=false) {
                        enc.loot.items.push(item);
                    }
                    sendChat("Encounter Creator",`/w gm Added ${amount} "${item.name}" to the Loot Table of the Encounter.`);
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                }
            break;
            case 'remloot':
                let items = state.loot.items.find(it => it.name==val1);
                if (!items) {
                    sendChat("Encounter Creator","/w gm Could not find an Item with that Name. Perhaps it has not been created yet?");
                } else if (items) {
                    let amount=Number(val2);
                    let found=false;
                    for (let i=0;i<enc.loot.items.length;i++) {
                        if (enc.loot.items[i].name==items.name) {
                            found=true;
                            if (amount>=enc.loot.items[i].amount) {
                                enc.loot.items.splice(i);
                                sendChat("Encounter Creator",`/w gm All "${items.name}" Items have been removed from the Encounter.`);
                            } else if (amount<enc.loot.items[i].amount) {
                                enc.loot.items[i].amount-=amount;
                                sendChat("Encounter Creator",`/w gm ${amount} "${items.name}" Items were removed from the Encounter.`);
                            }
                        }
                    }
                    if (found==false) {
                        sendChat("Encounter Creator","/w gm Could not find that Item in the Encounter.");
                    }
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                }
            break;
            case 'item':
                let itam = enc.loot.items.find(it => it.name==val1);
                if (!itam) {
                    sendChat("Encounter Creator","/w gm Could not find that Item in the Encounter, searching elsewhere...");
                    itam = state.loot.items.find(it => it.name==val1);
                    if (!itam) {
                        sendChat("Encounter Creator","/w gm Could not find that Item anywhere. Perhaps it has not been created yet?");
                    } else if (itam) {
                        itemMenu(itam.name);
                    }
                } else if (itam) {
                    itemEditor(enc.name,item.name,val1,val2,val3);
                }
            break;
        }
    },

    itemMenu = function(item) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%; border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        let items=state.loot.items;
        if (!item) {
            let itemList='';
            let itemlist=[];
            for (let i=0;i<items.length;i++) {
                itemlist.push(items[i].name);
                let desc=String(items[i].desc).split(';');
                itemList+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td ' + tdstyle + '>' + items[i].name + '</td><td ' + tdstyle + '>' + desc[0] + '</td><td>' + items[i].value + '</td></tr>';
            }
            for (let i=0;i<items.length;i++) {
                itemlist=String(itemlist).replace(",","|");
            }
            let encList=[];
            for (let i=0;i<state.encounter.length;i++) {
                encList.push(state.encounter[i].name);
            }
            for (let i=0;i<state.encounter.length;i++) {
                encList=String(encList).replace(",","|");
            }
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Loot Menu</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<div style="text-align:center;"><b>Items</b></div>' + //--
                '<br>' + //--
                '<table ' + tablestyle + '>' + //--
                '<thead>' + //--
                '<tr><th ' + tdstyle + '>Pos.</th><th ' + tdstyle + '>Name</th><th>Description</th><th>Price (GP)</th>' + //--
                '</thead>' + //--
                '<tbody>' + //--
                itemList + //--
                '</tbody>' + //--
                '</table>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!loot --?{Item?|' + itemlist + '}">View Item</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!loot --?{Item?|' + itemlist + '} --edit">Edit Item</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --?{Encounter?|' + encList + '}">Return to Encounter</a></div>' + //--
                '</div>'
            );
        } else if (item && item!="") {
            item=items.find(it => it.name==item);
            if (!item) {
                let itemList='';
                let itemlist=[];
                for (let i=0;i<items.length;i++) {
                    itemlist.push(items[i].name);
                    let desc=String(items[i].desc).split(';');
                    itemList+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td ' + tdstyle + '>' + items[i].name + '</td><td ' + tdstyle + '>' + desc[0] + '</td><td>' + items[i].value + '</td></tr>';
                }
                for (let i=0;i<items.length;i++) {
                    itemlist=String(itemlist).replace(",","|");
                }
                let encList=[];
                for (let i=0;i<state.encounter.length;i++) {
                    encList.push(state.encounter[i].name);
                }
                for (let i=0;i<state.encounter.length;i++) {
                    encList=String(encList).replace(",","|");
                }
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Loot Menu</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;"><b>Items</b></div>' + //--
                    '<br>' + //--
                    '<table ' + tablestyle + '>' + //--
                    '<thead>' + //--
                    '<tr><th ' + tdstyle + '>Pos.</th><th ' + tdstyle + '>Name</th><th>Description</th><th>Price (GP)</th>' + //--
                    '</thead>' + //--
                    '<tbody>' + //--
                    itemList + //--
                    '</tbody>' + //--
                    '</table>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!loot --?{Item?|' + itemlist + '}">View Item</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!loot --?{Item?|' + itemlist + '} --edit">Edit Item</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --?{Encounter?|' + encList + '}">Return to Encounter</a></div>' + //--
                    '</div>'
                );
            } else if (item) {
                let itemList=[];
                for (let i=0;i<items.length;i++) {
                    itemList.push(items[i].name);
                }
                for (let i=0;i<items.length;i++) {
                    itemList=String(itemList).replace(",","|");
                }
                let encList=[];
                for (let i=0;i<state.encounter.length;i++) {
                    encList.push(state.encounter[i].name);
                }
                for (let i=0;i<state.encounter.length;i++) {
                    encList=String(encList).replace(",","|");
                }
                let desc = item.desc.split(';');
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Item Menu</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Item: <a ' + astyle1 + '" href="!loot --?{Item?|' + itemList + '}">' + item.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<table>' + //--
                    '<tr><td><b>Name: </b></td><td>' + item.name + '</td></tr>' + //--
                    '<tr><td><b>Rarity: </b></td><td>' + item.rarity + '</td></tr>' + //--
                    '<tr><td><b>Price: </b></td><td>' + item.value + ' GP</td></tr>' + //--
                    '<tr><td><b>Description (1/2): </b></td><td>' + desc[0] + '</td></tr>' + //--
                    '<tr><td><b>Description (2/2): </b></td><td>' + desc[1] + '</td></tr>' + //--
                    '</table>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!loot --' + item.name + ' --edit">Edit Item</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!loot">View all Items</a></div>' + //--
                    '</div>'
                );
            }
        }
    },

    itemEditor = function(enc,item,option,val1,val2) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        enc=state.encounter.find(e => e.name==enc);
        item=enc.loot.items.find(i => i.name==item);
        let name,val,desc,rare,type,atk,dmg,dmgtype,secdmg,secdmgtype,tohit,magic;
        if (!option) {
            name=state.temp.name;
            val=state.temp.val;
            desc=state.temp.desc.split(';');
            rare=state.temp.rarity;
            type=state.temp.type;
            atk=state.temp.atk;
            dmg=state.temp.dmg;
            dmgtype=state.temp.dmgtype;
            secdmg=state.temp.secdmg;
            secdmgtype=state.temp.secdmgtype;
            tohit=state.temp.tohit;
            magic=state.temp.magic;
        } else if (option) {
            switch (option) {
                case 'name':
                    name=val1;
                    state.temp.name=val1;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'value':
                    val=Number(val1);
                    state.temp.val=Number(val1);
                    name=state.temp.name;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'desc':
                    desc=val1;
                    state.temp.desc=val1;
                    name=state.temp.name;
                    val=state.temp.val;
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'rarity':
                    rare=val1;
                    state.temp.rarity=val1;
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'type':
                    type=val1;
                    state.temp.type=val1;
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'attack':
                    atk=Boolean(val1);
                    state.temp.atk=Boolean(val1);
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'damage':
                    dmg=val1;
                    dmgtype=val2;
                    state.temp.dmg=val1;
                    state.temp.dmgtype=val2;
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'secdamage':
                    secdmg=val1;
                    secdmgtype=val2;
                    state.temp.secdmg=val1;
                    state.temp.secdmgtype=val2;
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    tohit=state.temp.tohit;
                    magic=state.temp.magic;
                break;
                case 'tohit':
                    tohit=Number(val1);
                    state.temp.tohit=Number(val1);
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    magic=state.temp.magic;
                break;
                case 'magic':
                    magic=Number(val1);
                    state.temp.magic=Number(val1);
                    name=state.temp.name;
                    val=state.temp.val;
                    desc=state.temp.desc.split(';');
                    rare=state.temp.rarity;
                    type=state.temp.type;
                    atk=state.temp.atk;
                    dmg=state.temp.dmg;
                    dmgtype=state.temp.dmgtype;
                    secdmg=state.temp.secdmg;
                    secdmgtype=state.temp.secdmgtype;
                    tohit=state.temp.tohit;
                break;
                case 'confirm':
                    item.value=state.temp.value;
                    item.desc=state.temp.desc;
                    item.rarity=state.temp.rarity;
                    item.type=state.temp.type;
                    item.attack=state.temp.atk;
                    item.damage=state.temp.dmg;
                    item.dmgtype=state.temp.dmgtype;
                    item.secdamage=state.temp.secdmg;
                    item.secdmgtype=state.temp.secdmgtype;
                    item.tohit=state.temp.tohit;
                    item.magic=state.temp.magic;
                    for (let i=0;i<enc.loot.items.length;i++) {
                        if (enc.loot[i].name==item.name) {
                            item.name=state.temp.name;
                            enc.loot[i]=item;
                        }
                    }
                    for (let i=0;i<state.encounter.length;i++) {
                        if (state.encounter[i].name==enc.name) {
                            state.encounter[i]=enc;
                        }
                    }
                    sendChat("Encounter Creator","/w gm Changes have been applied.");
                break;
            }
        }
        if (!item) {
            let itemList='';
            let items=[];
            for (let i=0;i<enc.loot.items.length;i++) {
                items.push(enc.loot.items[i].name);
                let desc = enc.loot.items[i].desc.split(';');
                itemList+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td ' + tdstyle + '>' + enc.loot.items[i].name + '</td><td ' + tdstyle + '>' + desc[0] + '</td><td>' + enc.loot.items[i].value + '</td></tr>';
            }
            for (let i=0;i<enc.loot.items.length;i++) {
                items=String(items).replace(',','|');
            }
            let encList=[];
            for (let i=0;i<state.encounter.length;i++) {
                encList.push(state.encounter[i].name);
            }
            for (let i=0;i<state.encounter.length;i++) {
                encList=String(encList).replace(",","|");
            }
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Item Editor</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<div style="text-align:center;">Encounter: <a ' + astyle1 + '" href="!enc --?{Encounter?|' + encList + '} --edit --loot">' + enc.name + '</a></div>' + //--
                '<br><div style="text-align:center;">Item: <a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --?{Item?|' + items + '}">Not selected</a></div>' + //--
                '<br><br>' + //--
                '<table ' + tablestyle + '>' + //-- 
                '<thead>' + //--
                '<tr><th ' + tdstyle + '>Pos.</th><th ' + tdstyle + '>Name</th><th ' + tdstyle + '>Description</th><th>Price (GP)</th></tr>' + //--
                '</thead>' + //--
                '<tbody>' + //--
                itemList + //--
                '</tbody>' + //--
                '</table>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + '">Go Back</a></div>' + //--
                '</div>'
            );
        } else if (item) {
            let items=[];
            for (let i=0;i<enc.loot.items.length;i++) {
                items.push(enc.loot.items[i].name);
            }
            for (let i=0;i<enc.loot.items.length;i++) {
                items=String(items).replace(',','|');
            }
            let encList=[];
            for (let i=0;i<state.encounter.length;i++) {
                encList.push(state.encounter[i].name);
            }
            for (let i=0;i<state.encounter.length;i++) {
                encList=String(encList).replace(",","|");
            }
            let desc=item.desc.split(';');
            if (item.attack==true) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Item Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Encounter: <a ' + astyle1 + '" href="!enc --?{Encounter?|' + encList + '} --edit --loot">' + enc.name + '</a></div>' + //--
                    '<div style="text-align:center;">Item: <a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --?{Item?|' + items + '}">' + item.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<table>' + //--
                    '<tr><td><b>Name: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --name ?{Name?|Insert Name}">' + item.name + '</a></td></tr>' + //--
                    '<tr><td><b>Price: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --value ?{Price?|1}">' + item.value + ' GP</a></td></tr>' + //--
                    '<tr><td><b>Rarity: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --rarity ?{Rarity?|Common|Uncommon|Rare|Very Rare|Legendary|Artifact}">' + item.rarity + '</a></td></tr>' + //--
                    '<tr><td><b>Type: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --type ?{Type?|Melee Weapon|Ranged Weapon|Light Armor|Medium Armor|Heavy Armor|Shield|Potion|Scroll|Wondrous Item|Misc}">' + item.type + '</a></td></tr>' + //--
                    '<tr><td><b>Has Attack: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --attack ?{Attack?|true|false}">' + item.attack + '</a></td></tr>' + //--
                    '<tr><td><b>Damage: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --damage ?{Damage Dice?|1d6} --type ?{Damage Type?|Insert Damage Type}">' + item.damage + ' ' + item.dmgtype + '</a></td></tr>' + //--
                    '<tr><td><b>Secondary Damage: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --secdamage ?{Damage Dice?|1d6} --type ?{Damage Type?|Insert Damage Type}">' + item.secdamage + ' ' + item.secdmgtype + '</a></td></tr>' + //--
                    '<tr><td><b>To Hit: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --tohit ?{To Hit Bonus?|0}">' + item.tohit + '</a></td></tr>' + //--
                    '<tr><td><b>Magic Bonus: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --magic ?{Magic Bonus?|0}">' + item.magic + '</a></td></tr>' + //--
                    '<tr><td><b>Description (1/2): </b></td><td>' + desc[0] + '</td></tr>' + //--
                    '<tr><td><b>Description (2/2): </b></td><td>' + desc[1] + '</td></tr>' + //--
                    '</table>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --desc ?{Description?|Insert;Desc}">Set Description</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --confirm">Apply Changes</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (item.attack==false) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Item Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Encounter: <a ' + astyle1 + '" href="!enc --?{Encounter?|' + encList + '} --edit --loot">' + enc.name + '</a></div>' + //--
                    '<div style="text-align:center;">Item: <a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --?{Item?|' + items + '}">' + item.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<table>' + //--
                    '<tr><td><b>Name: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --name ?{Name?|Insert Name}">' + item.name + '</a></td></tr>' + //--
                    '<tr><td><b>Price: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --value ?{Price?|1}">' + item.value + ' GP</a></td></tr>' + //--
                    '<tr><td><b>Rarity: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --rarity ?{Rarity?|Common|Uncommon|Rare|Very Rare|Legendary|Artifact}">' + item.rarity + '</a></td></tr>' + //--
                    '<tr><td><b>Type: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --type ?{Type?|Melee Weapon|Ranged Weapon|Light Armor|Medium Armor|Heavy Armor|Shield|Potion|Scroll|Wondrous Item|Misc}">' + item.type + '</a></td></tr>' + //--
                    '<tr><td><b>Has Attack: </b></td><td><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --attack ?{Attack?|true|false}">' + item.attack + '</a></td></tr>' + //--
                    '<tr><td><b>Description (1/2): </b></td><td>' + desc[0] + '</td></tr>' + //--
                    '<tr><td><b>Description (2/2): </b></td><td>' + desc[1] + '</td></tr>' + //--
                    '</table>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --desc ?{Description?|Insert;Desc}">Set Description</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --loot --' + item.name + ' --confirm">Apply Changes</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            }
        }
    },

    genLoot = function(enc,amount,minrare,maxrare,overwrite) {

    },

    submitEnc = function(enc,ignore) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        enc=state.encounter.find(e => e.name==enc);
        if (!enc) {
            sendChat("Encounter Creator","/w gm Could not find an Encounter with that name.");
        } else if (enc) {
            let monsters = enc.monsters;
            if (!ignore) {
                for (let i=0;i<monsters.length;i++) {
                    if (monsters[i].cr>enc.maxcr || monsters[i].cr<enc.mincr) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Submit Encounter</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Are you sure you want to submit the Encounter?<br><br>One or more Monsters have a CR that is outside the Encounter\'s minimum/maximum CR Range.</div>' + //--
                            '<br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --submit --ignorecr true">Confirm</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --submit --ignorecr false">Cancel</a></div>' + //--
                            '</div>'
                        );
                    }
                }
            } else if (ignore=="true") {
                for (let i=0;i<monsters.length;i++) {
                    let monster = monsters[i];
                    let monsheet = createObj('character',{
                        name: monster.name
                    });
                    let monid = monsheet.get('_id');
                    monster.id=monid;
                    sendChat("Encounter Creator",`!setattr --charid ${monid} --npc|1 --charactersheet_type|npc --npc_name|${monster.name} --npc_type|${monster.type} --npc_ac|${monster.ac} --npc_actype|actype --hp|${monster.hp} --npc_speed|${monster.speed} --npc_vulnerabilities|${monster.vuln} --npc_resistances|${monster.res} --npc_immunities|${monster.dmgimm} --npc_condition_immunities|${monster.condimm} --npc_challenge|${monster.cr} --pb|${monster.pb} --npc_pb|${monster.pb} --strength_base|${monster.stat.str} --dexterity_base|${monster.stat.dex} --constitution_base|${monster.stat.con} --intelligence_base|${monster.stat.int} --wisdom_base|${monster.stat.wis} --charisma_base|${monster.stat.cha} --npc_legendary_actions|${monster.legendary}`);
                    if (monster.caster==true) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npcspellcastingflag|1 --caster_level|${monster.caster_lvl} --spell_attack_mod|${monster.spell_atk_mod} --spell_save_dc|${monster.spell_dc_mod} --spellcasting_ability|@{${cast_ability}}+`);
                    } else if (monster.caster==false) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npcspellcastingflag|0`);
                    }
                    if (monster.save.length>=1) {
                        for (let j=0;j<monster.save.length;j++) {
                            let attr = monster.save[j].name;
                            let val = monster.save[j].val;
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_${attr.toLowerCase()}_save_base|${val}`);
                        }
                    }
                    if (monster.skill.length>=1) {
                        for (let j=0;j<monster.skill.length;j++) {
                            let skill = monster.skill[j].name;
                            let val = monster.skill[j].val;
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_${skill.toLowerCase()}_base|${val}`);
                        }
                    }
                    if (monster.bonusact==true) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npcbonusactionflag|1`);
                    } else if (monster.bonusact==false) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npcbonusactionflag|0`);
                    }
                    if (monster.react==true) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npcreactionsflag|1`);
                    } else if (monster.react==false) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npcreactionsflag|0`);
                    }
                    if (monster.mythic==true) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_mythic_actions|1 --npc_mythic_actions_desc|${monster.mythic_desc}`);
                    } else if (monster.mythic==false) {
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_mythic_actions|0`);
                    }
                    if (monster.traits.length>=1) {
                        for (let j=0;j<monster.traits.length;j++) {
                            let trait=monster.traits[j];
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npctrait_-CREATE_name|${trait.name} --repeating_npctrait_-CREATE_description|${trait.desc}`);
                        }
                        let traits = findObjs({
                            _type: 'attribute',
                            characterid: monid
                        });
                        _.each(traits, function(object) {
                            let name=object.get('name');
                            if (name.includes("repeating_npctrait") && name.includes("_name")) {
                                let trname = object.get('current');
                                for (let j=0;j<monster.traits.length;j++) {
                                    if (monster.traits[j].name==trname) {
                                        let id = name.replace("repeating_npctrait_","").replace("_name","");
                                        monster.traits[j].id=id;
                                    }
                                }
                            }
                        });
                    }
                    if (monster.actions.length>=1) {
                        for (let j=0;j<monster.actions.length;j++) {
                            let act = monster.actions[i];
                            if (act.attack==true) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction_-CREATE_name|${act.name} --repeating_npcaction_-CREATE_description|${act.desc} --repeating_npcaction_-CREATE_attack_flag|on --repeating_npcaction_-CREATE_attack_range|${act.range} --repeating_npcaction_-CREATE_attack_tohit|${act.tohit} --repeating_npcaction_-CREATE_attack_type|${act.atktype} --repeating_npcaction_-CREATE_attack_damage|${act.dmg} --repeating_npcaction_-CREATE_attack_damagetype|${act.dmgtype}`);
                            } else if (act.attack==false) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction_-CREATE_name|${act.name} --repeating_npcaction_-CREATE_description|${act.desc} --repeating_npcaction_-CREATE_attack_flag|0`);
                            }
                        }
                    }
                    let acts = findObjs({
                        _type: 'attribute',
                        characterid: monid
                    });
                    _.each(acts, function(object) {
                        let name=object.get('name');
                        if (name.includes("repeating_npcaction_") && name.includes("_name")) {
                            let aname = object.get('current');
                            for (let j=0;j<monster.actions.length;j++) {
                                if (monster.actions[j].name==aname) {
                                    let id = name.replace("repeating_npcaction_","").replace("_name","");
                                    monster.actions[j].id=id;
                                }
                            }
                        }
                    });
                    if (monster.bonus_actions.length>=1) {
                        for (let j=0;j<monster.bonus_actions.length;j++) {
                            let ba = monster.bonus_actions[j];
                            if (ba.attack==true) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcbonusaction_-CREATE_name|${ba.name} --repeating_npcbonusaction_-CREATE_description|${ba.desc} --repeating_npcbonusaction_-CREATE_attack_flag|on --repeating_npcbonusaction_-CREATE_attack_range|${ba.range} --repeating_npcbonusaction_-CREATE_attack_tohit|${ba.tohit} --repeating_npcbonusaction_-CREATE_attack_type|${ba.atktype} --repeating_npcbonusaction_-CREATE_attack_damage|${ba.dmg} --repeating_npcbonusaction_-CREATE_attack_damagetype|${ba.dmgtype}`);
                            } else if (ba.attack==false) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcbonusaction_-CREATE_name|${ba.name} --repeating_npcbonusaction_-CREATE_description|${ba.desc} --repeating_npcbonusactions_-CREATE_attack_flag|0`);
                            }
                        }
                    }
                    let bas = findObjs({
                        _type: 'attribute',
                        characterid: monid
                    });
                    _.each(bas, function(object) {
                        let name=object.get('name');
                        if (name.includes("repeating_npcbonusaction_") && name.includes("_name")) {
                            let baname = object.get('current');
                            for (let j=0;j<monster.bonus_actions.length;j++) {
                                if (monster.bonus_actions[j].name==baname) {
                                    let id = name.replace("repeating_npcbonusaction_","").replace("_name","");
                                    monster.bonus_actions[i].id=id;
                                }
                            }
                        }
                    });
                    if (monster.legendary_actions.length>=1) {
                        for (let j=0;j<monster.legendary_actions.length;j++) {
                            let leg = monster.legendary_actions[j];
                            if (leg.attack==true) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-l_-CREATE_name|${leg.name} --repeating_npcaction-l_-CREATE_description|${leg.desc} --repeating_npcaction-l_-CREATE_attack_flag|on --repeating_npcaction-l_-CREATE_attack_range|${leg.range} --repeating_npcaction-l_-CREATE_attack_tohit|${leg.tohit} --repeating_npcaction-l_-CREATE_attack_type|${leg.atktype} --repeating_npcaction-l_-CREATE_attack_damage|${leg.dmg} --repeating_npcaction-l_-CREATE_attack_damagetype|${leg.dmgtype}`);
                            } else if (leg.attack==false) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-l_-CREATE_name|${leg.name} --repeating_npcaction-l_-CREATE_description|${leg.desc} --repeating_npcaction-l_-CREATE_attack_flag|0`);
                            }
                        }
                    }
                    let legs = findObjs({
                        _type: 'attribute',
                        characterid: monid
                    });
                    _.each(legs, function(object) {
                        let name = object.get('name');
                        if (name.includes("repeating_npcaction-l") && name.includes("_name")) {
                            let lname = object.get('current');
                            for (let j=0;j<monster.legendary_actions.length;j++) {
                                if (monster.legendary_actions[j].name==lname) {
                                    let id = name.replace("repeating_npcaction-l_","").replace("_name","");
                                    monster.legendary_actions[j].id=id;
                                }
                            }
                        }
                    });
                    if (monster.mythic_actions.length>=1) {
                        for (let j=0;j<monster.mythic_actions.length;j++) {
                            let myth = monster.mythic_actions[j];
                            if (myth.attack==true) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-m_-CREATE_name|${myth.name} --repeating_npcaction-m_-CREATE_description|${myth.desc} --repeating_npcaction-m_-CREATE_attack_flag|on --repeating_npcaction-m_-CREATE_attack_range|${myth.range} --repeating_npcaction-m_-CREATE_attack_tohit|${myth.tohit} --repeating_npcaction-m_-CREATE_attack_type|${myth.atktype} --repeating_npcaction-m_-CREATE_attack_damage|${myth.dmg} --repeating_npcaction-m_-CREATE_attack_damagetype|${myth.dmgtype}`);
                            } else if (myth.attack==false) {
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-m_-CREATE_name|${myth.name} --repeating_npcaction-m_-CREATE_description|${myth.desc} --repeating_npcaction-m_-CREATE_attack_flag|0`);
                            }
                        }
                    }
                    let myths = findObjs({
                        _type: 'attribute',
                        characterid: monid
                    });
                    _.each(myths, function(object) {
                        let name = object.get('name');
                        if (name.includes("repeating_npcaction-m") && name.includes("_name")) {
                            let mname = object.get('current');
                            for (let j=0;j<monster.mythic_actions.length;j++) {
                                if (monster.mythic_actions[j].name==mname) {
                                    let id = name.repalce("repeating_npcaction-m_","").replace("_name","");
                                    monster.mythic_actions[j].id=id;
                                }
                            }
                        }
                    });
                    if (monster.reactions.length>=1) {
                        for (let j=0;j<monster.reactions.length;j++) {
                            let react = monster.reactions[j];
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcreaction_-CREATE_name|${react.name} --repeating_npcreaction_-CREATE_description|${react.desc}`);
                        }
                    }
                    let reacts = findObjs({
                        _type: 'attribute',
                        characterid: monid
                    });
                    _.each(reacts, function(object) {
                        let name = object.get('name');
                        if (name.includes("repeating_npcreaction") && name.includes("_name")) {
                            let rname = objeact.get('current');
                            for (let j=0;j<monster.reactions.length;j++) {
                                if (monster.reactions[j].name==rname) {
                                    let id = name.replace("repeating_npcreaction_","").replace("_name","");
                                    monster.reactions[j].id=id;
                                }
                            }
                        }
                    });
                    for (let j=0;j<enc.monsters.length;j++) {
                        if (enc.monsters[j].name==monster.name) {
                            enc.monsters[j]=monster;
                        }
                    }
                }
                for (let i=0;i<state.encounter.length;i++) {
                    if (state.encounter[i].name==enc.name) {
                        state.encounter[i]=enc;
                    }
                }
            } else if (ignore=="false") {
                for (let i=0;i<monsters.length;i++) {
                    let monster=monsters[i];
                    if (monster.cr<enc.mincr || monster.maxcr>enc.maxcr) {
                        sendChat("Encounter Create",`/w gm Addition of Monster \"${monster.name}\" has been skipped because its CR exceeds the set range of Min: ${enc.mincr} Max: ${enc.maxcr}.`);
                    } else if (monster.cr<=enc.maxcr && monster.cr>=enc.mincr) {
                        let monsheet = createObj('character',{
                            name: monster.name
                        });
                        let monid = monsheet.get('_id');
                        monster.id=monid;
                        sendChat("Encounter Creator",`!setattr --charid ${monid} --npc|1 --charactersheet_type|npc --npc_name|${monster.name} --npc_type|${monster.type} --npc_ac|${monster.ac} --npc_actype|actype --hp|${monster.hp} --npc_speed|${monster.speed} --npc_vulnerabilities|${monster.vuln} --npc_resistances|${monster.res} --npc_immunities|${monster.dmgimm} --npc_condition_immunities|${monster.condimm} --npc_challenge|${monster.cr} --pb|${monster.pb} --npc_pb|${monster.pb} --strength_base|${monster.stat.str} --dexterity_base|${monster.stat.dex} --constitution_base|${monster.stat.con} --intelligence_base|${monster.stat.int} --wisdom_base|${monster.stat.wis} --charisma_base|${monster.stat.cha} --npc_legendary_actions|${monster.legendary}`);
                        if (monster.caster==true) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npcspellcastingflag|1 --caster_level|${monster.caster_lvl} --spell_attack_mod|${monster.spell_atk_mod} --spell_save_dc|${monster.spell_dc_mod} --spellcasting_ability|@{${cast_ability}}+`);
                        } else if (monster.caster==false) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npcspellcastingflag|0`);
                        }
                        if (monster.save.length>=1) {
                            for (let j=0;j<monster.save.length;j++) {
                                let attr = monster.save[j].name;
                                let val = monster.save[j].val;
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_${attr.toLowerCase()}_save_base|${val}`);
                            }
                        }
                        if (monster.skill.length>=1) {
                            for (let j=0;j<monster.skill.length;j++) {
                                let skill = monster.skill[j].name;
                                let val = monster.skill[j].val;
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_${skill.toLowerCase()}_base|${val}`);
                            }
                        }
                        if (monster.bonusact==true) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npcbonusactionflag|1`);
                        } else if (monster.bonusact==false) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npcbonusactionflag|0`);
                        }
                        if (monster.react==true) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npcreactionsflag|1`);
                        } else if (monster.react==false) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npcreactionsflag|0`);
                        }
                        if (monster.mythic==true) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_mythic_actions|1 --npc_mythic_actions_desc|${monster.mythic_desc}`);
                        } else if (monster.mythic==false) {
                            sendChat("Encounter Creator",`!setattr --charid ${monid} --npc_mythic_actions|0`);
                        }
                        if (monster.traits.length>=1) {
                            for (let j=0;j<monster.traits.length;j++) {
                                let trait=monster.traits[j];
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npctrait_-CREATE_name|${trait.name} --repeating_npctrait_-CREATE_description|${trait.desc}`);
                            }
                            let traits = findObjs({
                                _type: 'attribute',
                                characterid: monid
                            });
                            _.each(traits, function(object) {
                                let name=object.get('name');
                                if (name.includes("repeating_npctrait") && name.includes("_name")) {
                                    let trname = object.get('current');
                                    for (let j=0;j<monster.traits.length;j++) {
                                        if (monster.traits[j].name==trname) {
                                            let id = name.replace("repeating_npctrait_","").replace("_name","");
                                            monster.traits[j].id=id;
                                        }
                                    }
                                }
                            });
                        }
                        if (monster.actions.length>=1) {
                            for (let j=0;j<monster.actions.length;j++) {
                                let act = monster.actions[i];
                                if (act.attack==true) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction_-CREATE_name|${act.name} --repeating_npcaction_-CREATE_description|${act.desc} --repeating_npcaction_-CREATE_attack_flag|on --repeating_npcaction_-CREATE_attack_range|${act.range} --repeating_npcaction_-CREATE_attack_tohit|${act.tohit} --repeating_npcaction_-CREATE_attack_type|${act.atktype} --repeating_npcaction_-CREATE_attack_damage|${act.dmg} --repeating_npcaction_-CREATE_attack_damagetype|${act.dmgtype}`);
                                } else if (act.attack==false) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction_-CREATE_name|${act.name} --repeating_npcaction_-CREATE_description|${act.desc} --repeating_npcaction_-CREATE_attack_flag|0`);
                                }
                            }
                        }
                        let acts = findObjs({
                            _type: 'attribute',
                            characterid: monid
                        });
                        _.each(acts, function(object) {
                            let name=object.get('name');
                            if (name.includes("repeating_npcaction_") && name.includes("_name")) {
                                let aname = object.get('current');
                                for (let j=0;j<monster.actions.length;j++) {
                                    if (monster.actions[j].name==aname) {
                                        let id = name.replace("repeating_npcaction_","").replace("_name","");
                                        monster.actions[j].id=id;
                                    }
                                }
                            }
                        });
                        if (monster.bonus_actions.length>=1) {
                            for (let j=0;j<monster.bonus_actions.length;j++) {
                                let ba = monster.bonus_actions[j];
                                if (ba.attack==true) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcbonusaction_-CREATE_name|${ba.name} --repeating_npcbonusaction_-CREATE_description|${ba.desc} --repeating_npcbonusaction_-CREATE_attack_flag|on --repeating_npcbonusaction_-CREATE_attack_range|${ba.range} --repeating_npcbonusaction_-CREATE_attack_tohit|${ba.tohit} --repeating_npcbonusaction_-CREATE_attack_type|${ba.atktype} --repeating_npcbonusaction_-CREATE_attack_damage|${ba.dmg} --repeating_npcbonusaction_-CREATE_attack_damagetype|${ba.dmgtype}`);
                                } else if (ba.attack==false) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcbonusaction_-CREATE_name|${ba.name} --repeating_npcbonusaction_-CREATE_description|${ba.desc} --repeating_npcbonusactions_-CREATE_attack_flag|0`);
                                }
                            }
                        }
                        let bas = findObjs({
                            _type: 'attribute',
                            characterid: monid
                        });
                        _.each(bas, function(object) {
                            let name=object.get('name');
                            if (name.includes("repeating_npcbonusaction_") && name.includes("_name")) {
                                let baname = object.get('current');
                                for (let j=0;j<monster.bonus_actions.length;j++) {
                                    if (monster.bonus_actions[j].name==baname) {
                                        let id = name.replace("repeating_npcbonusaction_","").replace("_name","");
                                        monster.bonus_actions[i].id=id;
                                    }
                                }
                            }
                        });
                        if (monster.legendary_actions.length>=1) {
                            for (let j=0;j<monster.legendary_actions.length;j++) {
                                let leg = monster.legendary_actions[j];
                                if (leg.attack==true) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-l_-CREATE_name|${leg.name} --repeating_npcaction-l_-CREATE_description|${leg.desc} --repeating_npcaction-l_-CREATE_attack_flag|on --repeating_npcaction-l_-CREATE_attack_range|${leg.range} --repeating_npcaction-l_-CREATE_attack_tohit|${leg.tohit} --repeating_npcaction-l_-CREATE_attack_type|${leg.atktype} --repeating_npcaction-l_-CREATE_attack_damage|${leg.dmg} --repeating_npcaction-l_-CREATE_attack_damagetype|${leg.dmgtype}`);
                                } else if (leg.attack==false) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-l_-CREATE_name|${leg.name} --repeating_npcaction-l_-CREATE_description|${leg.desc} --repeating_npcaction-l_-CREATE_attack_flag|0`);
                                }
                            }
                        }
                        let legs = findObjs({
                            _type: 'attribute',
                            characterid: monid
                        });
                        _.each(legs, function(object) {
                            let name = object.get('name');
                            if (name.includes("repeating_npcaction-l") && name.includes("_name")) {
                                let lname = object.get('current');
                                for (let j=0;j<monster.legendary_actions.length;j++) {
                                    if (monster.legendary_actions[j].name==lname) {
                                        let id = name.replace("repeating_npcaction-l_","").replace("_name","");
                                        monster.legendary_actions[j].id=id;
                                    }
                                }
                            }
                        });
                        if (monster.mythic_actions.length>=1) {
                            for (let j=0;j<monster.mythic_actions.length;j++) {
                                let myth = monster.mythic_actions[j];
                                if (myth.attack==true) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-m_-CREATE_name|${myth.name} --repeating_npcaction-m_-CREATE_description|${myth.desc} --repeating_npcaction-m_-CREATE_attack_flag|on --repeating_npcaction-m_-CREATE_attack_range|${myth.range} --repeating_npcaction-m_-CREATE_attack_tohit|${myth.tohit} --repeating_npcaction-m_-CREATE_attack_type|${myth.atktype} --repeating_npcaction-m_-CREATE_attack_damage|${myth.dmg} --repeating_npcaction-m_-CREATE_attack_damagetype|${myth.dmgtype}`);
                                } else if (myth.attack==false) {
                                    sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcaction-m_-CREATE_name|${myth.name} --repeating_npcaction-m_-CREATE_description|${myth.desc} --repeating_npcaction-m_-CREATE_attack_flag|0`);
                                }
                            }
                        }
                        let myths = findObjs({
                            _type: 'attribute',
                            characterid: monid
                        });
                        _.each(myths, function(object) {
                            let name = object.get('name');
                            if (name.includes("repeating_npcaction-m") && name.includes("_name")) {
                                let mname = object.get('current');
                                for (let j=0;j<monster.mythic_actions.length;j++) {
                                    if (monster.mythic_actions[j].name==mname) {
                                        let id = name.repalce("repeating_npcaction-m_","").replace("_name","");
                                        monster.mythic_actions[j].id=id;
                                    }
                                }
                            }
                        });
                        if (monster.reactions.length>=1) {
                            for (let j=0;j<monster.reactions.length;j++) {
                                let react = monster.reactions[j];
                                sendChat("Encounter Creator",`!setattr --charid ${monid} --repeating_npcreaction_-CREATE_name|${react.name} --repeating_npcreaction_-CREATE_description|${react.desc}`);
                            }
                        }
                        let reacts = findObjs({
                            _type: 'attribute',
                            characterid: monid
                        });
                        _.each(reacts, function(object) {
                            let name = object.get('name');
                            if (name.includes("repeating_npcreaction") && name.includes("_name")) {
                                let rname = objeact.get('current');
                                for (let j=0;j<monster.reactions.length;j++) {
                                    if (monster.reactions[j].name==rname) {
                                        let id = name.replace("repeating_npcreaction_","").replace("_name","");
                                        monster.reactions[j].id=id;
                                    }
                                }
                            }
                        });
                        for (let j=0;j<enc.monsters.length;j++) {
                            if (enc.monsters[j].name==monster.name) {
                                enc.monsters[j]=monster;
                            }
                        }
                    }
                }
                for (let i=0;i<state.encounter.length;i++) {
                    if (state.encounter[i].name==enc.name) {
                        state.encounter[i]=enc;
                    }
                }
            }
        }
    },

    resetEnc = function(enc) {
        for (let i=0;i<state.encounter.length;i++) {
            if (state.encounter[i].name==enc) {
                state.encounter[i].mincr=0;
                state.encounter[i].maxcr=0;
                state.encounter[i].loot.items=[];
                state.encounter[i].loot.gold=0;
                state.encounter[i].monsters=[];
                state.encounter[i].party=[];
            }
        } 
    },

    viewMonsters = function(enc) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        let trborder = 'style="border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"';
        let tdborder = 'style="border-left: 1px solid #cccccc; border-right: 1px solid #cccccc;"';
        let tdborder2 = 'style="border-rigth: 1px solid #cccccc;"';
        enc=state.encounter.find(e => e.name==enc);
        let monsters = enc.monsters;
        let monsterList="";
        let list=[];
        let enclist=[];
        let fullMonList=[];
        for (let i=0;i<state.encounter.length;i++) {
            enclist.push(state.encounter[i].name);
        }
        let len1=enclist.length;
        for (let i=0;i<len1;i++) {
            enclist=String(enclist).replace(",","|");
        }
        for (let i=0;i<state.monster.length;i++) {
            fullMonList.push(state.monster[i].name);
        }
        let len2 = fullMonList.length;
        for (let i=0;i<len2;i++) {
            fullMonList=String(fullMonList).replace(",","|");
        }
        if (monsters.length && monsters.length>0) {
            for (let i=0;i<monsters.length;i++) {
                monsterList+='<tr '+trborder+'><td '+tdborder2+'>'+monsters[i].name+'</td><td '+tdborder2+'>'+monsters[i].type+'</td><td '+tdborder2+'>'+monsters[i].hp+'</td><td '+tdborder2+'>'+monsters[i].ac+'</td><td>'+monsters[i].cr+'</td></tr>';
                list.push(monsters[i].name);
            }
            let len=list.length;
            for (let i=0;i<len;i++) {
                list=String(list).replace(',','|');
            }
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Monster List</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<table ' + tablestyle + '>' + //--
                '<tr><td style="text-align:left;">Encounter: </td><td style="text-align:center;"><a ' + astyle1 + '" href="!enc --?{Encounter?|' + enclist + '} --monsters">' + enc.name + '</a></td></tr>' + //--
                '</table>' + //--
                '<br><br>' + //--
                '<table>' + //--
                '<thead>' + //--
                '<tr ' + trstyle + '><th ' + tdborder2 + '>Name</th><th ' + tdborder2 + '>Type</th><th ' + tdborder2 + '>HP</th><th ' + tdborder2 + '>AC</th><th>CR</th></tr>' + //--
                '</thead>' + //--
                '<tbody>' + //--
                monsterList + //--
                '</tbody>' + //--
                '</table>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --monster --?{Monster?|' + list + '}">Edit Monster</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --monster --add ?{Monster?|' + fullMonList + '}">Add Monster</a>' + //--
                '<a ' + astyle1 + '" href="!enc --' + enc.name + ' --edit --monster --rem ?{Monster?|' + list + '}">Rem. Monster</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + '">Go Back</a></div>' + //--
                '</div>'
            );
        }
    },

    viewLoot = function(enc) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        let trborder = 'style="border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"';
        let tdborder = 'style="border-left: 1px solid #cccccc; border-right: 1px solid #cccccc;"';
        let tdborder2 = 'style="border-rigth: 1px solid #cccccc;"';
        enc=state.enc.find(e => e.name==enc);
        let loot = enc.loot;
        let lootList = "";
        let items=[];
        let enclist=[];
        for (let i=0;i<state.enc.length;i++) {
            enclist.push(state.enc[i].name);
        }
        let len1=enclist.length;
        for (let i=0;i<len1;i++) {
            enclist=String(enclist).replace(",","|");
        }
        if (loot.length && loot.length>0) {
            for (let i=0;i<loot.length;i++) {
                let desc=String(loot[i].desc).split(';');
                lootList='<tr ' + trborder + '><td ' + tdborder2 + '>' + loot[i].name + '</td><td ' + tdborder2 + '>' + desc[0] + '</td><td>' + loot[i].price + '</td></tr>';
                items.push(loot[i].name);
            }
            let len=items.length;
            for (let i=0;i<len;i++) {
                items=String(items).replace(",","|");
            }
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Loot Table</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<div style="text-align:center;">Encounter: <a ' + astyle1 + '" href="!enc --?{Encounter?|' + enclist + '} --loot">' + enc.name + '</a></div>' + //--
                '<br><br>' + //--
                '<table>' + //--
                '<thead>' + //--
                '<tr ' + trstyle + '><th ' + tdborder2 + '>Name</th><th ' + tdborder2 + '>Description</th><th>Price (GP)</th></tr>' + //--
                '</thead>' + //--
                '<tbody>' + //--
                lootList + //--
                '</tbody>' + //--
                '</table>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --edit --loot --?{Item?|' + items + '}">Edit Item</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --genloot ?{Amount?|1} --minrare ?{Minimum Rarity?|Common|Uncommon|Rare|Very Rare|Legendary} --maxrare ?{Maximum Rarity?|Common|Uncommon|Rare|Very Rare|Legendary} --overwrite ?{Overwrite Table?|true|false}">Generate Loot</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + '">Go Back</a></div>' + //--
                '</div>'
            );
        } else if (!loot.length || loot.length==0) {
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Loot Table</div>' + //--
                '<div ' + substyle + '></div>' + //--
                '<div style="text-align:center;">Encounter: <a ' + astyle1 + '" href="!enc --?{Encounter?|' + enclist + '} --loot">' + enc.name + '</a></div>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><b>No Items yet...</b></div>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + ' --genloot ?{Amount?|1} --minrare ?{Minimum Rarity?|Common|Uncommon|Rare|Very Rare|Legendary} --maxrare ?{Maximum Rarity?|Common|Uncommon|Rare|Very Rare|Legendary} --overwrite ?{Overwrite Table?|true|false}">Generate Loot</a></div>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!enc --' + enc.name + '">Go Back</a></div>' + //--
                '</div>'
            );
        }
    },

    monsterMenu = function(mon) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        mon=state.monster.find(m => m.name==mon);
        let monlist=[];
        for (let i=0; i<state.monster.length;i++) {
            monlist.push(state.monster[i].name);
        }
        if (!mon) {
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Monster Menu</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '}">Not selected</a></div>' + //--
                '</div>'
            );
        } else if (mon) {
            let skilllist='';
            let count=0;
            for (let i=0;i<mon.skill.length;i++) {
                let skill=mon.skill[i];
                if (count>5) {
                    skilllist+='<tr>';
                    count=0;
                } else if (count <5) {
                    skilllist+='<td>' + skill.name + ' (' + skill.val + ')</td>';
                } else if (count==5) {
                    skilllist+='</tr>';
                }
                count++;
            }
            let savelist='';
            for (let i=0;i<mon.save.length;i++) {
                let save = mon.save[i];
                savelist+='<td>' + save.name + ' (' + save.val + ')</td>';
            }
            sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                '<div ' + headstyle + '>Monster Menu</div>' + //--
                '<div ' + arrowstyle + '></div>' + //--
                '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '}">' + mon.name + '</a></div>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><b>Stats</b></div>' + //--
                '<br>' + //--
                '<table>' + //--
                '<tr><td>Type: </td><td>' + mon.type + '</td></tr>' + //--
                '<tr><td>Str (' + mon.stat.str + ')</td><td>Dex (' + mon.stat.dex + ')</td><td>Con (' + mon.stat.con + ')</td></tr>' + //--
                '<tr><td>Int (' + mon.stat.int + ')</td><td>Wis (' + mon.stat.wis+ ')</td><td>Cha (' + mon.stat.cha + ')</td></tr>' + //--
                '</table>' + //--
                '<br>' + //--
                '<div style="text-align:center;"><b>Saves</b></div>' + //--
                '<br>' + //--
                '<table>' + //--
                '<tr>' + savelist + '</tr>' + //--
                '</table>' + //--
                '<br>' + //--
                '<div style="text-align:center;"><b>Skills</b></div>' + //--
                '<br>' + //--
                '<table>' + //--
                '<tr>' + skilllist + //--
                '</table>' + //--
                '<br>' + //--
                '<div style="text-align:center;"><b>General</b></div>' + //--
                '<br>' + //--
                '<table>' + //--
                '<tr><td>CR: </td><td>' + mon.cr + '</td></tr>' + //--
                '<tr><td>HP: </td><td>' + mon.hp + '</td></tr>' + //--
                '<tr><td>AC: </td><td>' + mon.ac + ' (' + mon.actype + ')</td></tr>' + //--
                '<tr><td>PB: </td><td>' + mon.pb + '</td></tr>' + //--
                '<tr><td>Traits: </td><td>' + mon.traits.length + '</td></tr>' + //--
                '<tr><td>Actions: </td><td>' + mon.actions.length + '</td></tr>' + //--
                '<tr><td>Bonus Actions: </td><td>' + mon.bonus_actions.length + '</td></tr>' + //--
                '<tr><td>Reactions: </td><td>' + mon.reactions.length + '</td></tr>' + //--
                '<tr><td>Legendary Actions: </td><td>' + mon.legendary_actions.length + '</td></tr>' + //--
                '<tr><td>Mythic Actions: </td><td>' + mon.mythic_actions.length + '</td></tr>' + //--
                '</table>' + //--
                '<br><br>' + //--
                '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit">Edit Monster</a></div>' + //--
                '</div>'
            );
        }
    },

    editMonster = function(mon,option,val1,val2,val3) {

    },

    createMon = function(mon) {
        let test=state.monster.find(m => m.name==mon);
        if (test) {
            sendChat("Encounter Creator","/w gm A Monster with that Name exists already, please choose a different Name!");
        } else if (!test) {
            let monster=[
                {
                    //Basics
                    name: mon,
                    type: "",
                    ac: 10,
                    actype: "",
                    hp: 0,
                    speed: "",
                    amount: 1,
                    save: [],
                    skill: [],
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
                    traits: [],
                    actions: [],
                    bonus_actions: [],
                    reactions: [],
                    legendary_actions: [],
                    mythic_actions: []
                }
            ];
            state.monster.push(monster[0]);
            sendChat("Encounter Creator",`/w gm Created new Monster with the Name \"${mon}\".`);
        }
    },

    deleteMon = function(mon) {
        for (let i=0;i<state.monster.length;i++) {
            if (state.monster[i].name==mon) {
                state.monster.splice(i);
                sendChat("Encounter Creator",`/w gm Deleted the Monster \"${mon}\".`);
            }
        }
    },

    traitEditor = function(mon,trait) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align:left;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            let traitlist=[];
            let traits="";
            if (!mon.traits.length || mon.traits.length<1) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Trait Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --traits">' + mon.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><b>Traits</b></div>' + //--
                    '<div style="text-align:center;">No Traits, yet</div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --add ?{Name?|Insert Name}">Add Trait</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (mon.traits.length>=1) {
                for (let i=0;i<mon.traits.length;i++) {
                    traits+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td>' + mon.traits[i].name + '</td></tr>';
                    traitlist[i]=mon.traits[i].name;
                }
                let len = traitlist.length;
                for (let i=0;i<len;i++) {
                    traitlist=String(traitlist).replace(",","|");
                }
                let monlist=[];
                for (let i=0;i<state.monster.length;i++) {
                    monlist[i]=state.monster[i].name;
                }
                let len1 = monlist.length;
                for (let i=0;i<len1;i++) {
                    monlist=String(monlist).replace(",","|");
                }
                if (trait) {
                    trait=mon.traits.find(t => t.name==trait);
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Trait Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --traits">' + mon.name + '</a></td></tr>' + //--
                        '<br><br>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<tr><td>Trait: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --traits --?{Trait?|' + traitlist + '}">' + trait.name + '</a></td></tr>' + //--
                        '<tr><td>Description: </td><td>' + trait.desc + '</td></tr>' + //--
                        '</table>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --' + trait.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --' + trait.name + ' --setdesc ?{Description?|Insert Description}">Set Description</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --add ?{Name?|Insert Name}">Add Trait</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --rem ?{Trait?|' + traitlist + '}">Remove Trait</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                } else if (!trait) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Trait Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --traits">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><b>Traits</b></div>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<thead>' + //--
                        '<tr ' + trstyle + '><th ' + tdstyle + '>Pos.</th><th>Name</th></tr>' + //--
                        '</thead>' + //--
                        '<tbody>' + //--
                        traits + //--
                        '</tbody>' + //--
                        '</table>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --?{Trait?|' + traitlist + '}">View Trait</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --add ?{Name?|Insert Name}">Add Trait</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --traits --rem ?{Trait?|' + traitlist + '}"Remove Trait</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                }
            }
        }
    },

    editTrait = function(mon,trait,option,val) {

    },

    baEditor = function(mon,ba) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align:left;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            let balist=[];
            let bas="";
            if (!mon.bonus_actions.length || mon.bonus_actions.length<1) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Bonus Action Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --bonusactions">' + mon.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><b>Bonus Actions</b></div>' + //--
                    '<div style="text-align:center;">No Bonus Actions, yet</div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --add ?{Name?|Insert Name}">Add Bonus Action</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (mon.bonus_actions.length>=1) {
                for (let i=0;i<mon.bonus_actions.length;i++) {
                    bas+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td>' + mon.bonus_actions[i].name + '</td></tr>';
                    balist.push(mon.bonus_actions[i].name); 
                }
                let len = balist.length;
                for (let i=0;i<len;i++) {
                    balist=String(balist).replace(",","|");
                }
                let monlist=[];
                for (let i=0;i<state.monster.length;i++) {
                    monlist.push(state.monster[i].name);
                }
                let len1 = monlist.length;
                for (let i=0;i<len1;i++) {
                    monlist=String(monlist).replace(",","|");
                }
                ba=mon.bonus_actions.find(b => b.name==ba);
                if (ba) {
                    if (ba.attack==true) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Bonus Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --bonusactions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Bonus Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --?{Bonus Action?|' + balist + '}">' + ba.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --toggleatk">' + ba.attack + '</a></td></tr>' + //--
                            '<tr><td>Attack Type: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setatktype ?{Attack Type?' + state.encbasics.atktype + '}">' + ba.atktype + '</a></td></tr>' + //--
                            '<tr><td>Range: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setrange ?{Range?|5}">' + ba.range + '</a></td></tr>' + //--
                            '<tr><td>To Hit: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --settohit ?{To Hit?|5}">' + ba.tohit + '</a></td></tr>' + //--
                            '<tr><td>Damage: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setdmg ?{Damage Dice?|' + ba.dmg + '} --dmgtype ?{Damage Type?|' + state.encbasics.dmgtype + '}">' + ba.dmg + ' ' + ba.dmgtype + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + ba.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:cener;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //-- 
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --add ?{Name?|Insert Name}">Add Bonus Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --rem ?{Bonus Action?|' + balist + '}">Remove Bonus Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    } else if (ba.attack==false) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Bonus Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --bonusactions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Bonus Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --?{Bonus Action?|' + balist + '}">' + ba.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --toggleatk">' + ba.attack + '</a></td></tr>' + //--
                            '<tr><td>Descriptions: </td><td>' + ba.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --' + ba.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --add ?{Name?|Insert Name}">Add Bonus Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --rem ?{Bonus Action?|' + balist + '}">Remove Bonus Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    }
                } else if (!ba) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Bonus Action Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --bonusactions">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><b>Bonus Actions</b></div>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<thead>' + //--
                        '<tr ' + trstyle + '><th ' + tdstyle + '>Pos.</th><th>Name</th></tr>' + //--
                        '</thead>' + //--
                        '<tbody>' + //--
                        bas + //--
                        '</tbody>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --?{Bonus Action?|' + balist + '}">View Bonus Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --add ?{Name?|Insert Name}">Add Bonus Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --bonusactions --rem ?{Bonus Action?|' + balist + '}">Remove Bonus Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                }
            }
        }
    },

    editBA = function(mon,ba,option,val1,val2,val3) {
        
    },

    actEditor = function(mon,act) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align:left;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            let actlist=[];
            let acts="";
            if (!mon.actions.length || mon.actions.length<1) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Action Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --actions">' + mon.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><b>Actions</b></div>' + //--
                    '<div style="text-align:center;">No Actions, yet</div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --add ?{Name?|Insert Name}">Add Action</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (mon.actions.length>=1) {
                for (let i=0;i<mon.actions.length;i++) {
                    acts+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td>' + mon.actions[i].name + '</td></tr>';
                    actlist.push(mon.actions[i].name);
                }
                let len = actlist.length;
                for (let i=0;i<len;i++) {
                    actlist=String(actlist).replace(",","|");
                }
                let monlist=[];
                for (let i=0;i<state.monster.length;i++) {
                    monlist.push(state.monster[i].name);
                }
                let len1 = monlist.length;
                for (let i=0;i<len1;i++) {
                    monlist=String(monlist).replace(",","|");
                }
                act=mon.actions.find(a => a.name==act);
                if (act) {
                    if (act.attack==true) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle2 + '" href="!monster --?{Monster?|' + monlist + '} --edit --actions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --?{Action?|' + actlist + '}">' + act.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + ' --toggleatk">' + act.attack + '</a></td></tr>' + //--
                            '<tr><td>Attack Type: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + ' --setatktype ?{Attack Type?|' + state.encbasics.atktype + '}">' + act.atktype + '</a></td></tr>' + //--
                            '<tr><td>Range: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + ' --setrange ?{Range?|5}">' + act.range + '</a></td></tr>' + //--
                            '<tr><td>To Hit: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + ' --settohit ?{To Hit?|5}">+' + act.tohit + '</a></td></tr>' + //--
                            '<tr><td>Damage: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + ' --setdmg ?{Damage Dice?|' + act.dmg + '} --dmgtype ?{Damage Type?|' + state.encbasics.dmgtype + '}">' + act.dmg + ' ' + act.dmgtype + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + act.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + '--setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + '--setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --add ?{Name?|Insert Name}">Add Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --rem ?{Action?|' + actlist + '}">Remove Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    } else if (act.attack==false) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --actions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --?{Action?|' + actlist + '}">' + act.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + ' --toggleatk">' + act.attack + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + act.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + '--setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --' + act.name + '--setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --add ?{Name?|Insert Name}">Add Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --rem ?{Action?|' + actlist + '}">Remove Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    }
                } else if (!act) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Action Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --actions">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><b>Actions</b></div>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<thead>' + //--
                        '<tr ' + trstyle + '><th ' + tdstyle + '>Pos.</th><th>Name</th></tr>' + //--
                        '</thead>' + //--
                        '<tbody>' + //--
                        acts + //--
                        '</tbody>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --?{Action?|' + actlist + '}">View Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --add ?{Name?|Insert Name}">Add Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --actions --rem ?{Action?|' + actlist + '}">Remove Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                }
            }
        }
    },

    editAct = function(mon,act,option,val1,val2,val3) {

    },

    reactEditor = function(mon,react) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align:left;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        mon=state.monster.find(m => m.name==mon);
        let monlist=[];
        for (let i=0;i<state.monster.length;i++) {
            monlist.push(state.monster[i].name);
        }
        for (let i=0;i<state.monster.length;i++) {
            monlist=String(monlist).replace(",","|");
        }
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            react=mon.reactions.find(r => r.name==react);
            let reactlist = [];
            let reacts = "";
            if (!mon.reactions.length || mon.reactions.length<1) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Reaction Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --reactions">' + mon.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><b>Reactions</b></div>' + //--
                    '<div style="text-align:center;">No Reactions, yet</div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --add ?{Name?|Insert Name}">Add Reaction</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (mon.reactions.length>=1) {
                for (let i=0;i<mon.reactions.length;i++) {
                    reacts += '<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td>' + mon.reactions[i].name + '</td></tr>';
                    reactlist.push(mon.reactions[i].name);
                }
                let len = reactlist.length;
                for (let i=0;i<len;i++) {
                    reactlist=String(reactlist).replace(",","|");
                }
                if (!react) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Reaction Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --reactions">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><b>Reactions</b></div>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<thead>' + //--
                        '<tr ' + trstyle + '><th ' + tdstyle + '>Pos.</th><th>Name</th></tr>' + //--
                        '</thead>' + //--
                        '<tbody>' + //--
                        reacts + //--
                        '</tbody>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --?{Reaction?|' + reactlist + '}">View Reaction</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --add ?{Name?|Insert Name}">Add Reaction</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --rem ?{Reaction?|' + reactlist + '}">Remove Reaction</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                } else if (react) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Reaction Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --reactions">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<tr><td>Reaction: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --reactions --?{Reaction?|' + reactlist + '}">' + react.name + '</a></td></tr>' + //--
                        '<tr><td>Description: </td><td>' + react.description + '</td></tr>' + //--
                        '</table>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --' + react.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --' + react.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --add ?{Name?|Insert Name}">Add Reaction</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --reactions --rem ?{Reaction?|' + reactlist + '}">Remove Reaction</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                }
            }
        }
    },

    editReact = function(mon,react,option,val) {

    },

    legEditor = function(mon,leg) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align:left;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        mon=state.monster.find(m => m.name==mon);
        let monlist=[];
        for (let i=0;i<state.monster.length;i++) {
            monlist.push(state.monster[i].name);
        }
        for (let i=0;i<state.monster.length;i++) {
            monlist=String(monlist).replace(",","|");
        }
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            leg=mon.legendary_actions.find(l => l.name==leg);
            let leglist=[];
            let legacts="";
            if (!mon.legendary_actions.length || mon.legendary_actions.length<1) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Legendary Action Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --legend_actions">' + mon.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><b>Legendary Actions</b></div>' + //--
                    '<div style="text-align:center;">No Legendary Actions, yet</div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --add ?{Name?|Insert Name}">Add Legendary Action</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (mon.legendary_actions.length>=1) {
                for (let i=0;i<mon.legendary_actions.length;i++) {
                    leglist.push(mon.legendary_actions[i].name);
                    legacts+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td>' + mon.legendary_actions[i].name + '</td></tr>';
                }
                for (let i=0;i<mon.lengendary_actions.length;i++) {
                    leglist=String(leglist).replace(",","|");
                }
                if (!leg) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Legendary Action Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --legend_actions">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><b>Legendary Actions</b></div>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<thead>' + //--
                        '<tr ' + trstyle + '><th ' + tdstyle + '>Pos.</th><th>Name</th></tr>' + //--
                        '</thead>' + //--
                        '<tbody>' + //--
                        legacts + //--
                        '</tbody>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --?{Legendary Action?|' + leglist + '}">View Legendary Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --add ?{Name?|Insert Name}">Add Legendary Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --rem ?{Legendary Action?|' + leglist + '}">Remove Legendary Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                } else if (leg) {
                    if (leg.attack==true) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Legendary Action Editor</a></div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle2 + '" href="!monster --?{Monster?|' + monlist + '} --edit --legend_actions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Legendary Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --?{Legendary Action?|' + leglist + '}">' + leg.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --toggleatk">' + leg.attack + '</a></td></tr>' + //--
                            '<tr><td>Attack Type: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setatktype ?{Attack Type?|' + state.encbasics.atktype + '}">' + leg.atktype + '</a></td></tr>' + //--
                            '<tr><td>Range: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setrange ?{Range?|5}">' + leg.range + '</a></td></tr>' + //--
                            '<tr><td>To Hit: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --settohit ?{To Hit?|5}">+' + leg.tohit + '</a></td></tr>' + //--
                            '<tr><td>Damage: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setdmg ?{Damage Dice?|' + leg.dmg + '} --dmgtype ?{Damage Type?|' + state.encbasics.dmgtype + '}">' + leg.dmg + ' ' + leg.dmgtype + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + leg.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --add ?{Name?|Insert Name}">Add Legendary Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --rem ?{Legendary Action?|' + leglist + '}">Remove Legendary Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    } else if (leg.attack==false) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Legendary Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --legend_actions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Legendary Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --?{Legendary Action?|' + leglist + '}">' + leg.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --toggleatk">' + leg.attack + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + leg.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --' + leg.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --add ?{Name?|Insert Name}">Add Legendary Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --legend_actions --rem ?{Legendary Action?|' + leglist + '}">Remove Legendary Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    }
                }
            }
        }
    },

    editLeg = function(mon,leg,option,val1,val2,val3) {

    },

    mythEditor = function(mon,myth) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';
        var trstyle2 = 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align:left;"';
        var tdstyle = 'style="border-right: 1px solid #cccccc;"';
        mon=state.monster.find(m => m.name==mon);
        let monlist=[];
        for (let i=0;i<state.monster.length;i++) {
            monlist.push(state.monster[i].name);
        }
        for (let i=0;i<state.monster.length;i++) {
            monlist=String(monlist).replace(",","|");
        }
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            myth=mon.mythic_actions.find(m => m.name==myth);
            let mythlist=[];
            let mythact="";
            if (!mon.mythic_actions.length || mon.mythic_actions.length<1) {
                sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                    '<div ' + headstyle + '>Mythic Action Editor</div>' + //--
                    '<div ' + arrowstyle + '></div>' + //--
                    '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --mythic_actions">' + mon.name + '</a></div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><b>Mythic Actions</b></div>' + //--
                    '<div style="text-align:center;">No Mythic Actions, yet</div>' + //--
                    '<br><br>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --add ?{Name?|Insert Name}">Add Mythic Action</a></div>' + //--
                    '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                    '</div>'
                );
            } else if (mon.mythic_actions.length>=1) {
                for (let i=0;i<mon.mythic_actions.length;i++) {
                    mythlist.push(mon.mythic_actions[i].name);
                    mythact+='<tr ' + trstyle2 + '><td ' + tdstyle + '>' + Number(i+1) + '</td><td>' + mon.mythic_actions[0].name + '</td></tr>';
                }
                if (!myth) {
                    sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                        '<div ' + headstyle + '>Mythic Action Editor</div>' + //--
                        '<div ' + arrowstyle + '></div>' + //--
                        '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --mythic_actions">' + mon.name + '</a></div>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><b>Mythic Actions</b></div>' + //--
                        '<table ' + tablestyle + '>' + //--
                        '<thead>' + //--
                        '<tr ' + trstyle + '><th ' + tdstyle + '>Pos.</th><th>Name</th></tr>' + //--
                        '</thead>' + //--
                        '<tbody>' + //--
                        mythact + //--
                        '</tbody>' + //--
                        '</table>' + //--
                        '<br><br>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --?{Mythic Action?|' + mythlist + '}">View Mythic Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --add ?{Name?|Insert Name}">Add Mythic Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --rem ?{Mythic Action?|' + mythlist + '}">Remove Mythic Action</a></div>' + //--
                        '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                        '</div>'
                    );
                } else if (myth) {
                    if (myth.attack==true) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Mythic Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --mythic_actions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Mythic Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --?{Mythic Action?|' + mythlist + '}">' + myth.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --toggleatk">' + myth.attack + '</a></td></tr>' + //--
                            '<tr><td>Attack Type: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setatktype ?{Attack Type?|' + state.encbasics.atktype + '}">' + myth.atktype + '</a></td></tr>' + //--
                            '<tr><td>Range: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setrange ?{Range?|5}">' + myth.range + '</a></td></tr>' + //--
                            '<tr><td>To Hit: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --settohit ?{To Hit?|5}">+' + myth.tohit + '</a></td></tr>' + //--
                            '<tr><td>Damage: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setdmg ?{Damage Dice?|' + myth.dmg + '} --dmgtype ?{Damage Type?|' + state.encbasics.dmgtype + '}">' + myth.dmg + ' ' + myth.dmgtype + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + myth.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --add ?{Name?|Insert Name}">Add Mythic Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --rem ?{Mythic Action?|' + mythlist + '}">Remove Mythic Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    } else if (myth.attack==false) {
                        sendChat("Encounter Creator","/w gm <div " + divstyle + ">" + //--
                            '<div ' + headstyle + '>Mythic Action Editor</div>' + //--
                            '<div ' + arrowstyle + '></div>' + //--
                            '<div style="text-align:center;">Monster: <a ' + astyle1 + '" href="!monster --?{Monster?|' + monlist + '} --edit --mythic_actions">' + mon.name + '</a></div>' + //--
                            '<br><br>' + //--
                            '<table ' + tablestyle + '>' + //--
                            '<tr><td>Mythic Action: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --?{Mythic Action?|' + mythlist + '}">' + myth.name + '</a></td></tr>' + //--
                            '<tr><td>Has Attack: </td><td><a ' + astyle1 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --toggleatk">' + myth.attack + '</a></td></tr>' + //--
                            '<tr><td>Description: </td><td>' + myth.desc + '</td></tr>' + //--
                            '</table>' + //--
                            '<br><br>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setname ?{Name?|Insert Name}">Set Name</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --' + myth.name + ' --setdesc ?{Description?|Insert Desc}">Set Description</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --add ?{Name?|Insert Name}">Add Mythic Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + ' --edit --mythic_actions --rem ?{Mythic Action?|' + mythlist + '}">Remove Mythic Action</a></div>' + //--
                            '<div style="text-align:center;"><a ' + astyle2 + '" href="!monster --' + mon.name + '">Go Back</a></div>' + //--
                            '</div>'
                        );
                    }
                }
            }
        }
    },

    editMyth = function(mon,myth,option,val1,val2,val3) {

    },

    createAct = function(mon,act) {
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            for (let i=0;i<state.monster.length;i++) {
                if (state.monster[i].name==mon.name) {
                    let monattr=findObjs({
                        _type: 'attribute',
                        _characterid: mon.id
                    });
                    let existing=false;
                    _.each(monattr, function(attr) {
                        let name = attr.get('_name');
                        if (name.includes("repeating_npcaction") && (!name.includes("-l") && !name.includes("-m")) && name.includes("_name")) {
                            existing=true;
                        }
                    });
                    if (existing==false) {
                        sendChat("Encounter Creator","!setattr --charid " + mon.id + " --repeating_npcaction_-CREATE_name|" + act);
                        monattr=findObjs({
                            _type: 'attribute',
                            _characterid: mon.id
                        });
                        let actid;
                        _.each(monattr, function(attr) {
                            let name = attr.get('_name');
                            if (name.includes("repeating_npcaction") && (!name.includes("-l") && !name.includes("-m")) && name.includes("_name")) {
                                if (attr.get('current')==act) {
                                    actid=name.replace("repeating_npcaction_","").replace("_name","");
                                }
                            }
                        });
                        state.monster[i].actions.push(
                            {
                                name: act,
                                desc: "",
                                attack: false,
                                atktype: "",
                                dmg: "",
                                dmgtype: "",
                                range: "",
                                tohit: 0,
                                id: actid
                            }
                        );
                        sendChat("Encounter Creator","/w gm Created Action with the Name \"" + act + "\".\n\nID: " + actid);
                    } else if (existing==true) {
                        sendChat("Encounter Creator","/w gm Action with that Name exists - aborting creation!");
                    }
                }
            }
        }
    },

    createReact = function(mon,react) {
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            for (let i=0;i<state.monster.length;i++) {
                if (state.monster[i].name==mon.name) {
                    let monattr=findObjs({
                        _type: 'attribute',
                        _characterid: mon.id
                    });
                    let existing=false;
                    _.each(monattr, function(attr) {
                        let name = attr.get('_name');
                        if (name.includes("repeating_npcreaction") && name.includes("_name")) {
                            existing=true;
                        }
                    });
                    if (existing==false) {
                        sendChat("Encounter Creator","!setattr --charid " + mon.id + ' --repeating_npcreaction_-CREATE_name|' + react);
                        monattr=findObjs({
                            _type: 'attribute',
                            _characterid: mon.id
                        });
                        let reactid;
                        _.each(monattr, function(attr) {
                            let name = attr.get('_name');
                            if (name.includes("repeating_npcreaction") && name.includes("_name")) {
                                if (attr.get("current")==react) {
                                    reactid=name.replace("repeating_npcreaction_","").replace("_name","");
                                }
                            }
                        });
                        state.monster[i].reactions.push(
                            {
                                name: react,
                                desc: "",
                                id: reactid
                            }
                        );
                        sendChat("Encounter Creator","/w gm Created Reaction with the Name \"" + react + "\".\n\nID: " + reactid);
                    } else if (existing==true) {
                        sendChat("Encounter Creator","/w gm Reaction with that Name exists - aborting creation!");
                    }
                }
            }
        }
    },

    createBA = function(mon,ba) {
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            for (let i=0;i<state.monster.length;i++) {
                if (state.monster[i].name==mon.name) {
                    let monattr=findObjs({
                        _type: 'attribute',
                        _characterid: mon.id
                    });
                    let existing=false;
                    _.each(monattr, function(attr) {
                        let name = attr.get('_name');
                        if (name.includes("repeating_npcbonusaction") && name.includes("_name")) {
                            existing=true;
                        }
                    });
                    if (existing==false) {
                        sendChat("Encounter Creator","!setattr --charid " + mon.id + " --repeating_npcbonusaction_-CREATE_name|" + ba);
                        monattr = findObjs({
                            _type: 'attribute',
                            _characterid: mon.id
                        });
                        let baid;
                        _.each(monattr, function(attr) {
                            let name = attr.get('_name');
                            if (name.includes("repeating_npcbonusaction" && name.includes("_name"))) {
                                if (attr.get('current')==ba) {
                                    baid=name.replace("repeating_npcbonusaction_","").replace("_name","");
                                }
                            }
                        });
                        state.monster[i].bonus_actions.push(
                            {
                                name: ba,
                                desc: "",
                                attack: false,
                                atktype: "",
                                dmg: "",
                                dmgtype: "",
                                range: "",
                                tohit: 0,
                                id: baid
                            }
                        );
                        sendChat("Encounter Creator","/w gm Created Bonus Action with the Name \"" + ba + "\".\n\nID: " + baid);
                    } else if (existing==true) {
                        sendChat("Encounter Creator","/w gm Bonus Action with that Name exists - aborting creation!");
                    }
                }
            }
        }
    },

    createTrait = function(mon,trait) {
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            for (let i=0;i<state.monster.length;i++) {
                if (state.monster[i].name==mon.name) {
                    let monattr=findObjs({
                        _type: 'attribute',
                        _characterid: mon.id
                    });
                    let existing=false;
                    _.each(monattr, function(attr) {
                        let name = attr.get('_name');
                        if (name.includes("repeating_npctrait") && name.includes("_name")) {
                            existing=true;
                        }
                    });
                    if (existing==false) {
                        sendChat("Encounter Creator","!setattr --charid " + mon.id + " --repeating_npctrait_-CREATE_name|" + trait);
                        monattr=findObjs({
                            _type: 'attribute',
                            _characterid: mon.id
                        });
                        let traitid;
                        _.each(monattr, function(attr) {
                            let name = attr.get("_name");
                            if (name.includes("repeating_npctrait") && name.includes("_name")) {
                                if (attr.get('current')==trait) {
                                    traitid=name.replace("repeating_npctrait_","").replace("_name");
                                }
                            }
                        });
                        state.monster[i].traits.push(
                            {
                                name: trait,
                                desc: "",
                                id: traitid
                            }
                        );
                        sendChat("Encounter Creator","/w gm Created Trait with the Name \"" + trait + "\".\n\nID: " + traitid);
                    } else if (existing==true) {
                        sendChat("Encounter Creator","/w gm Trait with that Name already exists - aborting creation!");
                    }
                }
            }
        }
    },

    createLeg = function(mon,leg) {
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            for (let i=0;i<state.monster.length;i++) {
                if (state.monster[i].name==mon.name) {
                    let monattr=findObjs({
                        _type: 'attribute',
                        _characterid: mon.id
                    });
                    let existing=false;
                    _.each(monattr, function(attr) {
                        let name = attr.get('_name');
                        if (name.includes("repeating_npcaction-l") && name.includes("_name")) {
                            existing=true;
                        }
                    });
                    if (existing==false) {
                        sendChat("Encounter Creator","!setattr --charid " + mon.id + " --repeating_npcaction-l_-CREATE_name|" + leg);
                        monattr=findObjs({
                            _type: 'attribute',
                            _characterid: mon.id
                        });
                        let legid;
                        _.each(monattr, function(attr) {
                            let name = attr.get('_name');
                            if (name.includes("repeating_npcaction-l") && name.includes("_name")) {
                                if (attr.get('current')==leg) {
                                    legid=name.replace("repeating_npcaction-l_","").replace("_name","");
                                }
                            }
                        });
                        state.monster[i].legendary_actions.push(
                            {
                                name: leg,
                                desc: "",
                                attack: false,
                                atktype: "",
                                dmg: "",
                                dmgtype: "",
                                range: "",
                                tohit: 0,
                                id: legid
                            }
                        );
                        sendChat("Encounter Creator","/w gm Created Legendary Action with the Name \"" + leg + "\".\n\nID: " + legid);
                    } else if (existing==true) {
                        sendChat("Encounter Creator","/w gm Legendary Action with that Name already exists - aborting creation!");
                    }
                }
            }
        }
    },

    createMyth = function(mon,myth) {
        mon=state.monster.find(m => m.name==mon);
        if (!mon) {
            sendChat("Encounter Creator","/w gm Could not find a Monster with that name!");
        } else if (mon) {
            for (let i=0;i<state.monster.length;i++) {
                if (state.monster[i].name==mon.name) {
                    let monattr=findObjs({
                        _type: 'attribute',
                        _characterid: mon.id
                    });
                    let existing=false;
                    _.each(monattr, function(attr) {
                        let name = attr.get('_name');
                        if (name.includes("repeating_npcaction-m") && name.includes("_name")) {
                            existing=true;
                        }
                    });
                    if (existing==false) {
                        sendChat("Encounter Creator","!setattr --charid " + mon.id + " --repeating_npcaction-m_-CREATE_name|" + myth);
                        monattr=findObjs({
                            _type: 'attribute',
                            _characterid: mon.id
                        });
                        let mythid;
                        _.each(monattr, function(attr) {
                            let name = attr.get('_name');
                            if (name.includes("repeating_npcaction-m") && name.includes("_name")) {
                                if (attr.get('current')==myth) {
                                    mythid=name.replace("repeating_npcaction-m_","").replace("_name","");
                                }
                            }
                        });
                        state.monster[i].mythic_actions.push(
                            {
                                name: myth,
                                desc: "",
                                attack: false,
                                atktype: "",
                                dmg: "",
                                dmgtype: "",
                                range: "",
                                tohit: 0,
                                id: mythid
                            }
                        );
                        sendChat("Encounter Creator","/w gm Created Mythic Action with the Name \"" + myth + "\".\n\nID: " + mythid);
                    } else if (existing==true) {
                        sendChat("Encounter Creator","/w gm Mythic Action with that Name already exists - aborting creation!")
                    }
                }
            }
        }
    },

    resetMonster = function(mon) {

    },

    createParty = function(party) {

    },

    partyMenu = function(party) {
        var divstyle = 'style="width: 260px; border: 1px solid black; background-color: #ffffff; padding: 5px;"';
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var astyle3 = 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
        var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var trstyle = 'style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc; text-align: left;"';

    },

    partyAdd = function(party,char) {

    },

    partyRem = function(party,char) {

    },

    deleteParty = function(party) {

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
        if (!state.encbasics) {
            setBasicDefaults();
        }
        if (!state.temp) {
            setTempDefaults();
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