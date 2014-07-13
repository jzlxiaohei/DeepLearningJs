/**
 * Created by zilong on 2014/7/13.
 */

function makeArray(n,generator){
    if(generator){
        var arr = new Array(n);
        for(var i= 0;i<n;i++){
            arr[i] = generator(i)
        }
        return arr;
    }
    return zeroArray(n);
}
function zeroArray(n){
    var arr = new Array(n);
    for(var i = 0;i<n;i++){
        arr[i] = 0;
    }
    return arr;
}

function zeroArray2(m,n){
    var arr =new Array(m);
    for(var i =0;i<m;i++){
        arr[i]= zeroArray(n)
    }
    return arr;
}

var Array2d = function (width, height,generator) {
    if(generator){
        var arr = new Array(width);
        for(var i =0;i<width;i++){
            arr[i] = new Array[height];
            for(var j = 0;j<height;j++){
                arr[i][j] = generator(i,j);
            }
        }
    }else{
        arr =  zeroArray2(width,height)
    }
    return arr;
}



module.exports = {
    makeArray: makeArray,
    Array2d: Array2d
}
