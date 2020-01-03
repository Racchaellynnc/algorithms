// Solution1

function reverse (str) {
    str.split('').reduce()
}

//Solution2

function reverse(str) {
const arr = str.split('');
arr.reverse();
return arr.join('');

}

//Solution3
function reverse(str) {
    let reversed = ('');

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed
}


module.exports = reverse;
