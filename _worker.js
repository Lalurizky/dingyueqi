
// 部署完成后在网址后面加上这个，获取订阅器默认节点，/auto

let mytoken= ['auto'];//快速订阅访问入口, 留空则不启动快速订阅

// 设置优选地址，不带端口号默认443，TLS订阅生成
let addresses = [
'cfip.xxxxxxxx.tk:2096',
'cdn.kaiche.tk:2096',
'c.xf.free.hr:2087',
'cf.090227.xyz:443',
'sp.rweek.top:443',
'hk.rweek.top:2052',
'icook.tw:2053#优选域名',
'cloudflare.cfgo.cc#优选官方线路',
'icook.hk:8443#香港',
'cfip.xxxxxxxx.tk#官方优选-otc提供',
'hk.100366.xyz#香港',
'bestcf.onecf.eu.org#官方优选域名-Mingyu大佬提供维护',
'bestproxy.onecf.eu.org#反代优选域名-Mingyu大佬提供维护',
'cfip.xxxxxxxx.tk#官方优选域名-OTC大佬提供维护',
'proxy.xxxxxxxx.tk#反代优选域名-OTC大佬提供维护',
'acjp2.cloudflarest.link:2053#反代优选域名-KJKKK大佬提供维护',
'acsg.cloudflarest.link:2053#反代优选域名-KJKKK大佬提供维护',
'acsg3.cloudflarest.link:2053#反代优选域名-KJKKK大佬提供维护',
'xn--b6gac.eu.org#↗↘↗.eu.org官方优选域名',
'cdn-all.xn--b6gac.eu.org#cdn-all.↗↘↗.eu.org官方优选域名',
'cdn-b100.xn--b6gac.eu.org#cdn-b100.↗↘↗.eu.org反代优选域名',
'time.cloudflare.com',
'shopify.com',
'time.is',
'icook.hk',
'icook.tw',
'ip.sb',
'japan.com',
'malaysia.com',
'russia.com',
'singapore.com',
'skk.moe',
'www.visa.com',
'www.visa.com.sg',
'www.visa.com.hk',
'www.visa.com.tw',
'www.visa.co.jp',
'www.visakorea.com',
'www.gco.gov.qa',
'www.gov.se',
'www.gov.ua',
'www.digitalocean.com',
'www.csgo.com',
'www.shopify.com',
'www.whoer.net',
'www.whatismyip.com',
'www.ipget.net',
'www.hugedomains.com',
'www.udacity.com',
'www.4chan.org',
'www.okcupid.com',
'www.glassdoor.com',
'www.udemy.com',
'alejandracaiccedo.com',
'nc.gocada.co',
'log.bpminecraft.com',
'www.boba88slot.com',
'gur.gov.ua',
'www.zsu.gov.ua',
'www.iakeys.com',
'www.d-555.com',
'fbi.gov',


];

// 设置优选地址api接口
let addressesapi = [
	'https://cf-workers-text2kv-ein.pages.dev/ip.txt?token=text2kv, //可参考内容格式 自行搭建。
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesipv6api.txt, //IPv6优选内容格式 自行搭建。
];

// 设置优选地址，不带端口号默认80，noTLS订阅生成
let addressesnotls = [
	'www.visa.com.sg#官方优选域名',
	'www.wto.org:8080#官方优选域名',
	'www.who.int:8880#官方优选域名',
];

// 设置优选noTLS地址api接口
let addressesnotlsapi = [
	'https://cf-workers-text2kv-ein.pages.dev/cesu.csv?token=text2kv', //可参考内容格式 自行搭建。
];

