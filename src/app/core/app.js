var gameView;
function onBodyLoad(){
	console.log(" main body is loaded ");
	gameView = new AE.GameView();
}



var AE = AE ? AE : {};
AE.GameView = function (){
	console.log("game view is created ");
	this.app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
	document.body.appendChild(this.app.view);
	this.init();
};

AE.GameView.prototype.init =function(){
   console.log(" init called ");
   PIXI.loader.add('assets/sprites/@1x/preloader.json')
               .load(this.onAssetsLoaded.bind(this));
};

AE.GameView.prototype.onAssetsLoaded = function(){
	console.log(" assets are loaded!");
	this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);

	this.bg = AE.getSprite("char");
	this.container.addChild(this.bg);

	this.sym = AE.getSprite("symbol");
	this.sym.interactive= true;
	this.sym.buttonMode = true;
	this.sym.on("click", function () {
		//this.sym.x+=5;
		//console.log(" clicked ");
		TweenMax.to(this.sym, 1,{alpha:0});
		TweenMax.from(this.sym, 1,{alpha:0});
	}.bind(this));
	this.container.addChild(this.sym);
}