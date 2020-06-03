var isPalindrome = function (head) {
    var arr = [];
    while (head != null) {
        arr.push(head.val);
        head = head.next;
    }
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        if (arr[left] !== arr[right]) return false;
        left++; right--;
    }

    return true;

};
isPalindrome([1,2,2,1])