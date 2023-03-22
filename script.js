/* Functions for updating section background color, color code and time stamp for UCC
*/

update();

function update() {
  var t = new Date();
  var hours = t.getHours().toString().padStart(2, '0');
  var mins = t.getMinutes().toString().padStart(2, '0');
  var timeKey = hours + ":" + mins;
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = hours + ":" + mins + ' ' + ampm;

  let r = Math.trunc(m.get(timeKey)[1])
  let g = Math.trunc(m.get(timeKey)[2])
  let b = Math.trunc(m.get(timeKey)[3])

  let r_p3 = (r / 255.0).toPrecision(5)
  let g_p3 = (g / 255.0).toPrecision(5)
  let b_p3 = (b / 255.0).toPrecision(5)

  let colorCode = m.get(timeKey)[0]

  // let timeTitle = document.getElementById("current-time").firstElementChild;
  let colorCodeTag = document.getElementById("color-code")
  let currTimeTitle = document.getElementById("current-time")
  
  let uccColorChangeHeaderBG = document.getElementById("ucc-color-change-header")
  let uccColorChangeBG = document.getElementById("ucc-color-change")

  // let popupCurrTime = document.getElementById("popup-curr-time")
  // let museFrame = document.getElementById("muse-frame")
  // let infiniteFrame = document.getElementById("infinite-frame-landscape")
  // let colorChangeTitle = document.getElementById("color-change-title")
  // let aboutRicci = document.getElementById("about-ricci-section")
  // let popupColorChange = document.getElementById("ucc-popup-color-change")
  // let popupCodeTag = document.getElementById("popup-color-code-tag")
  // 	let nftOnlyImg = document.getElementById("nft-only-img")


  currTimeTitle.innerHTML = `${strTime}`
  colorCodeTag.innerHTML = `${colorCode}`
  // uccSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  uccColorChangeBG.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  uccColorChangeHeaderBG.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

  if (window.matchMedia("(color-gamut: p3)").matches) {
    // uccSection.style.backgroundColor = `color(display-p3 ${r_p3} ${g_p3} ${b_p3})`
    uccColorChangeBG.style.backgroundColor = `color(display-p3 ${r_p3} ${g_p3} ${b_p3})`
    uccColorChangeHeaderBG.style.backgroundColor = `color(display-p3 ${r_p3} ${g_p3} ${b_p3})`
  }


  /** Lower page sections */
  // aboutRicci.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  // museFrame.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  // infiniteFrame.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

  /** POPUP Window */
  // popupCodeTag.innerHTML = `${colorCode}`
  // popupCurrTime.innerHTML = `${strTime}`
  // popupColorChange.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  // nftOnlyImg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

}

setInterval(() => {
  update()
}, 1000)


/** Function for updating countdown timer */

function updateTimer() {
  let future = Date.parse("april 29, 2023 12:00:00");

  let now = new Date();
  let diff = future - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let mins = Math.floor(diff / (1000 * 60));
  let secs = Math.floor(diff / 1000);

  let d = days;
  h = (hours - days * 24).toString().padStart(2, '0');;
  //     let h = hours;
  let m = (mins - hours * 60).toString().padStart(2, '0');;
  let s = (secs - mins * 60).toString().padStart(2, '0');


  document.getElementById("timer").innerHTML =
    '<div id="timer-day">' + d + ' DAYS</div>' +
    '<span>  </span>' +
    '<div id="timer-hour">' + h + ' HOURS</div>' +
    '<span>  </span>' +
    '<div id="timer-min">' + m + ' MINUTES</div>' +
    '<span>  </span>' +
    '<div id="timer-sec">' + s + ' SECONDS</div>';

  //Set widths of countdown timer headers
  let base_width = document.getElementById("timer-day").offsetWidth + document.getElementById("timer-hour").offsetWidth + document.getElementById("timer-min").offsetWidth + document.getElementById("timer-sec").offsetWidth + 45;
  document.getElementById("countdown-title").style.width = `${base_width}px`

  let countdown_headers = [...document.getElementsByClassName("countdown-headers")]
  // console.log(base_width)
  countdown_headers.forEach((header) => {
    header.style.width = `${base_width}px`
  })
}
updateTimer();
setInterval('updateTimer()', 1000);


/** Functions for updating section background color, color code and time stamp in rapid time
*/

function fastUpdate() {
  let interval = setInterval(fastTimer, 50);
  let sec = 0;
  let min = 0;
  let hr = 1;

  let strTime = hr + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0') + ' ' + amp

  function fastTimer() {
    min++
    if (min === 60) {
      min = 0;
      hr++;
    }

    if (hr === 24) {
      hr = 1;
    }

    let timeKey = hr.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0')
    let r = Math.trunc(m.get(timeKey)[1])
    let g = Math.trunc(m.get(timeKey)[2])
    let b = Math.trunc(m.get(timeKey)[3])

    let r_p3 = (r / 255.0).toPrecision(5)
    let g_p3 = (g / 255.0).toPrecision(5)
    let b_p3 = (b / 255.0).toPrecision(5)
    let fastBGChange = document.getElementById("ucc-rapid-color-change");
    document.getElementById("rapid-time-change").style.color = `rgb(${r}, ${g}, ${b})`

    fastBGChange.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    if (window.matchMedia("(color-gamut: p3)").matches) {
      fastBGChange.style.backgroundColor = `color(display-p3 ${r_p3} ${g_p3} ${b_p3})`
    }

    let amp = hr >= 12 ? 'pm' : 'am'
    let hour = hr % 12;
    hour = hr ? hr : 12;

    document.getElementById("rapid-time-change").innerHTML =
      "<span id='hr-box'>" + "@" + "</span>" + " " + hour +
      "<span id='min-box'>" + ":" + min.toString().padStart(2, '0') + "</span>" +
      "<span>" + amp + "</span>";

  }
}

fastUpdate()
