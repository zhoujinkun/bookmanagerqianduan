const sm = require('./sqlModule');

exports.allBooks = (req,res)=>{
    let sql = 'select * from book';
    let data = null;
    sm.sqlModule(sql,data,(result)=>{
        res.json(result);
    })
}

exports.getBookById = (req,res)=>{
    // 获取id
    let id = req.params.id;
    let sql = 'select * from book where id=?';
    let data = [id];
    sm.sqlModule(sql,data,(result)=>{
        res.json(result[0]);
    })
}

exports.editBook = (req,res)=>{
    let info = req.body;//处理post请求之类的数据获取
    let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
    let data = [info.name,info.author,info.category,info.description,info.id];
    sm.sqlModule(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.send({bool:1});
        }else {
            res.send({bool:-1});
        }
    })
}

exports.delBook = (req,res)=>{
    let id = req.params.id;
    let sql = 'delete from book where id=?';
    let data = [id];
    sm.sqlModule(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.send({bool:1});
        }else {
            res.send({bool:-1});
        }
    })
}


exports.addBook = (req,res)=>{
    let info = req.body;
    let sql = 'insert into book set?';
    let data = info;
    sm.sqlModule(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.send({bool:1});
        }else {
            res.send({bool:-1}); 
        }
    })
}