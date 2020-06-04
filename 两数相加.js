var addTwoNumbers = function(l1, l2) {
    var node = new ListNode();
    var temp = node,sum,n=0;
    while(l1 || l2){
        var n1 = l1 ? l1.val : 0;
        var n2 = l2 ? l2.val : 0;
        sum = n1 + n2 + n;
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        n = parseInt(sum / 10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(n>0) temp.next = new ListNode(n);
    return node.next; 
};
addTwoNumbers([2,4,3],[5,6,4]);