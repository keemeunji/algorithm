def solution(n):
    n_str = str(n)
    answer = 0
    for i in range(0, len(n_str)):
        n_int = int(n_str[i])
        answer += n_int
    return answer
