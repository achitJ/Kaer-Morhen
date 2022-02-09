const timer = document.querySelector('#timer');

const myInterval = function() {

    let incId = 0;
    const uniqueId = {};

    function mySetInterval(cb, time, ...args) {

        const id = incId;
        incId++;

        const helper = function() {

            uniqueId[id] = setTimeout(() => {

                cb(...args);

                if(uniqueId[id]) {
                    helper();
                }
            }, time);
        }

        helper();

        return id;
    }

    function myClearInterval(id) {

        clearTimeout(uniqueId[id]);
        delete uniqueId[id];
    }

    return { mySetInterval, myClearInterval };
} 

const watch = function(time) {

    let totalSecond = time;
    let counter = totalSecond;
    let second = parseInt(totalSecond % 60);
    let minute = parseInt(totalSecond / 60);

    const interval = myInterval();
    
    this.timerStart = async function() {

        const id = interval.mySetInterval(() => {

            counter--;
            second--;

            if(second < 0) {
                second = 59;
                minute--;
            }

            timer.innerText = `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;

            if(counter <= (totalSecond*0.5)) {

                timer.className = 'yellow';
            }

            if(counter <= (totalSecond*0.1)) {

                timer.className = 'red';
            }

            if(counter < 0) {
                
                interval.myClearInterval(id);
                timer.innerText = "00:00";
                alert("Timer Ended")
            }
            
        }, 1000);
        
    }
} 


// new watch(3600).timerStart(timer);