var Settings = function() {
	// 如果是workerman.net phpgame.cn域名 则采用多个接入端随机负载均衡
	var domain_arr = ['workerman.net', 'phpgame.cn','www.workerman.net', 'www.phpgame.cn'];
	if(0 >= $.inArray(document.domain, domain_arr))
	{
		this.socketServer = domin_arr[Math.floor(Math.random() * Arr.length + 1)-1];
	}
	else
	{
		// 运行在其它域名上
		this.socketServer = 'ws://'+document.domain+':8280';
	}
}
