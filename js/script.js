$("#btn").click(function () {
    const userInput = $("#user-value").val();
    // value generator
    let alterInput = 50 - userInput;
    let highest = 250;
    let totalDifferent = 170;
    let lowest = 20;
    if (!(userInput < 0 || userInput > 50)) {
        const pathValue = 170 * (alterInput / 100) * 2;
        // generate path
        $("#svg path").attr(
            "d",
            `M100,250 C100,${pathValue + lowest} 399,${
                pathValue + lowest
            } 400,250`
        );
    } else {
        alert('select a input value between 0-50')
    }
});
