$(document).ready(function() {
    //setUnload("Вы, к сожалению, не смогли окончить тест.\nВаш IQ менее 85 баллов?");
    initButtons();
    //initInput();
	initDirectInput();
    initDialogs();
    initChart();
});

/*  logic  */

function CreateEasyTest() {
    return new Test({
        title: 'Тест на сложение',
        cookie_name: 'stat_ex',
        task_count: 50,
        training_chance: 50,
        best_range: 4,
        show_socionics: true,
        penalty: 1.0,
        
        resetTask: function () {
                $('#task').html("1 + 1");
                $('#buttons').show();
                $('#rainman-canvas').hide();
                $('#task').show();
            },
            
        getTask: function () {
                return $('#task').html();
            },
        
        showError: function () {
                $('#task').css({'color': 'rgb(205, 0, 0)'});
                setTimeout(function() {
                    $('#task').css({'color': 'rgb(34, 34, 34)'});
                }, 200);
            },
        
        createTask: function () {
                return getRandomInt(1, 10) + ' + ' + getRandomInt(1, 10);
            },
        
        setTask: function (task) {
                $('#task').html(task);
            },
        
        taskToString: function (task) {
                return '"' + task + '"';
            },
        
        getTestResults: function (avg_time, total_errors) {
                avg_time /= 1000.0;
                
                var res_string = '';
            
                if (avg_time <= 0.80) {
                    res_string = "Слава роботам!";
                } else if (avg_time <= 1.0) {
                    res_string = "Гений!";
                } else if (avg_time <= 1.2) {
                    res_string = "Отлично";
                } else if (avg_time <= 1.5) {
                    res_string = "Хорошо";
                } else if (avg_time <= 1.8) {
                    res_string = "Плохо";
                } else {
                    res_string = "Всё очень плохо";
                }
                
                return res_string;
            },
        
        checkResult: function (task, value) {
                try {
                    var values = task.split('+');
                    if ((parseInt($.trim(values[0])) + parseInt($.trim(values[1]))) === parseInt(value)) {
                        return true;
                    }
                } 
                catch (e) 
                {
                }
                return false;       
            },
        });        
}

function CreateHardTest() {
    return new Test({
        title: 'Тест на простое умножение',
        cookie_name: 'simple_multi',
        task_count: 25,
        training_chance: 0,
        best_range: 4,
        show_socionics: false,
        penalty: 1.0,
        
        resetTask: function () {
                $('#task').html("11 * 2");
                $('#buttons').hide();
                $('#rainman-canvas').hide();
                $('#task').show();
            },
            
        getTask: function () {
                return $('#task').html();
            },
        
        showError: function () {
                $('#task').css({'color': 'rgb(205, 0, 0)'});
                setTimeout(function() {
                    $('#task').css({'color': 'rgb(34, 34, 34)'});
                }, 200);
            },
        
        createTask: function () {
                return getRandomInt(11, 100) + ' * ' + getRandomInt(2, 10);
            },
        
        setTask: function (task) {
                $('#task').html(task);
            },
        
        taskToString: function (task) {
                return '"' + task + '"';
            },
        
        getTestResults: function (avg_time, total_errors) {
                avg_time /= 1000.0;
                
                var res_string = '';
            
                if (avg_time <= 1.0) {
                    res_string = "Слава роботам!";
                } else if (avg_time <= 2.0) {
                    res_string = "Гений!";
                } else if (avg_time <= 3.0) {
                    res_string = "Отлично";
                } else if (avg_time <= 4.0) {
                    res_string = "Хорошо";
                } else if (avg_time <= 10.0) {
                    res_string = "Плохо";
                } else {
                    res_string = "Всё очень плохо";
                }
                
                return res_string;
            },
        
        checkResult: function (task, value) {
                try 
                {
                    var values = task.split('*');
                    if ((parseInt($.trim(values[0])) * parseInt($.trim(values[1]))) === parseInt(value)) {
                        return true;
                    }
                } 
                catch (e) 
                {
                }
                return false;       
            },
        });
}

