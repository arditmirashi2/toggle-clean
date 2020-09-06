function createToggle({ width, backgroundColor }) {
  let trackWidth = width;
  let trackHeight = width / 2;
  let thumbWidth = width / 2;
  let thumbHeight = width / 2;
  let backgroundColorActive = backgroundColor;

  let trackStyling = `
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background: gainsboro;
    position: relative;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 200ms ease-in-out;`;

  let thumbStyling = `
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: -5%;
    left: 0;
    border-radius: 50%;
    background:ghostwhite;
    transition: all 200ms cubic-bezier(.25,.75,.5,1.25);
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);`;

  if (width) {
    trackStyling = trackStyling + `width: ${trackWidth}px;`;
    thumbStyling = thumbStyling + `width: ${thumbWidth}px;`;
    trackStyling = trackStyling + `height: ${trackHeight}px;`;
    thumbStyling = thumbStyling + `height: ${thumbHeight}px;`;
  }

  // Selecting the div elements

  const track = document.querySelector(".switch-track");
  const thumb = document.querySelector(".switch-thumb");

  track.style = trackStyling;
  thumb.style = thumbStyling;

  let clicks = 0;

  track.addEventListener("click", (e) => {
    clicks++;
    e.preventDefault();
    e.stopPropagation();
    if (clicks % 2 === 0) {
      track.style.backgroundColor = "gainsboro";
      thumb.style.left = "0";
    } else {
      if (backgroundColorActive) {
        track.style.backgroundColor = backgroundColorActive;
        thumb.style.left = "50%";
      } else {
        track.style.backgroundColor = "#09AFD7";
        thumb.style.left = "50%";
      }
    }
  });
}

module.exports = createToggle;
