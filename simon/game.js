$('document').ready(() => {
    let level = 1;
    let queue = [];
    let processing = false;

    $('#new')[0].onclick = init;

    function init() {
        $('#level')[0].innerText = 'Level: ' + level;
        
        queue = [];
        processing = true;

        (function lightup(i) {
            setTimeout(() => {
                let color = Math.floor(Math.random() * 4);
                
                queue.push(color);
                
                switch (color) {
                    case 0:
                        red();
                        break;
                    case 1:
                        green();
                        break;
                    case 2:
                        blue();
                        break;
                    case 3:
                        yellow();
                        break;
                }

                if (--i)
                    lightup(i);
                else
                    queue = queue.reverse();
            }, 1000);
        }(level));
    }

    function red()
    {
        $('#red')[0].style.backgroundColor = '#f78b6e';

        setTimeout(() => {
            $('#red')[0].style.backgroundColor = '#f45325';
        }, 500);
    }

    function green()
    {
        $('#green')[0].style.backgroundColor = '#97df07';
        
        setTimeout(() => {
            $('#green')[0].style.backgroundColor = '#81bd06';
        }, 500);
    }

    function blue()
    {
        $('#blue')[0].style.backgroundColor = '#69cdfc';
        
        setTimeout(() => {
            $('#blue')[0].style.backgroundColor = '#05a5ef';
        }, 500);
    }
    
    function yellow()
    {
        $('#yellow')[0].style.backgroundColor = '#ffd466';
        
        setTimeout(() => {
            $('#yellow')[0].style.backgroundColor = '#ffba07';
        }, 500);
    }

    function check(color) {
        if (processing && queue.pop() != color) {
            alert('GAME OVER!');

            level = 1;
            queue = [];
            processing = false;

            $('#level')[0].innerText = 'Level: 0';

            return;
        }

        switch (color) {
            case 0:
                red();
                break;
            case 1:
                green();
                break;
            case 2:
                blue();
                break;
            case 3:
                yellow();
                break;
        }

        if (processing && queue.length < 1) {
            ++level;

            setTimeout(() => {
                init();
            }, 1500);
        }
    }

    $('#red').mousedown(() => {
        check(0);
    });

    $('#green').mousedown(() => {
        check(1);
    });
        
    $('#blue').mousedown(() => {
        check(2);
    });
            
    $('#yellow').mousedown(() => {
        check(3);
    });

    (function() {
        let td = $('td');
        setTimeout(() => {
            td[0].style.backgroundColor = '#f45325';
        }, 500);
        setTimeout(() => {
            td[1].style.backgroundColor = '#81bd06';
        }, 1000);
        setTimeout(() => {
            td[3].style.backgroundColor = '#ffba07';
        }, 1500);
        setTimeout(() => {
            td[2].style.backgroundColor = '#05a5ef';
        }, 2000);
    }());
});