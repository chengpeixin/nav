$(function(){
    var navAry = []
    // 搜索
    navAry.push({
        title:"搜索",
        items:[
            {src:"https://www.baidu.com/",name:"百度"},
            {src:"https://www.google.com",name:'Google'},
            {src:"https://cn.bing.com/",name:"Bing"}
        ]
    })
    // 视频
    navAry.push({
        title:"视频",
        items:[
            {src:"https://www.youtube.com/",name:"Youtube"},
        ]
    })
    // 社区
    navAry.push({
        title:"社区",
        items:[
            {src:"https://github.com/",name:"GitHub"},
            {src:"https://www.awesomes.cn/",name:"awesomes"},
            {src:"https://juejin.im/timeline",name:"掘金"},
            {src:"https://stackoverflow.com/",name:"stackOverflow"},
            {src:"http://www.jstips.co/",name:'jsTips'}
        ]
    })
    // 文档
    navAry.push({
        title:"文档",
        items:[
            {src:"https://developer.mozilla.org/zh-CN/",name:"Mdn"},
            {src:"https://cn.vuejs.org/",name:"Vue"},
            {src:"https://nodejs.org/en/",name:"Node"},
            {src:"https://scrapy.org/",name:"Scrapy"},
        ]
    })
    // 学习资源
    navAry.push({
        title:"MOOC",
        items:[
            {src:"https://www.udacity.com/",name:"Udacity"},
            {src:"https://www.coursera.org/",name:"Coursera"},
            {src:"https://www.edx.org/",name:"EDX"},
            {src:"https://www.codecademy.com/",name:"codecademy"},
            {src:"https://www.lynda.com/",name:"lynda"}
        ]
    })
    // 导航
    navAry.push({
        title:"门户",
        items:[
            {src:"http://www.alloyteam.com/nav/",name:"Web前端导航"},
            {src:"http://www.html5dw.com/",name:"H5梦工厂"},
            {src:"http://www.daqianduan.com/",name:"大前端"}
        ]
    })
    // each
    var str=''
    $(navAry).each(function(i,v){
        var str2 = `<h1>${v.title}</h1>`
        $(v.items).each(function(ind,val){
            str2 += `<a class='btn' href="${val.src}" target="_blank">${val.name}</a>`
        })
        str+= `<div class="body"><div class="con">${str2}</div></div>`
    })
    $('.box').html(str)
})