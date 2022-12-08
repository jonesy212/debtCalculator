const convertYearsMonths = () => {
     year = document.getElementById(3)
    let month = document.getElementById(4)

  let year = name => () =>(
      name.value === 'inYears'
  )
  year.addEventListener('keyup',   function (e) {
      let fraction = parseFloat(this.value) - (this.value|0);
      let months = Math.round(fraction*100)
      if (months % 10 == 0) months = months/10
      month.value = parseInt(this.value) * 12 + months
      if (this.value == '')
        month.value = ''
    });
    month.addEventListener('keyup',  function(e){
      let years  = parseFloat(this.value)
      year.value = parseInt(years / 12) + '.' + parseInt(years%12)
      if (this.value == '')
        year.value = ''
    });
    document.addEventListener('click',  function(e){
      if(e.target.type == 'text')
        e.target.value = ''
    });
};



export function presentValue(fv, freq, rate, periods) {
  return fv / Math.pow(1 + rate / 100 / freq, periods);
}

export function futureValue(pv, freq, rate, periods) {
  return pv * Math.pow(1 + rate / 100 / freq, periods);
}

export function annualizedReturn(fv, pv, years) {
  return (fv - pv) / pv / years;
}

export function monthlyPayment(pv, freq, rate, periods) {
  rate = rate / 100 / freq;
  let x = Math.pow(1 + rate, periods);
  return (pv * x * rate) / (x - 1);
}

export function annuity(fv, freq, rate, periods) {
  rate = rate / 100 / freq;
  return (fv / (Math.pow(1 + rate, periods) - 1)) * rate;
}

export function calcAmortPrincipal(pymt, freq, rate, periods) {
  rate = rate / 100 / freq;
  return (pymt * (1 - 1 / Math.pow(1 + rate, periods))) / rate;
}

export function toCurrency(num) {
  num = Math.round(num * 100) / 100;
  let currstring = num.toString();
  if (currstring.match(/\./)) {
    var curr = currstring.split(".");
  } else {
    var curr = [currstring, "00"];
  }

  curr[1] += "00";
  curr[2] = "";
  let returnval = "";
  let length = curr[0].length;
  for (var i = 0; i < 2; i++) curr[2] += curr[1].substr(i, 1);

  for (i = length; i - 3 > 0; i = i - 3) {
    returnval = "," + curr[0].substr(i - 3, 3) + returnval;
  }

  returnval = curr[0].substr(0, i) + returnval + "." + curr[2];
  return returnval;
}

export function regularDeposit(payment, freq, rate, periods) {
  rate = rate / 100 / freq;
  return ((payment * (Math.pow(1 + rate, periods) - 1)) / rate) * (1 + rate);
}
