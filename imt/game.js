$('document').ready(function() {
    var nums, n;

    init();
    
    $('#qty').on('input', init);
    $('#new')[0].onclick = init;
    $('#hide')[0].onclick = hide;

    function init() {
        $('#field').empty();
        var field = $('#field')[0];
        var qty = $('#qty')[0].value;

        nums = [];
        do {
            var num = Math.floor(Math.random() * 60) + 1;
            if(!nums.includes(num))
                nums.push(num);
        }
        while (nums.length < qty);

        for (var i = 0; i < 6; ++i) {
            var row = field.insertRow(i);
            for (var j = 0; j < 10; ++j) {
                var cell = row.insertCell(j);
                var id = 10*i+j+1;

                cell.id = "i" + id;

                if (nums.indexOf(id) >= 0) {
                    cell.innerText = nums.indexOf(id) + 1;
                    cell.classList.add('number');
                }
            }
        }

        $('#hide')[0].disabled = false;
    }

    function hide() {
        var number = $('.number');

        for (var i = 0; i < number.length; ++i) {
            number[i].classList.add('hidden');
            number[i].innerText = '';
            number[i].onclick = pick;
        }

        n = 0;
        this.disabled = true;
    }
    
    function pick() {
        this.classList.remove('hidden');
        for (var i = 0; i < nums.length; ++i)
            if (nums[i] == this.id.replace('i', '')) {
                if (i != n) {
                    if (this.innerText == '')
                        this.classList.add('wrong');
                } else
                    while (n < nums.length-1 &&
                        $('#i' + nums[++n])[0].classList.contains('wrong'));

                this.innerText = i + 1;

                return;
            }
    }
});