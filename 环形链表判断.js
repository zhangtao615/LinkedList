var hasCycle = function(head) {
    if(!head || !head.next) return false;
    var fast = head.next.next;
    var slow = head;
    while(fast !== slow){
        if(!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
};