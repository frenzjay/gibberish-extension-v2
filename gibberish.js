chrome.contextMenus.create({
  title: "Decrypt gibberish",
  contexts: ["selection"],
  onclick: function(info) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://frenzvalios.xyz/api/gibberish/translate?gibberish=" + encodeURIComponent(info.selectionText), true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        alert("Original word: " + resp.original);
      }
    }
    xhr.send();
  }
});

chrome.contextMenus.create({
  title: "Generate gibberish",
  contexts: ["selection"],
  onclick: function(info) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://frenzvalios.xyz/api/gibberish/generate?word=" + encodeURIComponent(info.selectionText), true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        alert("Gibberish: " + resp.gibberish);
      }
    }
    xhr.send();
  }
});