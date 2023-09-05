
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('convert').onclick = tempconvert;
    document.getElementById('reset').onclick = reseting ;

    function tempconvert() {
        let celsius = document.getElementById('celsius').value;
        let farenheit = document.getElementById('farenheit').value;
        let kelvin = document.getElementById('kelvin').value;

        if (celsius != '') 
        {
            farenheit = (parseFloat(celsius) * 1.8) + 32;
            kelvin = parseFloat(celsius) + 273 ;
            document.getElementById('farenheit').value = parseFloat(farenheit).toFixed(1);
            document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(1);
        }
            
        else if( farenheit != '' )
        {
            celsius = (parseFloat(farenheit) -32) / 1.8;
            kelvin = parseFloat(celsius) + 273 ;
            document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
            document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(1);
        }

        else 
        {
            celsius= parseFloat(kelvin) - 273 ;
            farenheit = (parseFloat(celsius) * 1.8) + 32;
            document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
            document.getElementById('farenheit').value = parseFloat(farenheit).toFixed(1);
        }
    }
    function reseting()
        {
            document.getElementById('celsius').value = '';
            document.getElementById('farenheit').value = '';
            document.getElementById('kelvin').value = '';
        }
});


