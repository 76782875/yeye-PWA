(() => {
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js', {scope: '/'})
      .then(function () { console.log('Service Worker Registered') })
  }
})()
