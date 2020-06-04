var getDecimalValue = function(head) {
    var sum = '';
    while(head != null){
        sum += head.val ;
        head = head.next;
    }
    console.log(parseInt(sum,2));

};
getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);