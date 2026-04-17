export function gameScreenTemplate() {
    return `
        <div class="gamingBox">
            <div class="container">
                <header>
                    <div class="playerdisplay">
                        <div class="playerdisplay__scoreboard">
                            <div class="playerdisplay__player">
                                <span class="playerdisplay__icon--blue"></span>
                                <span id="blueScore" class="playerdisplay__number"></span>
                            </div>
                            <div class="playerdisplay__player">
                                <span class="playerdisplay__icon--orange"></span>
                                <span id="orangeScore" class="playerdisplay__number"></span>
                            </div>
                        </div>
                        <div class="currentplayer">
                            <span class="currentplayer__text">Current player:</span>
                            <span id="icon"></span>
                        </div>
                    </div>
                    <button>
                        <div class="exit" id="selectionBtn"></div>
                    </button>
                </header>
                <section class="box">
                    <div id="field" class="field"></div>
                </section>
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