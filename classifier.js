/**
 * Created by vaikunth on 3/16/16.
 */

/*
 Classification algorithms
 */
var bayes = require('bayes')
var classifier = bayes()
/*
 Synchronous file reading
 */
var LineReaderSync = require("line-reader-sync")
var lrs = new LineReaderSync("./dataset/train.txt")
var lrstest = new LineReaderSync("./dataset/test.txt");

//console.log(lrs.toLines())
var data = [], result = [];
var array = [];
var reference = [];
var truepositives = 0;
var falsepositives = 0;
var falsenegatives = 0;
var truenegatives = 0;
var spam = 0;
var ham = 0;
var getStats = function () {
    var precision = truepositives / (truepositives + falsepositives);
    var recall = truepositives / (truepositives + falsenegatives);
    var accuracy = (truepositives + truenegatives)/(truepositives+truenegatives+falsepositives+falsenegatives)
    console.log("\nTruepositives -----> " + truepositives)
    console.log("Falsepositives -----> " + falsepositives)
    console.log("Falsenegatives -----> " + falsenegatives)
    console.log("Truenegatives -----> "+truenegatives)
    console.log("Precision -----> " + precision)
    console.log("Recall ------> " + recall);
    console.log("Accuracy ------> "+accuracy)



}
console.log("\n<--------------------------SMS Spam detection classification using Naive Bayes-------------------------->\n");
console.log("Modelling the classifier with the given training dataset...")
while (true) {
    var line = lrs.readline()

    if (line === null) {
        console.log(".......");
        while (true) {
            var testline = lrstest.readline();
            if (testline === null) {
                getStats();
                console.log("Finished!")
                process.exit();
            }
            else {
                var testsplit = testline.split("\t");
                console.log(testsplit[1] + " predicted value '" + classifier.categorize(testsplit[1]) + "' and actual value '" + testsplit[0] + "'");

                if (classifier.categorize(testsplit[1]) === testsplit[0])
                    truepositives++;
                else if (classifier.categorize(testsplit[1]) === 'ham' && testsplit[0] === 'spam')
                    falsepositives++;
                else if (classifier.categorize(testsplit[1]) === 'spam' && testsplit[0] === 'ham')
                    falsenegatives++;
                else
                    truenegatives++;
            }

        }

        process.exit();
    }
    else {
        var two = line.split("\t");
        classifier.learn(two[1], two[0]);
        if(two[0]==='ham')
            ham++;
        else if(two[0] === 'spam')
            spam++;

    }
}