function CreateImpossibleTest() {
    return new Test({
        title: 'Тест на сложное умножение',
        cookie_name: 'multi',
        task_count: 15,
        training_chance: 0,
        best_range: 3,
        show_socionics: false,
        penalty: 3.0,
         
        resetTask: function () {
                $('#task').html("11 * 11");
                $('#buttons').hide();
                $('#rainman-canvas').hide();
                $('#task').show();
            },
            
        getTask: function () {
                return $('#task').html();
            },
        
        showError: function () {
                $('#task').css({'color': 'rgb(205, 0, 0)'});
                setTimeout(function() {
                    $('#task').css({'color': 'rgb(34, 34, 34)'});
                }, 200);
            },
        
        createTask: function () {
                return getRandomInt(11, 100) + ' * ' + getRandomInt(11, 100);
            },
        
        setTask: function (task) {
                $('#task').html(task);
            },
        
        taskToString: function (task) {
                return '"' + task + '"';
            },
        
        getTestResults: function (avg_time, total_errors) {
                avg_time /= 1000.0;
                
                var res_string = '';
            
                if (avg_time <= 10.0) {
                    res_string = "Слава роботам!";
                } else if (avg_time <= 15.0) {
                    res_string = "Гений!";
                } else if (avg_time <= 25.0) {
                    res_string = "Отлично";
                } else if (avg_time <= 45.0) {
                    res_string = "Хорошо";
                } else if (avg_time <= 75.0) {
                    res_string = "Плохо";
                } else {
                    res_string = "Всё очень плохо";
                }
                
                return res_string;
            },
        
        checkResult: function (task, value) {
                try 
                {
                    var values = task.split('*');
                    if ((parseInt($.trim(values[0])) * parseInt($.trim(values[1]))) === parseInt(value)) {
                        return true;
                    }
                } 
                catch (e) 
                {
                }
                return false;       
            },
        });
}

function CreateSpecialTest() {
    return new Test({
        title: 'Тест "Человек дождя"',
        cookie_name: 'stat_rainman',
        task_count: 15,
        training_chance: 0,
        best_range: 3,
        show_socionics: false,
        rainman_task: null,
        penalty: 1.0,
          
        resetTask: function () {
                $('canvas').clearCanvas();
                this.rainman_task = null;
                
                $('#buttons').show();
                $('#rainman-canvas').show();
                $('#task').hide();
                
                this.setTask(2);
            },
            
        getTask: function () {
                return '' + parseInt(this.rainman_task);
            },
        
        showError: function () {
                $('canvas').css({'border-bottom': '2px solid rgb(205, 0, 0)'});
                setTimeout(function() {
                    $('canvas').css({'border-bottom': '2px solid rgb(255, 255, 255)'});
                }, 200);
            },
        
        createTask: function () {
                return '' + getRandomInt(2, 19);
            },
        
        setTask: function (task) {
                task = parseInt(task);
                this.rainman_task = task;
                
                $('canvas').clearCanvas();
                
                for (var i = 0; i < task; i++) {
                    $('canvas').drawImage({
                        //source: 'toothpick.png',
						source: 'bg.png',
                        x: getRandomInt(104, 311), 
                        y: getRandomInt(104, 311), 
                        rotate: getRandomInt(0, 360)
                    });
                }
            },
        
        taskToString: function (task) {
                return '"' + task + '"';
            },
        
        getTestResults: function (avg_time, total_errors) {
                avg_time /= 1000.0;
                
                var res_string = '';
            
                if (avg_time <= 1.5) {
                    res_string = "Слава роботам!";
                } else if (avg_time <= 2.0) {
                    res_string = "Гений!";
                } else if (avg_time <= 3.0) {
                    res_string = "Отлично";
                } else if (avg_time <= 4.0) {
                    res_string = "Хорошо";
                } else if (avg_time <= 10.0) {
                    res_string = "Плохо";
                } else {
                    res_string = "Всё очень плохо";
                }
                
                return res_string;
            },
        
        checkResult: function (task, value) {
                try 
                {
                    if (!task) {
                        return false;
                    }
                    if (parseInt(task) === parseInt(value)) {
                        return true;
                    }
                } 
                catch (e) 
                {
                }
                return false;       
            },
        });
}

