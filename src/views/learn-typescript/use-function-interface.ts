import { onMounted } from "vue";



interface SearchFn {
    (resource: string | Array<string>, target: string): boolean
}
/** 搜索
 *  @param { string|Array<string> } resource 源数据
 *  @param { string } target 查找目标
 *  @description 虽然字符串底层有 includes 方法, 但为了演示使用, 分开判断数据类型
 */
const searchKeywords: SearchFn = (resource: string | Array<string>, target: string): boolean => {
    if (Array.isArray(resource)) {
        return resource.includes(target);
    }
    return resource.search(target) > -1;
}


export default function (): void {
    onMounted(() => {
        console.info('\n\n----- 测试函数接口 searchKeywords ------');
        console.info("searchKeywords('0123456789', '5') ", searchKeywords('0123456789', '5'));
        console.info("searchKeywords('0123456789', '25') ", searchKeywords('0123456789', '25'));
        console.info('----- 测试函数接口 ------\n\n');
    })
}