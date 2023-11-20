var randomno = Math.floor(Math.random()*3) + 1;
var choice;
function getval()
{
    // choice = document.querySelector("input").value;
    choice = prompt("Enter your Choice...");

    if(choice == randomno){
        document.querySelector("h1").innerHTML = "You Win....!!!! 😎";
        document.querySelector("h3").innerHTML = "kabhi kabhi lagta hain apun hi bhagwan hain.";
        document.querySelector(".img"+randomno).setAttribute("src","./images/ball.png");
    }
    else{
        document.querySelector("h1").innerHTML = "Better Luck Next time 😭";
        document.querySelector("h3").innerHTML = "chalo ye bhi theek hain.";
        document.querySelector(".img"+randomno).setAttribute("src","./images/ball.png");
    }
}
setTimeout(getval, 2000);
