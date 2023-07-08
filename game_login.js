function nextpage() {
    player1name=document.getElementById("input1").value;
    player2name=document.getElementById("input2").value;

    localStorage.setItem("Player 1 name", player1name);
    localStorage.setItem("Player 2 name", player2name);

    window.location="game_page.html";
}

