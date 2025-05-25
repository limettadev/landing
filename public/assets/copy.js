document.addEventListener('DOMContentLoaded', function () {
    const serverButtons = document.querySelectorAll('.server-button');
    serverButtons.forEach(function (serverButton) {
        const ipSpan = serverButton.querySelector('span.ip');
        const copyIcon = serverButton.querySelector('img.copy-icon');

        serverButton.addEventListener('click', function () {
            if (!ipSpan) return;
            const ipText = ipSpan.textContent.trim();

            // Copy to clipboard
            navigator.clipboard.writeText(ipText).then(() => {
                if (copyIcon) {
                    copyIcon.src = '/assets/icons/checkmark.svg';
                    setTimeout(() => {
                        copyIcon.src = '/assets/icons/copy.svg';
                    }, 1500);
                }
            });
        });
    });
});
