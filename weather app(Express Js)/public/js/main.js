const curDate=document.getElementById("day_date");
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
        var month=months[now.getMonth()];
        var date=now.getDate();
        let hours=now.getHours();
        let min=now.getMinutes();
        let period="AM";
        if(hours>11){
            period="PM";
            if(hours>12)hours-=12;
        }
        if(min<10){
            min="0"+min;
        }
        return `${month} ${date} | ${hours} : ${min} ${period}`;
    };

curDate.innerHTML=getCurrentDay()+'     | ' +getCurrentTime();


const submitbtn=document.getElementById("search");

const getinfo=async (e)=>{
    e.preventDefault();
    let city=document.getElementById("getcity").value;
    const temp=document.getElementById("temp");
    const status=document.getElementById("status");
    const city_country=document.getElementById("city_country");
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf28ba4599fcebfb0856a5c35de0174a&units=metric`;
    if(city == "")
    {
        document.getElementById("error").innerHTML="<span>Please Enter The City Name</span>";
        temp.innerHTML="";
        city_country.innerText="";
        document.getElementById("status").innerHTML="";
    }else{
        try{
            
            // const temp=document.getElementById("temp");
            // const status=document.getElementById("status");
            // const city_country=document.getElementById("city_country");
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];
            temp.innerHTML="<span>"+arrdata[0].main.temp+"&deg;C</span>";
            city_country.innerText=`${arrdata[0].name},   ${arrdata[0].sys.country}`;
            const weather=arrdata[0].weather[0].main;

            if(weather=="Sunny" || weather == "Clear"){
                mood="<i class='fas fa-sun' style='font-size:80px;color:#eccc68;'></i>";
            }else if(weather=="Clouds" || weather=="Haze"){
                mood="<i class='fas fa-cloud' style='font-size:80px;color: #f1f2f6;'></i>";
            }else if(weather=="Rainy"){
                mood="<i class='fas fa-cloud-rain' style='font-size:80px;color:#a4b0be;'></i>";
            }else{
                mood="<i class='fas fa-sun' style='font-size:80px;color:#a4b0be;'></i>";
            }
            document.getElementById("status").innerHTML="<span>"+mood+"</span>";
            document.getElementById("error").innerHTML="<span></span>";
        }
        catch{
            document.getElementById("error").innerHTML="<span>Please Enter The Proper City Name</span>";
            temp.innerHTML="";
            city_country.innerText="";
            document.getElementById("status").innerHTML="";
            
        }

    }

}

submitbtn.addEventListener("click",getinfo);