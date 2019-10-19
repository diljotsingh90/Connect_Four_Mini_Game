function turnHandler(index){
    if(col_top[index]<0){
        return;
    }
    var calc= col_top[index]*7+index;
    console.log(index);
    console.log(calc);
    if(p1_turn==true){ 
       
        $('td').eq(calc).css('background-color','red');
        p1_turn=false;
        col_top[index]-=1;
        //console.log("Two's Turn"); 
        $('#player').text(player2);
    }
    else{
        $('td').eq(calc).css('background-color','blue');
        p1_turn=true;
        col_top[index]-=1;
        //console.log("One's Turn"); 
        $('#player').text(player1);
    }
}
function checkColor(one,two,three,four){
    if(one.css('background-color')!==('rgb(128, 128, 128)')&&one.css('background-color')===two.css('background-color') && one.css('background-color')===three.css('background-color') && one.css('background-color')===four.css('background-color')){
        return true;
    }
    //
    else{
        return false;
    }
}
function checkWin(){
    var tds = $('td');
    for(var i=0;i<7;i++){
        for(var j=0;j<4;j++){
            var index = i*7+j;
            //console.log(index);
            one =  tds.eq(index);
            two = tds.eq(index+1);
            three =  tds.eq(index+2);
            four = tds.eq(index+3);
            if(true===checkColor(one,two,three,four)){
                gameWon();
            }
        }
    }
    for(var i=0;i<4;i++){
        for(var j=0;j<7;j++){
            var index = i*7+j;
            //console.log(index);
            one =  tds.eq(index);
            two = tds.eq(index+7);
            three =  tds.eq(index+14);
            four = tds.eq(index+21);
            if(true===checkColor(one,two,three,four)){
                gameWon();
            }
        }
    }
}
function gameWon(){
    console.log("WIn game");
    if(p1_turn === false){

        alert(player1+" Wins");
    }
    else{
        alert(player2+" Wins");
    }
    restart();
}
function restart(){
    $('td').css('background-color','gray');//get index
    p1_turn=true;
    col_top = [6,6,6,6,6,6,6];
    $('#player').text('One');
}
function getColor(){
    if(p1_turn==true){
        return 'red';
    }
    else{
        return 'blue';
    }
}
var p1_turn = true; 
var player1 = prompt("Enter name of 1st player");
var player2 = prompt("Enter name of 2nd player");
$('#player').text(player1);
var col_top = [6,6,6,6,6,6,6]
$('.button').click(function(){
    var index = $(this).closest("td").index();//get index
    turnHandler(index);
    checkWin();
    //console.log(index);
});
$('#restart').click(function(){
    restart()
});

