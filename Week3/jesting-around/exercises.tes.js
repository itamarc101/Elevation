const { isEven, removeAtLeastOne, simplify, validate, add } = require('./exercises');

test('isEven should return true for even', () => {
    expect(isEven(2)).toBeTruthy();
});

test('isEven should return false for odd', () => {
    expect(isEven(3)).toBeFalsy();
});

test('isEven tricky', () => {
    expect(isEven(null)).toBeFalsy();
})

test('removeAtLeastOne should remove at least 1 element', () => {
    const original = [1,2,3,4,5];
    const copy = [...original];

    const result = removeAtLeastOne(copy);

    expect(result.length).toBeLessThan(original.length);
});

test('removeAtLeastOne tricky', () => {
    expect(() => removeAtLeastOne("not an array")).toThrow();
})

test('simplify should return a clean string without symbols', () => {
    const original = "He!l#lo, W.or'ld!";
    const expected = "Hello World";
    const result = simplify(original);

    expect(result).toBe(expected);
});

test('simplify tricky', () => {
    expect(simplify(null)).toBe('');
})


test('validate should return error when they contain no bools', () => {
    const result = validate(['a', 1, null]);
    expect(result).toEqual({error: "Need at least one boolean"});
})

test('if more true should return true', () => {
    const result = validate([true,false,true]);
    expect(result).toBeTruthy();
})

test('if more false should return f', () => {
    const result = validate([false,false,true]);
    expect(result).toBeFalsy();
})

test('f equal to t', () => {
    const result = validate([true,false, 'a', 1, null]);
    expect(result).toBeFalsy();
})



test('add calls push method on array', () => {
    // Spy on Array.prototype.push
    const pushSpy = jest.spyOn(Array.prototype, 'push');

    add(1, 2);

    // Check that push was called once
    expect(pushSpy).toHaveBeenCalledTimes(1);

    // Check that push was called with the correct arguments
    expect(pushSpy).toHaveBeenCalledWith(1, 2);

    // Clean up the spy to avoid affecting other tests
    pushSpy.mockRestore();
});

