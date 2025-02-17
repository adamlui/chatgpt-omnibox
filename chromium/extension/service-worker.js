const chatgptURL = 'https://chatgpt.com'

// Launch ChatGPT on toolbar icon click
chrome.action.onClicked.addListener(() => chrome.tabs.create({ url: chatgptURL }))

// Query ChatGPT on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `${chatgptURL}/?q=${decodeURIComponent(query)}` }))
