var removeElements = function(head, val) {
    var node = new ListNode();//创建一个空节点
    node.next = head;
    head = node;
    while(head){
        if(head.next && head.next.val === val){
            head.next = head.next.next;
            continue;
        }
        head = head.next;
    }
    return node.next;
};
removeElements([1,2,3,4,5,4,3,2,1],4)