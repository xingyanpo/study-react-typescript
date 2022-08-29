class Bus {
  private list:any = []  // 私有属性

  public name = 'hhh'  // 共有属性

  protected age = 18  // 受保护的，孩子可以访问
}

class Child extends Bus {  // 孩子可以访问父类中的protected属性
  child() {
    console.log(this.age)
  }
}

interface IFunc{  // 函数接口，跟对象不一样，只需要写需要规定类型的就可以
  getName:() => string
} 

class A implements IFunc{
  a1() {

  }

  a2() {

  }

  getName() {
    return 'AAA'
  }
}

class B implements IFunc {
  b1() {

  }

  b2() {

  }

  getName() {
    return 'BBB'
  }
}

function init(obj:IFunc) {
  obj.getName()
}

var objA = new A()
var objB = new B()

init(objA)
init(objB)

export default {}