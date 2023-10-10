document.getElementById('readMedium').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const mediumUrl = tabs[0].url;
      const googleCacheUrl = `http://webcache.googleusercontent.com/search?q=cache:${mediumUrl}&sca_esv=572350337&strip=1&vwsrc=0`;
      chrome.tabs.create({ url: googleCacheUrl });
    });
  });
  