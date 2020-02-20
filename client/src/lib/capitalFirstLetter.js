export default function firstLetterToUppercase(word) {
  const formattedWord = word[0].toUpperCase() + word.slice(1);
  return formattedWord;
}
