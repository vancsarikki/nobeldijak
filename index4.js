function nevetkeres(){
    console.log(tomb)
    let sz=""
    let nev=document.getElementById("benev").value
        for (const elem of tomb.prizes) {
            if (typeof elem.laureates === "undefined"){
        
            }
            else {
               for (const dijazott of elem.laureates) {
                if (dijazott.firstname==nev){
                    //alert (dijazott.surname)
                    sz+`
                    <tr>
                    <td>
                    ${dijazott.firstnam}
                    </td>
                    <td>
                    ${dijazott.surname}
                    </td>
                    </tr>`
                    
               } 
                 
            }
        }
}
    document.getElementById("kiirashelye").innerHTML=sz