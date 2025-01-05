// Launch chatgpt.com on toolbar icon click
chrome.action.onClicked.addListener(() =>
    chrome.tabs.create({ url: 'https://chatgpt.com' }))
