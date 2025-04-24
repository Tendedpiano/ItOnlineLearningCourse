const character = {
    hairColor: "black",
    eyeColor: "blue",
    clothesColor: "brown",
    goldCoins: 0,
    isDead: false,
    position: {
        x: 0,
        y: 0,
    },
    hasKey: true,

}

const chest = {
    isOpen: false,
    isLocked: true,
    coins: 10,
    inventory: ["sword", "hat", "shirt", "map", "shield"],
    openChest: function() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.coins = 0;
            console.log("This chest has been opened!");
        }
    }
}