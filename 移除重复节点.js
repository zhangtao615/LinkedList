var removeDuplicateNodes = function(head) {
    //双指针
    var left = head;
    while(left){
        var right = left;
        while(right.next){
            if(left.val == right.next.val){
                right.next = right.next.next;
            }else{
                right = right.next;
            }
        }
        left = left.next;
    }
    return head;
};
removeDuplicateNodes([1,2,3,3,2,1]);