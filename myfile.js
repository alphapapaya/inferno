(function() {
  let root = document.documentElement;
  let imageContainer = document.getElementById("moving-around");

  var twinkContainer = document.getElementById("twink-container");
  var bearContainer = document.getElementById("bear-container");
  var jockContainer = document.getElementById("jock-container");
  var linksContainer = document.getElementById("links-container");

  let twinkInnerContainer = twinkContainer.getElementsByClassName('js-moving-around')[0];


  function movingAround (container, e) {
    root.style.setProperty('--mouse-x', e.pageX - container.offsetLeft + "px");
    root.style.setProperty('--mouse-y', e.pageY - container.offsetTop + "px");
  }

  // Moving images mousemove animation
  twinkInnerContainer.addEventListener("mousemove", e => {
    movingAround(twinkInnerContainer, e);
  });

  linksInnerContainer.addEventListener("mousemove", e => {
    movingAround(jockInnerContainer, e);
  });

})();
