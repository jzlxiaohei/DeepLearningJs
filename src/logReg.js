/**
 * Created by zilong on 2014/7/13.
 */
var utils = require('./arrayUtils');
var V = require('./vectorHelper');

var makeArray = utils.makeArray;
var Array2d=utils.Array2d;

/*
* Logistic Regression
* see : http://ufldl.stanford.edu/wiki/index.php/Softmax%E5%9B%9E%E5%BD%92
*       http://deeplearning.net/tutorial/logreg.html#logreg
* */


/*
* softmax:
*   传入一个数组，修改数组中的每一个元素，
*   x[i] =  exp(x[i]) / sum( exp(x[0]+..+ exp[n-1])
*   (n 数组x的长度)
* */
var exp =Math.exp;
function softmax(arr){
    var sum = 0 ;
    for(var i = 0;i<arr.length;i++){
        arr[i] = exp(arr[i]);
        sum +=arr[i]
    }
    for(var i = 0;i<arr.length;i++){
        arr[i]/=sum;
    }
}
// w[n_out][n_in] * x[n_in] +b[n_out] = y[n_out];
//n_in,特征（x）的个数
//n_out,类别(y)的个数
function LogReg(n_in,n_out){
    this.n_in = n_in;
    this.n_out = n_out;
    this.W = new Array2d(n_out,n_in);

    this.b = makeArray(n_out);
}

var fn = LogReg.prototype;
/*
*  训练一个样本
*  lr: learning rate,
*  inner function
* */
fn._trainOne=function(x,y,lr){
    var n_out = this.n_out,
        n_in = this.n_in,
        W=this.W,
        b =this.b;

    var p_y_given_x = makeArray(n_out);

    for(var i =0;i<n_out;i++){
            p_y_given_x[i]=V.dot(W[i],x)+b[i];
    }
    softmax(p_y_given_x);

    var dy = makeArray(n_out);
    // w[n_out][n_in] * x[n_in] +b[n_out] = y[n_out];
    var multi;
    for(var i =0;i<n_out;i++){
        dy[i] = y[i]-p_y_given_x[i];
        multi= lr * dy[i];
        for(var j=0; j<n_in; j++) {
            W[i][j] +=  multi* x[j];
        }
        b[i] += lr * dy[i];
    }
}
//xs 和 ys 类型是 [][],即样本的数组
fn.train=function(xs,ys,lr){
    //N 样本数
    var N = xs.length;
    if(xs.length!=ys.length){
        throw new TypeError('特征个数和类别的个数应该相同')
    }
    lr = lr || 0.1;
    lr /=N;
    for(var i =0;i<N;i++){
        this._trainOne(xs[i],ys[i],lr);
    }
}

fn.predict = function(x){
    var n_out = this.n_out,
        n_in = this.n_in;
    var W =this.W
        ,b =this.b;
    var y = makeArray(n_out);
    for(var i = 0;i<n_out;i++){
        y[i]=0;
        for(var j = 0;j<n_in;j++){
            y[i]+=W[i][j]*x[j];
        }
        y[i]+=b[i];
    }
    softmax(y);
    return y;
}

module.exports = LogReg