//Init vars
n = 0;

score = ""
datetime = ""

if (window.localStorage.DRRBSM1scorer == undefined) {
  window.localStorage.DRRBSM1scorer = ''
}

function getRBSaveStr() {
  return getRBSave("item").join("///")
}

function getRBSaveStrId(id) {
  return getRBSave(id).join("///")
}

// Function to get status check of all missions and store in var store (also returned)
function getRBSave(identifier = "item") {
  count = 0
  count1 = 0
  data = []
  while (count < document.getElementsByClassName("rb" + identifier).length) {
    console.log(count, document.getElementsByClassName("rb" + identifier)[count].tagName)
    if (document.getElementsByClassName("rb" + identifier)[count].tagName == "ION-RADIO") {
      data = data.concat(document.getElementsByClassName("rb" + identifier)[count].id + "|||" + (document.getElementsByClassName("rb" + identifier)[count].parentElement.parentElement.parentElement.parentElement.value == document.getElementsByClassName("rb" + identifier)[count].value || document.getElementsByClassName("rb" + identifier)[count].parentElement.parentElement.parentElement.parentElement.parentElement.value == document.getElementsByClassName("rb" + identifier)[count].value))
    } else if (document.getElementsByClassName("rb" + identifier)[count].tagName == "ION-CHECKBOX") {
      data = data.concat(document.getElementsByClassName("rb" + identifier)[count].id + "|||" + document.getElementsByClassName("rb" + identifier)[count].checked)
    } else if (document.getElementsByClassName("rb" + identifier)[count].tagName == "ION-TEXTAREA") {
      data = data.concat(document.getElementsByClassName("rb" + identifier)[count].id + "|||" + encodeURI(document.getElementsByClassName("rb" + identifier)[count].value))
    }
    count = count + 1
  }
  return data
}


function resetRB(identifier = "item") {
  count = 0
  count1 = 0
  while (count < document.getElementsByClassName("rb" + identifier).length) {
    console.log(count, document.getElementsByClassName("rb" + identifier)[count].tagName)
    if (document.getElementsByClassName("rb" + identifier)[count].tagName == "ION-RADIO") {
      document.getElementsByClassName("rb" + identifier)[count].parentElement.parentElement.parentElement.parentElement.value = "0"
      document.getElementsByClassName("rb" + identifier)[count].parentElement.parentElement.parentElement.parentElement.parentElement.value = "0"
    } else if (document.getElementsByClassName("rb" + identifier)[count].tagName == "ION-CHECKBOX") {
      document.getElementsByClassName("rb" + identifier)[count].checked = false
    } else if (document.getElementsByClassName("rb" + identifier)[count].tagName == "ION-TEXTAREA") {
      document.getElementsByClassName("rb" + identifier)[count].value = ""
    }
    count = count + 1
  }
}


//load a getvar() var store save
function loadRBsave(save) {
  newsave = String(save).split('///')
  count = 0
  while (count < newsave.length) {
    save1 = newsave[count].split('|||')
    try {
      document.getElementById(save1[0]).parentElement.parentElement.parentElement.parentElement.value = "0"
    } catch { }
    try {
      document.getElementById(save1[0]).checked = false
    } catch { }
    try {
      document.getElementById(save1[0]).parentElement.parentElement.parentElement.parentElement.parentElement.value = "0"
    } catch { }
    count = count + 1
  }
  count = 0
  while (count < newsave.length) {
    save1 = newsave[count].split('|||')
    console.log(save1)
    if (save1[1] == "true") {
      // $("#" + save1[0]).attr("checked", false).checkboxradio().checkboxradio("refresh");
      document.getElementById(save1[0]).click()
      document.getElementById(save1[0]).checked = true
      // $("input[type='checkbox']:first").attr("checked",true).checkboxradio("refresh");
      // $("input[type='radio']").attr("checked",true).checkboxradio("refresh");

    } else if (save1[1] == "false") {
      // $("#" + save1[0]).attr("checked", false).checkboxradio().checkboxradio("refresh");
    } else {
      document.getElementById(save1[0]).value = decodeURI(save1[1])
    }
    count = count + 1

  }
  rubricCalc()
}

// Load a localStorage getvar() var store save by id
function loaderRB(save) {
  ionAlert(loadedText);
  data = window.localStorage.DRRBSMscorer.split('&&&')[save];
  loadRBsave(String(data));
}


