class Player {
    constructor() {
        this.gameState=0
        this.score =0;
    }

    getScore() {
        var scoreCountRef = database.ref('scoreCount');
        scoreCountRef.on("value", (data) => {
            scoreCount = data.val();
        })
    }

    updateCount(score) {
        database.ref('/').update({
            scoreCount: score
        });
    }

    update() {
        var scoreIndex = "score/score" + this.index;
        database.ref(scoreIndex).set({
            score:this.score
        });
    }

    static getPlayerInfo() {
        var scoreCountRef = database.ref('score');
        scoreCountRef.on("value", (data) => {
            score = data.val();
        })
    }

    
}
