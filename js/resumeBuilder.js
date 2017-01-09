// Objects
var bio = {
    "name": "Kenneth Lau",
    "role": "Technical Writer",
    "welcomeMessage": "Welcome to Futurama",
    "bioPic": "images/fry.jpg",
    "contacts": {
        "mobile": "+81-80-7883-8076",
        "email": "kennethcklau@gmail.com",
        "github": "kenneth-lau",
        "twitter": "@KennethLau19",
        "location": "Tokyo, Japan"
    },
    "skills": [
        "Git", "HTML", "CSS", "JavaScript"
    ]
};

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
            "title": "Linux Command Line Basics",
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
};

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
        },
        {
            "employer": "Toshiba",
            "title": "Translator",
            "location": "Tokyo, Japan",
            "dates": "April 2013 - April 2014",
            "description": "Translate Japanese presentations and other materials into English"
        }
    ]
};

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
};


// Functions

bio.display = function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedTwitter);

    if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
    }

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedTwitter);

}

work.display = function(){
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function(){
    for (project in projects.projects) {
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
};

education.display = function(){
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        
        
        for (school in education.schools){
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            
            if (education.schools[school].majors.length > 0){
                for (major in education.schools[school].majors){
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                }

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

            }
        };


        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            for (course in education.onlineCourses){
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};


// Call functions

bio.display();
work.display();
projects.display();
education.display();

// Add a map
$("#mapDiv").append(googleMap);

// Internationize name
function inName(name) {
    name = name.trim().split(" "); //.trim removes the whitespace from the front and the back of the string
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

// Collecting clicks
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
