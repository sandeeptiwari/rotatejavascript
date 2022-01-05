$(document).on('change', '.amountOrPercent', function() {
    var amountOrPercent = $(this).find(":selected").val();
    if (amountOrPercent == 'amount') {
        $(this).closest('.divForCalculation').find('.extraForPercentage').remove();
        $(this).closest('.divForCalculation').find('.amountOrPercent').css('padding', '4px');
        $(this).closest('.divForCalculation').find('.divForCalculation').css('flex', '1');
    } else if (amountOrPercent == 'percentage') {
        $(this).closest('.divForCalculation').find('.divForCalculation').css('flex', '2');
        $(this).closest('.divForCalculation').find('.amountOrPercent').css('padding', '0');
        $(this).closest('.divForCalculation').append('<div class="extraForPercentage" style="flex: 1"><span class="mr-2 px-3 pt-2">Of</span><div style="display: inline;"><input type="text" class="form-control totalof" placeholder="0" required style="display: inline; width: 60%;" value=""></div></div>');
    }
});


$(document).on("change keyup keypress", ".discountAmount, .totalof", function() {
    var discountAmount = 0;
    var discountPercentage = 0;
    var totalof=0;
    var result=0;
    discountAmount = $(".discountAmount").val();
    totalof=$(".totalof").val();
    if(totalof === '' || totalof === null || totalof === 0){
        totalof = 0;
        result = 0;
        console.log('result ', result)
    }
    else if(!isNaN(totalof)) {

            result = -parseFloat((parseInt(totalof)/100*parseInt(discountAmount)));
    }
    $('.invoiceItemAmount').val(result);
});
