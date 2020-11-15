const curDate=document.getElementById("date");
    let weathericon=document.getElementById("wethericon");
    const curstatus="cloud";
    const getCurrentDay=()=>{
        var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        let currentTime=new Date();
        let day=weekday[currentTime.getDay()];
        return day;
    }

    const getCurrentTime=()=>{
        var months=new Array(12);
        months=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
        var now=new Date();
        var month=months[now.getMonth()+1];
        var date=now.getDate();
        let hours=now.getHours();
        let min=now.getMinutes();
        let period="Am";
        if(hours>11){
            period="PM";
            if(hours>12)hours-=12;
        }
        if(min<10){
            min="0"+min;
        }
        return `${month} ${date} | ${hours} : ${min} ${period}`;
    };
    curDate.innerHTML=getCurrentDay()+' | ' +getCurrentTime();

 const api_url =  
      "http://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=cf28ba4599fcebfb0856a5c35de0174a&units=metric"; 
  
async function getapi(url) { 
    
    const response = await fetch(url); 
    
    var data = await response.json(); 
    document.getElementById("temp").innerHTML="<span>"+data.main.temp+"&deg;C</span>";
    document.getElementById("temp-min-max").innerHTML="<span>Min "+data.main.temp_min+"&deg;C | Max "+data.main.temp_max+"&deg;C</span>";
    document.getElementById("location").innerHTML="<span>"+data.name+" ,"+data.sys.country+"</span>";
    console.log(data.weather[0].main);
    let weather=data.weather[0].main;
    let status;
    if(weather=="Sunny" || weather == "Clear"){
        status="<i class='fas fa-sun' style='font-size:100px;color:#eccc68;margin-top:45px;'></i>";
    }else if(weather=="Clouds"){
        status="<i class='fas fa-cloud' style='font-size:100px;color: #f1f2f6;margin-top:45px;'></i>";
    }else if(weather=="Rainy"){
        status="<i class='fas fa-cloud-rain' style='font-size:100px;color:#a4b0be;margin-top:45px;'></i>";
    }else{
        status="<i class='fas fa-cloud' style='font-size:100px;color:#a4b0be;margin-top:45px;'></i>";
    }
    document.getElementById("weathericon").innerHTML="<span>"+status+"</span>";
}
getapi(api_url);