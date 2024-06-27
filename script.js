function firstWord(s) {
  // Trim any leading spaces
  s = s.trim();
  
  // Find the first space in the string
  let firstSpaceIndex = s.indexOf(' ');

  // If there's no space, return the entire string
  if (firstSpaceIndex === -1) {
    return s;
  }

  // Return the substring from the start to the first space
  return s.substring(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));