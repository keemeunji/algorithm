function solution(s){
    var count_p = 0;
    var count_y = 0;
    
    const ls = s.toLowerCase();
    
    for (var i=0; i<ls.length; i++) {
        if(ls[i] == 'p') {
            count_p++;
        }
        else if(ls[i] == 'y') {
            count_y++;
        }
    }
    return (count_p === count_y) ? true : false;
}
