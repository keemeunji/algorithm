def solution(n):
    answer = []
    for i in range(4, n + 1):
        for j in range(2, i):
            if i % j == 0:  # j로 나누어 떨어지면 소수가 아니므로 
                answer.append(i)  # 리스트에 추가
                break
    return len(answer)  # 리스트 안에 요소 갯수 리턴
