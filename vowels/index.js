function vowels(str) {
    let count = 0;

    const checkForV = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checkForV.includes(char)) {
            count++;
        }
    }
    return count;
}

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

module.exports = vowels;
