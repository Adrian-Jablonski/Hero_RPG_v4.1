class Main extends BaseScene {
    constructor() {
        super("Main");
    }

    preload() {
        var area = '/assets/sprites/background-images/main_menu.png';
        super.preload('Main', area);
    }

    create() {
        var sceneBorders = {x: [150, 150], y: [250, 250]}; // Scene dimensions
        var areaChanges = {
            northChange : "",
            eastChange : "", 
            southChange : "", 
            westChange : ""
        }; // Defines part of scene where the user transitions to other scene
        var areaChangeTo = {
            northChange : "", 
            eastChange : "",
            southChange : "", 
            westChange : ""
        };

        var Enemy1 = {class: Goblin, name: "goblin", walkAreaX: [-100, -100], walkAreaY: [-100, -100], x: -100, y: -100};
        var Enemy2 = "None";
        var Enemy3 = "None";
        var Enemy4 = "None";

        super.create('Main', sceneBorders, areaChanges, areaChangeTo, Enemy1, Enemy2, Enemy3, Enemy4);

        this.input.on('pointerdown', function(event) {
            // added exit button to prevent clicking glitch when pressing a number to exit
            this.mouseClickX = event.x;
            this.mouseClickY = event.y;
            if (this.mouseClickX >= 179 && this.mouseClickY <= 320 && this.mouseClickY >= 232 && this.mouseClickY <= 271) {
                this.scene.start(this.hero.currentArea, {hero : this.hero, areaChangeType : "East"});
                }
            },this);
        
    }   
    
}