export function gameScreenTemplate() {
    return `
    <div class="body-box">
        <div class="container">
                <header>
                    <div class="show">
                        <div class="show__box show__box--bg">
                            <div class="show__card show__card--blue">
                                <img src="./public/assets/img/label_blue.png" alt="label-blue">
                                <span>Blue</span>
                                <span>0</span>
                            </div>
                            <div class="show__card show__card--orange">
                                <img src="./public/assets/img/label_orange.png" alt="label-orange">
                                <span>Orange</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div class="show__box show__current-player">
                            <div class="current-player__box">
                                <span class="current-player">Current player:</span>
                                <span class="current-label"></span>
                            </div>
                        </div>
                    </div>
                    <button class="exit_btn" id="selectionBtn"></button>
                </header>
                <section id="field"></section>
        </div>
    </div>
    <div class="Overlay" id="overlay">
        <div class="PopUp PopUp--closing">
            <h3>Are you sure you want to quit the game?</h3>
            <div class="PopUp__btn-box">
                <button class="popUp-btn popUp-btn--back" id="closeBtn">
                    <span class="PopUp__text">Back to game</span>
                </button>
                <button class="popUp-btn popUp-btn--exit" id="exitBtn">
                    <span class="PopUp__text">Exit game</span>
                </button>
            </div>
        </div>
    </div>
    `
}