// save getvar() and saveDateTimeScore to localStorage
function saverRB() {
  // Save all missions
  store = getRBSave("item");
  window.localStorage.DRRBSMscorer = window.localStorage.DRRBSMscorer + '&&&' + store.join("///")

  var currentTime = new Date()
  var month = currentTime.getMonth() + 1
  var day = currentTime.getDate()
  var year = currentTime.getFullYear()
  var currentdate = " - " + day + " " + monthNames[month] + " " + year;
  //  var currentdate = month + "/" + day + "/" + year;

  scores = "CV: "+document.getElementById("cvpts").innerHTML+ ", IP: "+document.getElementById("ippts").innerHTML+ ", RD: "+document.getElementById("rdpts").innerHTML

  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()

  if (minutes < 10) {
    minutes = "0" + minutes
  }
  rubricCalc()
  /*
// Use 12hr clock
if(hours > 11){
   var ampm = "PM";
} else {
   var ampm = "AM";
}
if (hours > 12) {
   hours = hours - 12;
}
*/
  // Use 24hr clock for international usage
  ampm = ''
  var timex = hours + ":" + minutes + " ";

  var currenttime = timex + '' + ampm;
  //   var currenttime = timex;
  datetime = currenttime + ' ' + currentdate + '; ' + scores;
  // datetime = currentdate + ' ' + currenttime;

  window.localStorage.DRRBSM2scorer = window.localStorage.DRRBSM2scorer + '&&&' + datetime

  // Save time stamp and score
  ionAlert("Saved");
  displayRBSaves()
}

function displayRBSaves() {
try{
  n = 1;
  a = window.localStorage.DRRBSM2scorer.split('&&&').length;
  document.getElementById('pastRB').innerHTML = "";
  if (window.localStorage.DRRBSM2scorer != undefined && window.localStorage.DRRBSM2scorer != "") {
    while (n < a) {
      //alert(n)
      document.getElementById('pastRB').innerHTML = document.getElementById('pastRB').innerHTML + ' Rubric ' + String(n) + ': ' + window.localStorage.DRRBSM2scorer.split('&&&')[n] + '<br>';
      n = n + 1;
    }
  }
}catch{}
}


function rubricCalc() {
  i = 0
  while (i < rbchildren.length) {
    // if (document.querySelector('ion-radio[name="'+rbchildren[i][1][0]+'"]').parentElement.parentElement.parentElement.parentElement.value
    // != undefined && document.querySelector('ion-radio[name="'+rbchildren[i][1][0]+'"]').parentElement.parentElement.parentElement.parentElement.value
    // != undefined) {
    try {
      // console.log(document.querySelector('ion-radio[name="'+rbchildren[i][1][0]+'"]'))
      document.getElementById(rbchildren[i][0]).innerHTML = (parseInt(document.querySelector('ion-radio[name="' + rbchildren[i][1][0] + '"]').parentElement.parentElement.parentElement.parentElement.value) || 0) + (parseInt(document.querySelector('ion-radio[name="' + rbchildren[i][1][1] + '"]').parentElement.parentElement.parentElement.parentElement.value || 0)
      );
    } catch {
      try {
      document.getElementById(rbchildren[i][0]).innerHTML = (parseInt(document.querySelector('ion-radio[name="' + rbchildren[i][1][0] + '"]').parentElement.parentElement.parentElement.parentElement.parentElement.value) || 0)
      }catch{}
      // console.log("failed on",document.querySelector('ion-radio[name="'+rbchildren[i][1][0]+'"]'))
    }
    // } else if (document.querySelector('input[name="'+rbchildren[i][1][0]+'"]:checked') != null) {
    //   document.getElementById(rbchildren[i][0]).innerHTML = parseInt(document.querySelector('input[name="'+rbchildren[i][1][0]+'"]:checked').value);
    // } else if (document.querySelector('input[name="'+rbchildren[i][1][1]+'"]:checked') != null) {
    //   document.getElementById(rbchildren[i][0]).innerHTML = parseInt(document.querySelector('input[name="'+rbchildren[i][1][1]+'"]:checked').value);
    // } else {
    //   document.getElementById(rbchildren[i][0]).innerHTML = 0
    // }
    i = i + 1
  }

  i = 0
  try {
    document.getElementById("cvpts").innerHTML = 0
    while (i < 6) {
      document.getElementById("cvpts").innerHTML = parseInt(document.getElementById("cvpts").innerHTML) + parseInt(document.getElementById(rbchildren[i][0]).innerHTML)
      i = i + 1
    }
    document.getElementById("cvpts2").innerHTML = document.getElementById("cvpts").innerHTML
  } catch (error) { console.log(error)}

  try {
    document.getElementById("ippts").innerHTML = 0
    while (i < 11) {
      document.getElementById("ippts").innerHTML = parseInt(document.getElementById("ippts").innerHTML) + parseInt(document.getElementById(rbchildren[i][0]).innerHTML)
      i = i + 1
    }
    document.getElementById("ippts2").innerHTML = document.getElementById("ippts").innerHTML

  } catch (error) {console.log(error) }
  try {
    document.getElementById("rdpts").innerHTML = 0
    while (i < rbchildren.length) {
      document.getElementById("rdpts").innerHTML = parseInt(document.getElementById("rdpts").innerHTML) + parseInt(document.getElementById(rbchildren[i][0]).innerHTML)
      i = i + 1
    }
    document.getElementById("rdpts2").innerHTML = document.getElementById("rdpts").innerHTML

  } catch (error) {console.log(error) }

}

