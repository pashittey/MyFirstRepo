
var month = prompt('Find Out The Special Holidays In These MONTHS ; january, febuary, march, april, may, june, july, august, september, october, november or december.', 'Enter a month here!!!')

var message = document.getElementById('demo1')

switch (month.toLowerCase()) {
  case 'january':
    message.innerHTML = 'January 1st is New Year and Jan 20 is Martin Luther King Jr. Day' + '<br>' +
    '*Please Refresh the page to try another month'
    break

  case 'febuary':
    message.innerHTML = "Lincoln's Birthday	is Feb 12 and Washington's is Feb 17" + '<br>' +
              '*Please Refresh the page to try another month'

  case 'march':
    message.innerHTML = "March 17th is St. Patrick's Day" + '<br>' +
                '*Please Refresh the page to try another month'
    break

  case 'april':
    message.innerHTML = 'April 19th is Good Friday !' + '<br>' +
                '*Please Refresh the page to try another month'
    break

  case 'may':
    message.innerHTML = 'May 27th is Memorial Day' + '<br>' +
                  '*Please Refresh the page to try another month'
    break

  case 'june':
    message.innerHTML = "June 10th is Pentecost Monday and June 16th is Father's Day !" + '<br>' +
                  '*Please Refresh the page to try another month'
    break

  case 'july':
    message.innerHTML = 'July 4	Independence Day! Thursday' + '<br>' +
                    '*Please Refresh the page to try another month'
    break

  case 'august':
    message.innerHTML = 'Aug 21	Wednesday	Senior Citizens Day	Observance' + '<br>' +
                    '*Please Refresh the page to try another month'
    break

  case 'september':
    message.innerHTML = 'Sep 20	Friday National POW/MIA Recognition Day' + '<br>' +
                      '*Please Refresh the page to try another month'
    break

  case 'october':
    message.innerHTML = "Oct 16	Wednesday	Boss's Day" + '<br>' +
                      '*Please Refresh the page to try another month'
    break

  case 'november':
    message.innerHTML = 'Nov 28	Thursday	Thanksgiving Day	Federal Holiday' + '<br>' +
                    '*Please Refresh the page to try another month'
    break

  case 'december':
    message.innerHTML = 'Dec 25	Wednesday	Christmas Day	Federal Holiday' + '<br>' +
                      '*Please Refresh the page to try another month'
    break

  default:
    message.innerHTML = 'Incorrect MONTH spelling ! <br/> *Please Refresh the page and try re-entering a month'
}
