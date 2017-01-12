
// Objects

// Bio object
var bio = {
    "name" : "Kenneth Lau",
    "role" : "Technical Writer",
    "welcomeMessage" : "Welcome to Futurama",
    "bioPic" : "images/fry.jpg",
    "contacts" : {
        "mobile": "+81-80-7883-8076",
        "email" : "kennethcklau@gmail.com",
        "github" : "kenneth-lau",
        "twitter" : "@KennethLau19",
        "location" : "Tokyo, Japan"
    },
    "skills" : [
        "Git",
        "Technical Writing",
        "Jekyll",
        "Confluence",
        "HTML",
        "CSS",
        "JavaScript"
    ]
}

// Work object
var work = {
    "jobs": [
        {
            "employer": "LINE",
            "title": "Technical Writer",
            "location": "Tokyo, Japan",
            "dates": "April 2014 - Present",
            "description": "Author, edit, and manage API documentation, guides, and manuals for internal and external developers"
        },
        {
            "employer": "LINE",
            "title": "Technical Writer",
            "location": "Tokyo, Japan",
            "dates": "April 2014 - Present",
            "description": "Author, edit, and manage API documentation, guides, and manuals for internal and external developers"
        }
    ]
}

// Project object
var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "Dec 2016",
            "description": "Portfolio page of projects",
            "images": ["images/fry.jpg"]
        },
        {
            "title": "Resume",
            "dates": "Jan 2017",
            "description": "Personal resume page",
            "images": ["images/fry.jpg"]
        }
    ]
}

// Education object
var education = {
    "schools": [
        { 
            "name": "University of British Columbia",
            "location": "Vancouver, Canada",
            "degree": "Bachelor of Commerce",
            "dates": "2003-2008",
            "url": "https://www.ubc.ca",
            "majors": ["Transportation and Logistics", "International Business"]
        },
        {
            "name": "Sir Winston Churchill Secondary",
            "location": "Vancouver, Canada",
            "degree": "Highschool Diploma",
            "dates": "1998-2003",
            "url": "https://churchill.vsb.bc.ca",
            "majors": ["Graduated with honors"]
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "Dec 2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "August 2016",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "Linus Command Line Basics",
            "school": "Udacity",
            "dates": "August 2016",
            "url": "https://classroom.udacity.com/courses/ud595"
        },
        {
            "title": "Writing READMEs",
            "school": "Udacity",
            "dates": "August 2016",
            "url": "https://classroom.udacity.com/courses/ud777"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "August 2016",
            "url": "https://classroom.udacity.com/courses/ud775"
        }
    ]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* $("#main").append("Kenneth"); */

// var awesomeThoughts = "I am Kenny and I am awesome!";


// string.replace()
// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// console.log(awesomeThoughts);
// console.log(funThoughts);

// $("#main").append(funThoughts);

// var name = "Kenneth Lau";
// var role = "Technical writer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// Arrays 
// var skills =
// ["awesomeness", "programming", "teaching", "writing"];

// $("#main").append(skills);

// $("#main").append(skills[0]);

// $("#main").append(skills.length);


// Object literal notation
/*
var bio = {
    "name" : name,
    "role" : role,
    "contacts" : {
        "email" : "kennethcklau@gmail.com",
        "github" : "kenneth-lau",
        "twitter" : "@KennethLau19",
        "location" : "Tokyo, Japan"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "Welcome to Mt. Fryland",
    "skills" : skills
}
*/
// $("#main").append(bio.role);


// Dot and bracket notation
/*
var work = {};
work.position = "Technical Writer";
work.employer = "LINE";
work.years = 2;
work.city = "Tokyo";

var education = {};
education["name"] = "University of British Columbia";
education["year"] = "2008";
education["city"] = "Vancouver, Canada";

$("#main").append(work["position"]);

$("#main").append(education.name);
*/

// JSON
/*
var education = {
    "schools": [
        { 
            "name": "University of British Columbia",
            "location": "Vancouver, Canada",
            "degree": "Bachelor of Commerce",
            "majors": "Transportation and Logistics, International Business",
            "minors": "Japanese",
            "dates": "2003-2008",
            "url": "https://www.ubc.ca"
        },
        {
            "name": "Sir Winston Churchill Secondary",
            "location": "Vancouver, Canada",
            "dates": "1998-2003",
            "url": "https://churchill.vsb.bc.ca"
        }
    ],
    "online courses": [
        {
            "name": "JavaScript Basics",
            "school": "Udacity",
            "dates": "Dec 2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        },
        {
            "name": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "August 2016",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        }
    ]
}
*/


// If statement
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSKill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSKill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSKill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSKill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSKill);

}

// replace name
// var formattedName = HTMLheaderName.replace("%data%", bio.name);

// For loop
for(var i=0; i<9; i++) {
    console.log(i);
}

// For-in loop
/*
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace
    ("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
    ("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + 
    formattedTitle;

    $(".work-entry:last").append(
    formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace
    ("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(
    formattedDates);

    var formattedDescription = HTMLworkDescription.replace
    ("%data%", work.jobs[job].description);
    $(".work-entry:last").append(
        formattedDescription
    );
}
*/

// Functions
function displayWork() {
    for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace
    ("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
    ("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + 
    formattedTitle;

    $(".work-entry:last").append(
    formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace
    ("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(
    formattedDates);

    var formattedDescription = HTMLworkDescription.replace
    ("%data%", work.jobs[job].description);
    $(".work-entry:last").append(
        formattedDescription
    );
}
}

// Collecting clicks
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


// Return statements
/*
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
        return locationArray;

}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

*/

// Internationize name
/*
function inName(name) {
    name = name.trim().split(" "); //.trim removes the whitespace from the front and the back of the string
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
*/

// Encapsulating functions
/*
projects.display = function() {
    for (projects in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();
*/

// Add a map
$("#mapDiv").append(googleMap);