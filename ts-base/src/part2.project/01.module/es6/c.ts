/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2021-01-03 15:49:27
 * @LastEditTime: 2021-01-05 10:44:09
 */
// import { a, b, c } from './a'; // 批量导入
// import { P } from './a';       // 导入接口
// import { f as F } from './a';  // 导入时起别名
// import * as All from './a';    // 导入模块中的所有成员，绑定在 All 上
// import myFunction from './a';  // 不加{}，导入默认

// console.log(a, b, c)

// let p: P = {
//     x: 1,
//     y: 1
// }

// console.log(All)

// myFunction()
import { a, b, c } from './a'; //批量导入
import { P } from './a'  //导入接口
import {f as F} from './a' //导入时起别名
import * as All from './a' //导入模块中的所有成员，绑定在ALL上
import myFunction from './a' //不加 {}, 导入默认