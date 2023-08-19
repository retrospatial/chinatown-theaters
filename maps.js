d3.select("#step-one").on('stepin',function(e){
    console.log("Chinatown 1938")
    d3.select("#map-image").attr("src", "maps/Chinatown_1938.png");
})
d3.select("#step-one").on('stepout',function(e){
    console.log("Chinatown 1902")
    d3.select("#map-image").attr("src", "maps/Chinatown_1902.png");
})

d3.select("#step-two").on('stepin',function(e){
    console.log("Chinatown 1972")
    d3.select("#map-image").attr("src", "maps/Chinatown_1972.png");
})
d3.select("#step-two").on('stepout',function(e){
    console.log("Chinatown 1938")
    d3.select("#map-image").attr("src", "maps/Chinatown_1938.png");
})

d3.select("#step-three").on('stepin',function(e){
    console.log("Chinatown 1988")
    d3.select("#map-image").attr("src", "maps/Chinatown_1988.png");
})
d3.select("#step-three").on('stepout',function(e){
    console.log("Chinatown 1972")
    d3.select("#map-image").attr("src", "maps/Chinatown_1972.png");
})

d3.select("#step-four").on('stepin',function(e){
    console.log("Chinatown 2014")
    d3.select("#map-image").attr("src", "maps/Chinatown_2014.png");
})
d3.select("#step-four").on('stepout',function(e){
    console.log("Chinatown 1988")
    d3.select("#map-image").attr("src", "maps/Chinatown_1988.png");
})

const scroller = scrollama();

scroller
    .setup({
        step: "#scrolly .scrolly-overlay .step",
        offset: 0.5,
        debug: false
    })
    .onStepEnter(function({ element, index, direction }) {
        const event = new CustomEvent('stepin', { detail: { direction: direction } });
        element.dispatchEvent(event);
    })
    .onStepExit(function({ element, index, direction }) {
        if (direction === 'up') {
            const event = new CustomEvent('stepout', { detail: { direction: direction } });
            element.dispatchEvent(event);
        }
    });

window.addEventListener("resize", scroller.resize);