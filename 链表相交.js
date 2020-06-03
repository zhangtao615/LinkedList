var getIntersectionNode = function(headA, headB) {
    while(headA != headB){
        headA = headA ? headA.next : headB;
        headB = headB ? headB.next : headA;
    }
    return headA;
};