/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2021-01-08 09:38:00
 * @LastEditTime: 2021-01-11 14:16:17
 */
// import express from 'express';
// const router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'TypeScript' });
// });

// export default router;

import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'TypeScript'})
});

export default router;