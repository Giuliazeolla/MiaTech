function outerFunction (x, initialValue) {
    let result = initialValue;
    function innerFunction (y) {
        result += x + y;
        return result;
    }
    return innerFunction;
    };
