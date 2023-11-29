function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties() {
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    const properties = {};

    for (const id of ids) {
        const element = document.getElementById(id); // Grabing the element associated with selected id
        properties[id] = element.checked; // getting the value of the checkboxes
    }

    return properties;
}

function getChars(Lowercase = true) { // If lowercase
    const start = Lowercase ? 97 : 65; // Start at 97, otherwise, start at 65
    let chars = [];

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i));
    }

    return chars;
}

function getNumbers() {
    const nums = [];

    for (let i = 0; i < 10; i++) {
        nums.push(i);
    }

    return nums;
}

const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numbers = getNumbers();
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    const characters = [];
    if (properties.lowercase) characters.push(...lowercaseChars); // Pushes elements inside of the array, not the array itself
    if (properties.uppercase) characters.push(...uppercaseChars);
    if (properties.numbers) characters.push(...numbers);
    if (properties.special) characters.push(...special);

    console.log(characters);

    let pwd = [];
    for (let i = 0; i < length; i++) {};
}