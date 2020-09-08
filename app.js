function checkWrite(idofField){
    var getting = document.getElementById(idofField)
    var value = getting.value
    if(value === ""){
        alert('write a value mate')
    }
    else{
       getting.value = "";
    }
    console.log(value);

}