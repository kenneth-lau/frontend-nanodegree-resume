// JavaScript Challenge Problems
// 1. Quiz: Relationships

// Not sure what the actual answer is
// Added quotation marks using backslash

function getRelationship(x, y) {
    // determines if value is a number or not
    if (isNaN(x)) {
        if (isNaN(y)) {
            // both are not numbers
            return "Can't compare relationship because \"" + x + "\" and \"" + y + "\" are not numbers.";
        }
        else {
            return "Can't compare relationship because " + x + " is not a number.";
        }
    }
    if (isNaN(y)) {
        // second value is not a number
        return "Can't compare relationship because \"" + y + "\" is not a number.";
    }
    
    if (x > y){
        return ">";
    }
    else if (x === y){
        return "=";
    }
    else {
        return "<";
    }
    
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));


// 2: Astronaut arrays

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var alphabetNames = [];
    for (var name in names) {
        var splitName = names[name].split(" ");
        var lastName = splitName[1];
        var firstName = splitName[0];
        var formattedName = splitName[1] + " " + splitName[0];
        alphabetNames.push(formattedName);
    }
    return alphabetNames.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));


// 3. Quiz: Pagespeed insights

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    var rulesArray = [];
    for (var rule in results.formattedResults.ruleResults) { // iterate through ruleResults
       if (results.formattedResults.ruleResults.hasOwnProperty(rule)) { // check no prototype properties
           var obj = results.formattedResults.ruleResults[rule];
           rulesArray.push(obj.localizedRuleName); // add localizedRuleNames values to array
       }
    }
    return rulesArray;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var numBytes = 0;
    for (var bytes in results.pageStats) { // iterate through pageStates
        if (bytes.indexOf("Bytes") > -1) { // find keys that include 'Bytes'
            numBytes += parseInt(results.pageStats[bytes]); // sum
        }
    }
    return numBytes;
}
// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));