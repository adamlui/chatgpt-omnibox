// Launch chatgpt.com on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://chatgpt.com' }))

// Query ChatGPT on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `https://chatgpt.com/?q=${decodeURIComponent(query)}` }))
