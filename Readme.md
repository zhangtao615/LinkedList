## how to create a linked list
### first : create a class
```
    function LinkedList(){
        //methods and properties
    }
```
### second 
```
    var Node = function(ele){
        this.ele = ele;
        this.next = null;
    }
```

### finally some methods about linked list
- append(ele);
- insert(position,element):向链表特定位置插入元素；
- remove(element):从链表移除一项；
- indexOf(element):返回链表中某元素的索引，如果没有返回-1；
- removeAt(position):从特定位置移除一项；
- isEmpty():判断链表是否为空，如果为空返回true,否则返回false;
- size():返回链表包含的元素个数；
- toString():重写继承自Object类的toString()方法，因为我们使用了Node类；

    