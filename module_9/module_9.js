//****************        Task 1     ************* */
// $("[href^='https://']").attr("target", "_blank");

//****************        Task 2     ************* */
// $('h2.head').css("background-color", "green").find('.inner').css("font-size", "35px");

//****************        Task 3     ************* */
// $('h3')[0].before($('h3').next('div')[0]);
// $('h3')[1].before($('h3').next('div')[0]);

//****************        Task 4     ************* */
let count = 0;
$('input').on('change', function () {
    if ($(this).prop("checked")) {
        count += 1;
    }
    else {
        count -= 1;
    }
    if (count === 3) {
        $('input').prop('disabled', true);
    }
});
