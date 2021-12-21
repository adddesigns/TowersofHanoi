$(setUp);

function setUp(){
    $("div.tower span").on("click",highlight);
    $("button").on("click",tryMoveDisc);
}


function highlight(event){
    //Toggle the highlight of any disc already highlighted
    $(".highlight").toggleClass("highlight");
    let id = event.target.id;
    //Check if target is the first in the div
    let parent = event.target.parentElement;
    //Of all the discs within parent, grab the first one
    let firstDiscId = parent.getElementsByClassName("disc").item(0).id;
    if(event.target.id === firstDiscId){
        $("span#" + id).toggleClass("highlight");
    }
}


function tryMoveDisc(event){
    //Select the highlighted disc
    let targetDisc = $(".highlight");
    //Get the targetDisc's site
    let targetSize = targetDisc.attr("data-size");
    let towerDiscs = event.target.parentElement.getElementsByClassName("disc")
    //Get the size of the disc currently on top of the targeted tower
    let towerSize;
    //If there's a disc already on the current tower...
    if(towerDiscs.length > 0) {
        //Compare sizes of discs
        towerSize = towerDiscs.item(0).getAttribute("data-size");
        //Compare the towerSize to the target disc's size
        if (towerSize < targetSize) {
            //If the target's size is larger then the tower's, do nothing
        } else {
            moveDisc(targetDisc, event);
        }
    } else {
        moveDisc(targetDisc, event);
    }
}


function moveDisc(targetDisc, event){
    //Move the disc to be a sibling of the button
    $(targetDisc).insertAfter(event.target);
    //Remove the element's highlight
    targetDisc.toggleClass("highlight");
}