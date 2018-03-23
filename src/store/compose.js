function addFirst(str) {
    return '可爱' + str;
}

function addSecond(str) {
    return str + '有钱';
}

// addSecond(addFirst('元'));
console.log(compose(addFirst, addSecond, addFirst)('元'));

function compose(...fns) {
    return function (...args) {
        let last = fns.pop();//最后一个函数 addFirst
        return fns.reduceRight(function (prev, next, curIndex, arr) {
            return next(prev);
        }, last(...args));
    }
}