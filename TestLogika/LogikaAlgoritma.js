
function countCharacters(paragraph) {
    const charCount = {};
    
    for (let i = 0; i < paragraph.length; i++) {
        const char = paragraph[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    return charCount;
}

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
console.log(countCharacters(paragraph));


function sequenceA(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(i * i);
    }
    return result;
}


function sequenceB(n) {
    const result = [];
    let current = 1;
    let increment = 1;
    for (let i = 0; i < n; i++) {
        result.push(current);
        current += increment;
        increment += 2;
    }
    return result;
}


function fibonacci(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            result.push(i);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}


function sequenceD(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            result.push(0);
        } else if (i === 2) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result[i - 2] + result[i - 3]);
        }
    }
    return result;
}


console.log(sequenceA(11)); 
console.log(sequenceB(10)); 
console.log(fibonacci(11)); 
console.log(sequenceD(10)); 
