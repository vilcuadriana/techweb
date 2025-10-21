const censorText = (text, dictionary) => {
    const words = text.split(' ')
    const censoredWords = words.map(word => {
        // verificăm dacă cuvântul exact e în dicționar
        if (dictionary.includes(word)) {
            if (word.length <= 2) return word // dacă are 1-2 litere, nu schimbăm
            return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1]
        }
        return word
    })
    return censoredWords.join(' ')
}


const text = "javascript este minunat"
const dictionary = ["este"]

console.log(censorText(text, dictionary))