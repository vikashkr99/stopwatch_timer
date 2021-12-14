window.onload = () => {

    // boxes
    let min = document.getElementById('min')
    let sec = document.getElementById('sec')
    let msec = document.getElementById('msec')

    // buttons
    let startbtn = document.getElementById('startbtn')
    let stopbtn = document.getElementById('stopbtn')
    let resetbtn = document.getElementById('resetbtn')

    // types
    let new_min = parseInt(0)
    let new_sec = parseInt(0)
    let new_msec = parseInt(0)
    let interval

    min.innerHTML = '00', sec.innerHTML = '00', msec.innerHTML = '00'

    startbtn.onclick = () => {
        clearInterval(interval)
        interval = setInterval(startTimer,10)
        startbtn.disabled = true;
    }

    stopbtn.onclick = () => {
        clearInterval(interval)
        startbtn.disabled = false;
    }
    
    
    resetbtn.onclick = () => {
        min.innerHTML = '00', sec.innerHTML = '00', msec.innerHTML = '00'
        clearInterval(interval)
        new_min = 0, new_sec = 0, new_msec = 0
    }

    startTimer = () => {
        new_msec++
        if (new_msec < 10) { new_msec = '0' + new_msec }
        else if (new_msec > 99) {
            new_msec = '00'
            new_sec++
            if (new_sec < 10) { new_sec = '0' + new_sec }
            else if (new_sec > 59) {
                new_sec = '00'
                new_min++
                if (new_min < 10) { new_min = '0' + new_min }
                else { new_min*=1 }
                min.innerHTML = new_min
            }
            else { new_sec*=1 }
            sec.innerHTML = new_sec
        }
        else { new_msec*=1 }
        msec.innerHTML = new_msec
    }
}