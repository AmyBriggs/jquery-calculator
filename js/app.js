document.addEventListener("DOMContentLoaded", function() {

// add var for all buttons, operands, numbers, clear, etc.

let clear = $('span.operator#clear')
let equals = $('span.operator#equals')
let zero = $('span#zero')
let divide = $('div span:nth-child(2)')
let multiply = $('div span:nth-child(3)')
let minus = $('div span:nth-child(7)')
let plus = $('div span:nth-child(11)')
let seven = $('div span:nth-child(4)')
let eight = $('div span:nth-child(5)')
let nine = $('div span:nth-child(6)')
let four = $('div span:nth-child(8)')
let five = $('div span:nth-child(9)')
let six = $('div span:nth-child(10)')
let one = $('div span:nth-child(12)')
let two = $('div span:nth-child(13)')
let three = $('div span:nth-child(14)')

// add pending class to operator buttons (plus, minus, multiply, divide)
// $('div span:nth-child(2)').addClass('pending')
// $('div span:nth-child(3)').addClass('pending')
// $('div span:nth-child(7)').addClass('pending')
// $('div span:nth-child(11)').addClass('pending')


// add number class to spans that contain the numbers
$('span#zero').addClass('number')
$('div span:nth-child(12)').addClass('number')
$('div span:nth-child(13)').addClass('number')
$('div span:nth-child(14)').addClass('number')
$('div span:nth-child(9)').addClass('number')
$('div span:nth-child(10)').addClass('number')
$('div span:nth-child(4)').addClass('number')
$('div span:nth-child(5)').addClass('number')
$('div span:nth-child(6)').addClass('number')


// add click listeners to each button to display them on screen
// code the 'clear' button to return the screen to blank

$(function(){

  $(clear).click(function(){
    location.reload()
    // clear button
  })

  $(divide).click(function(){
    $(divide).clone().appendTo("#screen")
    // operands
  })

  $(multiply).click(function(){
    $(multiply).clone().appendTo("#screen")
  })

  $(minus).click(function(){
    $(minus).clone().appendTo("#screen")
  })

  $(plus).click(function(){
    $(plus).clone().appendTo("#screen")
  })


  $(equals).click(function(){
    $(equals).clone().appendTo("#screen")
    // equals
  })

  $(seven).click(function(){
    $(seven).clone().appendTo("#screen")
  })

  $(eight).click(function(){
    $(eight).clone().appendTo("#screen")
  })

  $(nine).click(function(){
    $(nine).clone().appendTo("#screen")
  })

  $(four).click(function(){
    $(four).clone().appendTo("#screen")
  })

  $(five).click(function(){
    $(five).clone().appendTo("#screen")
  })

  $(six).click(function(){
    $(six).clone().appendTo("#screen")
  })

  $(one).click(function(){
    $(one).clone().appendTo("#screen")
  })

  $(two).click(function(){
    $(two).clone().appendTo("#screen")
  })

  $(three).click(function(){
    $(three).clone().appendTo("#screen")
  })


  $(zero).click(function(){
    $(zero).clone().appendTo("#screen")
  })

})



let clicked = $('#screen').find('span')
let numbers = $('#screen').find('.number')
let operator = $('#screen').find('.operator')
let index = $('div span.operator').index()

var firstNum = []
  for(var i = 0; i < index; i++){
    firstNum.push(i)
    firstNum.join('')
    console.log(firstNum);
  }

for(var i = 0; i < 4; i++){
  console.log(i);
}


let secondNum = $('div span.operator').nextAll()
//
console.log(index)
// Ideas: make 'clicked' into an array, listen for first operand
// and 'equals' in order to store 'math problem'
// add to click listener for equals:
// get clicked numbers from the screen div
// get the operand from the screen div
// find index of operand; get numbers before and after it
// make these into an expression, depending on the type of operand
// if more than one operand is clicked, return 'error' message
// if 'error message is displayed, disable click listners'




// function to start calculator at zero and to reset when we clear the previous function
// first add class 'pending' to the operators

// function resetCalculator(currentValue){
//
//   $('#screen').val(currentValue)
//   $('div span:nth-child(2)').removeClass('pending')
//   $('div span:nth-child(3)').removeClass('pending')
//   $('div span:nth-child(7)').removeClass('pending')
//   $('div span:nth-child(11)').removeClass('pending')
//   $('#screen').data('isPending', false)
//   $('#screen').data('thePendingFunction', '')
//   $('#screen').data('firstValueSet', false)
//   $('#screen').data('secondValueSet', false)
//   $('#screen').data('firstValue', currentValue)
//   $('#screen').data('secondValue', 0)
//   $('#screen').data('fromPrevious', false)
//
// }
//
// //  Add new number to screen; if the number is zero, replace with clicked
// // set the clicked number and display on screen
// // add new number to whatever is on the screen
// // reset the calculator to that number
//
// $('number').click(function(){
//   if($('#screen').data('fromPrevious') == true){
//     resetCalculator($(this).text())
//   }  else if(($('#screen').data('isPending') == true) && ($('#screen').data('firstValueSet') == false)) {
//       $('#screen').data('firstValue', $('#screen').val())
//       $('#screen').data('firstValueSet', true)
//
//       // clicking on a new number after first is set
//   }  else if(($('#screen').data('isPending') == true) && ($('#screen').data('firstValueSet') == true)) {
//
//       var currentValue = $('#screen').val()
//       var toAdd = $(this).text();
//
//       var newValue = currentValue, toAdd
//       $('#screen').val(newValue)
//
//       $('#screen').data('secondValue', $('#screen').val())
//       $('#screen').data('secondValueSet', true)
//
//       // clicking on a number for first time
//   }   else {
//       var currentValue = $('#screen').val()
//       if(currentValue == 0) {
//         currentValue = ""
//       }
//
//       var toAdd = $(this).text()
//       var newValue = currentValue, toAdd
//       $('#screen').val(newValue)
//   }
//
// })
//
//


})
