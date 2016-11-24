/**
 * Created by lss11 on 2016/11/22.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        see: true
    }
});


var app4 = new Vue({
    el: '#app4',
    data: {
        todos: ''
    },
    methods: {
        getdata: function () {
            $.ajax({
                url: 'todos.json',
                success: function (data) {
                    app4.todos = data;
                }
            });
        }
    }
});
app4.getdata();

var app5 = new Vue({
    el: '#app5',
    data: {
        message: '你好vuejs'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'hello world!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app7 = new Vue({
    el: '#app7',
    data: {
        list: [{text: 'Vegetables'},
            {text: 'Cheese'},
            {text: 'Whatever else humans are supposed to eat'}]
    }
});

var app8=new Vue({
    el:'#app8',
    data:{
        num:8,
        ok:true,
        message:90,
        fname:'li',
        lname:'shuaishuai'
    },
    filters:{
        meiyuan:function (value) {
            return value+"$"
        },
        rmb:function (value,arg) {
            return value+arg;
        }
    },
    methods:{
        fullname:function () {
            return this.fname+" "+this.lname
        }
    }
});

var app9=new Vue({
    el:'#app9',
    data:{
        question:'',
        answer:'you can try ask a question ,i can answer you !'
    },
    watch:{
        question:function (value) {
            this.answer='wait....';
            this.getanswer(value);
        }
    },
    methods:{
        getanswer:function (value) {
            switch (value){
                case '51':
                    this.answer='劳动节';
                    break;
                case '61':
                    this.answer='儿童节';
                    break;
                case '101':
                    this.answer='国庆节';
                    break;
                default:
                    this.answer='未知';
                    break;
            }
        }
    }
});

var app10=new Vue({
    el:'#app10',
    data:{
        classobj:{
            'success':true,
            'error':false
        },
        styleobj:{
            color:'white',
            fontSize:'20px'
        }
    }
});


var app11=new Vue({
    el:'#app11',
    data:{
        objects:{
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
});


Vue.component('item',{
    template: '<li>{{ title }} <button v-on:click="$emit(\'remove\')">X</button></li>',
    props:['title']
});

var app12=new Vue({
    el:'#app12',
    data:{
        newNode:'',
        items:[
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods:{
        addNode:function () {
            this.items.push(this.newNode);
            this.newNode='';
        }
    }
});


var app13=new Vue({
    el:'#app13',
    data:{
        num:0
    },
    methods:{
        add:function () {
            this.num++;
        }
    }
});


var app14=new Vue({
    el:'#app14',
    data:{
        value:''
    },
    methods:{
        keyups:function (value) {
            alert(value)
        }
    }
});

var app15=new Vue({
    el:'#app15',
    data:{
        checked:true,
        checkedNames:[],
        picked:'one',
        selected:'B'
    }
});


new Vue({
    el: '#example-3',
    data: {
        show: true
    }
})

Vue.directive('dir',{
    inserted: function (el) {
       alert(el.value);
    }
});
var app16=new Vue({
    el:'#app16'
});


var mixin = {
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}
var vm = new Vue({
    mixins: [mixin],
    methods: {
        bar: function () {
            console.log('bar')
        },
        conflicting: function () {
            console.log('from self')
        }
    }
})
vm.foo() // -> "foo"
vm.bar() // -> "bar"
vm.conflicting() // -> "from self"


