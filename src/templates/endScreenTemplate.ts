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
                                    <span class="player__text">0</span>
                                </div>
                                <div class="player player--orange">
                                    <img src="./public/assets/img/label_orange.png" alt="">
                                    <span>Orange</span>
                                    <span class="player__text">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}