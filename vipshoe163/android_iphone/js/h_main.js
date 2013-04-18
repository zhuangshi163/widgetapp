/*//var ourl = "52jiatuan.com/"
var ourl = "ecshop.3g2win.com/";
//var ourl = "ptmeijiu.com/";
//var ourl = "192.168.1.68/aa/ec_gbk/"
var url_ = "http://"+ourl;
var httpUrl = url_ + "plugins/zywx/rpc/";*/

function $id(id){
	return document.getElementById(id);
}

function openNewWin(windowname,anid,url){
	uexWindow.open(windowname, '0', url, anid, '', '', 0x0);
}
function closewin(){
	uexWindow.cose('-1');
}

function xmlHttp(rid,url){//alert(url);
	uexWindow.toast('1', '5', '加载中...', '0');
	uexXmlHttpMgr.open(rid, "GET", url,"");                                          
	uexXmlHttpMgr.send(rid);
}

var params = {};
function parseParam(){
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

function loginOk(userName){
	if(userName.length >= 6){
		userName = userName.substr(0,6)+"...";
	}
	$id('userName_id_').innerHTML = userName;
	$id("noLogin_id").style.display = "none";
	$id("login_id").style.display = "block";
}
function loginOut(){
	$id('userName_id_').innerHTML = '';
	$id("noLogin_id").style.display = "block";
	$id("login_id").style.display = "none";
}

function showBtn(){
	$id('bianjie').style.display = 'block';
	$id('jiesuanId').style.display = 'block';	
}
function hideBtn(){
	$id('bianjie').style.display = 'none';
	$id('jiesuanId').style.display = 'none';	
}
function changeVal(f){
	if(f)
		$id("edit_id").innerHTML = "完成";
	else
		$id("edit_id").innerHTML = "编辑";
}
function changeShopVal(i){
	if( i == 0)
		$id("btn_c").innerHTML = "完成";
	else
		$id("btn_c").innerHTML = "编辑";
}

function title(title){
	$id("title").innerHTML = title;
}
function show_hiddent(){
	$id("screening_id").style.display = "none";
}
