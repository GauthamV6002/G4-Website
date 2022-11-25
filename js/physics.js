const g = document.getElementById("");
let orbitRadius = 1;
let dur = 1;

const setOrbit = (val) => {
    if($("#variableSelect").val() === "Radius"){
        $("#satellite").attr("transform", `matrix(${val}, -0.5, 0.25, 0.433, 80, 80)`);
        orbitRadius = val;
        dur = 1/orbitRadius;
    } else if($("#variableSelect").val() === "Period") {
        $("#durControl").attr("dur", `${val}s`);
        dur = val;
        orbitRadius = 5 - dur;
    }

    console.log(orbitRadius);

    if(orbitRadius <= 2){
        $("#indicator").text("Too close... EMR can be used to collect data from this distance, but since the orbit is not geosynchronous, the satellite and earth would rotate differently, making data collection hard.");
    } else if (orbitRadius >= 2 && orbitRadius <= 3) {
        $("#indicator").text("Nice! Orbit is geosynchronous, which allows for you to stay in sync with the orbit of the earth. This means that you can use all kinds of scanning technology that invovles EMR, such as infrared or radio waves.");
    } else {
        $("#indicator").text("Too far! Not only are you not geosynchronous, but thanks to the inverse square law, EMR spreads out far more than if you are closer - which can make scanning far harder.");
    }
}

$("#variableRange1").change(function (e) { 
    setOrbit(e.target.value);
});