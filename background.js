let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
chrome.action.setBadgeBackgroundColor(
  { color: [0, 255, 0, 0] } // Green
);

chrome.action.setBadgeBackgroundColor(
  { color: "#00FF00" } // Also green
);
const tabId = getTabId();
const tabMessage = getTabMessage(tabId);
chrome.action.setBadgeText({ text: tabMessage, tabId: tabId }, () => {
  console.log("tabId");
});
