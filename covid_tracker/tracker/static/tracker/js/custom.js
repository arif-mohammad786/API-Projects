const getdata=async ()=>{
    const result=await fetch(url);
    const data=await result.json();
    for(let i=0;i<data.Countries.length;i++){
        if(`${data.Countries[i].Country}` == `${count}`){
            document.getElementById("newconfirmed").innerText=data.Countries[i].NewConfirmed;
            document.getElementById("totalconfirmed").innerText=data.Countries[i].TotalConfirmed;
            
            document.getElementById("newdeaths").innerText=data.Countries[i].NewDeaths;
            document.getElementById("totaldeaths").innerText=data.Countries[i].TotalDeaths;
            
            document.getElementById("newrecovered").innerText=data.Countries[i].NewRecovered;
            document.getElementById("totalrecovered").innerText=data.Countries[i].TotalRecovered;
        }
    }
}

const url=`https://api.covid19api.com/summary`;
count=document.getElementById("country").value;
$("#refresh").click(()=>{
    count=document.getElementById("country").value;
    getdata();
})

getdata();