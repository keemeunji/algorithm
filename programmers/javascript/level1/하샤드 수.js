function solution(x) {
    var answer = 0;
    var stringNum = String(x);

    for (let i = 0; i < stringNum.length; i++) {
        answer += parseInt(stringNum[i]);
    }   
    return x % answer === 0 ? true : false;
}
