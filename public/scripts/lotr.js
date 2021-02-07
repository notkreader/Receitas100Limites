/** Enumeradores para valores das classes */
const SIDE = {
    HEROES: 'Heroes',
    VILLAINS: 'Villains'
}

const WEAPON = {
    STAFF: 'Staff',
    SWORD: 'Sword',
    BOW: 'Bow',
    AXE: 'Axe',
    RING: 'Ring',
    FISTS: 'Fists'
}

const LEVEL = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
}

const RACE = {
    WIZARD: 'Wizard',
    HOBBIT: 'Hobbit',
    MAN: 'Man',
    ELF: 'Elf',
    DWARF: 'Dwarf'
}

/** Closure  */
let indexCounter = (function() {
    /** @todo Completar */
    let privateCounter = -1;

    function changeBy(value) {
        privateCounter += value;
    }

    return {
        increment: function() {
            changeBy(1);
        },

        value: function() {
            return privateCounter;
        }
    }
})();

/** Classe Characters */
/**
 * 
 */
function Characters() {
    /** @todo Completar */
    this.characters = [];
}

Characters.showCharacters = function(charactersList) {
    /** @todo Completar */
    charactersList = charactersList || Characters.defaultValues;
    document.getElementById('character-list').innerHTML = charactersList.listCharacters();
}

Characters.prototype.listCharacters = function() {
    /** @todo Completar */
    let tableString = '<table class="table-layout">';

    let characterRaceAux = null;
    this.characters.forEach(currentElement => {
        if (characterRaceAux != currentElement.race) {
            characterRaceAux = currentElement.race;
            tableString += Character.createTableHeading(currentElement);
        }
        tableString += Character.createTableCells(currentElement);
    });

    return tableString + '</table>';
}

Characters.prototype.listCharacter = function(index) {
    /** @todo Completar */
    let tableString = '<table class="table-layout"><thead>' + Character.createTableHeading(this.characters[index]) + '</thead>';

    tableString += Character.createTableCells(this.characters[index]);

    return tableString + '</table>';
}

Characters.addCharacter = function(charactersList) {
    let characterName = document.getElementById('characterName').value;
    let characterSide = document.getElementById('characterSide').value;
    let characterWeapon = document.getElementById('characterWeapon').value;
    let characterRace = document.getElementById('characterRace').value;

    switch (characterRace.toLowerCase()) {
        case 'wizard':
            charactersList.addCharacter(new Wizard(characterName, characterSide, characterWeapon, characterRace, null, null));
            break;
        case 'hobbit':
            charactersList.addCharacter(new Hobbit(characterName, characterSide, characterWeapon, characterRace, null, null));
            break;
        case 'dwarf':
            charactersList.addCharacter(new Dwarf(characterName, characterSide, characterWeapon, characterRace, null, null));
            break;
        case 'man':
            charactersList.addCharacter(new Man(characterName, characterSide, characterWeapon, characterRace, null, null));
            break;
        case 'elf':
            charactersList.addCharacter(new Elf(characterName, characterSide, characterWeapon, characterRace, null, null));
            break;
    }

    Characters.showCharacters(charactersList);
}

Characters.prototype.addCharacter = function(character) {
    /** @todo Completar */
    this.characters.push(character);
}

Characters.prototype.addCharacters = function(...args) {
    /** @todo Completar */
    args.forEach(currentCharacter => {
        this.addCharacter(currentCharacter);
    });

    return this;
}

Characters.showCharacterInfo = function() {
    let infoValues = document.getElementById('infoValues').value || 0;

    if (charactersList.validateIndexInfo(infoValues)) {
        charactersList.showCharacterInfoByIndex(infoValues);
    } else {
        alert("Personagem inexistente!");
    }
}

Characters.prototype.validateIndexInfo = function(indexValue) {
    if (indexValue > this.characters.length - 1) {
        return false;
    }

    return true;
}

Characters.prototype.showCharacterInfoByIndex = function(index) {
    document.getElementById('show-info-area').innerHTML = charactersList.listCharacter(index);
}

Characters.defaultValues = (new Characters()).addCharacters(
    /** @todo Completar */
    new Wizard('Saruman', SIDE.VILLAINS, WEAPON.STAFF, RACE.WIZARD, 'White', LEVEL.HIGH),
    new Wizard('Gandalf', SIDE.HEROES, WEAPON.STAFF, RACE.WIZARD, 'Grey', LEVEL.HIGH),
    new Hobbit('Frodo Baggins', SIDE.HEROES, WEAPON.RING, RACE.HOBBIT, 'Small', LEVEL.MEDIUM)
);

