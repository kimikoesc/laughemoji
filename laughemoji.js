function laughEmoji(text) {

    if (typeof text !== 'string' ) {
        throw new Error(
            "Invalid input. Please enter a string"
        )
    }

   if (text.includes('lol')) {
       return text.replace('lol', '😆')
   } else if (text.includes('lmao')) {
       return text.replace('lmao', '😂')
   } else if (text.includes('lmfao')) {
       return text.replace('lmfao', '🤣')
   } else {
       throw new Error(
           "No laughs found, try again!"
       )
   }
}

module.exports = { laughEmoji };