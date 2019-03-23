function leerCampo(parCampo) {
    
    var id = parCampo
    return document.getElementById(id).value;
}

function formSelected(parId,event){

    document.getElementById("form1").style.display='none';
    document.getElementById("form2").style.display='none';
    document.getElementById("form3").style.display='none';
    document.getElementById("form4").style.display='none';
    document.getElementById("form5").style.display='none';
    document.getElementById("form6").style.display='none';
    document.getElementById("form7").style.display='none';
    document.getElementById("form8").style.display='none';
    document.getElementById("form9").style.display='none';
    document.getElementById("form10").style.display='none';
    document.getElementById("form11").style.display='none';
    document.getElementById("form12").style.display='none';
    document.getElementById("form13").style.display='none';
    document.getElementById("form14").style.display='none';
    document.getElementById("form15").style.display='none';
    document.getElementById("form16").style.display='none';
    document.getElementById("form17").style.display='none';
    document.getElementById("form18").style.display='none';







   event.preventDefault(); 
   var formulario= document.getElementById(parId);
   formulario.style.display= 'block';
   
}


function ejercicio1()
{
    var campo1 = Number(leerCampo("nota1"));
    var campo2 = Number(leerCampo("nota2"));
    var campo3 = Number(leerCampo("nota3"));
    var campo4 = Number(leerCampo("nota4"));

    if(verificarRango(campo1,0,100)&&verificarRango(campo2,0,100)&&verificarRango(campo3,0,100)&&verificarRango(campo4,0,100))
    {
        var media = (campo1+campo2+campo3+campo4)/4
        var arrayValores = [campo1,campo2,campo3,campo4];
        var tabla="<table border=\"1\">";

        for (let i = 0; i < arrayValores.length; i++) {
            var calificacion = CalcularCalificacion(arrayValores[i]);
            tabla+="<tr><td>"+arrayValores[i]+"</td><td>"+calificacion+"</td></tr>";
        }
        tabla+="<tr><td> media: "+media+"</td><td>"+CalcularCalificacion(media)+"</td></tr>";
        var tablaResult = document.getElementById("tbl");
    
        

    
    
    tabla+="</table>";
    
    tablaResult.innerHTML= tabla;
    tablaResult.className = "tbl";
    }
    else{
        alert("Los campos de texto se deben llenar con números entre 0 y 100");
    }
}
function verificarRango(parNumero,parRangoMinimo, parRangoMaximo)
{
    if(parRangoMaximo>0)
    {
        if((parNumero>=parRangoMinimo)&&(parNumero<=parRangoMaximo))
        {
            return true;
        }
    }
    else{
        if(parNumero>=parRangoMinimo)
        {
            return true;
        }
    }
   
    return false;
}
function CalcularCalificacion(parNota){
 
    if(parNota>=0 && parNota<=59)
    {
        return "E";
    }
    if(parNota>=60 && parNota<=69)
    {
        return "D";
    }
    if(parNota>=70 && parNota<=79)
    {
        return "C";
    }
    if (parNota>=80 && parNota<=89)
    {
        return "B";
    }
   return "A";
   
}

function ejercicio2()
{
    var masa1 =Number(leerCampo("m1"));
    var masa2= Number (leerCampo("m2"));
    var distancia= Number (leerCampo("distancia"));
    if(verificarRango(masa1,0,0)&&verificarRango(masa2,0,0)&&verificarRango(distancia,0,0))
    {
        var fuerza= (masa1*masa2*(6.673*(Math.pow(10,-8))))/(distancia);
        document.getElementById("respuesta").style.display='block';
        document.getElementById("resultado").innerHTML=fuerza;
    }
    else{
        alert("Verifique que los valores sean correctos");
    }
}

function ejercicio3()
{
    var masa =Number(leerCampo("masa"));
   
    if(verificarRango(masa,0,0))
    {
        var energia= ((2.997925)*(Math.pow(10,10)))*(Math.pow(masa,3));
        document.getElementById("respuestaE").style.display='block';
        document.getElementById("energia").innerHTML=energia;
    }
    else{
        alert("Verifique que los valores sean correctos");
    }
}


function ejercicio4()
{
    var ladoA =Number(leerCampo("ladoA"));
    var ladoB =Number(leerCampo("ladoB"));
   
    if(verificarRango(ladoA,0,0)&&verificarRango(ladoB,0,0))
    {
        var hipotenusa= Math.sqrt((Math.pow(ladoA,2))+(Math.pow(ladoB,2)));
        document.getElementById("respuestaH").style.display='block';
        document.getElementById("hipotenusa").innerHTML=hipotenusa;
    }
    else{
        alert("Verifique que los valores sean correctos");
    }
}

