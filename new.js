//login button event handler


const first_display = document.getElementById("login");
first_display.addEventListener("click", function () {
    const login_area = document.getElementById("boom");
    login_area.style.display = "none";

    const second_display = document.getElementById("transaction_area");
    second_display.style.display = "block";

});

//deposit button event handler

const deposit_click = document.getElementById("deposit_btn")

deposit_click.addEventListener("click", function () {

    const deposit_amount1 = document.getElementById("deposit_amount").value
    const deposit_number = parseFloat(deposit_amount1)


    const current_deposit = document.getElementById("current_deposit").innerText

    const current_deposit_num = parseFloat(current_deposit)
    const total_deposit = deposit_number + current_deposit_num

  if (total_deposit>0){
    document.getElementById("current_deposit").innerText = total_deposit


  }
   
    




    //current value 


    const current_balance = document.getElementById("current_balance").innerText

    const current_balance_num = parseFloat(current_balance)
    var total_balance = deposit_number + current_balance_num
  if ( total_balance>0 ){

    document.getElementById("current_balance").innerText = total_balance




    document.getElementById("deposit_amount").value = ""

  }
   

})






//withdraw 


const withdraw_btn = document.getElementById("withdraw_btn")

withdraw_btn.addEventListener("click",function () {
   

    const withdraw_input = document.getElementById("withdraw_input").value

    const withdraw_btn_num  = parseFloat(withdraw_input)

    const current_withdraw = document.getElementById("current_withdraw").innerText

    const current_withdraw_num = parseFloat(current_withdraw)

    const total = withdraw_btn_num 

    const current_balance = document.getElementById("current_balance").innerText

    const current_balance_num = parseFloat(current_balance)
  



    if ( total > 0 && current_balance_num>= total ){

    document.getElementById("current_withdraw").innerText = total




    
         // current value minus

    const current_balance = document.getElementById("current_balance").innerText

    const current_balance_num = parseFloat(current_balance)
    const total_balance =  current_balance_num - total

    document.getElementById("current_balance").innerText = total_balance
    document.getElementById("withdraw_input").value = ""


        
    }
    

})