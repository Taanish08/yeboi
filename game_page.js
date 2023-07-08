 player1=localStorage.getItem("Player 1 name");
player2=localStorage.getItem("Player 2 name");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1 ;
document.getElementById("player2name").innerHTML=player2 ;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question turn - " + player1;
document.getElementById("playeranswer").innerHTML="Answer turn - " + player2;

function opendiv() {
getword=document.getElementById("word").value;
word=getword.toLowerCase();

charac1=word.charAt(1);

middle=Math.floor(word.length/2);
chac2=word.charAt(middle);

minus=word.length-1;
charac3=word.charAt(minus);

remove_charAt1 = word.replace(charac1, "_");
remove_charAt2 = remove_charAt1.replace(chac2, "_");
remove_charAt3 = remove_charAt2.replace(charac3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;

document.getElementById("output").innerHTML=row;
document.getElementById("word").valueL=" ";


}

question_turn="player1";
ans_turn="player2";

function check() {

ans=document.getElementById("input_check_box").value;
lowcaseans=ans.toLowerCase();
    if(lowcaseans == word ) {
        if(ans_turn == "player1") {
            player1score  = player1score +1;
            document.getElementById("player1score").innerHTML=player1score;
        }

        else {
            player2score=player2score +1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }

    if(question_turn=="player1") {
        question_turn="player2";
        document.getElementById("playerquestion").innerHTML="Question turn : "+player2;
    }
    else {
        question_turn="player1" ;
        document.getElementById("playerquestion").innerHTML="Question turn : "+player1;
    }

    if(ans_turn == "player1") {
        ans_turn="player2";
        document.getElementById("playeranswer").innerHTML="Answer turn : "+player2;
    }
    else{
        ans_turn="player1";
        document.getElementById("playeranswer").innerHTML="Answer turn : "+player1;
    }

    if(lowcaseans != word) {
        if(question_turn == "player1") {
            player1score = player1score +1;
            document.getElementById("player1score").innerHTML=player1score;
        }
    }
    else {
        player2score = player2score +1;
        document.getElementById("player2score").innerHTML=player2score;
    }

    document.getElementById("output").innerHTML=" ";
}