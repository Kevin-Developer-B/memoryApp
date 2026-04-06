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
                        <div class="choose-box">
                            <div>
                                <div class="choose-box__headline">
                                    <img src="public/assets/img/palette.png" alt="">
                                    <h3>Game themes</h3>
                                </div>
                                <div class="choose-box__themes">
                                    <div class="theme-wrapper">
                                        <button class="theme game-theme" id="theme1">
                                            <span class="theme__circle-img"></span>
                                            <span class="theme__text">Code vibes theme</span>
                                            <span class="theme__line"></span>
                                        </button>
                                        <img class="theme-game__img code-vibe-img" src="public/assets/img/Theme Visual.png" alt="">
                                    </div>
                                    <div class="theme-wrapper">
                                        <button class="theme game-theme" id="theme2">
                                            <span class="theme__circle-img"></span>
                                            <span class="theme__text">Gaming theme</span>
                                            <span class="theme__line"></span>
                                        </button>
                                        <img class="theme-game__img code-vibe-img" src="public/assets/img/Theme_gaming.png" alt="">
                                    </div>
                                </div>
                            </div>
                        
                            <div>
                                <div class="choose-box__headline">
                                    <img src="public/assets/img/chess.png" alt="">
                                    <h3>Choose player</h3>
                                </div>
                                <div class="choose-box__themes">
                                    <button class="theme player" id="playerBlue">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">Blue</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme player" id="playerOrange">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">Orange</span>
                                        <span class="theme__line"></span>
                                    </button>
                                </div>
                            </div>
            
                            <div>
                                <div class="choose-box__headline">
                                    <img src="public/assets/img/card_size.png" alt="">
                                    <h3>Board size</h3>
                                </div>
                                <div class="choose-box__themes">
                                    <button class="theme cardSize" id="size16">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">16 cards</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme cardSize" id="size24">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">24 cards</span>
                                        <span class="theme__line"></span>
                                    </button>
                                    <button class="theme cardSize" id="size36">
                                        <span class="theme__circle-img"></span>
                                        <span class="theme__text">36 cards</span>
                                        <span class="theme__line"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="start-container">
                            <span class="start-container__text">Game theme</span>
                            <img class="start-container__img" src="public/assets/img/across_line.png" alt="">
                            <span class="start-container__text">Player</span>
                            <img class="start-container__img" src="public/assets/img/across_line.png" alt="">
                            <span class="start-container__text">Board size</span>
                            <button class="btn-start disabled" id="startGame">
                                <img class="btn-start__smart-display btn-start__smart-display--rotate" src="public/assets/img/smart_display.png" alt="">
                                <p class="btn-start__text">Start</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `
}