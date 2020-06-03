function LinkedList(){
    //声明Node类
    var Node = function(element){
        this.element = element;
        this.next = null;
    }
    //初始化链表长度
    var length = 0;
    //初始化第一个元素
    var head = null;
    this.append = function(element) {
        //初始化Node实例
        var node = new Node(element),current;
        if(head === null){
            //第一个Node实例进入链表，之后在这个LinkedList实例中head就不再是null了
            head = node;
        }else{
            current = head;
            //循环链表找到最后一项，循环结束，current指向链表最后一项
            while(current.next){
                current = current.next;
            }
            //找到最后一项元素之后，将next属性指向新的元素node，就建立连接
            current.next = node;
        }
        //更新链表长度 
        length++;
    };
    //insert方法实现
    this.insert = function(position,elememt){
        //检查是否越界
        if(position >= 0 && position <= length){
            var node = new Node(elememt),
            current = head,
            previous,
            inden = 0;
            if(position === 0){
                //在第一个位置添加
                node.next = current;
                head = node;
            }else{
                //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
                while(index++ < position){
                    previous = current;
                    current  = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            //更新链表长度
            length++;
            return true;
        }else{
            return false;
        }
    }
    //removeAt方法实现
    this.removeAt = function (position){
        if(position > -1 && position < length){
            var current = head,
            previous,
            index = 0;
            //移除第一个元素
            if(position === 0){
                //相当于head = null
                head = current.next;
            }else{
                 //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
                 while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                //链接previous和current的下一个元素，也就是把current移除了
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.indexOf = function(element){
        let current = head,
            index = 0;
        //循环链表找到元素位置
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.remove = function(element){
        //调用已经声明过的indexOf和removeAt方法
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.getHead = function(){
        return head;
    };
    this.toString = function(){
        let current = head,
            string = '';
        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        return string;
    };
    this.print = function(){
        console.log(this.toString());
    };
}
//一个实例化后的链表，里面是添加的数个Node类的实例

