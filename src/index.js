exports.min = function min(array) {
    if (!array || array.length === 0) {
        return false;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return false;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return false;
    }
    return array.reduce((accum, value) => accum += value) / array.length;
};
