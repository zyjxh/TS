/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2021-01-07 17:40:36
 * @LastEditTime: 2021-01-07 17:44:20
 */
interface Greeting {
    name: string;
}

const Hello = (props: Greeting) => <h1>Hello {props.name}</h1>

export default Hello;