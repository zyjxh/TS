/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2020-12-29 18:43:36
 * @LastEditTime: 2021-01-08 11:11:59
 */
// export interface EmployeeRequest {
//     name: string;
//     departmentId: number | undefined;
// }

// interface EmployeeInfo {
//     id: number;
//     key: number;
//     name: string;
//     department: string;
//     hiredate: string;
//     level: string;
// }

// export type EmployeeResponse = EmployeeInfo[] | undefined

export interface EmployeeRequest {
    name: string;
    departmentId: number | undefined;
}

interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined
