$("#btn").click(function () {
    // user input
    const userInput = $("#user-value").val();
    // percentage calculator
    function per(high, low, input) {
        return (high - low) * (input / 100);
    }
    // c value h = 169 , l = 100
    const cValue = per(169, 100, 100 - userInput);
    const curveValue = per(250, 50, 100 - userInput);
    const alterValue = per(400, 320, 100 - userInput); /// genrate minus val


    // value generator
    // let alterInput = 100 - userInput;
    // let alterInput = userInput;
    // let highest = 250;
    // let lowest = 60;

    if (!(userInput < 0 || userInput > 100)) {
        // const pathValue = (highest - lowest) * (alterInput / 100);
        // generate path
        $("#svg path").attr(
            "d",
            `M100,250 C${cValue + 100},${curveValue + 50} ${400 - alterValue},${
                curveValue + 50
            } 400,250`
        );
        // $("#svg path").attr(
        //     "d",
        //     `M100,250 C100,${pathValue + lowest} 399,${
        //         pathValue + lowest
        //     } 400,250`
        // );
    } else {
        alert("select a input value between 0-50");
    }
});