function ejercicio5()
{
    var ladoA =Number(leerCampo("lado1"));
    var ladoB =Number(leerCampo("lado2"));
    var ladoC = Number(leerCampo("lado3"));
   
    if(verificarRango(ladoA,0,0)&&verificarRango(ladoB,0,0)&&verificarRango(ladoC,0,0))
    {
        var p = (ladoA+ladoB+ladoC)/2;
        var area= Math.sqrt(p*(p-ladoA)*(p-ladoB)*(p-ladoC));
        document.getElementById("respuestaA").style.display='block';
        document.getElementById("area").innerHTML=area;
    }
    else{
        alert("Verifique que los valores sean correctos");
    }
}
function ejercicio6()
{
    var varEntrada = leerCampo("hora");
    var vector=[];
    vector[0]= Number(varEntrada[0].concat(varEntrada[1]));
    vector[1]= (varEntrada[3].concat(varEntrada[4]));
    

    if(verificarRango(vector[0],0,23)&&verificarRango(vector[1],0,59))
    {
       var hora;
       var minutos= vector[1];
            if(vector[0]>12){
                 hora= String(vector[0]-12).concat(":"+minutos).concat(" pm");
        
            }
            if(vector[0]<=12)
            {
                hora = String(vector[0]).concat(":"+minutos).concat(" am");
            }


            if(vector[0] == 00)
            {
               hora = "12:00 am";
      
            }
           

            
        document.getElementById("respuestasH").style.display='block';
        document.getElementById("rhora").innerHTML=hora;
    }
    else{
        alert("Verifique que la hora dada es válida");
    }
}
function ejercicio7()
{

}

function ejercicio8()
{
    var varEntrada = leerCampo("hora");
}
function ejercicio9()
{
    var varEntrada = Number(leerCampo("radio"));
    var perimetro= 2*(3.14)*(varEntrada);
    var area = 3.14*(Math.pow(varEntrada,2));
    var diametro = varEntrada*varEntrada;

    document.getElementById("respuestasCirculo").style.display='block';
    document.getElementById("rarea").innerHTML=perimetro;
    document.getElementById("rperimetro").innerHTML=area;
    document.getElementById("rdiametro").innerHTML=diametro;
}
function ejercicio10()
{
var varEntrada =(leerCampo("numeroara"));

var numeroRomano="";

var res;
var entero;

entero= Math.trunc(varEntrada/1000);
res=varEntrada%1000;

switch (entero) {
    case 1: numeroRomano= numeroRomano.concat("M");
    break;
    case 2: numeroRomano= numeroRomano.concat("MM");
    break;
    case 3: numeroRomano= numeroRomano.concat("MMM");
    break;
}

entero=Math.trunc(res/100);
res=res%100;

switch (entero) {
    case 1:numeroRomano=numeroRomano.concat("C");
    break;
    case 2:numeroRomano=numeroRomano.concat("CC");
    break;
    case 3: numeroRomano=numeroRomano.concat("CCC");
    break;
    case 4: numeroRomano=numeroRomano.concat("CD");
    break;
    case 5: numeroRomano=numeroRomano.concat("D");
    break;
    case 6: numeroRomano=numeroRomano.concat("DC");
    break;
    case 7: numeroRomano=numeroRomano.concat("DCC");
    break;
    case 8: numeroRomano=numeroRomano.concat("DCCC");
    break;
    case 9: numeroRomano=numeroRomano.concat("CM");
    break;
}

entero=Math.trunc(res/10);
res=res%10;

switch (entero) {
    case 1: numeroRomano=numeroRomano.concat("X");
    break;
    case 2: numeroRomano=numeroRomano.concat("XX");
    break;
    case 3: numeroRomano=numeroRomano.concat("XXX");
    break;
    case 4: numeroRomano=numeroRomano.concat("XL");
    break;
    case 5: numeroRomano=numeroRomano.concat("L");
    break;
    case 6: numeroRomano=numeroRomano.concat("LX");
    break;
    case 7: numeroRomano=numeroRomano.concat("LXX");
    break;
    case 8: numeroRomano=numeroRomano.concat("LXXX");
    break;
    case 9: numeroRomano=numeroRomano.concat("XC");
    break;
}

switch (res) {
    case 1: numeroRomano=numeroRomano.concat("I");
    break;
    case 2: numeroRomano=numeroRomano.concat("II");
    break;
    case 3: numeroRomano=numeroRomano.concat("III");
    break;
    case 4: numeroRomano=numeroRomano.concat("IV");
    break;
    case 5: numeroRomano=numeroRomano.concat("V");
    break;
    case 6: numeroRomano=numeroRomano.concat("VI");
    break;
    case 7: numeroRomano=numeroRomano.concat("VII");
    break;
    case 8: numeroRomano=numeroRomano.concat("VIII");
    break;
    case 9: numeroRomano=numeroRomano.concat("IX");
    break;
}

document.getElementById("respuestaRomano").style.display='block';
document.getElementById("romano").innerHTML=numeroRomano;

}
function ejercicio11()
{
    var numero = Number(leerCampo("num"));
    var decenas = Math.trunc(numero%100);

    if(verificarRango(numero,0,9999)&& decenas!=00)
    {
        if(decenas<50){
            numero= numero-decenas;
    
        }else{
            numero= (100-decenas)+numero;
        }
    

    }
   
    document.getElementById("respuestaaprox").style.display='block';
    document.getElementById("numeroaprox").innerHTML=numero;
}
function ejercicio12()
{
    var f = new Date();
    var fecha= leerCampo("fechanacimiento");
    var dia= fecha[0]+fecha[1];
    var mes= fecha[3]+fecha[4];
    var anio= fecha[6]+fecha[7]+fecha[8]+fecha[9];

    var edad= (f.getFullYear()-(anio));
    
    document.getElementById("respuestae").style.display='block';
    document.getElementById("edad").innerHTML=edad;
}

