

(()=>{
	"use strict";

	var urlObj={};
	var urlArray=[];
	var urlTxt='';
	var fileName='';
	var cate2_filter=$('#cate2_filter>a');

	var saveFile=function(fileName, data) {
		var blob = new Blob([data], {type: 'text/plain'});
		var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = fileName;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
	};
	var saveFile2=function(fileName, url) {
		var elem = window.document.createElement('a');
        elem.href = url;
        elem.download = fileName;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
	};
	var getFileName=function(url){
		var begin=url.lastIndexOf('/')+1;
		var end=url.length
		return url.substring(begin,end);
	};

	var getCurrent=function(){
		urlArray=[];
		urlTxt='';

		$('#image_container>.grid-item>img').each((index, ele)=>{
			urlArray.push(ele.src);
		})
		urlArray.forEach((item)=>{
			urlTxt+=item+'\r\n';
		})
		fileName=$('#cate1_filter>.active').text()+'_'+$('#cate2_filter>.active').text();
		urlObj[fileName]=urlArray;
	};

	var save=function(urlObj){
		for (var item in urlObj){
			var urlArray=urlObj[item];
			urlArray.forEach((url)=>{
				fileName=item+'_'+getFileName(url);
				saveFile2(fileName,url);
			});
		};

	};


	cate2_filter.each((index,ele)=>{
		setTimeout(()=>{
			$(ele).click();
			setTimeout(()=>{
				getCurrent();
			},1900)
		},2000*index);
	});
	setTimeout(()=>{
		save(urlObj);
	},cate2_filter.length*2000);


})();