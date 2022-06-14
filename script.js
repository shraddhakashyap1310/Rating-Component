
let btnSubmit=document.getElementById("submit");
let selectListItem = document.querySelectorAll("li");
let amountSelected=0;

function insertAmount()
{
    Amount();
    document.querySelector("#amount-selected span").textContent=amountSelected;
}

function Amount(){
    for(let i=0;i<selectListItem.length;i++)
    {
        if(selectListItem[i].classList.contains("select")){
            amountSelected++;
        }
    }
    String(amountSelected);
}


for(let i=0;i<selectListItem.length;i++)
{
    selectListItem[i].addEventListener("click",function(){
        selectListItem[i].classList.toggle("select");
    });
}

btnSubmit.addEventListener("click",function(){
    document.querySelector(".card:first-child").classList.add("hidden");
    document.querySelector(".card:nth-child(2)").classList.remove("hidden");
    insertAmount();
});

