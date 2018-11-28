

//select.addEventListener('change', setEventType);

function setEventType() {
  var eventType = document.getElementById('event');
  var tempFahr = document.getElementById('tempFah');
  var result;
  var choice = eventType.value;
  var tempchoice = tempFahr.value;
  var final = document.getElementById('resultId').innerHTML;


  if (choice === 'casual'){
    result = ' degrees and you are going to a casual event, you should wear something comfy';
  } else if (choice === 'semiFormal'){
    result = ' degrees and you are going to a Semi-Formal event, you should wear a polo';
  } else if (choice === 'formal'){
    result = ' degrees and you are going to a Formal event, you should wear a suit';
  }
  if (tempchoice < 54) {
    result = result + ' and a coat';
  } else if (tempchoice <=70){
    result = result + ' and a jacket';
  } else {
    result = result + ' no jacket';
  }
  result = 'Since it is ' + tempchoice + result;
console.log(result);
document.getElementById('resultId').innerHTML = result;
}
