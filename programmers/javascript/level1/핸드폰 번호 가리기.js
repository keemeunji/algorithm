function solution(phone_number) {
    const replacePhoneNumber = phone_number.replaceAll(/\d/g, '*');
    const invisiblePhoneNumber = replacePhoneNumber.slice(0, phone_number.length - 4)
    const visiblePhoneNumber = phone_number.slice(-4);
    
    return invisiblePhoneNumber + visiblePhoneNumber;
}
