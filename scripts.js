/* variaveis */
var height, weight;
/* inputs */
var inputHeight, inputWeight;
var boxInput;
/* buttons */
var calculate, cancel;
/* spans erro */
var errorHeight, errorWeight;
/* Calculate imc */
var imc, result;
/* Box images and result*/
var boxImages, boxResult;

errorHeight = window.document.querySelector("#error-height");
// errorHeight.innerHTML = "Erro";

inputHeight = window.document.getElementById("height");
inputHeight.addEventListener("focusout", ()=>{
    boxInput = inputHeight.parentNode;
    boxInput.className = "box-input";
    errorHeight.innerHTML = "";

    if(inputHeight.value.length == 0){
        // alert("Campo não pode ser vazio.");
        inputHeight.value = "";
        inputHeight.focus();
        boxInput.classList.add("error");
        errorHeight.innerHTML = "Insira sua altura.";

    }else if(isNaN(inputHeight.value)){
        // alert("Digite uma altura valida.");
        inputHeight.value = "";
        inputHeight.focus();
        boxInput.classList.add("error");
        errorHeight.innerHTML = "Digite somente números.";
    }else{
        height = inputHeight.value.replace(/(\d{1})(\d{2})/, "$1.$2");
        if(height.length > 4){
            // alert("Digite uma altura valida.");
            inputHeight.value = "";
            inputHeight.focus();
            boxInput.classList.add("error");
            errorHeight.innerHTML = "Digite uma altura válida.";
        }else if(height > 3
            || height < 0){
            // alert("Digite uma altura valida");
            inputHeight.value = "";
            inputHeight.focus();
            boxInput.classList.add("error");
            errorHeight.innerHTML = "Digite uma altura válida.";
        }else{
            if(boxInput.className == "box-input error"){
                boxInput.classList.remove("error");
            }
            boxInput.classList.add("success");
            inputHeight.value = height;
            errorHeight.innerHTML = "";
        }
    }
});

errorWeight = window.document.querySelector("#error-weight");
// errorWeight.innerHTML = "Erro";

inputWeight = window.document.getElementById("weight");
inputWeight.addEventListener("focusout", ()=>{
    boxInput = inputWeight.parentNode;
    boxInput.className = "box-input";
    errorWeight.innerHTML = "";

    if(inputWeight.value.length == 0){
        // alert("error vazio");
        inputWeight.value = "";
        inputWeight.focus();
        boxInput.classList.add("error");
        errorWeight.innerHTML = "Insira seu peso.";
        
    }else if(inputWeight.value.length >= 6
        || inputWeight.value.length <= 1){
        // alert("Digite um valor valido");
        inputWeight.value = "";
        inputWeight.focus();
        boxInput.classList.add("error");
        errorWeight.innerHTML = "Insira um peso válido.";

    }else if(isNaN(inputWeight.value)){
        // alert("Preencha este campo");
        inputWeight.value = "";
        inputWeight.focus();
        boxInput.classList.add("error");
        errorWeight.innerHTML = "Insira um peso válido.";

    }else if(inputWeight.value < 10){
        inputWeight.value = "";
        inputWeight.focus();
        boxInput.classList.add("error");
        errorWeight.innerHTML = "Insira um peso válido.";
    }else{
        if(inputWeight.value.length == 2
        || inputWeight.value.length == 3){
            inputWeight.value += "00";
        }
        if(boxInput.className == "box-input error"
        || boxInput.className == "box-input success error"){
            boxInput.classList.remove("error");
            errorWeight.innerHTML = "";
        }
        // replaces
        if(inputWeight.value.length == 4){
            weight = inputWeight.value.replace(/(\d{2})(\d{2})/, "$1.$2");
            inputWeight.value = weight;
        }else if(inputWeight.value.length == 5){
            weight = inputWeight.value.replace(/(\d{3})(\d{2})/, "$1.$2");
            inputWeight.value = weight;
        }
        boxInput.classList.add("success");
    }
});

calculate = window.document.getElementById("calculate");
calculate.addEventListener("click", ()=>{
    // console.log(height,weight);
    
    if(height === undefined
    || height === null
    || height === ""){
        boxInput = inputWeight.parentNode;
        inputHeight.focus();
        boxInput.classList.add("error");
        errorHeight.innerHTML = "Insira sua altura.";
        return;
    }
    if(weight === undefined
    || weight === null
    || weight === ""){
        boxInput = inputWeight.parentNode;
        inputWeight.focus();
        boxInput.classList.add("error");
        errorWeight.innerHTML = "Insira seu peso.";
        return;
    }
    
    imc = Number(weight/(height*height)).toFixed(1);
    // console.log(imc);
    result = window.document.getElementById("result-imc");
    result.innerHTML = "IMC : "+imc.replace(".",",");

    boxImages = window.document.getElementById("box-images");
    boxImages.className = "";

    boxResult = window.document.getElementById("box-result");
    boxResult.className = "";

    if(imc < 18.5){
        // console.log("Baixo peso");
        boxImages.classList.add("low");
        boxResult.className = "result";
        boxResult.style.backgroundColor = "#77a3c5";
        boxResult.style.color = "#fff";
        boxResult.style.boxShadow = "0 0 10px 20px #77a3c5";
    }else if(imc < 24.9 && imc > 18.5){
        // console.log("Normal");
        boxImages.classList.add("normal");
        boxResult.className = "result";
        boxResult.style.backgroundColor = "#73a77e";
        boxResult.style.color = "#fff";
        boxResult.style.boxShadow = "0 0 10px 20px #73a77e";
    }else if(imc > 24.9 && imc < 29.9){
        // console.log("Excesso de peso");
        boxImages.classList.add("excess");
        boxResult.className = "result";
        boxResult.style.backgroundColor = "#e3c651";
        boxResult.style.color = "#fff";
        boxResult.style.boxShadow = "0 0 10px 20px #e3c651";
    }else if(imc < 35 && imc > 29.9){
        // console.log("Obesidade");
        console.log("deu certo")
        boxImages.classList.add("obesity");
        boxResult.className = "result";
        boxResult.style.backgroundColor = "#c2741f";
        boxResult.style.boxShadow = "0 0 10px 20px #c2741f";
    }else{
        // console.log("Obesidade extrema");
        boxImages.classList.add("extreme-obesity");
        boxResult.className = "result";
        boxResult.style.backgroundColor = "#c22339";
        boxResult.style.color = "#fff";
        boxResult.style.boxShadow = "0 0 10px 15px #c22339";
    }



});

cancel = window.document.getElementById("cancel");
cancel.addEventListener("click", ()=>{
    inputHeight.value = "";
    inputWeight.value = "";
    inputHeight.focus();
});