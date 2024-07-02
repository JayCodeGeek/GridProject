// Getting the element with id and storing it in a variable
var certificate = document.getElementById('certificate');
var education = document.getElementById('education');
var experience = document.getElementById('experience');

// set the visibility property of respective div with id
certificate.style.visibility = 'hidden';
experience.style.visibility = 'hidden';
education.style.visibility = 'visible';

// functions to perform when clicked on the navigation list
function hideshowcertificate()
{
    if (certificate.style.visibility == 'hidden')
    {
        certificate.style.visibility = 'visible';
        education.style.visibility = 'hidden';
        experience.style.visibility = 'hidden';
    }
    
}

function hideshoweducation()
{
    if (education.style.visibility == 'hidden')
    {
        certificate.style.visibility = 'hidden';
        education.style.visibility = 'visible';
        experience.style.visibility = 'hidden';
    }
    
}

function hideshowexperience()
{
    if (experience.style.visibility == 'hidden')
        {
            certificate.style.visibility = 'hidden';
            education.style.visibility = 'hidden';
            experience.style.visibility = 'visible';
        }
}

var menu = document.getElementById("nav");

function showmenu()
{
    if(menu.style.display = "none")
    {
        menu.style.display = "block";
    }    
}

function hidemenu(){
    if(menu.style.display = "block")
        {
            menu.style.display = "none";
        }    
}
