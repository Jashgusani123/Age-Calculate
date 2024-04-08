function calculateAge(dd) {
    let today = new Date();
    var dd = new Date(dd);
    var year = today.getFullYear() - dd.getFullYear();
    var mouth = "";
    var day ="" ;
    
    if(dd.getMonth() > today.getMonth()){
         mouth = dd.getMonth() - today.getMonth();

    }else{
     mouth = today.getMonth() - dd.getMonth();

    }
    // var mouth = today.getMonth() - dd.getMonth();
    // console.log(m);
    if(dd.getDate() < today.getDate()){
     day =  today.getDate() - dd.getDate();

    }else{
     day =  dd.getDate() - today.getDate();
    }
    //  `year ${age} Month ${m} Day ${d}`;
    // console.log(d);

    if(year === 0 && mouth === 0 && day === 0){
        alert("Today!!!");
    }else if(today < dd){
        alert(" Enter Valid Date")
    }else{
    let y = document.getElementById("update-year");
    y.innerText = year;
     
    
    let m = document.getElementById("update-Mouth");
    m.innerText = mouth;
    
    let d = document.getElementById("update-Day");
    d.innerText = day;
    }
}

let dd = document.getElementById("ID");
// console.log(dd);
let ns ="";
let btn = document.getElementById("btn");
btn.addEventListener("click" , function(){
     calculateAge(dd.value);

})
 
