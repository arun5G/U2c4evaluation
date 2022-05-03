// write js code here corresponding to favourites.html


var q=JSON.parse(localStorage.getItem("favourites")) || [];


displayData(q);
function displayData(q){
    // console.log(q)

    q.forEach(function(el,index){

        var tr= document.createElement("tr")
        var td1=document.createElement("td")
   var td2=document.createElement("td")
   var td3=document.createElement("td")
         var td4=document.createElement("td")
 var td5=document.createElement("td")
 var td6=document.createElement("td")
td1.innerText=el.match
td2.innerText=el.ta
td3.innerText=el.tb
td4.innerText=el.date
td5.innerText=el.venue;
td6.innerText="Remove as favourites"

td6.addEventListener("click",function(){
    // console.log(el)
    del(el,index)
    // fav(el,index)
})



tr.append(td1,td2,td3,td4,td5,td6)

document.querySelector("tbody").append(tr)



        // console.log(el)
    })
}

function del(el,index){
    
q.splice(index,1)
localStorage.setItem("favourites",JSON.stringify(q))
// localStorage.removeItem("favourites")
window.location.reload()
    // var arr=JSON.parse(localStorage.getItem("favourites")) || [];
    // arr.push(el);
    // console.log(el,arr);
    // localStorage.setItem("favourites",JSON.stringify(arr))

}