var nameHeader=HTMLheaderName.replace("%data%","Sai Siddartha Maram");
$("#header").append(nameHeader);

var roleHeader=HTMLheaderRole.replace("%data%","Computer Programmer");
$("#header").append(roleHeader);
var work=
{
	"jobs":[
			{
				"employer":"Edutiate",
				"title":"Head of Content and Docuentation",
				"dates":"October 2016 - Current",
				"description":"Played a keen role as the foundng member of this edu-tech start up",

			},

			{
				"employer":"CollegeBol",
				"title":"Intern Growth and Managment",
				"dates":"June 2016 - October 2016",
				"description":"Was responsible to drive traffic into the website and also was made incharge of their Intern managment",

			},
			{
				"employer":"Snippt",
				"title":"Intern Growth and Managment",
				"dates":"December 2016 - January 2017",
				"description":"Played a keen role in spreading awareness of an mobile news platform through various social media methods. Learnt a lot i terms of functioning of freshly funded companies. One learning experience i believe will help me in working and managing bigger firm in the coming future.",

			},
			{
				"employer":"National Innovation Foundation-India",
				"title":"Android App Development Intern",
				"dates":"May 2017 - June 2017",
				"description":"A platform for researchers to collect data of the varieties of seeds and, pest control help for farmers. For collecting data of samples, until now, scouts would visit the farms at regular intervals and collect the data, this app is aimed to ease this process and also to provide real-time suggestions for pest infestations or other abnormalities.",

			},
			{
				"employer":"CoLinkers",
				"title":"Android App Development Intern",
				"dates":"May 2017 - June 2017",
				"description":"Developing an Android Application for a budding start-up called CoLinkers which is incubated by Thapar University. The application looks to meet all the required features by the Founders. The app consists of a fully secure login system deployed from Google FireBase Cloud Services. It is to play a vital role as soon as it is launched and to ease the pressure of the employees.",

			}

			]
}
 var bio={
	"name":"Sai Siddartha Maram",
	"role": "Computer Programmer",
	"contacts":{
		"mobile":"+91-96462660964",
		"email":"msaisiddartha1@gmail.com",
		"github":"siddu1998",
		"location":"Hyderabad",
	},
	"welcomeMessage":"Welcome You are Hiring the best",
	"skills":["Programming   ", "Android   ", "Web Development   ", "Digital Marketing   ", "SEO   ", "Content Marketing   "],
	"biopic":"images/fry.jpg"
}
var welcomeHeader=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(welcomeHeader);

var imageHeader=HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(imageHeader);


if (bio.skills.length>0) 
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills);
	$("#skills").append(formattedSkill);
}



$("#topContacts").append(HTMLcontactGeneric);
	


function displayFuntion(){
	for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	var formatteddates=HTMLworkDates.replace("%data%",work.jobs[job].dates)
	$(".work-entry:last").append(formattedEmployerTitle+formatteddates+formattedDescription);
}	
}
displayFuntion();

var projects=
{
	"projects":[
				{
					"title":"GrowCrop-App for Pest Constrol and Field Trails",
					"date":"May 2017- June 2017",
					"description":"A platform for researchers to collect data of the varieties of seeds and, pest control help for farmers. For collecting data of samples, until now, scouts would visit the farms at regular intervals and collect the data, this app is aimed to ease this process and also to provide real-time suggestions for pest infestations or other abnormalities.",
					"image":"images/fry.jpg"						
				},
				
				{
					"title":"SpOrite",
					"date":"September 2016",
					"description":"Everyone of us have our opinions on different sports. All we can do is share it with our backbencher! Well not anymore with Sporito let the world know that your opinion on what and how things should have been done. SpOtito is keen on bringing the sports writer within you we are looking to create a social platform where all sport events are covered and every aspect of it left touched! Cricket, Football,Tennis,Basketball oh common i will use all the memory if i keep listing all the sports! So what ever sport you feel writing just BLOG IT DOWN!. Rejoice Sporting events never Like before, ",
					"image":"images/fry.jpg"						
				},
				{
					"title":"Hanuman Consultancy",
					"date":"November 2016",
					"description":"A budding enterprise had come up and asked for an android application to support their businesses. Considering my previous experience working with Android Applications, They had assigned this task within a stipulated time. I was successful in meeting the dead line and the firm was happy and saw a tremendous rise in their productivity.  ",
					"image":"images/fry.jpg"						
				},
				{
					"title":"Hello Thapar",
					"date":"January 2017",
					"description":"An Android application which stresses to solve the problems faced by aspirants of Thapar university. We cover all the sensitive areas that a student in the initial phases of engineering.All the details regarding shops clubs have been specified ",
					"image":"images/fry.jpg"						
				},
				
				

			]
}

projects.display=function()
{
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedDuration=HTMLprojectDates.replace("%data%",projects.projects[project].date);
		var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].image);
		
		$(".project-entry:last").append(formattedTitle+formattedDuration+formattedDescription+formattedImage);
		

	}
}
projects.display();
$("#mapDiv").append(googleMap);