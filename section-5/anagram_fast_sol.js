function validAnagram (first, second) {
  const lookup = {};
  for (let i=0; i<first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);
  for (let i=0; i<second.length; i++) {
    let letter = second[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup);
  return true;
}

console.log(validAnagram("anagrame", "anagramf"));