function Test(test)
{
    this.test = test;
    
    this.initTest = function() {
        this.test_start_time = null;
        this.test_task_time = null;
        this.test_result_map = null;
        this.test_last_task = null;
        
        this.test.resetTask(); //api
        
        var counter = $('#counter'); 
        if (counter) {
            counter.html(0 + '/' + this.test.task_count);
        }
        
        this.loadChartData();
    };
    
    this.startTest = function () {
        this.test_start_time = new Date();
        this.test_task_time = new Date();
        this.test_result_map = {};
        this.test_last_task = '';
        
        this.nextTask();
    };

    this.onUserInput = function (value) {
        var inpt = $('#number-npt');
        if (inpt) {
            inpt.val('');
        }
        
        if (!this.test_start_time) {
            if (this.test.checkResult(this.test.getTask(), value)) {
                this.startTest();
            } else {
                this.test.showError();
            }
            return;
        }
        
        var task = this.test.getTask(); //api
        
        if (!(task in this.test_result_map)) {
            this.test_result_map[task] = {
                time_dlts: new Array(),
                errors: 0
            };
        }
        
        if (this.test.checkResult(task, value)) { //api
            var time_dlt = (new Date()) - this.test_task_time;
            if (time_dlt < 0) {
                time_dlt = 0;
            }
            
            this.test_result_map[task].time_dlts.push(time_dlt);
            
            var complete_task_count = this.getCompleteTaskCount();
            
            var counter = $('#counter'); 
            if (counter) {
                counter.html(complete_task_count + '/' + this.test.task_count);
            }
            
            if (complete_task_count >= this.test.task_count) {
                this.stopTest();
            } else {
                this.nextTask();
            }
        } else {
            this.test_result_map[task].errors += 1;
            this.test.showError(); //api            
        }
    };

    this.nextTask = function () {
        var results = this.compileResults();
        results.reverse();
        
        var next_task = null;
        
        do {
            if (results.length !== 0 && getRandomInt(0, 100) < this.test.training_chance) {
                next_task = results[0].task;
            } else {
                next_task = this.test.createTask(); //api
            }
        } while (this.test_last_task === next_task)
        
        this.test_last_task = next_task;
        
        this.test.setTask(next_task); //api
        this.test_task_time = new Date();
    };

    this.stopTest = function () {
        if (this.getCompleteTaskCount() >= this.test.task_count) {
            resetConfirmUnload();
            
            var penalty = (this.getTotalErrors() * this.test.penalty) * 1000.0;
            this.addNewChartPoint(this.getTotalTime() + penalty);
            
            this.showResults();
        }
        
        this.initTest();
    };

    this.showResults = function () {
        $('.results-body').html('');
        $('.results-summ-body').html('');
        
        var results = this.compileResults();
        var total_time = this.getTotalTime();
        var avg_time = total_time / this.test.task_count;
        var total_errors = this.getTotalErrors();
        var best_range_time = this.getBestInRange(results);
        
        var penalty = (total_errors * this.test.penalty) * 1000.0;
        
        var error_string = '0';
        if (total_errors > 0) {
            error_string = total_errors + ' (+' + formatTime(penalty) + ' сек)';
        }
        
        /*  top table  */
        $('.results-summ-body').append( '<tr>' +
                                            '<td>' + formatTime(total_time + penalty) + ' сек</td>' +
                                            '<td>' + formatTime(avg_time) + ' сек</td>' +
                                            '<td>' + error_string + '</td>' +
                                            '<td>' + this.test.taskToString(results[0].task) +                                    //api                
                                                ' (' + formatTime(results[0].avg) + ' сек)</td>' +
                                            '<td>' + this.test.taskToString(results[results.length - 1].task) +                   //api
                                                ' (' + formatTime(results[results.length - 1].avg) + ' сек)</td>' +
                                            '<td>' + this.test.getTestResults((total_time + penalty) / this.test.task_count, total_errors) + '</td>' +                 //api
                                        '</tr>' );
        
        /*  improve  */
        var improve = penalty + (total_time - (best_range_time * this.test.task_count));
        if (improve < 0) {
            improve = 0;
        } 
        if (improve < 1.0) {
            $('#result-dlg #motive').hide();
        } else {
            $('#result-dlg #motive').show();
        }
        $('#result-dlg #best').html(formatTime(best_range_time));
        $('#result-dlg #avg').html(formatTime(avg_time));
        $('#result-dlg .potential').html(((best_range_time / avg_time) * 100.0).toFixed(1) + '%');
        $('#result-dlg #target-time').html(formatTime(improve));
        
        /*  bottom table  */
        for (var i = 0; i < results.length; i++) {
            $('.results-body').append(  '<tr>' +
                                            '<td>' + this.test.taskToString(results[i].task) + '</td>' +  //api
                                            '<td>' + results[i].count + '</td>' +
                                            '<td>' + results[i].fail + '</td>' +
                                            '<td>' + formatTime(results[i].avg) + ' сек</td>' +
                                        '</tr>'  );
        }
         
        /*  show  */
        createVkButton(
            formatTime(total_time + penalty),
            ((best_range_time / avg_time) * 100.0).toFixed(1), 
            this.test.title
            );
            
        showResultDialog(this.test);
    };
    
    this.getCompleteTaskCount = function () {
        var result = 0;
    
        for (var key in this.test_result_map) {
            result += this.test_result_map[key].time_dlts.length;
        }
        
        return result;
    };
    
    this.compileResults = function () {
        var result = new Array();
        
        for (var key in this.test_result_map) {
            var sum = this.test_result_map[key].time_dlts.reduce(function(pv, cv) {
                return pv + cv; 
            }, 0);
            
            result.push({
                task: key, 
                fail: this.test_result_map[key].errors,
                count: this.test_result_map[key].time_dlts.length,
                avg: sum / this.test_result_map[key].time_dlts.length
                });
        }
        
        result.sort(function(a, b) {
            return a.avg - b.avg;
        });
        
        return result;
    };
    
    this.getTotalTime = function () {
        var times = new Array();
        
        for (var key in this.test_result_map) {
            times.push.apply(times, this.test_result_map[key].time_dlts);
        }
        
        var sum = 0;
        
        for (var i = 0; i < times.length; i++) {
            sum += times[i];
        }
        
        return sum;
    };
    
    this.getTotalErrors = function () {
        var sum = 0;
        
        for (var key in this.test_result_map) {
            sum += this.test_result_map[key].errors;
        }
        
        return sum;
    };
    
    this.getBestInRange = function (results) {
        var range = parseInt(Math.ceil(results.length / this.test.best_range));
        
        if (range < 1) {
            range = 1;
        }
        
        var sum = 0;
        
        for (var i = 0; i < range; i++) {
            sum += results[i].avg;
        }
        
        return sum / range;
    };
    
    this.loadChartData = function() {
        var chart = $('#chart-container').highcharts();
        
        chart.setTitle({text: this.test.title});
        chart.series[0].setData([]);
        redrawChart();
    
        try {
            var res = $.cookie(this.test.cookie_name);
            
            if (res && res !== 'null' && res !== null) {
                res = JSON.parse(res);
                
                var series = chart.series[0];
                
                $.each(res, function(i, time) {
                    addChartPoint(time, series);
                });
                
                redrawChart();
            }
        } catch (e) {
            $.cookie(this.cookie_name, null);
        }
    };
    
    this.addNewChartPoint = function(time) {
        time = parseFloat(formatTime(time));
    
        addChartPoint(time);
        redrawChart();
        
        try {
            var res = $.cookie(this.test.cookie_name);
            
            if (res && res !== 'null' && res !== null) {
                res = JSON.parse(res);
            } else {
                res = new Array();
            }
            
            res.push(time);
            
            while (res.length > 50) {
                res.shift();
            }
            
            $.cookie(this.test.cookie_name, JSON.stringify(res), 10000);
        } catch (e) {
            $.cookie(this.test.cookie_name, null);
        }
    };    
}

