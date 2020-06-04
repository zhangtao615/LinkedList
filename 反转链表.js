var reverseList = function(head) {
    //双指针反转
    let pre = null;
    let cur = head;
    while (cur !== null) {
        let cnext = cur.next;
        if (pre === null) {
            cur.next = null;
        } else {
            cur.next = pre;
        }
        pre = cur;
        cur = cnext;
    }
    return pre;
};
reverseList([1,2,3,4,5]) 