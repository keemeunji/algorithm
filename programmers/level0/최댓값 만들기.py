def solution(numbers):
    maxNum = 0
    for i in range(0, len(numbers) - 1):
        for j in range(i + 1, len(numbers)):
            if maxNum < numbers[i] * numbers[j]:
                maxNum = numbers[i] * numbers[j]
    return maxNum
