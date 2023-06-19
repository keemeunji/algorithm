def solution(num_list):
    new_list = []
    evenNum = 0
    oddNum = 0
    for i in num_list:
        if i % 2 == 0:
            evenNum += 1
        else:
            oddNum += 1
    new_list.append(evenNum)
    new_list.append(oddNum)
    return new_list
