function timeStart (elem, nums) {
	return {
    elem: elem, //选择ID为START的input  
    format: 'YYYY-MM-DD', //自动生成的时间格式  
    max: laydate.now(), //最大日期  
    istime: true, //必须填入时间  
    istoday: false,  //是否是当天  
    choose: function(datas){
      window[nums].min = datas; //开始日选好后，重置结束日的最小日期
      window[nums].start = datas //将结束日的初始值设定为开始日  
    }
	}
}
function timeEnd (elem, nums) {
	return {
    elem: elem,  
    format: 'YYYY-MM-DD',
    max: laydate.now(),  
    istime: true,  
    istoday: false,    
    choose: function(datas){
      window[nums].max = datas; //结束日选好后，重置开始日的最大日期  
    }  
	}
}