<template>
    <div class="custom-wrap"></div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    // import mod from "./index.d.ts";
    // import app from "@/main";
    // import { ElButton } from "element-plus";

    // app.use(ElButton);


    export default defineComponent({
        setup () {
            /** 类型断言方式
             *  <string>value / value as string
             */

            /** 类型推断
             *  变量声明没有明确指定数据类型, TS 会自动指定数据类型, 没有赋值则声明为 any 类型
             */

            /** 函数接口实现 (搜索)
             *  @param { string|Array<string> } resource 源数据
             *  @param { string } target 查找目标
             *  @description 虽然字符串底层有 includes 方法, 但为了演示使用, 分开判断数据类型
             */
            interface SearchFn {
                (resource: string|Array<string>, target: string): boolean
            }
            const searchKeywords: SearchFn = (resource: string|Array<string>, target: string): boolean => {
                if (Array.isArray(resource)) {
                    return resource.includes(target);
                }
                return resource.search(target) > -1;
            }


            /** 类接口
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
            /** 实例参数接口
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
            /** 类接口实现
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
                    this.id = props.id;
                    this.gender = props.gender;
                    this.name = props.name;
                    this.age = props.age;
                    this.height = props.height;
                    this.weight = props.weight;
                    if (props.money) this.money = props.money;
                }
            }


            const personOne = new Human({
                id: 0,
                gender: '男',
                name: 'Dante',
                age: 29,
                height: 183,
                weight: 65,
                money: 14000
            })


            onMounted(() => {
                console.log('\n\n----- 测试函数接口 ------');
                console.log(searchKeywords('0123456789', '5'));
                console.log(searchKeywords('0123456789', '25'));
                console.log('----- 测试函数接口 ------\n\n');


                console.log('\n\n----- 测试类接口 ------');
                console.log('personOne ', personOne);
                personOne.running(420);
                console.log('----- 测试类接口 ------\n\n');
            })
            

            return {
                
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>