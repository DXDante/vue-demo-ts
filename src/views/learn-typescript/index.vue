<template>
    <div class="custom-wrap"></div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import useFunctionInterface from "./use-function-interface";
    // import mod from "./index.d.ts";
    // import app from "@/main";
    // import { ElButton } from "element-plus";

    // app.use(ElButton);

    /** 类型断言方式
     *  <string>value / value as string
     */


    /** 类型推断
     *  变量声明没有明确指定数据类型, TS 会自动指定数据类型, 没有赋值则声明为 any 类型
     */


    /** 类 属性修饰符 (构造函数中可以对使用任意修饰符的数据进行 修改/初始化)
     *  public 公有, 类里类外都可访问
     *  protected 受保护的, 类里及其子类可以访问, 类外不能访问
     *  private 私有的, 当前类里可访问, 其他无法访问 
     */


    /** 类 构造函数中的 "参数" 使用修饰符 (readonly, public, protected, private) 时会自动在类里创建对应的属性
     *  @example (自动在类里创建 只读的 name 属性 和 公有的 age 属性)
     *  constructor (readonly name: string = "Dante", public age: number = 29) {
     *  }
     */


    /** 类 中的静态成员, 使用 static 修饰属性/方法, 则使用 类名直接访问
     *  @example
     *  class Person {
     *      static typeName: string = "person"
     *      static running (): void { console.info('跑步') }
     *  }
     *  console.info(Person.typeName)
     */


    /** 抽象类、抽象方法 (子类/派生类需继承 和 实现超类(父类) 中的抽象方法, 也可以抽象属性, 但基本没有这么做的, 定义一种行为. 派生类具体去实现这类行为)
     *  @example
     *  abstract class Person {
     *      singingTheNationalAnthem (): void {}
     *  }
     * 
     *  class ChinesePerson extends Person {
     *      // 实现抽象类中抽象方法
     *      singingTheNationalAnthem (): void {
     *          console.info("唱中华人民共和国国歌");
     *      }
     *  }
     */


    /** 函数定义时的完整写法 (一般就是用函数接口定义了)
     *  @example
     *  const additiveCalculation: (a: number, b: number) => number = (a: number, b: number): number => {
     *      return a + b;
     *  }
     */

    
    /** 函数可选参数使用 ? 进行修饰, 例如：(name: string == 'default', age?: number)
     */


    /** 函数重载 (函数重载声明, 函数名相同, 函数的型参数量 和 个数不同)
     *  @example
     *  function add (a: string, b: string): string
        function add (a: number, b: number): number
        function add (a: string|number, b: string|number): string|number {
            if (typeof a == 'string' && typeof b == 'string') {
                return `${ a }${ b }`;
            }
            // 这就有点鸡肋, 还要利用重载 + 断言方式
            return (a as number) + (b as number);
        }
        */


    /** 使用函数接口示范
     */
    useFunctionInterface();


    /** 多值全等
     */
    // interface EqualFn {
    //     (target: any, ...rest: Array<any>): boolean
    // }
    // const checkEqual: EqualFn = (target: any, ...rest: Array<any>): boolean => {
    //     return Object.is(target, rest[0]) && (rest.length < 2 || checkEqual(...rest as Array<any>));
    // }


    /** 人类 类接口
     */
    interface HumanClassInterface {
        readonly id: number
        gender: string
        name: string
        age: number
        height: number
        weight: number
        money?: number
        running(speed: number): void
    }
    /** 人类 实例参数接口
     *  @property id: number
     */
    interface HumanParamsInterface {
        id: number
        gender: string
        name: string
        age: number
        height: number
        weight: number
        money?: number
    }
    /** 人类 类接口实现
     *  @description 接口可以继承其他接口, interface MultipleInterface extends Human, xxx {}
     *  @description 类可以实现多个接口, class Human implements Human, xxx {}
     *  @description 实现接口继承的类, class Human implements MultipleInterface {}
     */
    class Human implements HumanClassInterface {
        readonly id: number
        gender: string
        name: string
        age: number
        height: number
        weight: number
        money?: number
        running(speed: number): void {
            console.log(`奔跑 (速度:${ speed }M/m)`);
        }
        
        constructor (props: HumanParamsInterface) {
            ({
                id: this.id,
                gender: this.gender,
                name: this.name,
                age: this.age,
                height: this.height,
                weight: this.weight
            } = props);
            
            if (props.money) ({ money: this.money } = props);
        }
    }


    /** 学生功课接口
     */
    interface StudentLessonsInterface {
        readonly id: number
        name: string
    }
    /** 学生类接口继承 (继承自 HumanClassInterface)
     */
    interface StudentClassInterface extends HumanClassInterface  {
        lessons: Array<StudentLessonsInterface>
        /** 阅读书本
         *  @param { String } bookName 书本名称
         *  @return { Boolean } 是否成功
         */
        reading(bookName: string): boolean
    }
    /** 学生类实例参数接口
     */
    interface StudentParamsInterface extends HumanParamsInterface {
        lessons: Array<StudentLessonsInterface>
    }
    /** 学生类 (继承自 Human 类 且实现 StudentClassInterface 继承接口)
     */
    class Student extends Human implements StudentClassInterface {
        lessons: Array<StudentLessonsInterface>
        reading(bookName: string): boolean {
            const find = this.lessons.find(item => item.name == bookName);
            if (find) {
                console.log(`阅读 "${ bookName }" 成功`);
                return !!find;
            }
            return !!find;
        }

        constructor (props: StudentParamsInterface) {
            super(props);
            ({ lessons: this.lessons } = props);
        }
    }


    // 实例化人类对象
    const personOne: Human = new Human({
        id: 0,
        gender: '男',
        name: 'Dante',
        age: 29,
        height: 183,
        weight: 65,
        money: 14000
    })
    //  实例化学生对象
    const studentOne: Student = new Student({
        id: 0,
        gender: '男',
        name: 'Dante',
        age: 29,
        height: 183,
        weight: 65,
        lessons: [
            {id: 0, name: '语文'},
            {id: 1, name: '数学'},
            {id: 2, name: '英语'}
        ]
    })


    /** 泛型 (在定义函数、接口、类时不明确要使用的数据的数据类型, 在使用时才能确定数据类型, 可以用泛型, 定义常用 T 表示, 即 type, 也可以用其他大写字母, 比如：K,V)
     */
    // interface generateSpecifiedDataInterface {
    //     <T>(value: T, count?: number): Array<T>
    // }
    // /** 生成指定数量指定类型的数据
    //  */
    // const generateSpecifiedData: generateSpecifiedDataInterface = <T>(value: T, count: number = 1): Array<T> => {
    //     count = Math.abs(count);
    //     return new Array(count).fill(value);
    // }
    // const generateSpecifiedData = <T>(value: T, count: number = 1): Array<T> => {
    //     count = Math.abs(count);
    //     return new Array(count).fill(value);
    // }

    // 多个泛型参数示例
    const argToArray = <T, K>(value1: T, value2: K): [T, K] => {
        return [value1, value2];
    }


    onMounted(() => {
        console.log('\n\n----- 测试类接口 ------');
        console.log('personOne ', personOne);
        personOne.running(420);
        console.log('----- 测试类接口 ------\n\n');

        console.log('\n\n----- 测试类继承与接口继承 ------');
        console.log('studentOne ', studentOne);
        studentOne.running(220);
        const readResult = studentOne.reading('数学');
        console.log('阅读返回 ', readResult);
        console.log('----- 测试类继承与接口继承 ------\n\n');

        console.log('\n\n----- 泛型函数 ------');
        // const arrStringData = generateSpecifiedData<string>('Dante');
        // const arrNumberData = generateSpecifiedData<number>(110, 2);
        // console.log('arrStringData ', arrStringData);
        // console.log('arrNumberData ', arrNumberData);
        console.log('----- 泛型函数 ------\n\n');

        console.log('\n\n----- 多个泛型参数函数 ------');
        const args = argToArray<{name: string}, string>({name: 'Dante'}, '测试数据');
        console.log('args ', args);
        console.log('----- 多个泛型参数函数 ------\n\n');
    })
</script>

<style lang="scss" scoped>

</style>