var gameView;
function onBodyLoad(){
	console.log(" main body is loaded 117");
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
   //,'assets/sprites/@1x/char.json'
   PIXI.loader.add('assets/sprites/@1x/menus.json')
               .load(this.onAssetsLoaded.bind(this));
};

AE.GameView.prototype.onAssetsLoaded = function(){
	console.log(" assets are loaded!");
	this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);

	//this.bg = AE.getSprite("hstay.png");
	//this.container.addChild(this.bg);	
	this.createPages();
};
AE.GameView.prototype.createPages = function () {
	this.mediator = new Mediator();


	this.menuPage = new AE.MenuPageView();
	this.container.addChild(this.menuPage);


	// this.helpPage = new HelpPageView();
	// this.container.addChild(this.helpPage);

	// this.levelSelectionPage = new LevelSelectionPageView();
	// this.container.addChild(this.levelSelectionPage);

	// this.introPage = new IntroPageView();
	// this.container.addChild(this.introPage);


}