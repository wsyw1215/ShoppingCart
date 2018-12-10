$(document).ready(function () {
    $(".form-control").val("1");
    $(".btn-plus").on("click", function (e) {
        let btn=$(this);
        btn_Calculate(btn,"+");
    });
    $(".btn-minus").on("click", function (e) {
        let btn=$(this);
        btn_Calculate(btn,"-");
    });
    $(".cart-btn-plus").on("click", function (e) {
        let btn=$(this);
        let Num=btn_Calculate(btn,"+");
        let priceText=btn.parent().parent().parent().siblings( ".item-total-price" );
        let price=parseInt(priceText.text());
        let Total=Num*price;
        priceText.text(Total);
        console.log(Total);
    });
    $(".cart-btn-minus").on("click", function (e) {
        let btn=$(this);
        btn_Calculate(btn,"-");
    });
    // 購物車DropDown顯示/關閉
    $(".cartIcon").on("click", function () {
        $(this).toggleClass('show');
        $(".dropdown-menu").toggleClass('show');
    });
    //點擊購物車以外的畫面關閉購物車
    $('body').on('click', function (e) {
        if (!$('.cartIcon').is(e.target) 
            && $('.cartIcon').has(e.target).length === 0 
            && $('.show').has(e.target).length === 0
        ) {
            $('.cartIcon').removeClass('show');
            $(".dropdown-menu").removeClass('show');
        }
    });
});
function btn_Calculate(btn,operator){
    let textbox=btn.parent().siblings( ".form-control" );
    let TotalNum=textbox.val();
    if(operator=="+"){
        TotalNum++;
    }
    else if(operator=="-"){
        if(TotalNum<=1) return;
        TotalNum--;
    }
    textbox.val(TotalNum);
    return TotalNum;
}
