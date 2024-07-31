function solution(array, commands) {
    const answer = [];
    
    commands.forEach(command => {
        const slicedArray = array.slice(command[0] - 1, command[1]);
        slicedArray.sort((a, b) => a - b);
        answer.push(slicedArray[command[2] - 1])
    })
    return answer;
}
