choices={0:'rock',1:'paper',2:'scissor'};
computer_choice=document.getElementById('computer_image');
var player_score=document.getElementById('player_score').innerText;
var computer_score=document.getElementById('computer_score').innerText;
var player_bg=document.getElementsByClassName('player')[0].style.backgroundColor;
var computer_bg=document.getElementsByClassName('computer')[0].style.backgroundColor;
function choose(){
    var item = Math.floor(Math.random()*Math.floor(3));
    if (item === 0){
        computer_choice.src = 'images/rock.png';
    }
    else if (item === 1){
        computer_choice.src = 'images/paper.png';
    }
    else if (item === 2){
        computer_choice.src = 'images/scissor.png';
    }
    return item;
}
function rock_btn(){
    choose()
    var option = choose()
    document.getElementById('player_image').src='images/rock.png';
    if (option == 0){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+0;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+0;
        document.getElementById('computer').style.border='none';
        document.getElementById('player').style.border='none';
    }
    else if (option == 1){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+0;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+1;
        document.getElementById('computer').style.border='4px solid green';
        document.getElementById('player').style.border='4px solid red';
    }
    else if (option == 2){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+1;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+0;
        document.getElementById('computer').style.border='4px solid red';
        document.getElementById('player').style.border='4px solid green';
    }
}
function paper_btn(){
    choose()
    var option = choose()
    document.getElementById('player_image').src='images/paper.png';
    if (option == 0){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+1;
        document.getElementById('computer').style.border='4px solid red';
        document.getElementById('player').style.border='4px solid green';
    }
    else if (option == 1){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+0;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+0;
        document.getElementById('computer').style.border='none';
        document.getElementById('player').style.border='none';
    }
    else if (option == 2){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+0;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+1;
        document.getElementById('computer').style.border='4px solid green';
        document.getElementById('player').style.border='4px solid red';
    }
    
}
function scissor_btn(){
    choose()
    var option = choose()
    document.getElementById('player_image').src='images/scissor.png';
    if (option == 0){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+0;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+1;
        document.getElementById('computer').style.border='4px solid green';
        document.getElementById('player').style.border='4px solid red';
    }
    else if (option == 1){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+1;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+0;
        document.getElementById('computer').style.border='4px solid red';
        document.getElementById('player').style.border='4px solid green';
    }
    else if (option == 2){
        document.getElementById('player_score').innerText=parseInt(document.getElementById('player_score').innerText)+0;
        computer_score=document.getElementById('computer_score').innerText=parseInt(document.getElementById('computer_score').innerText)+0;
        document.getElementById('computer').style.border='none';
        document.getElementById('player').style.border='none';
    }
}

function start(){
    var name = prompt("Enter you name");
    console.log("Welcome ",name);
    document.getElementById('start_btn').style.display='none';
    document.getElementById('reset_btn').style.display='flex';
    document.getElementById('reset_btn').style.margin='auto';
    document.getElementById('rock').style.display='flex';
    document.getElementById('paper').style.display='flex';
    document.getElementById('scissor').style.display='flex';
    document.getElementById('Player_name').style.display='flex';
    document.getElementById('player_name').innerText=name;
    document.getElementById('instruction').innerText='Select your move';
}
function reset(){
    document.getElementById('start_btn').style.display='none';
    document.getElementById('player_score').innerText=0;
    document.getElementById('computer_score').innerText=0;
    document.getElementById('computer_image').src='rock paper scissor.JPG';
    document.getElementById('player_image').src='rock paper scissor.JPG';
    document.getElementById('computer').style.border='none';
    document.getElementById('player').style.border='none';
}