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



// var listbox = document.getElementById('listbox');
// listbox.style.visibility = "hidden";

// var first = document.getElementById("first");
// first.style.height = "300px";

var display = 0;

function hideshowmenu()
{
    if(display == 0)
    {
        first.style.height = "480px";
        listbox.style.visibility = "visible";
        display = 1;
    }
    else
    {
        first.style.height = "300px";
        listbox.style.visibility = "hidden";
        display = 0;   
    }
}