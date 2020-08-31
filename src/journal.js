export default function Entry(title, entry) {
  this.title = title;
  this.entry = entry;
}

Entry.prototype.words = function() {
  console.log(this.entry);
  let wordNum = this.entry.split(" ").length;
  return wordNum;
};

Entry.prototype.getTeaser = function() {
  let sentences = this.entry.split(".");
  let firstSentence = sentences[0];
  if (firstSentence.split(" ").length >= 8) {
    return firstSentence.split(" ").slice(0, 8).join(" ").concat("...");
  }
  else {
    return firstSentence;
  }
};

Entry.prototype.countVowels = function() {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantsCount = 0;
  
  // let consonantsCount = 0;
  let lowercasedSent = this.entry.toLowerCase().split('');
  for (let i = 0; i < lowercasedSent.length; i++) {
    if (vowels.indexOf(lowercasedSent[i]) > -1) {
      vowelCount++;
    } else {
      consonantsCount++;
    }   
  }
  let returnArray = [vowelCount, consonantsCount];
    return returnArray;  
  };