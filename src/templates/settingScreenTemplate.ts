export function settingScreenTemplate() {
    return `
        <div class="setting-screen-box" id="settingScreen">
            <div class="container">
                <div class="setting-screen-container">
                    <div class="headline">
                        <h2>Settings</h2>
                        <img class="underline-img" src="public/assets/img/Line 3.png" alt="">
                    </div>
                    <form id="settingForm">
                        <div class="small-headline">
                            <img src="public/assets/img/palette.png" alt="">
                            <h3>Game themes</h3>
                        </div>
                        
                        <label class="option">
                            <input type="radio" name="theme" value="code vibes">
                            <span class="circle"></span>
                            Code vibes theme
                            <span class="line"></span>
                        </label>
                        <label class="option">
                            <input type="radio" name="theme" value="gaming">
                            <span class="circle"></span>
                            Gaming theme
                            <span class="line"></span>
                        </label>

                        <div class="small-headline">
                            <img src="public/assets/img/chess.png" alt="">
                            <h3>Choose player</h3>
                        </div>
                        
                        <label class="option">
                            <input type="radio" name="players" value="Blue">
                            Blue
                        </label>
                        <label class="option">
                            <input type="radio" name="players" value="Orange">
                            Orange
                        </label>

                        <div class="small-headline">
                            <img src="public/assets/img/card_size.png" alt="">
                            <h3>Board size</h3>
                        </div>
                        
                        <label class="option">
                            <input type="radio" name="cardSize" value="16">
                            16 cards
                        </label>
                        <label class="option">
                            <input type="radio" name="cardSize" value="24">
                            24 cards
                        </label>
                        <label class="option">
                            <input type="radio" name="cardSize" value="32">
                            32 cards
                        </label>
                    </form>
                </div>
            </div>
        </div>
    `
}