let DLS = 6;//速度下限
let addressescsv = [
	//'https://cf-workers-text2kv-ein.pages.dev/cesu1.csv?token=text2kv&b64=SVDlnLDlnYAs56uv5Y+jLFRMUyzmlbDmja7kuK3lv4Ms5Zyw5Yy6LOWfjuW4giznvZHnu5zlu7bov58s5LiL6L296YCf5bqmDQo0Ny43Ni43Ny4xMDMsMjA1MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw2MyBtcywxMTE0MCBrQi9zDQo0Ny4yNDIuMTcxLjk0LDIwNTIsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNjYgbXMsMTA3NTAga0Ivcw0KNDcuNzYuMTc4LjE0NiwyMDg2LGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDU5IG1zLDk2ODgga0Ivcw0KNDcuMjQzLjI3LjIxNywyMDUyLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDYzIG1zLDg3OTQga0Ivcw0KNDcuNzYuNzcuMTAzLDIwOTUsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNjMgbXMsNzY0NyBrQi9zDQo0Ny43Ni43Ny4xMDMsMjA4MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw2NCBtcyw3NDQ0IGtCL3MNCjguMjE5LjE1Ni4xNDgsMjA1MixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMTcgbXMsNTU4OSBrQi9zDQo4LjIxOS4wLjE2MiwyMDg2LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzNCBtcyw1NDc5IGtCL3MNCjguMjIyLjI1NC45MSwyMDg2LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzNCBtcyw1MzM3IGtCL3MNCjQ3LjIzNi4xNzIuNzEsMjA4NixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjIgbXMsNTE5MCBrQi9zDQo4LjIxOS4xMDAuMTU1LDIwODIsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjE3IG1zLDUxNzMga0Ivcw0KOC4yMjIuMjQ5Ljk4LDIwODYsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjEzIG1zLDUxNjAga0Ivcw0KOC4yMjIuMTI4LjEzMSwyMDg2LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzNiBtcyw1MDcwIGtCL3MNCjguMjE5LjEwMC4xNjgsMjA4MixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMzMgbXMsNDk4OSBrQi9zDQo4LjIxOS42Ny4xMzMsMjA4NixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjEgbXMsNDk1MCBrQi9zDQo4LjIxOC4xMTAuMTgwLDIwNTIsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNjQgbXMsNDkzNyBrQi9zDQo4LjIxOS4xNDAuMjI5LDIwODYsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjI4IG1zLDQ5MDcga0Ivcw0KOC4yMTkuNjAuNjgsODg4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMzcgbXMsNDg5MCBrQi9zDQo4LjIyMi4yMDguODMsODA4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjggbXMsNDc2OCBrQi9zDQo0Ny4yMzYuMTQ0LjE1Niw4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMzQgbXMsNDcyOCBrQi9zDQo4LjIxOS4xMDYuMTU2LDgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzNCBtcyw0NjkzIGtCL3MNCjguMjIyLjIyMS4xMDksMjA4MixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjQgbXMsNDQ0MSBrQi9zDQo0Ny4yMzYuMTQ5LjEwNyw4ODgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIxOSBtcyw0NDE4IGtCL3MNCjQ3LjI0NS4xMDUuMjI0LDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjMxIG1zLDQzNzEga0Ivcw0KOC4yMTkuNTEuMjExLDIwOTUsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjM0IG1zLDQzNjEga0Ivcw0KOC4yMTkuNTEuMjExLDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjEyIG1zLDQzNDUga0Ivcw0KOC4yMTkuMTU3Ljk3LDIwNTIsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjIxIG1zLDQzNDMga0Ivcw0KNDcuMjM2LjgzLjIzOSwyMDg2LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzOCBtcyw0MzEyIGtCL3MNCjguMjE4LjExMC4xODAsMjA4NixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw2MiBtcyw0Mjk5IGtCL3MNCjQ3LjI0My4yNy4yMTcsMjA4NixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw2MSBtcyw0MjkyIGtCL3MNCjQ3LjIzNi4xODAuNTEsMjA1MixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMzUgbXMsNDI0OCBrQi9zDQo4LjIxOS4wLjE2MiwyMDUyLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIyMSBtcyw0MjM5IGtCL3MNCjguMjE3LjE2NC4xMCwyMDUyLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDYxIG1zLDQyMjEga0Ivcw0KOC4yMTkuMTAzLjU3LDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjM5IG1zLDQyMDUga0Ivcw0KOC4yMTkuMTEwLjg4LDg4ODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjQyIG1zLDQxOTYga0Ivcw0KNDcuMjM2LjE0NC4xNTYsMjA4NixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMzEgbXMsNDE2OSBrQi9zDQo0Ny4yMzYuMTY5LjE2NCwyMDUyLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI0NyBtcyw0MTIzIGtCL3MNCjguMjE5LjEyMi45Niw4MDgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzMCBtcyw0MTE2IGtCL3MNCjguMjE5LjY3LjEzMywyMDgyLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI0NCBtcyw0MTAzIGtCL3MNCjguMjE5Ljg2LjIwMCw4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyNDEgbXMsNDA5MSBrQi9zDQo4LjIyMi4yMjMuMzQsMjA5NSxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjkgbXMsNDA3NCBrQi9zDQo4LjIxOS4xMDAuMTU1LDIwOTUsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjM4IG1zLDQwNjIga0Ivcw0KNDcuMjM2LjE2NS4yNSw4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMzIgbXMsNDAwMCBrQi9zDQo4LjIxOS4wLjE2Miw4MDgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIyOCBtcywzOTc2IGtCL3MNCjguMjIyLjE1Mi4xNjUsODg4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjQgbXMsMzk3NSBrQi9zDQo4LjIxOS43OC4xLDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjI4IG1zLDM5NjYga0Ivcw0KOC4yMTkuMTAxLjEzOCw4MDgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI0MyBtcywzOTY0IGtCL3MNCjguMjE5Ljc0LjM1LDIwODYsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjIxIG1zLDM5MzYga0Ivcw0KOC4yMjIuMjIzLjM0LDgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIxNyBtcywzOTI3IGtCL3MNCjQ3LjIzNi4xMjMuMTMzLDIwODYsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjI4IG1zLDM5MTAga0Ivcw0KOC4yMTkuNTEuMjExLDIwODYsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjA5IG1zLDM5MDMga0Ivcw0KNDcuMjM2LjE2Ny4yMzEsODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjI3IG1zLDM4ODgga0Ivcw0KOC4yMTkuMTU2LjE0OCwyMDk1LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIyOSBtcywzODY3IGtCL3MNCjguMjE5LjQwLjI1NSw4ODgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzNSBtcywzODYxIGtCL3MNCjQ3LjIzNi4xNTAuMTMsMjA1MixmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMTYgbXMsMzgyNSBrQi9zDQo4LjIxOS44NC4xMDIsODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjE1IG1zLDM4MDQga0Ivcw0KOC4yMTkuMS45MiwyMDg2LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIzMCBtcywzNzQ0IGtCL3MNCjQ3LjIzNi4xMC4xODIsODg4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMjkgbXMsMzc0MiBrQi9zDQo4LjIxOS4xMjQuMjI3LDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjM3IG1zLDM3Mjcga0Ivcw0KOC4yMjIuMjU0LjkxLDIwODIsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjMyIG1zLDM3MjQga0Ivcw0KOC4yMjIuMjUyLjE1MCwyMDg2LGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIyMCBtcywzNzI0IGtCL3MNCjQ3Ljc2LjQ5LjI0Niw4MDgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDY1IG1zLDM3MTYga0Ivcw0KNDcuMjM3LjguODIsODg4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyMTggbXMsMzcxMiBrQi9zDQo0Ny4yMzYuNzUuMTEzLDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjE4IG1zLDM3MDYga0Ivcw==', //iptest测速结果文件。
	
];

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"; //订阅转换配置文件
let noTLS = false; //改为 true , 将不做域名判断 始终返回noTLS节点
let link = '';
let edgetunnel = 'ed';
let RproxyIP = 'false';
let proxyIPs = [
	'proxyip.aliyun.fxxk.dedyn.io',
	'proxyip.multacom.fxxk.dedyn.io',
	'proxyip.vultr.fxxk.dedyn.io',
];
let CMproxyIPs = [
	//{ proxyIP: "proxyip.fxxk.dedyn.io", type: "HK" },
];
let BotToken ='';
let ChatID =''; 
let proxyhosts = [//本地代理域名池
	//'ppfv2tl9veojd-maillazy.pages.dev',
];
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
let EndPS = '';//节点名备注内容

