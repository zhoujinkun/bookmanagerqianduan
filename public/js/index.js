

$(function(){
    //渲染主页
    function initList(){
        $.ajax({
            url:'/books',
            type:'get',
            dataType:'json',
            success:function(data){
                //后台传过来的数据就是json形式
                //template 用法参考art-template web版本的用法
                let html = template('indexTpl',{list:data});
                //数据插入到DOM中
                $('#dataList').html(html);

                //给 添加  绑定单机事件
                $('#dataList').find('tr').each(function(index,element){
                    var td = $(element).find('td:eq(5)');//获取最后一行
                    var id = $(element).find('td:eq(0)').text();//获取id值
                    //绑定更新图书事件
                    td.find('a:eq(0)').click(function(){
                        //编辑图书，弹出弹窗
                        editBook(id);
                    })
                    // 绑定删除事件
                    td.find('a:eq(1)').click(function(){
                        //编辑图书，弹出弹窗
                        delBook(id);
                    })
                    
                })
                // 绑定添加图书事件
                $("#addBook").unbind('click').click(function(){
                    addBook();
                })
            }
        })
    }
    initList();

    function editBook(id){
        var form = $("#getForm");
        //根据id查询最新数据
        $.ajax({
            url:'/books/book/'+id,
            type:'get',
            dataType:'json',
            success:function(data){
                //初始化弹窗
                var mark = new MarkBox(600,400,'编辑图书',form.get(0));
                mark.init();
                //填充弹窗的数据
                form.find('input[name=id]').val(data.id);
                form.find('input[name=name]').val(data.name);
                form.find('input[name=author]').val(data.author);
                form.find('input[name=category]').val(data.category);
                form.find('input[name=description]').val(data.description);
                //重新绑定单击事件
                form.find('input[type=button]').unbind('click').click(function(){
                    $.ajax({
                        url:'/books/book/',
                        type:'put',//跟新数据与post方式类似
                        dataType:'json',
                        data:form.serialize(),
                        success:function(data){
                            if(data.bool == 1){
                                mark.close();
                                initList();
                            }
                        }
                    })
                })
            }
        })
        
    }


    function delBook(id){
        $.ajax({
            type:'delete',
            url:'/books/book/'+id,
            dataType:'json',
            success:function(data){
                if(data.bool == 1){
                    initList();
                }
            }
        })
    }

    function addBook(){
        var form = $("#getForm");
        // 重置表单，修改掉单击编辑后保存的表单数据(原生DOM方法),还要把隐藏的id值变成空
        form.get(0).reset();
        form.find('input[name=id]').val('');
        var mark = new MarkBox(600,400,'添加图书',form.get(0));
        mark.init();
        //单击提交发送ajax请求
        form.find('input[type=button]').unbind('click').click(function(){
            //添加图书
            $.ajax({
                type:'post',
                url:'/books/book',
                dataType:'json',
                data:form.serialize(),
                success:function(data){
                    if(data.bool == 1){
                        mark.close();
                        initList();
                    }
                }
            })
        })
        
    }
})