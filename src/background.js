// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'fill_forms') {
//     fillForms();
//     sendResponse({ filled: true });
//   }
// });

// function fillForms() {
//   const inputs = document.querySelectorAll('input');
//   console.log('title', document.title, inputs);

//   inputs.forEach(input => {
//     if (input.type !== 'submit') {
//       input.value = 'Auto-filled by the Extension';
//     }
//   });
// }

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fill_forms') {
    const inputs = document.querySelectorAll('input');
    console.log('s', inputs);
    inputs.forEach(input => {
      if (input.type !== 'submit') {
        input.value = 'Auto-filled by the Extension';
      }
    });
    sendResponse({ filled: true });
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const activeTab = tabs[0];
  const activeTabId = activeTab.id;
  // Send a message to the active tab
  chrome.tabs.sendMessage(activeTabId, { action: 'fill_forms' });
});
