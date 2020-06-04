var deleteNode = function (head, val) {
   var pre = new ListNode();
   pre.next = head;
   var node = pre;
   while(node.next){
       if(node.next.val == val){
           node.next = nnode.next.next;
           break;
       }
       node = node.next;
   }
   return pre.next;
};
deleteNode([1,2,3,4],4)