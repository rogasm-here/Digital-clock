setInterval(()=>{
    const d=new Date()
    const days=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let hrs=d.getHours()
    let min=d.getMinutes()
    let sec=d.getSeconds()
    let date=d.getDate()
    let month=months[d.getMonth()]
    let day=days[d.getDay()]
    let yr=d.getFullYear()

    if(hrs>=0 && hrs<=11){
        document.getElementById("ampm").innerHTML="AM"
        if( hrs == 0){
            var hh = 12
            document.getElementById("hrs").innerHTML=hh
        }
        else{
            var hh=hrs
            document.getElementById("hrs").innerHTML=hh
        }

    }

    else if(hrs>=12 && hrs<=23){
        document.getElementById("ampm").innerHTML="PM"
        if( hrs == 12){
            var hh = 12
            document.getElementById("hrs").innerHTML=hh
        }
        else{
            var hh = hrs - 12
            document.getElementById("hrs").innerHTML=hh
        }

    }
    let st1=hh.toString()
    let st2=min.toString()
    let arr1=Array.from(st1)
    let arr2=Array.from(st2)
    let arr=arr1.concat(arr2)
    let mn=0
    let md=0
    for(i of arr){
        if(i=='1'){
            mn++
        }
        else{
            md++
        }
    }

    let size=(mn*1) + (md*2)

    if(size==2){
        document.getElementById("sec_sec").style.left="50px"
        document.getElementById("sec_sec").style.bottom="88px"

    }
    else if(size==3){
        document.getElementById("sec_sec").style.left="60px"
        document.getElementById("sec_sec").style.bottom="88px"

    }
    else if(size==4){
        document.getElementById("sec_sec").style.left="70px"
        document.getElementById("sec_sec").style.bottom="88px"


    }
    else if(size==5){
        document.getElementById("sec_sec").style.left="80px"
        document.getElementById("sec_sec").style.bottom="88px"


    }
    else if(size==6){
        document.getElementById("sec_sec").style.left="90px"
        document.getElementById("sec_sec").style.bottom="88px"


    }
    else if(size==7){
        document.getElementById("sec_sec").style.left="100px"
        document.getElementById("sec_sec").style.bottom="88px"
        
    }
    else{
        document.getElementById("sec_sec").style.left="3px"
        document.getElementById("sec_sec").style.bottom="55px"

    }


    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=sec
    document.getElementById("tick").play()
    document.getElementById("date").innerHTML=date
    document.getElementById("month").innerHTML=month
    document.getElementById("day").innerHTML=day
    document.getElementById("yr").innerHTML=yr

}, 1000)
