export function settingScreenTemplate() {
    return `
        <div class="setting-screen-box" id="settingScreen">
            <div class="container">
                <div class="setting-screen-box">
                    <div class="headline">
                        <h2>Settings</h2>
                        <img class="underline-img" src="public/assets/img/Line 3.png" alt="">
                    </div>
                    <div class="selection">
                        <div class="selection__box">
                            <div class="choose-box">
                                <div class="choose-box__headline">
                                    <img src="public/assets/img/palette.png" alt="">
                                    <h3>Game themes</h3>
                                </div>
                                <div class="choose-box__themes">
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">Code vibes theme</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">Gaming theme</span>
                                        <span class="theme__line"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="choose-box">
                                <div class="choose-box__headline">
                                    <img src="public/assets/img/chess.png" alt="">
                                    <h3>Choose player</h3>
                                </div>
                                <div class="choose-box__themes">
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">Blue</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">Orange</span>
                                        <span class="theme__line"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="choose-box">
                                <div class="choose-box__headline">
                                    <img src="public/assets/img/card_size.png" alt="">
                                    <h3>Board size</h3>
                                </div>
                                <div class="choose-box__themes">
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">16 cards</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">24 cards</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">36 cards</span>
                                        <span class="theme__line"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="selection__box theme-game">
                            <div class="theme-game__img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}