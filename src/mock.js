// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const produceNewsData = function() {
  let articles = [];
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}



const index = {
  'infos|1-10':[
    {
      "姓名":'@cname',
      "身份证":'@id',
      "地址":'@county(true)',
      "邮编":'@zip',
      "邮箱":'@email',
      "日期":'@date(yyyy年MM月dd日 HH:mm:ss)',
      "头像":"@image",
      "描述":'@cparagraph(1)',
      "ip":"@ip",
      "pick":"@pick(['第一个', '第二个', '第三个', '第四个', '第五个'])",//随机选择其中一个
      "sss|1-100":1,//产生1-100的数据
      'regexp1': /[a-z][A-Z][0-9]/,//利用正则表达式反向生成
      'pic':"@dataImage('150x150', 'mock模拟的图片')"
    }
  ]
};



// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', index);
Mock.mock('/news/yyy', 'get', produceNewsData);
