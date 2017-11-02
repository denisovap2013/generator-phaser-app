export default class Boot {
	preload () {
		this.load.image("preloader", "assets/images/loading_bar.png");
		this.load.image("loading_bg", "assets/images/loading_bg.jpg");
	}

	create () {
		this.game.input.maxPointers = 1;
		this.game.state.start("preload");
	}
}