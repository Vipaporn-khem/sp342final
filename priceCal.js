function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseFloat(selectObj.options[selectObj.selectedIndex].value);

  // console.log(selectObj, selectObj.options, selectObj.selectedIndex)
  
  return ticknum*eventId;
}


