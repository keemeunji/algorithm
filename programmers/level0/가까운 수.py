def solution(array, n):
    newArray = []
    array.sort()
    for i in array:
        newArray.append(abs(i-n))
    sortedList = sorted(newArray)
    indexNum = newArray.index(sortedList[0])
    return array[indexNum]
    
