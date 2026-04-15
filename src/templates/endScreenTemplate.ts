export function endScreenTemplate() {
    return `
        <div class="body-box">
            <div class="container">
                <div class="endScreen">
                    <div class="endScreen__box">
                        <span class="gameover-img"></span>
                        <div class="score">
                            <span class="score__text">Final score</span>
                            <div class="score__board score__board--bg">
                                <div class="player player--blue">
                                    <img src="./public/assets/img/label_blue.png" alt="">
                                    <span>Blue</span>
                                    <span class="player__text" id="endBlueScore"></span>
                                </div>
                                <div class="player player--orange">
                                    <img src="./public/assets/img/label_orange.png" alt="">
                                    <span>Orange</span>
                                    <span class="player__text" id="endOrangeScore"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="winnerScreen" class="winnerOverlay">
            <span class="confetti"></span>
            <div class="winner">
                <div class="winner__headline">
                    <h3>The winner is</h3>
                    <h2 id="winnerPlayer" class="winner__text--blue"></h2>
                </div>
                <span class="winner__blue winner__orange"></span>
                <button>

                </button>
            </div>
        </div>
    `
}