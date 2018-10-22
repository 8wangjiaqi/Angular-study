import express from 'express';
import bodyParser from 'body-parser';
const app=express();//express返回一个express一个类
app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     res.end('hello world');
// });

// app.get('/api/course',(req,res)=>{
//     // res.end('tongbuke');
//     //因为在subscribe()返回的是对象类型，所以不能写字符串，要用json返回成对象类型
//     res.json('tongbuke');

// });
// app.listen(8000);


//自己声明一个类
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
const courses=[
    new Course(1,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    11,91),
    new Course(3,'HTML5',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    12,93),
    new Course(4,'测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    13,93),
    new Course(5,'JAVASCRIPT',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,95),
    new Course(6,'数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    13,82),
    new Course(7,'新生训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",
    14,87),
    new Course(8,'暑期训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    82,93),

]

// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses',(req,res)=>{
    // res.end(JSON.stringify(courses));//json转换乱码  JSON.stringify转换为字符串
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses.find((ele)=>ele.id==req.params.id));//筛选出类似的
    // res.json(courses.filter((ele)=>ele.id==req.params.id));//筛选出类似的
});
//filter 过滤

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});


/*---------------------------------------------------------------*/
class Course2{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public jieshao:string,
        public task:number,
        public person:number
    ){}
}
const courses2=[
    new Course2(1,'Githhub开源之旅视频课',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度"
     ,10,3490),
    new Course2(2,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度",4,1391),
    new Course2(3,'HTML5基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度",3,2493),
    new Course2(4,'Selenium IDE WEB自动化',
    "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度",6,2793),
    new Course2(5,'扩展的ICONIX软件过程实',
    "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化",8,3495),
    new Course2(6,'Selenium IDE WEB自动化',
    "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
    "      本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。",2,3582),
    new Course2(7,'网页制作与开发',
    "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库",12,1287),
    new Course2(8,'产品&交互设计那些事',
    "http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。能够评估人和项目的活跃度。能够评估人和项目的活跃度",8,493),

]

// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses2',(req,res)=>{
    // res.end(JSON.stringify(courses));//json转换乱码  JSON.stringify转换为字符串
    res.json(courses2);
});
app.get('/api/courses2/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses2.find((ele)=>ele.id==req.params.id));//筛选出类似的
    // res.json(courses.filter((ele)=>ele.id==req.params.id));//筛选出类似的
});
//filter 过滤

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses2);
});



/*----------------------------------------------------------------*/
class Course3{
    constructor(
        public id:number,
        public courseName:string,
        public perName:string,
        public images1:string,
        public images:string,
        public jieshao:string,
    ){}
}
const courses3=[
    new Course3(1,'深入解析Java中的static关键字',"孟双英",
    "http://usercontent.edu2act.cn/media/userheader/15-11-09/9UV4c3AGFMqk3599sUbQy5.jpg?imageView2/1/w/256/h/256",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0914/TMbToCq4EiaQdkDEFAtfuh.jpg",
    "static关键字大家并不陌生，是表示静态的。",
     ),
    //  new Course3(2,'深入解析Java中的static关键字',"孟双英",
    //  "http://usercontent.edu2act.cn/media/userheader/15-11-09/9UV4c3AGFMqk3599sUbQy5.jpg?imageView2/1/w/256/h/256",
    //  "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0914/TMbToCq4EiaQdkDEFAtfuh.jpg",
    //  "static关键字大家并不陌生，是表示静态的。",
    //   ),
    //   new Course3(3,'深入解析Java中的static关键字',"孟双英",
    //   "http://usercontent.edu2act.cn/media/userheader/15-11-09/9UV4c3AGFMqk3599sUbQy5.jpg?imageView2/1/w/256/h/256",
    //   "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0914/TMbToCq4EiaQdkDEFAtfuh.jpg",
    //   "static关键字大家并不陌生，是表示静态的。",
    //    ),
    //    new Course3(4,'深入解析Java中的static关键字',"孟双英",
    //    "http://usercontent.edu2act.cn/media/userheader/15-11-09/9UV4c3AGFMqk3599sUbQy5.jpg?imageView2/1/w/256/h/256",
    //    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0914/TMbToCq4EiaQdkDEFAtfuh.jpg",
    //    "static关键字大家并不陌生，是表示静态的。",
    //     ),
    //     new Course3(5,'深入解析Java中的static关键字',"孟双英",
    //     "http://usercontent.edu2act.cn/media/userheader/15-11-09/9UV4c3AGFMqk3599sUbQy5.jpg?imageView2/1/w/256/h/256",
    //     "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0914/TMbToCq4EiaQdkDEFAtfuh.jpg",
    //     "static关键字大家并不陌生，是表示静态的。",
    //      ),
]

// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses3',(req,res)=>{
    // res.end(JSON.stringify(courses));//json转换乱码  JSON.stringify转换为字符串
    res.json(courses3);
});
app.get('/api/courses3/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses3.find((ele)=>ele.id==req.params.id));//筛选出类似的
    // res.json(courses.filter((ele)=>ele.id==req.params.id));//筛选出类似的
});
//filter 过滤

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses3);
});

app.listen(8000);