let charactersList = Characters.defaultValues;

/** Classe (LOTR) Character */
/**
 * @class Representa uma carta do baralho de cartas
 * @constructs Character
 * @property {string} name - The complete name of the (LOTR) character
 * @property {string} side - Which side is the character with? Heroes or villains?.
 * @property {Weapon} weapon - CHaracter weapon
 */
function Character(name, side, weapon, race) {
    /** @todo Completar */
    this.index = generateIndex();
    this.name = name || 'John Doe';
    this.side = side || SIDE.HEROES;
    this.weapon = (weapon && validateWeapon(weapon)) ? weapon : 'No weapon';
    this.race = (race && validateRace(race)) ? race : 'Undefined race';
}

Character.createTableHeading = function(character) {
    /** @todo Completar */
    let dynamicTableHeading = '<tr>';

    Object.keys(character).forEach(currentKey => {
        dynamicTableHeading += "<th>" + currentKey + "</th>";
    });

    return dynamicTableHeading + "</tr>";
}

Character.createTableCells = function(character) {
    /** @todo Completar */
    let dynamicTableCells = "<tr>";

    Object.values(character).forEach(currentValue => {
        dynamicTableCells += "<td>" + currentValue + "</td>";
    });

    return dynamicTableCells + "</tr>";
}

/** Propriedades e Métodos de Classe */
/**
 * @param {Weapon} weapon - valor do enumerador de Weapon
 */
function validateWeapon(weapon) {
    /** @todo Completar */
    if (weapon === WEAPON.AXE ||
        weapon === WEAPON.BOW ||
        weapon === WEAPON.FISTS ||
        weapon === WEAPON.RING ||
        weapon === WEAPON.STAFF ||
        weapon === WEAPON.SWORD) {
        return true;
    }
    return false;
}

function validateRace(race) {
    /** @todo Completar */
    if (race === RACE.WIZARD ||
        race === RACE.HOBBIT ||
        race === RACE.MAN ||
        race === RACE.ELF ||
        race === RACE.DWARF) {
        return true;
    }
    return false;
}

function generateIndex() {
    /** @todo Completar */
    indexCounter.increment();
    return indexCounter.value();
}

/** Classe Wizard */
/**
 * @class Representa o Wizard de LOTR. Wizard 'is-a' Character
 * @constructs Wizard
 */
function Wizard(name, side, weapon, race, color, magic) {
    /** @todo Completar */
    Character.call(this, name, side, weapon, race);
    this.color = color || 'Blue';
    this.magic = magic || LEVEL.LOW;
}

Wizard.prototype = Object.create(Character.prototype);
Wizard.prototype.constructor = Character;
Wizard.parent = Character.prototype;

/** Classe Hobbit */
/**
 * @class Representa o Hobbit de LOTR. Hobbit 'is-a' Character
 * @constructs Hobbit
 */
function Hobbit(name, side, weapon, race, height, resilience) {
    /** @todo Completar */
    Character.call(this, name, side, weapon, race);
    this.height = height || 'Small';
    this.resilience = resilience || LEVEL.LOW;
}

Hobbit.prototype = Object.create(Character.prototype);
Hobbit.prototype.constructor = Character;
Hobbit.parent = Character.prototype;

/** Classe Dwarf */
/**
 * @class Representa o Dwarf de LOTR. Dwarf 'is-a' Character
 * @constructs Dwarf
 */
function Dwarf(name, side, weapon, race, size, strength) {
    /** @todo Completar */
    Character.call(this, name, side, weapon, race);
    this.size = size || 'Small';
    this.strength = strength || LEVEL.LOW;
}

Dwarf.prototype = Object.create(Character.prototype);
Dwarf.prototype.constructor = Character;
Dwarf.parent = Character.prototype;

/** Classe Man */
/**
 * @class Representa o Man de LOTR. Man 'is-a' Character
 * @constructs Man
 */
function Man(name, side, weapon, race, group, humility) {
    /** @todo Completar */
    Character.call(this, name, side, weapon, race);
    this.group = group || 'Dunedain';
    this.humility = humility || LEVEL.LOW;
}

Man.prototype = Object.create(Character.prototype);
Man.prototype.constructor = Character;
Man.parent = Character.prototype;

/** Classe Elf */
/**
 * @class Representa o Elf de LOTR. Elf 'is-a' Character
 * @constructs Elf
 */
function Elf(name, side, weapon, race, category, dexterity) {
    /** @todo Completar */
    Character.call(this, name, side, weapon, race);
    this.category = category || 'Archer';
    this.dexterity = dexterity || LEVEL.LOW;
}


Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Character;
Elf.parent = Character.prototype;