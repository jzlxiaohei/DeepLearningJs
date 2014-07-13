/**
 * Created by zilong on 2014/7/13.
 */
var assert = require('assert');
var V = require('../src/vectorHelper')

describe('dot',function(){
    it('dot operation',function(){
        var v=[1,2,3];
        assert(V.dot(v,v)==14);
    })
})

describe('scale',function(){
    it('scale operation',function(){
        var v=[1,2,3];
        assert.deepEqual(V.scale(v,2),[2,4,6]);
    })
})