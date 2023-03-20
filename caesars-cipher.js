function rot13(str) {
    const KEY = 13;
    let strArr = str.split(" ");
    let sentence = [];
    strArr.forEach((word) => {
      let chars = word.split("");
      let words = "";
      chars.forEach((char) => {
        if(!(/[a-z0-9]/i.test(char))){
          words+=char
        } else {
          let charIdx = char.charCodeAt(0);
          let letter = charIdx + KEY > 90 
          ? String.fromCodePoint(charIdx - KEY)
          : String.fromCodePoint(charIdx+ KEY);
          words+= letter;
      }
      })
      sentence.push(words);
    })
    return sentence.join(" ");
}
  
console.log(rot13("SERR PBQR PNZC"))
