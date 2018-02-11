1、修改配置项
 test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,   // 新增对css modules的支持
                  localIdentName: '[name]__[local]__[hash:base64:5]', 
                },
              },
              ...
              ]

注意： css顺序性
btn 字体颜色为红色 
button{
    color: #000
}
:global(button){
    color: red
}
btn 字体颜色为黑色 
:global(button){
    color: red
}
button{
    color: #000
}

3 、 变量   不需要导入 post-values 以及 postcss:[values]  ;const values = require('postcss-modules-values');
直接使用   cssmodule2.css
@value blue: #0c77f8;
@value red: #ff0000;
@value green: #aaf200;
@value pink: pink;

@value colors: "./cssmodule2.css";
@value blue, red, green ,pink from colors;

.button2{
    color: red;
    background-color: pink
}





less
再加一个匹配
          {
            test:/\.less$/,
            use:[ 'style-loader','css-loader','less-loader'],
            
          },

import './lessmodules.less'；
<button className='button3'> btn style 3</button>  