let FileName = 'WorkerVless2sub';
let SUBUpdateTime = 6; 
let total = 99;//PB
//let timestamp = now;
let timestamp = 4102329600000;//2099-12-31
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

let MamaJustKilledAMan = ['telegram','twitter','miaoko'];
async function getAddressesapi(api) {
	if (!api || api.length === 0) {
		return [];
	}

	let newapi = "";

	// 创建一个AbortController对象，用于控制fetch请求的取消
	const controller = new AbortController();

	const timeout = setTimeout(() => {
		controller.abort(); // 取消所有请求
	}, 2000); // 2秒后触发

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		// 对api数组进行遍历，对每个API地址发起fetch请求
		const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
			method: 'get', 
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'User-Agent': 'cmliu/WorkerVless2sub'
			},
			signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
		}).then(response => response.ok ? response.text() : Promise.reject())));

		// 遍历所有响应
		for (const response of responses) {
			// 检查响应状态是否为'fulfilled'，即请求成功完成
			if (response.status === 'fulfilled') {
				// 获取响应的内容
				const content = await response.value;
				newapi += content + '\n';
			}
		}
	} catch (error) {
		console.error(error);
	} finally {
		// 无论成功或失败，最后都清除设置的超时定时器
		clearTimeout(timeout);
	}

	const newAddressesapi = await ADD(newapi);

	// 返回处理后的结果
	return newAddressesapi;
}

