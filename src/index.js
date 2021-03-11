module.exports = function reverse (n) {
    const int = n;
    const str = n.toString();
    let arr = str.split('');
    arr = arr.reverse();
    if (arr[arr.length-1] == '-') {
        arr.pop();
    }
    const result = arr.join('');
    return result;
}
