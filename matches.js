// write js code here corresponding to matches.html

var q= JSON.parse(localStorage.getItem("schedule")) || [];

displayData(q);
function displayData(q){
    // console.log(q)

    q.forEach(function(el){

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
td6.innerText="Favourites"

td6.addEventListener("click",function(){
    // console.log(el)
    fav(el)
})



tr.append(td1,td2,td3,td4,td5,td6)

document.querySelector("tbody").append(tr)



        // console.log(el)
    })
}
function fav(el){
    var arr=JSON.parse(localStorage.getItem("favourites")) || [];
    arr.push(el);
    console.log(el,arr);
    localStorage.setItem("favourites",JSON.stringify(arr))
}
// q.forEach(function)

// var d=document.querySelector("#filterVenue")
// // console.log(d.value)

// d.addEventListener("click",function(el){
//     var pq=[];
//     pq.push(d.value)
//     // console.log(pq)
//     // console.log(el)
// if(d.value=="Mumbai"){
//     // console.log(q)
//     q.filter(function(acc,i){
//         if(q.venue=="Mumbai"){
//             return true
//         }
//     })
//     console.log(q)
// }



// })



// d.filter.addEventListener("change",filter)
// var values=filter
// var filterData=d.filter(
//     function(el){
//         return el.venue== values;


//     }
// )
// displayData(filterData)









