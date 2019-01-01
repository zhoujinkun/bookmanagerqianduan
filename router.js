//路由渲染
const express = require('express');
const router = express.Router();
const service = require('./server');
//提供所有图书的信息
router.get('/books',service.allBooks);
//编辑图书时根据id查询相应的图书 localhost:3000/books/book/1
router.get('/books/book/:id',service.getBookById);

//编辑图书更新数据
router.put('/books/book',service.editBook);

//删除图书
router.delete('/books/book/:id',service.delBook);
 
// 添加图书页面


//添加图书
router.post('/books/book',service.addBook);
module.exports = router; 