document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.ui-switch input');
    const currentTheme = localStorage.getItem('theme');
    const githubIcon = document.getElementById('github-icon');

    function updateGitHubIcon() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            githubIcon.src = 'images/icons/github2.png';
        } else {
            githubIcon.src = 'images/icons/github1.png';
        }
    }

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        updateGitHubIcon();
    });
});