async function getAddressescsv(tls) {
	if (!addressescsv || addressescsv.length === 0) {
		return [];
	}
	
	let newAddressescsv = [];
	
	for (const csvUrl of addressescsv) {
		try {
			const response = await fetch(csvUrl);
		
			if (!response.ok) {
				console.error('获取CSV地址时出错:', response.status, response.statusText);
				continue;
			}
		
			const text = await response.text();// 使用正确的字符编码解析文本内容
			let lines;
			if (text.includes('\r\n')){
				lines = text.split('\r\n');
			} else {
				lines = text.split('\n');
			}
		
			// 检查CSV头部是否包含必需字段
			const header = lines[0].split(',');
			const tlsIndex = header.indexOf('TLS');
			const speedIndex = header.length - 1; // 最后一个字段
		
			const ipAddressIndex = 0;// IP地址在 CSV 头部的位置
			const portIndex = 1;// 端口在 CSV 头部的位置
			const dataCenterIndex = tlsIndex + 1; // 数据中心是 TLS 的后一个字段
		
			if (tlsIndex === -1) {
				console.error('CSV文件缺少必需的字段');
				continue;
			}
		
			// 从第二行开始遍历CSV行
			for (let i = 1; i < lines.length; i++) {
				const columns = lines[i].split(',');
		
				// 检查TLS是否为"TRUE"且速度大于DLS
				if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
					const ipAddress = columns[ipAddressIndex];
					const port = columns[portIndex];
					const dataCenter = columns[dataCenterIndex];
			
					const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
					newAddressescsv.push(formattedAddress);
				}
			}
		} catch (error) {
			console.error('获取CSV地址时出错:', error);
			continue;
		}
	}
	
	return newAddressescsv;
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

