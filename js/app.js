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
// let error = $('#screen').text('Error')




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
    let clicked = $('#screen').find('span')
    let numbers = $('#screen').find('.number')
    let operator = $('#screen').find('.operator').text();
    let index = $('div span.operator').index()
    let firstNum = parseInt($('#screen span.operator').prevAll().text().split('').reverse().join(''))
    let secondNum = parseInt($('#screen span.operator').nextAll().text().split('').join(''))
    var result = 0;
    if(operator === divide.text()){
      result = firstNum / secondNum
    } else if(operator === multiply.text()){
      result = firstNum * secondNum
    } else if(operator === plus.text()){
      result = firstNum + secondNum
    } else if(operator === minus.text()){
      result = firstNum - secondNum
    } if(isNaN(result) || result === Infinity){
      $('#screen').text("ERROR!!!!!")
    } else{
    $('#screen').text(result)
}
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
  // $(error).text.appendTo('#screen')

})

// add 'Error' message

})
