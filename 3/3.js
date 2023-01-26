const h1 = document.getElementsByTagName("h1");
const a = document.getElementsByTagName("a");

for(let i = 0; i < a.length; i++){
    if(a[i].innerHTML === h1[0].innerHTML){
        a[i].style.backgroundColor = "red"; 
    }
}

