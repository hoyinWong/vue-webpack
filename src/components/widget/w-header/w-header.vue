<template lang="jade">
div.w-head
    div.w-head-main
        div.w-head-state
            a.yy-logo(href="#{current == 'true' ? 'http://www.yy.com/':'javascript:void(0)'}")
        div.w-head-download
            a(href="javascript:;") 直接打开
div.w-nav
    ul.w-nav-list
        li 热门
        li 好声音
        li 脱口秀
        li 燃舞蹈
        li 潮音乐
        li 潮人
        li 体育
        li 明星
        li 酷玩
        li 网游
        li 手游
        li 其他
</template>
<style lang="sass">
@import '../../../scss/_mixin';
$psdWidth: 640;
$downLoadBgColor:#ffdd00;
$downLoadFontColor:#333333;
$timestamp:201606162130;

.w-head {
    height: rem(98);
    width: 100%;
}
.w-nav{
    display: -webkit-box;
    box-sizing:border-box;
    padding: 0 rem(10);
    width: 100%;
    height: rem(40);
    line-height: rem(40);
    font-size: rem(26);
    color: #000;
    background-color:#F2F3F5;
    border-top:rem(1) #000 solid;
    border-bottom: rem(1) #000 solid;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    .w-nav-list{
        width:rem(1000);
        li{
            float: left;
            margin-right: rem(8);
        }
    }
}
.w-head-main {
    position: fixed;
    top:0;
    left:0;
    right:0;
    display: -webkit-box;
    box-sizing:border-box;
    width: 100%;
    padding: rem(20) rem(16);
    z-index: 999;
    background-color:#fff;
    .w-head-state{
        box-sizing:border-box;
        -webkit-box-flex:1;
        height: rem(58);
        .yy-logo{
            display:inline-block;
            width:rem(245);
            height:rem(58);
            margin-right:rem(8);
            background:url('./images/logo.png') no-repeat;
            background-size:cover;
        }
    }
    .w-head-download{
        background-color:$downLoadBgColor;
        border-radius:rem(4) rem(4);
        width:rem(128);
        height:rem(56);
        a{
            display:block;
            font-size:rem(26);
            line-height:rem(56);
            color:$downLoadFontColor;
            text-align:center;
        }
    }
    a {
        text-decoration: none;
    }
}

</style>

<script>
module.exports = {
    data: function(){
        return {
            name: 'i am header'
        }
    }
};
</script>
