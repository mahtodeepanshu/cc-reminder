chrome.alarms.onAlarm.addListener(function(alarm) {
        console.log(alarm.name); 
        chrome.tabs.create({
                active: true,
                url:  alarm.name
              }, null);
 });

chrome.notifications.onClicked.addListener(()=>{
        console.log("Happen");
 });

chrome.commands.onCommand.addListener((command) => {
        console.log(`Command "${command}" called`);
 });

 chrome.runtime.onInstalled.addListener(details => {
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
          var genUserID = `CODER${(new Date().getTime())}`;
        //   chrome.cookies.set({
        //         url: 'https://www.google.com',
        //         name: 'newCoder',
        //         value: genUserID,
        //         path: '/',
        //         sameSite: 'strict'
        //       }, function(cookie) {
        //          console.log('Set uid');
        //    });
           chrome.storage.local.set({ 'CODERID': genUserID }).then(() => {
                console.log("Your CODER-ID is: " + genUserID);
           });
        }
});