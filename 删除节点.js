var deleteNode = function(node) {
    //把删除的那个元素(node)替换成下一个元素(node.next)
    var current = node;
    node.val = current.next.val;
    node.next = current.next.next;
};