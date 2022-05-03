// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",catching)
var arr=JSON.parse(localStorage.getItem("schedule")) || [];
function catching(){
    event.preventDefault()
    var o={
     match:masaiForm.matchNum.value,
        ta:masaiForm.teamA.value,
    tb:masaiForm.teamB.value,
    date:masaiForm.date.value,
   venue:masaiForm.venue.value,

    }
    arr.push(o)
// console.log(match,ta,tb,date,venue)

localStorage.setItem("schedule",JSON.stringify(arr))
window.location.href="matches.html"
}
 
