var kthToLast = function(head, k) {
    let arr=[];
    while(head!=null){
        arr.unshift(head.val);
        head=head.next;
    }
    return arr[arr.length - k];
};
kthToLast([1, 2, 3, 4, 5], 2);