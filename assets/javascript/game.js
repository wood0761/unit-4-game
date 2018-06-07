$(document).ready(function(){
    $("#enemySelectPrompt").html("SELECT ENEMY TO ATTACK!").hide();
    $("#fight").hide();
    $(".damageUpdate").hide();

    var lukeSkywalker = {
        name: "Luke",
        hitPoints: 1000,
        attackPower: 6,
        counterAttack: 8,
        image: "<img id=lukeSkywalker src='assets/images/lukeSkywalker2.jpg' />",
    }
    var obiWan = {
        name: "Master Obi-Wan",
        hitPoints: 150,
        attackPower: 4,
        counterAttack: 8,
        image: "<img id=obiWan src='assets/images/obiWan.jpg' />",
    }
    var darthVader = {
        name: "Darth Vader",
        hitPoints: 900,
        attackPower: 5,
        counterAttack: 6,
        image: "<img id=darthVader src='assets/images/darthVader.jpg' />",
    }
    var darthSidious = {
        name: "Darth Sidious",
        hitPoints: 2000,
        attackPower: 7,
        counterAttack: 4,
        image: "<img id=darthSidious src='assets/images/darthSidious.jpg' />",
    }
    var characterArray = [lukeSkywalker, obiWan, darthVader, darthSidious];
    var selectedCharacter; 
    var selectedEnemy; 

    selectCharacter();
    selectEnemy();

    $("#fightButton").click(function(){
               
        selectedEnemy.hitPoints -= selectedCharacter.attackPower;               // enemy loses health
        selectedCharacter.hitPoints -= selectedEnemy.counterAttack;             // hero loses health

        $("#heroDamage").html("You attacked " + selectedEnemy.name + " for " + selectedCharacter.attackPower + " damage!")
        $("#opponentDamage").html(selectedEnemy.name + " attacked you back for " + selectedEnemy.counterAttack + " damage!")
        $("#heroHP").html("HP: " + selectedCharacter.hitPoints);
        $("#opponentHP").html("HP: " + selectedEnemy.hitPoints);
        selectedCharacter.attackPower *= 2;                                     // attack power doubles with each click

        if(selectedCharacter.hitPoints <= 0){                                   // you lose
            alert("GAME OVER DINGUS");
        }
        else if(selectedEnemy.hitPoints <= 0){                                  // if opponent hp <= 0                                         
            if (characterArray.length > 0){                                     // if enemies remain in the array
                $("#fight").hide();                                             // HIDE hero image, enemy image, and fight button             
                $("#hP").hide();                                                // HIDE hit points div
                $("#enemySelectPrompt").show();                                 // SHOW SELECT ENEMY html 
                $("#enemySelectImages").show();                                 // SHOW enemy images remaining div
                $("#enemySelectImages").empty();                                // EMPTY the enemy images 
                    for (var i = 0; i < characterArray.length; i++){            // APPEND remaining enemy images
                        $("#enemySelectImages").append(characterArray[i].image);
                    } 
                }
            else {                                                              // if characterArray = 0
                alert('YOU WIN')
                                                             // you defeated all the characters
            }
        } 
    });
   
function selectEnemy(){
    $("#enemySelectImages").on("click", "img", function(){
    
        var identification = this.id;
            if(identification === "lukeSkywalker"){
                selectedEnemy = lukeSkywalker;
                characterArray.splice(characterArray.indexOf(selectedEnemy), 1);
            }
            else if(identification === "obiWan"){
                selectedEnemy = obiWan;
                characterArray.splice(characterArray.indexOf(selectedEnemy), 1);
            }
            else if(identification === "darthVader"){
                selectedEnemy = darthVader;
                characterArray.splice(characterArray.indexOf(selectedEnemy), 1);
            }
            else if(identification === "darthSidious"){
                selectedEnemy = darthSidious;
                characterArray.splice(characterArray.indexOf(selectedEnemy), 1);
            }
            
        $("#enemySelectPrompt").hide();                                 // HIDE "SELECT ENEMY" after click 
        $("#enemySelectImages").hide();                                 // HIDE images after click
        $("#fight").show();                                             // SHOW div with hero image, enemy image, and attack button 
        $("#hero").empty();                                             // EMPTY hero image div
        $("#opponent").empty();                                         // EMPTY opponent image div
        $("#hero").append(selectedCharacter.image);                     // APPEND selctedChar image
        $("#opponent").append(selectedEnemy.image);                     // APPEND selectedEnemy image
        $(".damageUpdate").show();                                      // SHOW damage update                                               
        $("#opponentDamage").empty();                                   // EMPTY opponent attack damage div
        $("#hP").show();                                                // SHOW hit points div
        $("#heroHP").html("HP: " + selectedCharacter.hitPoints);        // APPEND hero's hit points     
        $("#opponentHP").html("HP: " + selectedEnemy.hitPoints);        // APPEND enemy's hit points
        $(".damageUpdate").show();                                      // SHOW damage update
            
    }); // end of selectEnemy function
}

function selectCharacter(){
 $("img").click(function(){

    $("#openingScreen").hide();
    $("body").css("background-image", "url(assets/images/xWing.jpg)"); // on click get XWING background
    $("#battleScreenHeader").html("ALERT! ENEMIES IN-BOUND!");
   
    setTimeout (function(){               
        $("#battleScreenHeader").hide();    // hides battle alert html after 3 seconds
        $("#enemySelectPrompt").show();     // show SELECT ENEMY html  
        for (var i = 0; i < characterArray.length; i++){                // push enemies div id="#enemySelectImages"
            $("#enemySelectImages").append(characterArray[i].image);
        } 
    }, 3000);

    var identification = this.id;
    
        if(identification === "lukeSkywalker"){
            selectedCharacter = lukeSkywalker;      // select character
            characterArray.splice(characterArray.indexOf(selectedCharacter), 1); // remove selected character from characteArray
        }
        else if(identification === "obiWan"){
            selectedCharacter = obiWan;
            characterArray.splice(characterArray.indexOf(selectedCharacter), 1);
        }
        else if(identification === "darthVader"){
            selectedCharacter = darthVader;
            characterArray.splice(characterArray.indexOf(selectedCharacter), 1);
        }
        else {
            selectedCharacter = darthSidious;
            characterArray.splice(characterArray.indexOf(selectedCharacter), 1);
        }
    });
} // end of selectCharacterFunction
});