function ejercicio13()
{
    var a = leerCampo("a");
    var b = leerCampo("b");
    var c = leerCampo("c");
    var d = leerCampo("d");
    var e = leerCampo("e");
    var f = leerCampo("f");

    var x = ((c*e)-(b*f))/((a*e)-(b*d));
    var y = ((a*f)-(c*d))/((a*e)-(b*d));

    document.getElementById("recuacion").style.display='block';
    document.getElementById("ecuacionx").innerHTML=x;
    document.getElementById("ecuaciony").innerHTML=y;

}

function ejercicio14()
{
    var anio = leerCampo("anio");
    if(verificarRango(anio,0,0))
    {
        var msj= "No es bisiesto";
        if(esAnioBisiesto(anio))
        {
            msj="Es bisiesto";
        }
        
        document.getElementById("ranio").style.display='block';
        document.getElementById("aniob").innerHTML=msj;

    }else{
        alert("verifique que ingreso un año valido");
    }
}
function ejercicio15()
{
    var mes = Number(leerCampo("varmes"));
    var anio = leerCampo("varanio")
    var dias=0;
    if(verificarRango(anio,0,0)&&verificarRango(mes,0,12))
    {
        if(esAnioBisiesto(anio))
        {
            switch (mes) {
                case 1: dias=31; 
                break;
                case 2: dias=29;
                break;
                case 3: dias=31; 
                break;
                case 4: dias=30;
                break;
                case 5: dias=31; 
                break;
                case 6: dias=30;
                break;
                case 7: dias=31; 
                break;
                case 8: dias=31;
                break;
                case 9: dias=30; 
                break;
                case 10: dias=31;
                break;
                case 11: dias=30; 
                break;
                case 12: dias=31;
                break;
            }

        }
        if(!esAnioBisiesto(anio)){
            switch (mes) {
                case 1: dias=31; 
                break;
                case 2: dias=28;
                break;
                case 3: dias=31; 
                break;
                case 4: dias=30;
                break;
                case 5: dias=31; 
                break;
                case 6: dias=30;
                break;
                case 7: dias=31; 
                break;
                case 8: dias=31;
                break;
                case 9: dias=30; 
                break;
                case 10: dias=31;
                break;
                case 11: dias=30; 
                break;
                case 12: dias=31;
                break;
            }
            

        }
        document.getElementById("rdias").style.display='block';
        document.getElementById("rdia").innerHTML=dias;
    }else{
        alert("verifique que esta escribiendo un año y un mes correcto")
    }

}

function esAnioBisiesto(parAnio)
{
    if(parAnio%4==0 && parAnio%100!=0)
    {
       return true;
       
    }
    if(parAnio%4==0 && parAnio%100==0)
    {
        if(parAnio%400==0)
        {
            return true;
        }
        return false;
    }
    return false;
}

function ejercicio17()
{
    var dinero= leerCampo("dinero");
    if(verificarRango(dinero,0,0))
    {
     var vectorBilletes = [100000,50000,20000,10000,5000,2000];
     var vectorConteo=[0,0,0,0,0,0];
     var dineroTemporal=0;
     var contador=0;

     dineroTemporal= dinero
     for (let i = 0; i < vectorBilletes.length; i++) { 
         contador=0; 
        while (dineroTemporal>=vectorBilletes[i]) {
            dineroTemporal= dineroTemporal-vectorBilletes[i];
            contador++;
        }
        vectorConteo[i]=contador;
         
     }

     for (let i = 0; i < vectorConteo.length; i++) {
        
        document.getElementById("moneda"+i).innerHTML=vectorConteo[i];
         
     }
        
    }

    document.getElementById("monedas").style.display='block';

}
function ejercicio18(){
    var numero = leerCampo("nu");
    var txt="";
    if(numero>0)
    {
        txt="Positivo"
    }
    if(numero<0){
        txt="Negativo"
    }
    if(numero==0){
        txt="Igual a 0"
    }
    document.getElementById("positivo").style.display='block';
    document.getElementById("rpositivo").innerHTML=txt;
}

    
