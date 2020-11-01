/* A script that contains two functions related to counting
letters in strings */

countBs = letters => countChar(letters, "B");

function countChar(letters, char) {
	let count = 0;
	for (i = 0; i < letters.length; i++) {
		if (letters[i] === char) count += 1;
	}
	return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
