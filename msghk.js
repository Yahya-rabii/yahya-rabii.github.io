function send() {
    

        var msg = {
            content:{
           name:document.getElementById("name").value ,
           email:document.getElementById("email").value ,
           subject:document.getElementById("subject").value ,
           phone:document.getElementById("phone").value ,
           message:document.getElementById("message").value 
        }}
 
        var dsreq = new XMLHttpRequest();
        
        dsreq.open('POST', 'https://discord.com/api/webhooks/995484149609668668/M98kpyqLUo0a5Xx7Cw4HOKulttFt3oYXsOh0zZRySDr-xPnnImIRcOHKZvsHrcj_WMpb');
        
        dsreq.setRequestHeader('Content-Type', 'application/json');
        
        dsreq.send(JSON.stringify({ content: "```json\n" + JSON.stringify(msg) + "```", username: "new portfolio message" })),
        



    }