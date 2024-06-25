export function trimSentence(sentence, numberOfWords) {
    if (typeof numberOfWords !== 'number') {
        throw new Error('numberOfWords must be a number');
    }

    const words = sentence.split(' ');
    return words.slice(0, numberOfWords).join(' ');
}