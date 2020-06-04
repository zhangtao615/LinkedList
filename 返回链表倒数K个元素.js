var getKthFromEnd = function(head, k) {
    var fast = head,slow = head;
    var i = 0;
    while(fast){
        if(i < k){
            fast = fast.next;
        }else{
            fast = fast.next;
            slow = slow.next;
        }
        i++;
    }
    return slow;
};
getKthFromEnd([1,2,3,4,5],2);