var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '../public/',
  '../public/index.html',
  '../public/bundle.js',
  '../public/favicon.ico'
];



this.addEventListener('install', function(event) {
  // Perform install steps
  console.log("Installing service worker");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>{
        console.log('Opened cache',cache);
        return cache.addAll(urlsToCache);
      }).catch(error=>{
        return console.log("Sumting went wrong during opeon cache", error);
      })
  );
});


this.addEventListener('activate', function() {
    console.log("activating SW");
});

this.addEventListener("fetch",function(event){
    event.respondWith(
      caches.match(event.request)
      .then(response=>{
        console.log("Response em ");
        if(response){return response}

        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
            function(response){
              if(!response || response.status !== 200 || response.type !== 'basic') {
                console.log("No Response ");
                return response;
              }
              var responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then(function(cache){
                  cache.put(event.request, responseToCache);
                });
                console.log(" Response below", response);
              return response;
          }
        );
      })
      .catch(error=>{
        return console.log("Someting went wrong during 'fetching stage'",error);
      })
    )
})