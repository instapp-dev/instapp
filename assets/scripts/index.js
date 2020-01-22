

if (/zh|cn|tw|hk|TW|HK/i.test(userLang)) {
    trans("howto", "如何使用");
}
if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    ct("ADL - 下载应用 于瞬息之间");
    st("title", "下载应用 于瞬息之间 ⚡")
    st("howto", "浏览文档")
    st2("supported", "已支持 ", " 个应用")
    trans("docs", "使用文档");
    trans("supported", "已支持的应用");
    footer_innerhtml("<span class='smaller-fonts'>你的浏览器语言为 <code>" + userLang + "</code></span><br>版本: " + "<span class='grey'>" + version + " " + version_type + "</span> | 开源于 " + github_href)
    st("dont", "不要忘记 ⭐ 我们的项目")
}
else if (/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)) {
    ct("ADL - 下載應用 就於轉眼間");
    st("title", "下載應用 就於轉眼間 ⚡")
    st("howto", "閱覽文檔")
    st2("supported", "已支援 ", " 款應用")
    trans("docs", "幫助文檔");
    trans("supported", "已支援的應用");
    footer_innerhtml("<span class='smaller-fonts'>你的瀏覽器語言為 <code>" + userLang + "</code></span><br>版本: " + "<span class='grey'>" + version + " " + version_type + "</span> | 開源於 " + github_href)
    st("dont", "不要忘記 ⭐ 我們的項目")
}
else {
    // detect browser langauge, anything other than chinese will display english
    st("title", "Download apps in seconds ⚡")
    st("howto", "Browse docs")
    st2("supported", "", " apps are supported")
    footer_innerhtml("<span class='smaller-fonts'>Your browser language is <code>" + userLang + "</code></span><br>Version: " + "<span class='grey'>" + version + " " + version_type + "</span> | Open Source Project on " + github_href)
    st("dont", "Don't forget to ⭐ our project!")
}