import { startPageTemplate } from '../templates/startPageTemplate';
import { renderSettingsPage } from '../scripts/settingPage';

export function renderStartPage() {
    showStartsScreen()
    renderStartTemplate()
}

function showStartsScreen() {
    const start = document.getElementById('startScreen');
    const end = document.getElementById('endScreen');
    if (start && end) {
        start.style.display = "flex"
        end.style.display = "none"
    }
}

function renderStartTemplate() {
    const start = document.getElementById('startScreen');
    if (!start) return;
    start.innerHTML = startPageTemplate();
    const playBtn = document.getElementById('playBtn');
    playBtn?.addEventListener('click', renderSettingsPage);
}