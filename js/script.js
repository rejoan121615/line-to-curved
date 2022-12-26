$("#btn").click(function () {
    // user input
    const userInput = $("#user-value").val();
    // percentage calculator
    function per(high, low, input) {
        return (high - low) * (input / 100);
    }
    // generate percentage value
    // const cValue = per(169, 100, 100 - userInput);
    // const curveValue = per(250, 50, 100 - userInput);
    // const alterValue = per(400, 320, 100 - userInput);
    // generate path
    if (!(userInput < 0 || userInput > 100)) {
        const cValue = per(208, 100, 100 - userInput);
        const curveValue = per(188, 50, 100 - userInput);
        const alterValue = per(400, 290, 100 - userInput);
        $("#svg path").attr(
            "d",
            `M100,250 C${cValue + 100},${curveValue + 50} ${400 - alterValue},${
                curveValue + 50
            } 400,250`
        );
    } else {
        alert("select a input value between 0-50");
    }
});
