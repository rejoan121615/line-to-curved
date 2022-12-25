$("#btn").click(function () {
    const userInput = $("#user-value").val();
    // value generator
    let alterInput = (50 - userInput);
    let highest = 250;
    let lowest = 80;
    let totalDifferent = 170;
    const pathValue = 170 * (alterInput / 100) * 2;
    console.log(pathValue + lowest);
    // generate path
    $("#svg path").attr(
        "d",
        `M100,250 C100,${pathValue + lowest} 399,${pathValue + lowest} 400,250`
    );
});
