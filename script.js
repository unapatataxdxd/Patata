const discordBtn = document.getElementById('discordBtn');
const discordModal = document.getElementById('discordModal');
const closeBtn = document.querySelector('.close');

const links = {
    youtubeBtn: 'https://www.youtube.com/@PatataXDXD',
    tiktokBtn: 'https://www.tiktok.com/@unapatataxdxd',
    xBtn: 'https://x.com/A_Teto_lover',
    redditBtn: 'https://www.reddit.com/user/Great-Horse8078/',
    twitchBtn: 'https://www.twitch.tv/naekixd',
    githubBtn: 'https://github.com/unapatataxdxd'
};

const modalLinks = {
    modalBtn1: 'https://discord.gg/JhgJuYRcuP',
    modalBtn2: 'https://discord.gg/RaPxfAwAec'
};

Object.keys(links).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', function() {
            window.open(links[btnId], '_blank');
        });
    }
});

Object.keys(modalLinks).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', function() {
            window.open(modalLinks[btnId], '_blank');
        });
    }
});

function cerrarModal() {
    discordModal.classList.add('saliendo');
    setTimeout(() => {
        discordModal.classList.remove('active');
        discordModal.classList.remove('saliendo');
    }, 300);
}

discordBtn.addEventListener('click', function() {
    discordModal.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    cerrarModal();
});

window.addEventListener('click', function(event) {
    if (event.target === discordModal) {
        cerrarModal();
    }
});
