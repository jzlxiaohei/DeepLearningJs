/**
 * Created by zilong on 2014/7/13.
 */
/*
var arrayUtils = require('../src/deprecated/typedArray')
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
    it('get',function(){
        var normalArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
        var arr = new Array2d(normalArr);
        assert.equal(arr.src.length,12);
        for(var i = 0;i<3;i++){
            for(var j = 0;j<4;j++) {
                assert(arr.get(i, j) == normalArr[i][j])
            }
        }
    })
    it('getSub',function(){
        var normalArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
        var arr = new Array2d(normalArr);
        for(var i = 0;i<3;i++){
            for(var j = 0;j<4;j++){
                assert(arr.getSub(i).get(0,j) == normalArr[i][j]);
            }
        }
    })
    it('getSub',function(){
        var normalArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
        var arr = new Array2d(normalArr);
        arr.getSub(0).set(0,1,99)
        assert(arr.get(0,1)==99)

    })
})
*/

