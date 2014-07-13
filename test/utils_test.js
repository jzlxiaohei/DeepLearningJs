/**
 * Created by zilong on 2014/7/13.
 */
var arrayUtils = require('../src/arrayUtils')
var assert = require('assert')


var makeArray = arrayUtils.makeArray;
var Array2d=arrayUtils.Array2d;
describe('makeArray',function() {
    it('make 1d array', function () {
        var arr = makeArray(10)
        assert.equal(arr.length, 10);
        for (var i = 0; i < arr.length; i++) {
            assert.equal(arr[i], 0)
        }
    })
})
describe('Array2d',function(){
    it('init  all 0',function(){
        var arr = Array2d(2,3);
        assert.deepEqual(arr,[[0,0,0],[0,0,0]])
    })

})

