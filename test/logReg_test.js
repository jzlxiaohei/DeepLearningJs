/**
 * Created by zilong on 2014/7/13.
 */
var LogReg = require('../src/logReg')

var n_epochs = 500,
    n_in =6,
    n_out = 2;

var xs = [
    [1,1,1,0,0,0],
    [1,0,1,0,0,0],
    [1,1,1,0,0,0],
    [0,0,1,1,1,0],
    [0,0,1,1,0,0],
    [0,0,1,1,1,0]
]
var ys=[
    [1,0],
    [1,0],
    [1,0],
    [0,1],
    [0,1],
    [0,1]
]

var clf = new LogReg(n_in,n_out);
for(var epoch=0;epoch<n_epochs;epoch++){
    clf.train(xs,ys);
}

var testX = [
    [1,0,1,0,0,0],
    [0,0,1,1,1,0]
]
for(var i =0;i<testX.length;i++)
{
    console.log(clf.predict(testX[i]));
}
