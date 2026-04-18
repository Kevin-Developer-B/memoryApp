export function endScreenTemplate() {
    return `
        <div class="endscreen codeVibes-theme">
            <div class="container">
                <div class="endscreen__box">
                    <div class="gameover">
                        <span class="gameover__img"></span>
                        <div class="score">
                            <h3 class="score__text">Final score</h3>
                            <div class="score__board score__board--revers">
                                <div class="playerdisplay__player">
                                    <span class="playerdisplay__icon--blue"></span>
                                    <span id="endBlueScore" class="playerdisplay__number"></span>
                                </div>
                                <div class="playerdisplay__player">
                                    <span class="playerdisplay__icon--orange"></span>
                                    <span id="endOrangeScore" class="playerdisplay__number"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="winnerScreen" class="winnerOverlay codeVibes-theme">
            <span class="confetti"></span>
            <div class="winner">
                <div class="winner__headline">
                    <h3>The winner is</h3>
                    <h2 id="winnerPlayer"></h2>
                </div>
                <span id="winnerImg" class="winnerImg"></span>
                <button id="backToStartBtn">
                    <p class="button__text"></p>
                </button>
            </div>
        </div>
    `
}