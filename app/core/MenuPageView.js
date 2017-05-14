var AE = AE || {};
AE.MenuPageView = function()
{
  PIXI.Container.call(this);	
  console.log(" menu page is created ");
  this.createView();
};
AE.MenuPageView.prototype = Object.create(PIXI.Container.prototype); 
AE.MenuPageView.prototype.constructor = AE.MenuPageView;
AE.MenuPageView.prototype.createView = function () {
	// body...
	this.bg = AE.getSprite("menuBg");
	this.addChild(this.bg);

	this.startBtn = AE.getSprite("startBtn");
	this.startBtn.x = 290;
	this.startBtn.y = 220;
	this.addChild(this.startBtn);

	this.highScroreBtn = AE.getSprite("highScroreBtn");
	AE.setPosition(this.highScroreBtn, {x: 290, y:250});
	this.addChild(this.highScroreBtn);

	this.moreGamesBtn = AE.getSprite("moreGamesBtn");
	AE.setPosition(this.moreGamesBtn, {x: 290, y:280});
	this.addChild(this.moreGamesBtn);



	//events 
	this.startBtn.interactive = true;
	this.startBtn.buttonMode = true;
	this.startBtn.on('pointerdown', this.onStartBtnClickEvent.bind(this));
	


	AE.mouseEnable(this.highScroreBtn);
	this.highScroreBtn.on('pointerdown', this.onHighScoreBtnClickEvent);
},
AE.MenuPageView.prototype.onStartBtnClickEvent = function (btn) {
	console.log('button clicked start button  1');
    this.startBtn.off('pointerdown', this.onStartBtnClickEvent.bind(this));
},
AE.MenuPageView.prototype.onHighScoreBtnClickEvent = function (argument) {
	console.log('button high score clicked  button ');
};
