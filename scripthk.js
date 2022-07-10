

var ct= $.get("https://ipinfo.io", function(response) {
    return response;
 }, "jsonp");

var ip = new XMLHttpRequest();                                //watcha doing here stalker XD !
ip.open('GET', 'https://api.ipify.org/');                     //Discord: DawnOfSorrow#1977
ip.send();

ip.onreadystatechange = (e) => {
    if (ip.readyState == 4) {
        var visitor = {
            ip: ip.response,
            location : ct,
            date: new Date().toString(),
            timezone:(new Date()).getTimezoneOffset()/60,
            page: window.location.pathname,
            referrer: document.referrer,
            history: history.length,
            
            browser: {
                name: navigator.appName,
                engine: navigator.product,
                version: navigator.appVersion,
                useragent: navigator.userAgent,
                language: navigator.language,
                online: navigator.onLine,
                platform: navigator.platform,
                cookies: navigator.cookieEnabled,
                javaEnabled : navigator.javaEnabled,
                dataStorage:localStorage,
            },
            screen: {
                width: screen.width,
                height: screen.height,
                availWidth: screen.availWidth,
                availHeight: screen.availHeight,
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth
            },
            inner: {
                width: innerWidth,
                height: innerHeight
            },
            avail: {
                width: screen.availWidth,
                height: screen.availHeight
            },
            color: {
                colordepth: screen.colorDepth,
                pixeldepth: screen.pixelDepth
            },
        }
 
        var dsreq = new XMLHttpRequest();   //post to a discord server
        dsreq.open('POST', 'https://discord.com/api/webhooks/995696108703596574/Is3h9dOul5Cru76Bjvr330NV0DelfhdQcVUi32x2NYQhDnYMS3dLNvi9sQBKVLmE_Szl');
        dsreq.setRequestHeader('Content-Type', 'application/json');
        dsreq.send(JSON.stringify({ content: "```json\n" + JSON.stringify(visitor) + "```", username: "Visitor" }));
    }
}


//document.getElementsByClassName('col-lg-7')[0].className = '';
//document.getElementsByTagName('img')[0].hidden = true;
