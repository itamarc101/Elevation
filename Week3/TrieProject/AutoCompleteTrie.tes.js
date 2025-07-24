const AutoCompleteTrie = require('./AutoCompleteTrie')

describe('AutoCompleteTrie', () => {
    let trie;

    beforeEach(() => {
        trie = new AutoCompleteTrie();
        trie.addWord('cat');
        trie.addWord('car');
        trie.addWord('care');
    });


    test('addWord - inserts a word to the dict', () => {
        trie.addWord('cat')
        expect(trie.findWord('cat')).toBe(true);
    })

    test('findWord - return false if word is missing', () => {
        trie.addWord('dog')
        expect(trie.findWord('carb')).toBeFalsy()
    })

    test('_getReminingTree retuns correct subtree', () => {
        const node = trie._getRemainingTree('car')
        expect(node).not.toBeNull()
        expect(node.endOfWord).toBeTruthy();
        expect(node.children['e']).not.toBeUndefined();
        
    })

    test('_allWordsHelper collects all words from given node', () => {
        const node = trie._getRemainingTree('ca'); // should contain 'cat', 'car', 'care'
        const result = [];
        trie._allWordsHelper('ca', node, result);

        const words = result.map(w => w.word);
        expect(words).toEqual(expect.arrayContaining(['cat', 'car', 'care']));
        
    });

    test('predictWords - given part of a word, say the options available with usage count', () => {
        trie.addWord('cat');
        trie.addWord('car');
        // trie.addWord('cart');
        trie.addWord('cat');

        const predictions = trie.predictWords('ca')
        expect(predictions).toEqual([
        'cat (3)', 
        'car (2)',
        'care (1)'
        ])
    })

    test('case-insensitive behavior', () => {
        trie.addWord('Cat');
        expect(trie.findWord('cat')).toBe(true);
        expect(trie.findWord('CAT')).toBe(true);
    })
})