/*  chart  */

function initChart() {
    $('#chart-container').highcharts({ 
        chart: {
            type: 'line',
            ignoreHiddenSeries : false,
        },
        
        title: {
            text: '',
            style: {
                color: 'rgb(78, 70, 79)',
                font: 'bold 19px/1.4em jura,sans-serif'
            }
        },
        
        subtitle: {
            text: 'Следите за своим прогрессом',
            style: {
                color: 'rgb(78, 70, 79)',
                font: '16px jura,sans-serif'
            }
        },  
        
        legend: {
            enabled: false
        },
        
        yAxis: {
            showEmpty: true,
            title: {
                enabled: false,
                text: 'Секунды'
            },
        },
        
        plotOptions: {
            line: {
                animation: false
            },
            series: {
                animation: false
            },
        },
        
        xAxis: {
            labels:
            {
              enabled: false
            }
        },
        
        tooltip: {
            enabled: true,
            formatter: function() {
                return '<span style="color:' + this.point.series.color + '">' + this.point.series.name + '</span>: <b>' + this.y + ' сек</b><br/>';
            },
        },
        
        series: [{
            type: 'line',
            name: 'Время прохождения теста',
            data: {}
            }]
    });
}

function addChartPoint(value, series) {
    if (!series) {
        var chart = $('#chart-container').highcharts();
        series = chart.series[0];
    }
    series.addPoint(value, false, false, false);
}

