// ==FeHelperMonkey==
// @reminder        请不要删除这部分代码注释，这是FeHelper油猴脚本能正常工作的基本条件！当然，你可以按需修改这里的内容！
// @id              mf_1608562401739
// @name            csdn代码块样式更换
// @url-pattern     https://blog.csdn.net/**
// @enable          true
// @require-js      
// @auto-refresh    0
// @updated         2020-12-21 23:14:24
// ==/FeHelperMonkey==


// 在这里，可以随便写你的代码，并且，你的代码中
// 1. 可以进行页面上的所有DOM操作
// 2. 可以访问页面上原本已挂载的所有Js变量，比如页面上已经有了jQuery，你可以直接使用
// 3. 可以依赖注入一个第三方js脚本，然后在你的代码中直接使用，如：依赖jQuery后直接使用
// 4. 好了，你的代码可以这样写：

(() => {
  var clsName = document.getElementById("content_views").className
  var clsNames = clsName.split(' ')
  if (clsNames.length == 2) {
    if(clsNames[1] === 'prism-atom-one-dark' || clsNames[1] === 'prism-tomorrow-night-eighties') {
         document.getElementById('content_views').className = clsNames[0] + ' prism-atom-one-light'
    }
  }
})();

