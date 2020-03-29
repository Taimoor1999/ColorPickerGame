// console.log("Connected");


//print 6 circles

var fetchCircles = document.querySelector(".Circles")
var answer = null;
var fetchcircle = null;
var RandomlySelectedCircle = getRandomInt(0,6);
var fetchAnswer = document.querySelector('.Answer');
var fetchContainer = document.querySelector('.container')
var fetchHeader = document.querySelector('.header');
var fetchReset = document.querySelector('.ResetButton');

// console.log(fetchCircles);
function randomColorGenerator()
{
    return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`
}

function SettingUpUi(){
    fetchCircles.innerHTML="";   
    for (var index = 0; index < 6; index++) {
        // const element = array[index];
        fetchCircles.insertAdjacentHTML("beforeend", `<div class="CircleColoum flex">
        <div style="background: ${randomColorGenerator()}" class="IndividualCircle"></div>
        </div>`);
    }
    fetchcircle = Array.from(document.querySelectorAll(".IndividualCircle"));
    var RandomlySelectedCircle =  getRandomInt(0, 6);
    answer =   fetchcircle[RandomlySelectedCircle].style.background;
    fetchAnswer.textContent = answer;
}

fetchReset.addEventListener('click', function()
{
   SettingUpUi();
});


SettingUpUi(); 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
 
fetchCircles.addEventListener('click', function(extraInfo)
{
    if(Array.from(extraInfo.target.classList).includes('IndividualCircle'))
    {
        var SelectedAnswer = extraInfo.target.style.background;
        if(answer===SelectedAnswer)
       {
        fetchcircle.forEach(function(circle)
        {
            if(circle.style.background!==answer)
            {
                circle.style.opacity=0;
        
            }
        fetchContainer.style.background= answer;
        fetchHeader.style.background= answer;
    });
        
       }
       else{
           console.log('u lost');
            // SelectedAnswer.style.opacity = 0;
            extraInfo.target.style.opacity=0;    
        }
    
    }

});


