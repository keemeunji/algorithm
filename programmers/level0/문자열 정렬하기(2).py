def solution(my_string):
    answer = []
    answer += my_string.lower()
    answer.sort()
    return ''.join(answer)
