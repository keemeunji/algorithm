def solution(order):
    order = str(order)  # int형을 str형으로 변환
    answer = 0  # 0부터 시작
    for i in order:
        if i == '3' or i == '6' or i == '9':
            answer += 1
    return answer
