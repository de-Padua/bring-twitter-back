(() => {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_old_2.png';
})
