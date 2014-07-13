/**
 * Created by zilong on 2014/7/13.
 */

var makeArray = function () {
    if (typeof ArrayBuffer === 'undefined') {
        return function (n,generator) {
            var arr = new Array(n);
            if(generator){
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = generator(i);
                }
            }else {
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = 0;
                }
            }
            return arr;
        }
    } else {
        return function (n,generator) {
            var arr = new Float64Array(n);
            if(generator){
                for(var i= 0;i<arr.length;i++){
                    arr[i] = generator(i);
                }
            }
            return arr;
        }
    }
}()

var toString = Object.prototype.toString;
function isArray(arr){
    return toString.call(arr) ==='[object Array]';
}

var Array2d = function (row, col) {
    if(isArray(row)) {
        var arr = row;
        var _row = this.row = arr.length;
        var _col = this.col = arr[0].length;
        this.src = makeArray(_row * _col);
        for (var i = 0; i < _row; i++) {
            for (var j = 0; j < _col; j++) {
                this.set(i, j, arr[i][j]);
            }
        }
    }else {
        this.row = row;
        this.col = col;
        this.src = makeArray(row * col);
    }
}
Array2d.prototype = {
    constructor: Array2d,
    get: function (x, y) {
        return this.src[y + x * this.col];
    },
    set: function (x, y, val) {
        this.src[y + x * this.col] = val;
    },
    getSub:function(x){
        //return Array1d
        var col = this.col;
        var subArr = new Array2d(1,col);
        subArr.src = this.src.subarray(x*col,x*col+col);
        return subArr;
    },
    getInternalArr:function(){
        return this.src;
    }
}

var Array3d = function (row, col, depth) {
    this.row = row;
    this.col = col;
    this.depth = depth;
    this.planeSize = this.row * this.col;
    this.src = makeArray(row * col * depth);
}
Array3d.prototype = {
    constructor: Array3d,
    get: function (x, y, z) {
        var i = z * this.planeSize + y + x * this.col;
        return this.src[i];
    },
    set: function (x, y, z, val) {
        var i = z * this.planeSize + y + x * this.col;
        this.src[i] = val;
    },
    getInternalArr:function(){
        return this.src;
    }
}

module.exports = {
    makeArray: makeArray,
    Array2d: Array2d,
    Array3d: Array3d
}
/**
 * Created by zilong on 2014/7/13.
 */