function redrawChart() {
    var chart = $('#chart-container').highcharts();
    chart.redraw();
}

/*  input  */

function initButtons() {
    $('#btn2').click(function(){GLOBAL_CURRENT_TEST.onUserInput(2);});
    $('#btn3').click(function(){GLOBAL_CURRENT_TEST.onUserInput(3);});
    $('#btn4').click(function(){GLOBAL_CURRENT_TEST.onUserInput(4);});
    $('#btn5').click(function(){GLOBAL_CURRENT_TEST.onUserInput(5);});
    $('#btn6').click(function(){GLOBAL_CURRENT_TEST.onUserInput(6);});
    $('#btn7').click(function(){GLOBAL_CURRENT_TEST.onUserInput(7);});
    $('#btn8').click(function(){GLOBAL_CURRENT_TEST.onUserInput(8);});
    $('#btn9').click(function(){GLOBAL_CURRENT_TEST.onUserInput(9);});
    $('#btn10').click(function(){GLOBAL_CURRENT_TEST.onUserInput(10);});
    $('#btn11').click(function(){GLOBAL_CURRENT_TEST.onUserInput(11);});
    $('#btn12').click(function(){GLOBAL_CURRENT_TEST.onUserInput(12);});
    $('#btn13').click(function(){GLOBAL_CURRENT_TEST.onUserInput(13);});
    $('#btn14').click(function(){GLOBAL_CURRENT_TEST.onUserInput(14);});
    $('#btn15').click(function(){GLOBAL_CURRENT_TEST.onUserInput(15);});
    $('#btn16').click(function(){GLOBAL_CURRENT_TEST.onUserInput(16);});
    $('#btn17').click(function(){GLOBAL_CURRENT_TEST.onUserInput(17);});
    $('#btn18').click(function(){GLOBAL_CURRENT_TEST.onUserInput(18);});
    $('#easy').click(function(){ setEasy();}); 
    $('#hard').click(function(){ setHard();});
    $('#impossible').click(function(){ setImpossible();});
    $('#special').click(function(){ setSpecial();});
}

