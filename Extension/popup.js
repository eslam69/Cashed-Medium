document.getElementById('readMedium').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const mediumUrl = tabs[0].url;
      const googleCacheUrl = `http://webcache.googleusercontent.com/search?q=cache:${mediumUrl}`;
      chrome.tabs.create({ url: googleCacheUrl });
    });
  });
  