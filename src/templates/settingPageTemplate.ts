export function settingPageTemplate() {
    return `
        <div class="setting-screen-box" id="settingScreen">
            <div class="container">
                <div class="setting-screen-container">
                    <div class="setting__headline">
                        <h2>Settings</h2>
                        <img class="underline-img" src="./assets/img/Line 3.png" alt="">
                    </div>
                    <form id="settingForm">
                        <div class="respnd">
                            <div class="small-headline">
                                <img src="./assets/img/palette.png" alt="">
                                <h3>Game themes</h3>
                            </div>
                            <div class="theme-options">
                                <label class="option">
                                    <input type="radio" name="theme" value="codeVibes" checked>
                                    <span class="circle"></span>
                                    Code vibes theme
                                    <span class="line"></span>
                                    <img class="theme-img code-vibe-img" src="./assets/img/Theme Visual.png" alt="">
                                </label>
                                <label class="option">
                                    <input type="radio" name="theme" value="gaming">
                                    <span class="circle"></span>
                                    Gaming theme
                                    <span class="line"></span>
                                    <img class="theme-img code-vibe-img" src="./assets/img/Theme_gaming.png" alt="">
                                </label>
                            </div>
                        </div>
                        


                        <div>
                            <div class="small-headline">
                                <img src="./assets/img/chess.png" alt="">
                                <h3>Choose player</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="players" value="blue">
                                <span class="circle"></span>
                                Blue
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="players" value="orange">
                                <span class="circle"></span>
                                Orange
                                <span class="line"></span>
                            </label>
                        </div>
                        


                        <div>
                            <div class="small-headline">
                                <img src="./assets/img/card_size.png" alt="">
                                <h3>Board size</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="cardSize" value="16">
                                <span class="circle"></span>
                                16 cards
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="cardSize" value="24">
                                <span class="circle"></span>
                                24 cards
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="cardSize" value="36">
                                <span class="circle"></span>
                                36 cards
                                <span class="line"></span>
                            </label>
                        </div>

                        <div class="start-container" id="preview">
                            <div class="start-container__box">
                                <span class="start-container__text" id="selectedTheme">Game theme</span>
                                <img class="start-container__img" src="./assets/img/across_line.png" alt="">
                                <span class="start-container__text" id="selectedPlayer">Player</span>
                                <img class="start-container__img" src="./assets/img/across_line.png" alt="">
                                <span class="start-container__text" id="selectedSize">Board size</span>
                            </div>
                            <button type="button" class="btn-start btn-start--disabled" id="startGame" disabled>
                                <img class="btn-start__smart-display btn-start__smart-display--rotate"
                                    src="./assets/img/smart_display.png" alt="">
                                <p class="btn-start__text">Start</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}