function initInput() {
    $('#number-npt').keydown(function(event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            var number = $('#number-npt').val();
            try {
                GLOBAL_CURRENT_TEST.onUserInput(number);
            } catch (e) {
                $('#number-npt').val('');
            }
            return false;
        } else if (event.keyCode == 35) {
			initTest();
		}
    });
}

function initDirectInput() {
    $('#number-npt').keydown(function(event) {
		var number = $('#number-npt').val() == undefined ? event.key : $('#number-npt').val() + event.key;
        if (GLOBAL_CURRENT_TEST.test.checkResult($('#task').html(), number)) {
			try {
				GLOBAL_CURRENT_TEST.onUserInput(number);
			} catch (e) {
				$('#number-npt').val('');
			}
		    return false;
    	}

		if (event.keyCode == 35)
			initTest();
    });
}

/*  dialogs  */

function showResultDialog(test) {
    $('#result-dlg').dialog("option", "title", test.title);
    $('#result-dlg').dialog("option", "close", function(ev, ui) { 
            if (test.show_socionics) {
                result_dialog_shown = false;
                
                var res = $.cookie("g_res");
                if (!res) {
                    res = getRandomInt(0, 16);
                } else {
                    result_dialog_shown = true;
                }
                
                $.cookie("g_res", res, 10000);
        
                if (!result_dialog_shown) {
                    $.socionics[parseInt($.cookie("g_res"))].dialog('open'); 
                    result_dialog_shown = true;
                }
            }
        });
        
    $.result_dialog.dialog('open');
}

function initDialogs() {
    $.socionics = new Array();
    
    $.result_dialog = $('#result-dlg').dialog({
        resizable: false,
        autoOpen:false,
        modal: true,
        draggable: false,
        position: 'fixed',
        show: 'fade',
        hide: 'fade',
        width:955,
        height:700
     });
     
    for (var i = 1; i <= 16; i++) {
        var dlg = $('#result-' + i + '-dlg').dialog({
            title: 'Анализ',
            resizable: false,
            autoOpen:false,
            modal: true,
            draggable: false,
            position: 'fixed',
            show: 'fade',
            hide: 'fade',
            width:955,
            height:700
        });
        
        $.socionics.push(dlg);
    }
}            

/*  misc  */

function formatTime(t) {
    return (t / 1000.0).toFixed(2);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setUnload(text)
{
    var res = $.cookie("pass_test");
    if (!res || res === 'null' || res === null) {
        setConfirmUnload(text);
    }
}

function resetConfirmUnload() {
    try {
        $.cookie("pass_test", "yes", 10000);
        if (window.chrome) {
            window.onbeforeunload = null;
        }
    } catch (e) {alert(e);}
}

function setConfirmUnload(message) {
    try {
        if (window.chrome) {
            window.onbeforeunload = function (e) {
                try{
                    var e = e || window.event;
                    
                    if (e) {
                        e.returnValue = message;
                    }
                    
                    return message;
                } catch (e) {}
            };
        }
    } catch (e) {}
}

function createVkButton(t, p, title) {
    $('.share').html();
    $('.share').html(VK.Share.button({
            url: 'http://www.brightbrain.net/',
            title: title,
            description: 'Тренируй свой мозг!',
            image: 'http://www.brightbrain.net/result?t=' + t + '&p=' + p,
            noparse: true
        }, {
            type: 'round_nocount', 
            text: 'Поделиться результатом'
        }
    ));
}

/*
     FILE ARCHIVED ON 01:50:45 Feb 15, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:36:54 Jan 30, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
