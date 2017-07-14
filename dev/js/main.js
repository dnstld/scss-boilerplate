;(function() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
      navigator.serviceWorker.oncontrollerchange = function() {
        console.log('Refresh to see the newest content');
      }
    });
  }
})();