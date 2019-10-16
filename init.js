    const weapon0 = new Weapon("blaster", 10, "weapon0", "<div></div>", '<img src="./media/weapons/blaster.png" width="100" height="60" alt="Blaster"></img>');
    const weapon1 = new Weapon("light Saber Cold Fusion", 15, "weapon1", "<div></div>", '<img src="./media/weapons/lightsaberColdFusion.png" width="100" height="100" alt="Lightsaber Cold Fusion"></img>');
    const weapon2 = new Weapon("neuralizer", 20, "weapon2", "<div></div>", '<img src="./media/weapons/neuralizer.png" width="100" height="100" alt="Neuralizer"></img>');
    const weapon3 = new Weapon("tri Barrel Plasma Gun", 25, "weapon3", "<div></div>", '<img src="./media/weapons/triBarrelPlasmaGun.png" width="100" height="100" alt="Tri Barrel PlasmaGun"></img>');
    const weapon4 = new Weapon("noisy Cricket", 30, "weapon4", "<div></div>", '<img src="./media/weapons/noisyCricket.png" width="100" height="100" alt="Noisy Cricket"></img>');
    
    const player1 = new Player("Deep Space Nine", "player1", 100, weapon0, "<div></div>", 10);
    const player2 = new Player("Millenium Falcon", "player2", 100, weapon0, "<div></div>", 10);
    
    const newBoard = new Board(10, 10, 14);
    
    newBoard.generateBoard();
    newBoard.generateIdForEachBox();
    newBoard.generatePlayersAndWeapons();
    newBoard.generateUnreachableBoxes();

    const audio = new AudioPlayer();
    audio.setAudio();
    
    const newGame = new Game();
    
    newGame.setScreenStart();
    newGame.setTrajectory();
    newGame.setOnClick();
