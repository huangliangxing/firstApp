// JavaScript Document
function iwh_calltel(tel){////拨打电话
	platform=window.localStorage.getItem("platform");
	if(platform==1){uexCall.dial(tel);}
	if(platform==0){uexCall.call(tel);}
}

function getnewcate(fid,sid,newtuan,name){////打开团购分类团购列表
			if(newtuan>0){
				fid=sid=0;
			}
			if(fid>0 || sid>0){
				newtuan=0;
			}
			window.localStorage.setItem("fid",fid);
			window.localStorage.setItem("sid",sid);
			window.localStorage.setItem("newtopcatename",name);			
	if(newtuan==1){
				window.localStorage.setItem("orderid",0);
			}else{
				window.localStorage.setItem("orderid",1);//默认离我最近
			}
			window.localStorage.setItem("newtuan",newtuan);
			uexWindow.open('alltuan_head','0','alltuan_header.html','2','','','0');
}

function iwh_club_post(fid,tid,p_type){////打开发帖 回帖窗口
	uexWindow.open('post',0,'post.html?fid='+fid+'&tid='+tid+'&p_type='+p_type,2,'','',0);
}

function iwh_openw(a,b){
	b=encodeURIComponent(b);
	a=escape(a);
	platform=window.localStorage.getItem('platform');
	url='tool_shell.html?url='+a+'&title='+b;
	if(platform==0){
		url="wgtroot://"+url;
	}
	uexWindow.open('toolwindow','0',url,'2','','','0');
}

function iwh_getposition(lat,lng){//获得用户经纬度
			uexLocation.closeLocation();
			window.localStorage.setItem("iwhtuanlat",lat);
			window.localStorage.setItem("iwhtuanlng",lng);
}

function iwh_seearticle(tid){//查看贴子
			uexWindow.open('thread_shell',0,'thread_shell.html?tid='+tid,2,'','',0);
			window.onorientationchange=window.onresize=function(){
				zy_resize("content",0,$$("header").offsetHeight);
			}
}

function iwh_seearticlenews(tid){//查看新闻
			uexWindow.open('news_shell',0,'news_shell.html?tid='+tid,2,'','',0);
			window.onorientationchange=window.onresize=function(){
				zy_resize("content",0,$$("header").offsetHeight);
			}
}
