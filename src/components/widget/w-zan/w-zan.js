var 
    Vue = require('vue');

require('./w-zan.scss');

module.exports = Vue.extend({
    template: require('./w-zan.jade')(),
    data: function(){
        return{
            zanLen: 0,
            zanList: []
        };
    },
    watch: {
        'zanLen':{
            handler: function(v1,v2){
                var
                    obj = {},
                    data = this.$data,
                    arr = [];
                for(i = v2; i <= v1; i++){
                    var timeStamp = Date.parse(new Date());
                    obj = {};
                    obj.txt = 'txt' +timeStamp;
                    arr.push(obj);
                    // data.zanList.push(obj);
                    
                }
                data.zanList = arr;
                console.log(data.zanList);
            }
        }
    },
    ready: function(){
        var 
            data = this.$data,
            arr = [2,7,4,8],
            i = 0;
        setInterval(function(){
            i++;
            data.zanLen = arr[i];
        },4000);
    }
});