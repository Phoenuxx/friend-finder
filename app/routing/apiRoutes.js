var friendData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        // res.json(req.body);

        res.json(friendData)
        
       var friendScores = [];
        for (var i=0; i < friendData.length; i++) {
            var totalScore = 0;
            for (var j=0; j < friendData[i].scores.length -1; j++){
                parsedScore = parseInt(friendData[i].scores[j]);;
                totalScore = totalScore + parsedScore;
                console.log("________________ friend current Total")
                console.log(totalScore);
            }
            friendScores.push(totalScore);
        }
        var userScores = req.body.scores;
        var userTotal = 0;
        for (var i=0; i < userScores.length; i++) {
            parsedUser = parseInt(userScores[i]);
            userTotal = userTotal + parsedUser;
            console.log("________________ user currentTotal")
            console.log("user: " + userTotal);
        }


        function closest (num, arr) {
            var curr = arr[0];
            var diff = Math.abs (num - curr);
            for (var val = 0; val < arr.length; val++) {
                var newdiff = Math.abs (num - arr[val]);
                if (newdiff < diff) {
                    diff = newdiff;
                    curr = arr[val];
                }
            }
            return curr;
        }
        // array = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];
        // number = 40;
        console.log("----diff vv")
        console.log(closest (userTotal, friendScores));

        // console.log(friendScores);
    });
}