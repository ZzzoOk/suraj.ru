$('document').ready(() => {
    var items, interval;
    var iOrder, pOrder;
    var score, iOk, pOk;

    init();
    
    $('#nback').on('input', init);
    $('#new')[0].onclick = init;
    $('#numbers')[0].onclick = init;
    $('#item')[0].onclick = check;
    $('#position')[0].onclick = check;
    var nback = $('#nback')[0].value;

    function init() {
        var useNums = $('#numbers')[0].checked;
        items = useNums ? [1, 2, 3, 4, 5, 6, 7, 8, 9] :
                ['red', 'green', 'blue', 'yellow',
                'magenta','cyan', 'orange', 'grey', 'black'];

        $('#field').empty();
        $('#item')[0].disabled = true;
        $('#position')[0].disabled = true;
        $('#score')[0].innerText = 'Score: 0';
        
        clearInterval(interval);

        var field = $('#field')[0];
        for (var i = 0; i < 3; ++i) {
            var row = field.insertRow(i);
            for (var j = 0; j < 3; ++j) {
                var cell = row.insertCell(j);
                cell.id = "i" + (3*i+j+1);
            }
        }
        
        var timeleft = 4;
        var cCell = $('#i5')[0];
        cCell.innerText = '4';
        cCell.style.color = '#cccccc';
        var timer = setInterval(() => {
            cCell.innerText = --timeleft;

            if (timeleft <= 0) {
                clearInterval(timer);
                cCell.innerText = '';
                cCell.style.color = 'black';
            }
        }, 1000);

        score = 0;
        iOrder = []; pOrder = [];
        interval = setInterval(() => {
            var n = iOrder.length - 1;
            if (n - nback >= 0) {
                if (!iOk && iOrder[n] == iOrder[n - nback])
                    changeScore(-1);
                if (!pOk && pOrder[n] == pOrder[n - nback])
                    changeScore(-1);
            }

            var pos = Math.floor(Math.random() * 9) + 1;
            var item = Math.floor(Math.random() * 9);

            iOrder.push(item);
            pOrder.push(pos);

            $('#item')[0].disabled = false;
            $('#position')[0].disabled = false;

            if (useNums)
                $('#i' + pos)[0].innerText = items[item];
            else
                $('#i' + pos)[0].style.backgroundColor = items[item];
            
            setTimeout(function() {
                $('#i' + pos)[0].innerText = '';
                $('#i' + pos)[0].style.backgroundColor = 'white';
            }, 1500);

            iOk = pOk = false;
        }, 4000);
    }

    function check() {
        var isItem = this.id == 'item';
        var order = isItem ? iOrder : pOrder;
        var n = order.length - 1;
        if (order[n] == order[n - nback]) {
            changeScore(1);

            if (isItem) {
                $('#item')[0].disabled = true;
                iOk = true;
            }
            else {
                $('#position')[0].disabled = true;
                pOk = true;
            }
        } else 
            changeScore(-1);
    }
    
    function changeScore(d) {
        score += d;
        $('#score')[0].innerText = 'Score: ' + score;
        $('#score')[0].style.color = d > 0 ? 'green' : 'red';

        setTimeout(() => {
            $('#score')[0].style.color = 'black';
        }, 1000);
    }
});