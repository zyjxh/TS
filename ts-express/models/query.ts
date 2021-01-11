/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2021-01-08 09:38:00
 * @LastEditTime: 2021-01-11 14:23:51
 */
// import mysql from 'mysql';
// import dbConfig from '../config/db';

// const pool = mysql.createPool(dbConfig);

// const query = (sql: string) => {
//     return new Promise<any>((resolve, reject) => {
//         pool.getConnection((error, connection) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 connection.query(sql, (error, results) => {
//                     if (error) {
//                         reject(error);
//                     } else {
//                         resolve(results);
//                     }
//                     connection.release();
//                 })
//             }
//         });
//     });
// };

// export default query;
import mysql from 'mysql';
import dbConfig from '../config/db'

const pool = mysql.createPool(dbConfig);

const query = (sql: string) => {
    return new Promise<any>((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            } else {
                connection.query(sql, (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                    connection.release()
                })
            }
        });
    });
};