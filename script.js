const links = {
    youtubeBtn: 'https://www.youtube.com/@PatataXDXD',
    tiktokBtn: 'https://www.tiktok.com/@unapatataxdxd',
    twitchBtn: 'https://www.twitch.tv/unapatata12341234',
    Tbtn: 'https://unapatataxdxd.github.io/ATetolover',
    Nbtn: 'https://www.youtube.com/@nube448',
    Zbtn: 'https://unapatataxdxd.github.io/ZolOSWebsite/',
};

Object.keys(links).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', function() {
            window.open(links[btnId], '_blank');
        });
    }
});
