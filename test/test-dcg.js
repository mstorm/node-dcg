'use strict';

var assert = require('assert');
var dcg = require('../index');

var scores = [3, 2, 3, 0, 1, 2];
var ideal = [3, 3, 2, 2, 1, 0];

describe('Tests for DCG functions', function () {
    it('ideal: ' + scores, function () {
        assert.deepEqual(ideal, dcg.ideal(scores));
    });

    it('dcg: ' + scores, function () {
        assert.equal(6.861, dcg(scores).toFixed(3));
    });

    it('dcg2: ' + scores, function () {
        assert.equal(13.848, dcg.dcg2(scores).toFixed(3));
    });

    it('idcg: ' + scores, function () {
        assert.equal(7.141, dcg.dcg(dcg.ideal(scores)).toFixed(3));
    });

    it('idcg2: ' + scores, function () {
        assert.equal(14.595, dcg.dcg2(dcg.ideal(scores)).toFixed(3));
    });

    it('ndcg: ' + scores, function () {
        assert.equal(0.961, dcg.ndcg(scores).toFixed(3));
    });

    it('ndcg2: ' + scores, function () {
        assert.equal(0.949, dcg.ndcg2(scores).toFixed(3));
    });
});
