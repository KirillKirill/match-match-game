class Start {

    constructor() {
        this.number = 10;
        this.picture = 1;
    }

    build(){
        root.innerHTML = `
            <h3 class="info">How to play:</h3>
            <p>Memory is counter game where the object is to find pairs.</p>
			<p>When the game begins, all pictures are hidden.</p>
			<h3 class="rules">To play:</h3>
			<ol class="rules_item">
				<li>Select two cards to try to match the pictures.</li>
	            <li>If you match the pictures you can go again.</li>
	            <li>If they don't match it is the computer turn them.</li>
	            <li>The player that finds all pairs wins!</li>
	            <li>Have fun!</li>
	        </ol>
	        `;
        root.innerHTML += `
	        <h3 class="game_diff">Game Difficulty</h3>
	        <form class="diff_form">
	        	<label><input type="radio" name="diff" value="10" checked>Low (5x2)</label>
	            <label><input type="radio" name="diff" value="18">Medium (6x3)</label>
	       		<label><input type="radio" name="diff" value="24">High (8x3)</label>
	       	</form>
	    `;
        root.innerHTML += `
       		<h3 class="skirt_cards">Skirt Cards</h3>
       		<form class="skirt_form">
       		<label>
       			<input type="radio" name="skirt" value="1" checked>
       			<img src="img/1.jpg" width="50" height="50" alt="First skirt">
       		</label>
       		<label>
         		<input type="radio" name="skirt" value="2">
         		<img src="img/2.jpg" width="50" height="50" alt="Second skirt">
       		</label>
       		<label>
         		<input type="radio" name="skirt" value="3">
         		<img src="img/3.jpg" width="50" height="50" alt="Third skirt">
       		</label>
       		</form>
       	`;
        root.innerHTML += `<button class="start btn">Start Game</button>`;
    }

    handle() {
        const diff = document.querySelector('.diff_form');
        const skirt = document.querySelector('.skirt_form');
        const start = document.querySelector('.start');
        diff.addEventListener('click', (event) => {
            this.number = Number(event.target.value);
        });
        skirt.addEventListener('click', (event) => {
            this.picture = Number(event.target.value);
        });
        start.addEventListener('click', (event) => {
            root.innerHTML = '';
            const initGame = new Game(this.number, this.picture);
            initGame.run();
        });
    }
};

var begin = new Start();
begin.build();
begin.handle();

