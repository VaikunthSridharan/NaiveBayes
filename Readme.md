# Naive Bayes Machine Learning Model using Node JS
## SYNOPSIS 
A node JS script that develops a Naive Bayes Model for SMS spam detection. 
## BACKGROUND
Naive Bayes is a probabilistic model that is based on Bayes Theorem. It is popularly used as a text categorization, whether the given text belongs to specific class or not. Examples : 
1. Sports or Politics 
2. Email Spam 
## IMPORTANT REQUIREMENTS
NodeJS and NPM  
Please download NodeJS and NPM from this link https://nodejs.org/en/download/
Download only the stable version
## FILES PROVIDED
~~~~sh
    --- dataset/
        -test.txt
        -train.txt
        -readme.txt (dataset)
    --- classifier.js
~~~~
## INSTRUCTIONS 
1. Make sure you have NodeJS and NPM installed. Test it by entering the following commands in your command prompt/terminal - Windows Users (Command Prompt)
~~~~sh 
node --version
npm --version
~~~~
- Linux Users (Terminal)
~~~~sh 
nodejs -version
npm -version 
~~~~

- Mac Users (Terminal)
~~~~sh 
node -v 
npm -v
~~~~
   2.  Download the files provided to a folder (new folder) 
   3.  Go to the directory from terminal where you have downloaded the files. 
- All Operating Systems
~~~~
cd <Downloaded_Directory_Location>/ 
~~~~
   4.  Now install the NPM Packages using the following commands : 
- All Operating Systems
~~~~sh
npm install bayes 
npm install line-reader-sync
~~~~

   5. After you have installed the necessary packages you can now execute the classifier by entering the following commands. 
- Windows/Mac Operating Systems
~~~~sh
node classifier.js 
~~~~
- Linux Operating Systems 
~~~~sh 
nodejs classifier.js
~~~~
   6. You can see the results on the console. 





## References
1. https://en.wikipedia.org/wiki/Naive_Bayes_classifier
2. https://nodejs.org/en/
3. https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection#
4. https://en.wikipedia.org/wiki/Precision_and_recall
5. https://www.npmjs.com/package/bayes



	