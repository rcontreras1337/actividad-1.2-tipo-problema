
const registroForm = document.querySelector('form');

var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        rutCompleto = rutCompleto.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp 	= rutCompleto.split('-');
        var digv	= tmp[1]; 
        var rut 	= tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
        
        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}

const limpiarFormulario = () => {
    document.getElementById("nombreMalo").innerHTML = ``;
    document.getElementById("celularMalo").innerHTML = ``;
    document.getElementById("emailMalo").innerHTML = ``;
    document.getElementById("paisMalo").innerHTML = ``;
    document.getElementById("rutMalo").innerHTML = ``;
    document.getElementById("passMalo").innerHTML = ``;

};

registroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    let contadorInvalidaciones = 0;
    limpiarFormulario();


    let url = window.location.href;
    const form = Object.fromEntries(new FormData(event.target));
    let prefijo = "+56 9 ";
    
    if (!form.name) {
        ++contadorInvalidaciones;
        document.getElementById("nombreMalo").innerHTML = `Ingresa un nombre correctamente.`;
    } 
        

    if(!form.phone || form.phone.length < 8 || !(/([0-9]+)/g.test(form.phone))){
        ++contadorInvalidaciones;
        document.getElementById("celularMalo").innerHTML = `Ingresa un numero de celular correctamente.`;
    }

    let regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/g;
    if (!form.email || !(regexCorreo.test(form.email))) {
        ++contadorInvalidaciones;
        document.getElementById("emailMalo").innerHTML = `Ingresa un email correctamente.`;
    }

    if(!form.country){
        ++contadorInvalidaciones;
        document.getElementById("paisMalo").innerHTML = `Ingresa un país correctamente.`;
    }

    if(!form.rut){
        ++contadorInvalidaciones;
        document.getElementById("rutMalo").innerHTML = `Ingresa un rut correctamente. (xxxxxxx-x)`;
    } else {
        document.getElementById("rutMalo").innerHTML = ``;
        if(!Fn.validaRut(form.rut)){
            ++contadorInvalidaciones;
            document.getElementById("rutMalo").innerHTML = `Ingresa un rut correctamente. (xxxxxxx-x)`;
        }
    }
    const REGEXPASS = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g;
    // debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
    if (!form.password || !(REGEXPASS.test(form.password))) {//Hola!1234
        ++contadorInvalidaciones;
        document.getElementById("passMalo").innerHTML = `debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.`;
    }

    if(contadorInvalidaciones == 0){
        location.href = 'index.html'
       
    } 
});






