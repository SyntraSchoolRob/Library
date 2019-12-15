
    var lastName = '';
    var firstName = '';
    var numClicks = 0;

    document.getElementById('gebDatum').value = "1976-01-26T02:45";

    document.getElementById('btnKnop').addEventListener('click',
        function () {
            numClicks ++;
            if(numClicks === 1){
                lastName = document.getElementById('txtLast').value;
                firstName = document.getElementById('txtFirst').value;
                naamInh2.innerHTML = lastName + ' ' + firstName;

            }
            else if(numClicks > 1){
                lastName = document.getElementById('txtLast').value;
                firstName = document.getElementById('txtFirst').value;
                divResult.innerHTML += '<h3>' + lastName + ' ' + firstName + '</h3><br>';
            }
    },false);









