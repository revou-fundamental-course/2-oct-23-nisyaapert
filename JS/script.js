document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;
document.getElementById('reverse').onclick = reverseForm;

function tempConvert(){
    var fahrenheit=document.getElementById("fahrenheit").value;
    var celcius=document.getElementById("celcius").value;

    if(fahrenheit !=''){
        celcius = (parseInt(fahrenheit)-32)/1.8;
    } else{
        fahrenheit = (parseInt(celcius)*1.8)+32;
    }
    
    document.getElementById('fahrenheit').value = parseInt(fahrenheit);
    document.getElementById('celcius').value = parseInt(celcius); 
    var kalkulasi='';
    document.getElementById('kalkulasi').value = 'fahrenheit = (' + celcius + '*9/5)+32 =' + fahrenheit + ' atau celcius = ('+ fahrenheit + '-32) *5/9 =' + celcius; 
    
}
function clearForm(){
    document.getElementById('fahrenheit').value='';
    document.getElementById('celcius').value='';
    document.getElementById('kalkulasi').value='';
}

function reverseForm(){ //fungsi reverse/ tukar
    var celcius = document.getElementById('celcius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    
    var temp = celcius;
    celcius = fahrenheit;
    fahrenheit = temp;

    //meyimpan hasil input
    document.getElementById('celcius').value = celcius;
    document.getElementById('fahrenheit').value = fahrenheit;

    var cel = document.getElementsByName('Celcius');
    var fah = document.getElementsByName('Fahrenheit');

    var tukar = cel;
    cel = fah;
    fah = tukar;
    document.getElementsByName('Celcius') = '';
    document.getElementsByName('Fahrenheit') = '';

}
