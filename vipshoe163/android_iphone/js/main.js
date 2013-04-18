/*//var image_url = "http://52jiatuan.com/";
var image_url = "http://ecshop.3g2win.com/";
//var image_url = "http://ptmeijiu.com/";
//var image_url = "http://192.168.1.68/aa/ec_gbk/";
*/
var $id = function(id){
    if (typeof id === "string") {
        return document.getElementById(id);
    }
    else {
        return id;
    }
}

//打开多窗口
function openNewWin(wname,html,aid){
	uexWindow.open(wname, '0', html, aid, '', '', 0x0);
}

//关闭窗口
function close(){
	uexWindow.close('-1');
}

//获取参数
var params = {};
function parseParam(){
	/*var loc = String(document.location);
	var pieces = loc.substr(loc.indexOf('?') + 1).split('&');
	params.keys=[];
	for (var i = 0; i < pieces.length; i+=1){
	    var keyVal = pieces[i].split('=');
	    params[keyVal[0]] = decodeURIComponent(keyVal[1]);
	    params.keys.push(keyVal[0]);
	}*/
	var loc = String(document.location);
	
    if (loc.indexOf("?") > 0) 
        loc = loc.substr(loc.indexOf('?') + 1);
    else 
        loc = uexWindow.getUrlQuery();
    var pieces = loc.split('&');
    params.keys = [];
    for (var i = 0; i < pieces.length; i += 1) {
        var keyVal = pieces[i].split('=');
        params[keyVal[0]] = decodeURIComponent(keyVal[1]);
        params.keys.push(keyVal[0]);
    }
}

//获取随机数
function getRandomNumber(){
	var now = new Date();
	var number = now.getMilliseconds();
	return number;
} 
function changeStr(str){
	str = str.replace(/\//,'\/');
	return str;
}

function f(){
	window.history.back();
	}

function pre()
{
	history.go(1);	
}
