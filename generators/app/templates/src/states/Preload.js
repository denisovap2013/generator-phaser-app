export default class Preload {
	constructor() {
		this.asset = null;
		this.ready = false;
	}

    preload () {
        // background for a game
        this.add.sprite(0,0, "loading_bg");

        this.asset = this.add.sprite(this.game.width/2, 
                                     this.game.height/2,
                                     "preloader");
        this.asset.anchor.setTo(0.5,0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);

        // LOADING ASSETS HERE

    }

    // create() and update() methods won't be called until the preloading is done
    // you can change the state by calling "this.game.state.start("game");" inside of the create() method
    // however, delegating this to events system allows multistage loading process, or implementing playable loader screens before the "game" state can be called
    create () {

    }

    update() {
    	if (this.ready) {
    		this.game.state.start("game");
    	}
    }

    onLoadComplete () {
    	this.ready = true;
    }
}