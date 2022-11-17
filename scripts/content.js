// const body = document.querySelector('body');
//technical challenge finding the right event listener
window.addEventListener('load', function() {
  

  //create an object of sleep-related websites
  const websites = {
    0 : 'https://sleepopolis.com/calculators/sleep/',
    1 : 'https://www.rainymood.com/',
    2 : 'https://sleepcalculator.com/'
  }
  
  //initialize the time and store it
  let currentTime = new Date();
  // console.log(currentTime);
  // initialize the hours and store it
  let hours = currentTime.getHours();

  
  if (hours >= 20) {
    //if the window is not currently in one of the pre-approved websites
      //technical challenge
    if (!Object.values(websites).includes(window.location.href.toString())) {
      alert(window.location)
      setTimeout(newWindow(), 3000);
    }
  }

  //function to load a new window from pre-approved object
  function newWindow() {
     //randomize the choice
     //technical challenge
      const randomInt = Math.floor(Math.random() * (Object.keys(websites).length - 1));
      //load the assigned window
      window.location.assign(websites[randomInt]);
      alert(websites[randomInt]);
  }
})