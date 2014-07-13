/**
 * Created by zilong on 2014/7/13.
 */
/**
 * some helper function for vector operation
 */
function dot(v1,v2){
    var len = v1.length;
    if(len!=v2.length){
        throw new TypeError('v1.lengths should be equal to v2.length')
    }
    var sum = 0;
    for(var i = 0;i<len;i++){
        sum+=v1[i]*v2[i];
    }
    return sum;
}
function scale(v1,m){
    var len =v1.length;
    var arr =new Array(len);
    for(var i=0;i<len;i++){
        arr[i] = v1[i]*m;
    }
    return arr;
}
module.exports={
    dot:dot,
    scale:scale
}
