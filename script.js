function updateProgressBar() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const totalSecondsToday = hours * 3600 + minutes * 60 + seconds;
    const percentOfDay = (totalSecondsToday / (24 * 3600)) * 100;
    
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentOfDay}%`;
  }
  
  // Update the progress bar every minute
  setInterval(updateProgressBar, 60000);
  
  // Initialize the progress bar on page load
  updateProgressBar();
  