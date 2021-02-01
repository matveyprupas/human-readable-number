module.exports = function toReadable (n) {
    let nArr = n.toString().split('');
    let res;
    let resArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let resOneArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let resTwoArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (n == 0) return 'zero';
    switch(nArr.length) {
        case 1:
            res = resArr[n];
            break;
        case 2:
            if (nArr[0] == "1") {
                res = resOneArr[nArr[1]]; 
            } else if (nArr[1] == "0") {
                res = resTwoArr[nArr[0]]; 
            } else {
                res = resTwoArr[nArr[0]] + ' ' + resArr[nArr[1]];
            }
            break;
        case 3:
            if (nArr[1] == '0' && nArr[2] == '0') {
                res = `${resArr[nArr[0]]} hundred`;
            } else if (nArr[1] == '1' && nArr[2] == '0') {
                res = `${resArr[nArr[0]]} hundred ten`;
            } else if (nArr[1] == '0') {
                res = `${resArr[nArr[0]]} hundred ${resArr[nArr[2]]}`;
            } else if (nArr[2] == '0') {
                res = `${resArr[nArr[0]]} hundred ${resTwoArr[nArr[1]]}`;
            } else if (nArr[1] == '1') {
                res = `${resArr[nArr[0]]} hundred ${resOneArr[nArr[2]]}`;
            } else {
                res = `${resArr[nArr[0]]} hundred ${resTwoArr[nArr[1]]} ${resArr[nArr[2]]}`;
            }
            break;
    }
    return res;
}
