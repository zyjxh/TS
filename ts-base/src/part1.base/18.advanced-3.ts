/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2021-01-03 15:01:50
 * @LastEditTime: 2021-01-04 14:12:18
 */
interface Obj1 {
    a: string;
    b: number;
}
type ReadonlyObj = Readonly<Obj1>

type PartialObj = Partial<Obj1>

type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>