let protocol;
export default {
	async fetch (request, env) {
		if (env.TOKEN) mytoken = await ADD(env.TOKEN);
		//mytoken = env.TOKEN.split(',') || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		EndPS = env.PS || EndPS;
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const format = url.searchParams.get('format') ? url.searchParams.get('format').toLowerCase() : "null";
		let host = "";
		let uuid = "";
		let path = "";
		let sni = "";
		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		if (env.UA) MamaJustKilledAMan = MamaJustKilledAMan.concat(await ADD(env.UA));
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;

		link = env.LINK || link;
		const links = await ADD(link);
		link = links.join('\n');
		
		if (env.ADD) addresses = await ADD(env.ADD);
		if (env.ADDAPI) addressesapi = await ADD(env.ADDAPI);
		if (env.ADDNOTLS) addressesnotls = await ADD(env.ADDNOTLS);
		if (env.ADDNOTLSAPI) addressesnotlsapi = await ADD(env.ADDNOTLSAPI);
		if (env.ADDCSV) addressescsv = await ADD(env.ADDCSV);
		DLS = env.DLS || DLS;

		/*
		console.log(`
			addresses: ${addresses}
			addressesapi: ${addressesapi}
			addressesnotls: ${addressesnotls}
			addressesnotlsapi: ${addressesnotlsapi}
			addressescsv: ${addressescsv}
			DLS: ${DLS}
		`);
		*/
		
		if (env.PROXYIP) proxyIPs = await ADD(env.PROXYIP);
		//console.log(proxyIPs);

		if (mytoken.length > 0 && mytoken.some(token => url.pathname.includes(token))) {
			host = "null";
			if (env.HOST) {
				const hosts = await ADD(env.HOST);
				host = hosts[Math.floor(Math.random() * hosts.length)];
			}
			uuid = env.UUID || "null";
			path = env.PATH || "/?ed=2560";
			sni = env.SNI || host;
			edgetunnel = env.ED || edgetunnel;
			RproxyIP = env.RPROXYIP || RproxyIP;

			if (host == "null" || uuid == "null" ){
				let 空字段;
				if (host == "null" && uuid == "null") 空字段 = "HOST/UUID";
				else if (host == "null") 空字段 = "HOST";
				else if (uuid == "null") 空字段 = "UUID";
				EndPS += ` 订阅器内置节点 ${空字段} 未设置！！！`;
			}

			const hasSos = url.searchParams.has('sos');
			if (hasSos) {
				const hy2Url = "https://hy2sub.pages.dev";
				try {
					const subconverterResponse = await fetch(hy2Url);
	
					if (!subconverterResponse.ok) {
						throw new Error(`Error fetching lzUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
					}
	
					const base64Text = await subconverterResponse.text();
					link += '\n' + atob(base64Text); // 进行 Base64 解码
	
				} catch (error) {
					// 错误处理
				}	
			}
		await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		} else {
			host = url.searchParams.get('host');
			uuid = url.searchParams.get('uuid');
			path = url.searchParams.get('path');
			sni = url.searchParams.get('sni') || host;
			edgetunnel = url.searchParams.get('edgetunnel') || edgetunnel;
			RproxyIP = url.searchParams.get('proxyip') || RproxyIP;
			
			if (!url.pathname.includes("/sub")) {
				const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
				if (envKey) {
					const URLs = await ADD(env[envKey]);
					const URL = URLs[Math.floor(Math.random() * URLs.length)];
					return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
				}
				//首页改成一个nginx伪装页
				return new Response(await nginx(), {
					headers: {
						'Content-Type': 'text/html; charset=UTF-8',
					},
				});
			}
			
			if (!host || !uuid) {
				const responseText = `
			缺少必填参数：host 和 uuid
			Missing required parameters: host and uuid
			پارامترهای ضروری وارد نشده: هاست و یوآی‌دی
			
			${url.origin}/sub?host=[your host]&uuid=[your uuid]&path=[your path]
			
			
			
			
			
			
				
				https://github.com/cmliu/WorkerVless2sub
				`;
			
				return new Response(responseText, {
				status: 400,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
			
			if (!path || path.trim() === '') {
				path = '/?ed=2560';
			} else {
				// 如果第一个字符不是斜杠，则在前面添加一个斜杠
				path = (path[0] === '/') ? path : '/' + path;
			}
		}
		
		noTLS = host.toLowerCase().includes('notls') || host.toLowerCase().includes('worker') || host.toLowerCase().includes('trycloudflare') || noTLS;
		if(env.NOTLS == 'true')noTLS = true;
		
		if (!userAgent.includes('subconverter') && MamaJustKilledAMan.some(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead => userAgent.includes(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead)) && MamaJustKilledAMan.length > 0) {
			//首页改成一个nginx伪装页
			return new Response(await nginx(), {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( (userAgent.includes('clash') || (format === 'clash' && !userAgent.includes('subconverter')) ) && !userAgent.includes('nekobox') && !userAgent.includes('cf-workers-sub')) {
			const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					},
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else if ( (userAgent.includes('sing-box') || userAgent.includes('singbox') || (format === 'singbox' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')){
			const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

			try {
			const subconverterResponse = await fetch(subconverterUrl);
			
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					},
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else {
			if(host.includes('workers.dev') || host.includes('pages.dev')) {
				if (proxyhostsURL) {
					try {
						const response = await fetch(proxyhostsURL); 
					
						if (!response.ok) {
							console.error('获取地址时出错:', response.status, response.statusText);
							return; // 如果有错误，直接返回
						}
					
						const text = await response.text();
						const lines = text.split('\n');
						// 过滤掉空行或只包含空白字符的行
						const nonEmptyLines = lines.filter(line => line.trim() !== '');
					
						proxyhosts = proxyhosts.concat(nonEmptyLines);
					} catch (error) {
						console.error('获取地址时出错:', error);
					}
				}
				// 使用Set对象去重
				proxyhosts = [...new Set(proxyhosts)];
			}
			
			const newAddressesapi = await getAddressesapi(addressesapi);
			const newAddressescsv = await getAddressescsv('TRUE');
			addresses = addresses.concat(newAddressesapi);
			addresses = addresses.concat(newAddressescsv);
			
			// 使用Set对象去重
			const uniqueAddresses = [...new Set(addresses)];
			
			let notlsresponseBody;
			if(noTLS == true){
				const newAddressesnotlsapi = await getAddressesapi(addressesnotlsapi);
				const newAddressesnotlscsv = await getAddressescsv('FALSE');
				addressesnotls = addressesnotls.concat(newAddressesnotlsapi);
				addressesnotls = addressesnotls.concat(newAddressesnotlscsv);
				const uniqueAddressesnotls = [...new Set(addressesnotls)];

				notlsresponseBody = uniqueAddressesnotls.map(address => {
					let port = "80";
					let addressid = address;
				
					const match = addressid.match(regex);
					if (!match) {
						if (address.includes(':') && address.includes('#')) {
							const parts = address.split(':');
							address = parts[0];
							const subParts = parts[1].split('#');
							port = subParts[0];
							addressid = subParts[1];
						} else if (address.includes(':')) {
							const parts = address.split(':');
							address = parts[0];
							port = parts[1];
						} else if (address.includes('#')) {
							const parts = address.split('#');
							address = parts[0];
							addressid = parts[1];
						}
					
						if (addressid.includes(':')) {
							addressid = addressid.split(':')[0];
						}
					} else {
						address = match[1];
						port = match[2] || port;
						addressid = match[3] || address;
					}
	
					//console.log(address, port, addressid);

					if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
					// 将addressid转换为小写
					let lowerAddressid = addressid.toLowerCase();
					// 初始化找到的proxyIP为null
					let foundProxyIP = null;
						
					// 遍历CMproxyIPs数组查找匹配项
					for (let item of CMproxyIPs) {
						if (lowerAddressid.includes(item.type.toLowerCase())) {
							foundProxyIP = item.proxyIP;
							break; // 找到匹配项，跳出循环
						}
					}
						
					if (foundProxyIP) {
						// 如果找到匹配的proxyIP，赋值给path
						path = `/proxyIP=${foundProxyIP}`;
					} else {
						// 如果没有找到匹配项，随机选择一个proxyIP
						const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
						path = `/proxyIP=${randomProxyIP}`;
					}
				}

					const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=&type=ws&host=${host}&path=${encodeURIComponent(path)}#${encodeURIComponent(addressid + EndPS)}`;
			
					return vlessLink;
				}).join('\n');
			}

			const responseBody = uniqueAddresses.map(address => {
				let port = "443";
				let addressid = address;
			
				const match = addressid.match(regex);
				if (!match) {
					if (address.includes(':') && address.includes('#')) {
						const parts = address.split(':');
						address = parts[0];
						const subParts = parts[1].split('#');
						port = subParts[0];
						addressid = subParts[1];
					} else if (address.includes(':')) {
						const parts = address.split(':');
						address = parts[0];
						port = parts[1];
					} else if (address.includes('#')) {
						const parts = address.split('#');
						address = parts[0];
						addressid = parts[1];
					}
				
					if (addressid.includes(':')) {
						addressid = addressid.split(':')[0];
					}
				} else {
					address = match[1];
					port = match[2] || port;
					addressid = match[3] || address;
				}

				//console.log(address, port, addressid);
		
				if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
					// 将addressid转换为小写
					let lowerAddressid = addressid.toLowerCase();
					// 初始化找到的proxyIP为null
					let foundProxyIP = null;
				
					// 遍历CMproxyIPs数组查找匹配项
					for (let item of CMproxyIPs) {
						if (lowerAddressid.includes(item.type.toLowerCase())) {
							foundProxyIP = item.proxyIP;
							break; // 找到匹配项，跳出循环
						}
					}
				
					if (foundProxyIP) {
						// 如果找到匹配的proxyIP，赋值给path
						path = `/proxyIP=${foundProxyIP}`;
					} else {
						// 如果没有找到匹配项，随机选择一个proxyIP
						const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
						path = `/proxyIP=${randomProxyIP}`;
					}
				}
				
				let 伪装域名 = host ;
				let 最终路径 = path ;
				let 节点备注 = EndPS ;
				if(proxyhosts && (host.includes('.workers.dev') || host.includes('pages.dev'))) {
					最终路径 = `/${host}${path}`;
					伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
					节点备注 = `${EndPS} 已启用临时域名中转服务，请尽快绑定自定义域！`;
					sni = 伪装域名;
				}
				const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=tls&sni=${sni}&fp=random&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;
			
				return vlessLink;
			}).join('\n');
			
			let combinedContent = responseBody; // 合并内容
			
			if (link) {
				combinedContent += '\n' + link;
				console.log("link: " + link)
			}
			
			if (notlsresponseBody) {
				combinedContent += '\n' + notlsresponseBody;
				console.log("notlsresponseBody: " + notlsresponseBody);
			}
			
			const base64Response = btoa(combinedContent); // 重新进行 Base64 编码

			const response = new Response(base64Response, {
				headers: { 
					//"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
					"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
				},
			});

			return response;
		}
	}
};
