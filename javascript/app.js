var questions =  '<p>Who is Fluffy? Hagrids three-headed dog (Hagrids dragon, Harrys owl, Dumbledores Pet snake)</p>' 
        + '<div class="radio" id="question1">'
        + '<label><input type="radio" name="answer1" value="0">Hagrid\'s Dragon</label>'
        + '<label><input type="radio" name="answer1" value="0">Harry\'s Owl</label>'
        + '<label><input type="radio" name="answer1" value="0">Dumbledore\'s Snake</label>'
        + '<label><input type="radio" name="answer1" value="1">Hagrid\'s Dog</label>'
        + '</div>';




/*<p>Who is Fluffy? Hagrids three-headed dog (Hagrids dragon, Harrys owl,Dumbledores Pet snake)       </p>            <p>                What animal is the sworn enemy of the basilisk? Spider (Satry, Butterfly, Unicorn)            </p>            <p>               What does Harry see each time before he finds himself in danger? A large black dog (Crookshanks, Voldemort, a lightening bolt)            </p>            <p>                How do the wizards leep during the Quidditch World Cup? In tents (Invisibly, In trees, underground)            </p>            <p>                Who is NOT a member of the Order of Phoenix? Fudge (Tonks, Sirius, rofessor Snape)            </p>            <p>               What potion brings its user unusually good luck? Felix Felicis (Polyjuice Potion, Amortentia, Veritaserum)             </p>            p>                Who is R.A.B? Sirius Blacks brother (Dumbledores brother, Voldermort younger self, Snape)            </p>';
  */             
var correct = 0;
var wrong = 0;

var results;
var timeLeft = 3;
var timerId;


function setResults(){
    results = 'Correct: ' + correct
                + '<br>Wrong: ' + wrong;
}

function calculateResults(){
    console.log("calculateResults starts");
    console.log($("input[name='answer1']:checked", "#question1").val());
    if ($("input[name='answer1']:checked", "#question1").val() == 1) {
        console.log("is true");
        correct++;
    }else{
        console.log("is false");
        wrong++;
    }
}


function countdown() {
    var elem = $("#timer");
   //
    if (timeLeft == 0) {
                clearTimeout(timerId);
                $('#timer').remove();
                calculateResults();
                setResults();
                $("#questions").html(results);
            } else {
                elem.html(timeLeft + ' seconds remaining');
                timeLeft--;
            }
        }

$(document).ready(function(){
        $("#start").click(function(){
                         $("#questions").html(questions);
                         $("#start").remove();
                        timerId = setInterval(countdown, 1000);
                        });
              
        

        













});

