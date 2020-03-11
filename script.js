document.addEventListener("DOMContentLoaded", function(){

document.querySelector("#btn").addEventListener("click", function(){
    var text = document.querySelector("#texto").value;
    document.querySelector("#resultado").innerHTML = upper(text)
})

function upper(text){
  return text.toUpperCase();   
}

})