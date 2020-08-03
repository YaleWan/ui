# 使用

## 引入js
``` js
<script src="//www.shareinstall.com.cn/js/page/jshareinstall.min.js"></script>
``` 

## demo

``` js

<BappHeaderDownload class="downloadButton"/>

created(){
    this.initShareInstall()
}

// 在需要shareInsall的组件上或者元素上添加downloadButton类，类名随便取，一致即可

initShareInstall() {
    var params = ShareInstall.parseUrlParams();
    params.channel = 'comprehensive-share';
    new ShareInstall(
        {
            appKey: '27BKKHKFEBA67R',
            onready: function() {
                var m = this,
                    list = document.getElementsByClassName('downloadButton');
                for (var i = 0; i < list.length; i++) {
                    list[i].onclick = function() {
                        m.wakeupOrInstall();
                    };
                }
            }
        },
        params
    );
},
```