// 基本类型
var myname:string = 'hhh'
myname.substring(0, 1)

var myage:number = 100
myage.toFixed(1)

var myshow:boolean = true
myshow = false

var my:string | number = 'kkk'
my = 100

var myany:any = 100


// 数组
var list1:string[] = ['1', '2', '3'] // 数组里面只能放字符串

var list2:number[] = [1, 2, 3, 4]

var list3:(number | string)[] = [1, 2, '3']

// 数组另一种写法
var mylist1:Array<string> = ['1', '2', '3']
var mylist2:Array<string | number> = ['1', 2]


// 对象
interface IObj {  // interface 接口
  name: string, 
  age: number, 
  location?: string,  // 可选属性 ，可以有可以没有
  [propName: string]: any  // 不关心的对象值
}

var obj1:IObj = {
  name: 'hhh', 
  age: 100,
  location: 'hu'
}

// 函数
function test1(a:string, b:string, c?:number) {  // ?表示可传可不传
  console.log(a, b)
  return a.substring(0, 1) + b.substring(1, 2)
}

var myname:string = test1('aaa', 'bbb', 100)

// 字符串 函数结合
interface IObject {
  name: string, 
  age: number,
  getName: (name:string) => string  // 规定函数形参数据类型，返回值数据类型
}

var obj2:IObject = {
  name: 'zhangsan',
  age: 18, 
  getName: (name: string) => { 
    return name
  }
}

var name:string = obj2.getName('wangwu')

export default {}