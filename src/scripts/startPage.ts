import { startPageTemplate } from '../templates/startPageTemplate';
import { renderSettingsPage } from '../scripts/settingPage';

/**
 * Renders the start page by showing the start screen
 * and injecting the start template.
*/
export function renderStartPage() {
    showStartsScreen()
    renderStartTemplate()
}

/**
 * Displays the start screen and hides the end screen.
*/
function showStartsScreen() {
    const start = document.getElementById('startScreen');
    const end = document.getElementById('endScreen');
    if (start && end) {
        start.style.display = "flex"
        end.style.display = "none"
    }
}

/**
 * Inserts the start page template into the DOM
 * and attaches a click listener to the play button.
*/
function renderStartTemplate() {
    const start = document.getElementById('startScreen');
    if (!start) return;
    start.innerHTML = startPageTemplate();
    const playBtn = document.getElementById('playBtn');
    playBtn?.addEventListener('click', renderSettingsPage);
}