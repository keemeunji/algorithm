function solution(n, arr1, arr2) {
    const newArr1 = arr1.map(num => num.toString(2).padStart(n, '0'));
    const newArr2 = arr2.map(num => num.toString(2).padStart(n, '0'));

    const result = [];

    for(let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j < n; j++) {
            if (newArr1[i][j] === '1' || newArr2[i][j] === '1') {
                row += '#';
            } else row += ' ';
        }
       result.push(row); 
    }
    return result
}
