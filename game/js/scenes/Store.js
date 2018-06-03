var healingPotionPic = ('/assets/sprites/icons/healing_potion.png');

var sword = ('/assets/sprites/inventory/sword.png');
var helmet = ('/assets/sprites/inventory/helmet.png');
var shield = ('/assets/sprites/inventory/shield.png');
var chainmail = ('/assets/sprites/inventory/chainmail.png');
var zombieAxe = ('/assets/sprites/inventory/zombieAxe.png');
var dragonShield = ('/assets/sprites/inventory/dragonShield.png');

class Store extends BaseScene {
    constructor() {
        super("Store");
    }

    preload() {
        var area = '/assets/sprites/background-images/Store.png';
        var storeSlot = '/assets/sprites/icons/store_slot.png'
        this.load.image('storeSlot', storeSlot)
        super.preload('Store', area);
    }

    create() {
        var sceneBorders = {x: [430, 430], y: [250, 250]}; // Scene dimensions
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

        super.create('Store', sceneBorders, areaChanges, areaChangeTo, Enemy1, Enemy2, Enemy3, Enemy4);

        // this.helmet2 = this.add.image(20, 180, 'helmet').setInteractive();

        this.storeIntroText = this.add.text(40, 30, "Welcome to the Store", {font:"30px Ariel", color:"grey"});
        this.storeIntroText2 = this.add.text(40, 60, "Click an item to buy", {font:"25px Ariel", color:"grey"});
        // this.storeIntroHeadingText = this.add.text(20, 120, "Buy", {font:"20px Ariel", color:"white"});
        // this.storeIntroHeadingText = this.add.text(40, 120, "Item", {font:"20px Ariel", color:"white"});
        // this.storeIntroHeadingText = this.add.text(160, 120, "Price", {font:"20px Ariel", color:"white"});
        // this.storeIntroHeadingText = this.add.text(240, 120, "Description", {font:"20px Ariel", color:"white"});
        
        this.storeSlot1 = this.add.image(70, 161, 'storeSlot').setInteractive();
        
        this.storeLine1Text = this.add.text(20, 120, "Healing Potion", {font:"16px Ariel", color:this.neon});
        this.healingPotionPic2 = this.add.image(32, 160, 'healingPotionPic');
        this.storeLine1Price = this.add.text(65, 185, "15", {font:"14px Ariel", color:"Yellow"});
        this.storeLine1Desc = this.add.text(55, 153, "+ 10 hp", {font:"14px Ariel", color:'white'});

        this.storeSlot2 = this.add.image(189, 161, 'storeSlot').setInteractive();;
        this.storeLine2Text = this.add.text(170, 120, "Helmet", {font:"16px Ariel", color:this.neon});
        this.helmet2 = this.add.image(151, 160, 'helmet');
        this.storeLine2Price = this.add.text(180, 185, "800", {font:"14px Ariel", color:"Yellow"});
        this.storeLine2Desc = this.add.text(170, 153, "+ 3 Defense", {font:"14px Ariel", color:'white'});

        this.storeSlot3 = this.add.image(308, 161, 'storeSlot').setInteractive();;
        this.storeLine3Text = this.add.text(288, 120, "Sword", {font:"16px Ariel", color:this.neon});
        this.sword2 = this.add.image(275, 160, 'sword');
        this.storeLine3Price = this.add.text(290, 185, "1,100", {font:"14px Ariel", color:"Yellow"});
        this.storeLine3Desc = this.add.text(289, 153, "+ 5 Power", {font:"14px Ariel", color:'white'});


        this.storeSlot4 = this.add.image(70, 248, 'storeSlot').setInteractive();
        
        this.storeLine4Text = this.add.text(50, 207, "Shield", {font:"16px Ariel", color:this.neon});
        this.shield2 = this.add.image(32, 247, 'shield');
        this.storeLine4Price = this.add.text(52, 272, "1,200", {font:"14px Ariel", color:"Yellow"});
        this.storeLine4Desc = this.add.text(55, 240, "+ 5 Defense", {font:"14px Ariel", color:'white'});

        this.storeSlot5 = this.add.image(189, 248, 'storeSlot').setInteractive();;
        this.storeLine5Text = this.add.text(153, 207, "Chainmail", {font:"16px Ariel", color:this.neon});
        this.chainmail2 = this.add.image(151, 247, 'chainmail');
        this.storeLine5Price = this.add.text(170, 272, "2,500", {font:"14px Ariel", color:"Yellow"});
        this.storeLine5Desc = this.add.text(170, 240, "+ 7 Defense", {font:"14px Ariel", color:'white'});

        this.storeSlot6 = this.add.image(308, 248, 'storeSlot').setInteractive();;
        this.storeLine6Text = this.add.text(272, 207, "Zombie Axe", {font:"16px Ariel", color:this.neon});
        this.zombieAxe2 = this.add.image(275, 247, 'zombieAxe');
        this.storeLine6Price = this.add.text(290, 272, "7,500", {font:"14px Ariel", color:"Yellow"});
        this.storeLine6Desc = this.add.text(289, 240, "+ 1 Power", {font:"14px Ariel", color:'white'});

        this.storeSlot7 = this.add.image(70, 335, 'storeSlot').setInteractive();
        
        this.storeLine7Text = this.add.text(20, 294, "Dragon Shield", {font:"16px Ariel", color:this.neon});
        this.dragonShield2 = this.add.image(32, 334, 'dragonShield');
        this.storeLine7Price = this.add.text(47, 359, "19,500", {font:"14px Ariel", color:"Yellow"});
        this.storeLine7Desc = this.add.text(55, 327, "+ 2 Defense", {font:"14px Ariel", color:'white'});


        // this.storeLine7Text = this.add.text(40, 295, "Dragon Shield", {font:"18px Ariel", color:this.neon});
        // this.storeLine5Price = this.add.text(170, 295, "19,500", {font:"18px Ariel", color:"Yellow"});
        // this.storeLine5Desc = this.add.text(240, 295, "+ 2 Defense", {font:"18px Ariel", color:this.neon});

        this.storeExitText = this.add.text(380, 400, "Exit", {font:"28px Ariel", color:"red"}).setInteractive();

        this.storeExitText.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        //  hover over text

        this.storeSlot1.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        this.storeSlot2.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        this.storeSlot3.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        this.storeSlot4.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        this.storeSlot5.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        this.storeSlot6.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
        this.storeSlot7.text = this.add.text(20, 0, "", {font:"24px Ariel", color:"Red"});
         
        this.storeSlot1.on('pointerover', function(pointer) {
             this.text.setText(`Click to buy a healing potion for 15 coins`);
        })
        this.storeSlot1.on('pointerout', function(pointer) {
             this.text.setText('')
        })

        this.storeSlot2.on('pointerover', function(pointer) {
            this.text.setText(`Click to buy a helmet for 800 coins`);
       })
       this.storeSlot2.on('pointerout', function(pointer) {
            this.text.setText('')
       })

        this.storeSlot3.on('pointerover', function(pointer) {
            this.text.setText(`Click to buy a sword for 1,100 coins`);
        })
        this.storeSlot3.on('pointerout', function(pointer) {
                this.text.setText('')
        })

        this.storeSlot4.on('pointerover', function(pointer) {
            this.text.setText(`Click to buy a shield for 1,200 coins`);
        })
        this.storeSlot4.on('pointerout', function(pointer) {
                this.text.setText('')
        })

        this.storeSlot5.on('pointerover', function(pointer) {
            this.text.setText(`Click to buy chainmail for 2,500 coins`);
        })
        this.storeSlot5.on('pointerout', function(pointer) {
                this.text.setText('')
        })

        this.storeSlot6.on('pointerover', function(pointer) {
            this.text.setText(`Click to buy a zombie axe for 7,500 coins`);
        })
        this.storeSlot6.on('pointerout', function(pointer) {
                this.text.setText('')
        })

        this.storeSlot7.on('pointerover', function(pointer) {
            this.text.setText(`Click to buy a dragon shield for 19,500 coins`);
        })
        this.storeSlot7.on('pointerout', function(pointer) {
                this.text.setText('')
        })



        this.storeExitText.on('pointerover', function(pointer) {
            this.text.setText(`Click to Exit Store`);
        })
        this.storeExitText.on('pointerout', function(pointer) {
            this.text.setText('')
        })

        this.input.on('pointerdown', function(event) {
            // added exit button to prevent clicking glitch when pressing a number to exit
            this.mouseClickX = event.x;
            this.mouseClickY = event.y;
            if (this.mouseClickX >= 380 && this.mouseClickX <= 430 && this.mouseClickY >= 405 && this.mouseClickY <= 430) {
                this.scene.start("Area98_100", {hero : this.hero, areaChangeType : "East"});
            }

            else if (this.mouseClickX >= 16 && this.mouseClickX <= 124 && this.mouseClickY >= 124 && this.mouseClickY <= 206 && this.hero.items.healingPotion < 40) {
                this.hero.items.healingPotion += 1;
                this.hero.coins -= 15;
                console.log("Clicked potion");
            }
            else if (this.mouseClickX >= 136 && this.mouseClickX <= 246 && this.mouseClickY >= 124 && this.mouseClickY <= 206 && this.hero.items.helmet == 0) {
                this.hero.items.helmet = 1;
                this.hero.helmetSlot.push("helmet");
                this.hero.coins -= 800;
                this.hero.helmetSlotIndex = 1;
            }
            else if (this.mouseClickX >= 252 && this.mouseClickX <= 364 && this.mouseClickY >= 124 && this.mouseClickY <= 206 && this.hero.items.sword == 0) {
                this.hero.items.sword = 1;
                this.hero.coins -= 1100;
                this.hero.weaponSlot.push("sword");
                this.hero.weaponSlotIndex = 1;
            }
            // Row 2
            else if (this.mouseClickX >= 16 && this.mouseClickX <= 124 && this.mouseClickY >= 210 && this.mouseClickY <= 291 && this.hero.items.shield == 0) {
                this.hero.items.shield = 1;
                this.hero.coins -= 1200;
                this.hero.shieldSlot.push("shield");
                this.hero.shieldSlotIndex = 1;
            }
            else if (this.mouseClickX >= 136 && this.mouseClickX <= 246 && this.mouseClickY >= 210 && this.mouseClickY <= 291 && this.hero.items.chainmail == 0) {
                this.hero.items.chainmail = 1;
                this.hero.coins -= 2500;
                this.hero.bodySlot.push("chainmail");
                this.hero.bodySlotIndex = 1;
            }
            else if (this.mouseClickX >= 252 && this.mouseClickX <= 364 && this.mouseClickY >= 210 && this.mouseClickY <= 291 && this.hero.items.zombieAxe == 0) {
                this.hero.items.zombieAxe = 1;
                this.hero.coins -= 7500;
                this.hero.weaponSlot.push("zombieAxe");
                this.hero.weaponSlotIndex = 2;
            }
            // row 3
            else if (this.mouseClickX >= 16 && this.mouseClickX <= 124 && this.mouseClickY >= 300 && this.mouseClickY <= 377 && this.hero.items.dragonShield == 0) {
                this.hero.items.dragonShield = 1;
                this.hero.coins -= 19500;
                this.hero.shieldSlot.push("dragonShield");
                this.hero.shieldSlotIndex = 2;
            }

            },this);

        this.input.keyboard.on('keyup', function(e) {
            if (e.key == "1" && this.hero.coins > 15 && this.hero.items.healingPotion < 30) {
                this.hero.items.healingPotion += 1;
                this.hero.coins -= 15;
            }
            else if (e.key == "2" && this.hero.coins > 800 && this.hero.items.helmet == 0) {
                this.hero.items.helmet = 1;
                this.hero.helmetSlot.push("helmet");
                this.hero.coins -= 800;
                this.hero.helmetSlotIndex = 1;
            }
            else if (e.key == "3" && this.hero.coins > 1100 && this.hero.items.sword == 0) {
                this.hero.items.sword = 1;
                this.hero.coins -= 1100;
                this.hero.weaponSlot.push("sword");
                this.hero.weaponSlotIndex = 1;
            }
            else if (e.key == "4" && this.hero.coins > 1200 && this.hero.items.shield == 0) {
                this.hero.items.shield = 1;
                this.hero.coins -= 1200;
                this.hero.shieldSlot.push("shield");
                this.hero.shieldSlotIndex = 1;
            }
            else if (e.key == "5" && this.hero.coins > 2500 && this.hero.items.chainmail == 0) {
                this.hero.items.chainmail = 1;
                this.hero.coins -= 2500;
                this.hero.bodySlot.push("chainmail");
                this.hero.bodySlotIndex = 1;
            }
            else if (e.key == "6" && this.hero.coins > 7500 && this.hero.items.zombieAxe == 0) {
                this.hero.items.zombieAxe = 1;
                this.hero.coins -= 7500;
                this.hero.weaponSlot.push("zombieAxe");
                this.hero.weaponSlotIndex = 2;
            }
            else if (e.key == "7" && this.hero.coins > 19500 && this.hero.items.dragonShield == 0) {
                this.hero.items.dragonShield = 1;
                this.hero.coins -= 19500;
                this.hero.shieldSlot.push("dragonShield");
                this.hero.shieldSlotIndex = 2;
            }

        },this);
        
    }   
    
}