export default async function addressService(searchText = "") {
    const [trimmedString, firstWord, secondWord] = (searchText.trim().match(/^(\S+)(?:\s(.+))?$/) || []).map(str => str || '');
    let luceneQuery = ""
    if (!isNaN(firstWord)) {
        const modifiedStreetQuery = appendStarToWords(secondWord)
        luceneQuery = secondWord ? `number: ${firstWord} AND street: ${modifiedStreetQuery}` : `number: ${firstWord}`
    } else {
        const modifiedStreetQuery = appendStarToWords(trimmedString)
        luceneQuery = `street: ${modifiedStreetQuery}`
    }

    if (luceneQuery) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "hs_2u37ib6w8wz4137f");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ luceneQuery })
        };
        try {
            const res = await fetch('https://1e2tq2.hoppysearch.com/v1/search', requestOptions)
            const searchResult = await res.json()
            return searchResult
        } catch (error) {
            console.log('There was an error', error)
            return error
        }
    } else {
        return "Please provide a valid searchText"
    }
}

function appendStarToWords(str) {
    var words = str.split(/\s+/);
    var modifiedSentence = '';
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (i > 0) {
            modifiedSentence += ' ';
        }
        if (word.startsWith('*') || word.startsWith('?')) {
            word = word.substring(1);
        }
        modifiedSentence += word + "*";
    }
    return modifiedSentence;
}