---
title: Ubisoft Connect
---

<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        window.location.href = "https://ubistatic3-a.akamaihd.net/orbit/launcher_installer/UbisoftConnectInstaller.exe";
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        window.location.href = "https://ubistatic3-a.akamaihd.net/orbit/launcher_installer/UbisoftConnectInstaller.exe";
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        window.location.href = "https://itunes.apple.com/app/ubisoft-club/id405228226"
    }
    if (/(iPad)/i.test(navigator.userAgent)) {
        window.location.href = "https://itunes.apple.com/app/ubisoft-club/id405228226"
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        disableAndroid();   
    }
</script>