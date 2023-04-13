function dcg(scores) {
    return scores.reduce(function (sum, gain, i) {
        return sum + gain / Math.log2(i + 2);
    }, 0);
}

dcg.dcg = dcg;

dcg.dcg2 = function dcg2(scores) {
    return scores.reduce(function (sum, gain, i) {
        return sum + ((Math.pow(2, gain) - 1) / Math.log2(i + 2));
    }, 0);
};

dcg.ideal = function ideal(scores) {
    return scores.slice().sort().reverse()
};

dcg.ndcg = function ndcg(scores) {
    return dcg(scores) / dcg(dcg.ideal(scores));
};

dcg.ndcg2 = function ndcg2(scores) {
    return dcg.dcg2(scores) / dcg.dcg2(dcg.ideal(scores));
};

dcg.max = function max(scores) {
    var max = scores.reduce(function (max, gain) {
        return Math.max(max, gain);
    }, 0);

    return new Array(scores.length).fill(max);
};

module.exports = dcg;
