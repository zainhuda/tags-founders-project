// service to get related words
const axios = require('axios');

const getRelatedWords = async word => {
    const url = "https://relatedwords.org/api/related";
    const response = await axios.get(url, {
        params: {
            term: word
        }
    });

    let relatedWords = response.data.map(element => {
        return element.word
    });
    return relatedWords.splice(0, 50);
}

module.exports = {
    getRelatedWords
}