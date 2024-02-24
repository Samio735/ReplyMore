const ResetBtn = document.getElementById("reset");
const dailyGoalEl = document.getElementById("daily-goal");
const todayCountEl = document.getElementById("today-count");
const overallCountEl = document.getElementById("overall-count");
const dailyAverageEl = document.getElementById("daily-average");
// const todayTimeEl = document.getElementById("today-time");
// const averageTimeEl = document.getElementById("average-time");
// const timePerTweetEl = document.getElementById("time-per-tweet");
const showTodayCountEl = document.getElementById("show-today-count");
const showOverallCountEl = document.getElementById("show-overall-count");
const showDailyAverageEl = document.getElementById("show-daily-average");
// const showTodayTimeEl = document.getElementById("show-today-time");
// const showAverageTimeEl = document.getElementById("show-average-time");
// const showTimePerTweetEl = document.getElementById("show-time-per-tweet");

ResetBtn.addEventListener("click", () => {
  chrome.storage.sync.set({ todayCount: 0, postCount: 0, countDays: 1 });
});

// add event listenes to each show button

showTodayCountEl.addEventListener("change", (e) => {
  chrome.storage.sync.set({ showTodayCount: e.target.checked });
});

showOverallCountEl.addEventListener("change", (e) => {
  chrome.storage.sync.set({ showOverallCount: e.target.checked });
});

showDailyAverageEl.addEventListener("change", (e) => {
  chrome.storage.sync.set({ showDailyAverage: e.target.checked });
});

// showTodayTimeEl.addEventListener("change", (e) => {
//   chrome.storage.sync.set({ showTodayTime: e.target.checked });
// });

// showAverageTimeEl.addEventListener("change", (e) => {
//   chrome.storage.sync.set({ showAverageTime: e.target.checked });
// });

// showTimePerTweetEl.addEventListener("change", (e) => {
//   chrome.storage.sync.set({ showTimePerTweet: e.target.checked });
// });

dailyGoalEl.addEventListener("change", (e) => {
  chrome.storage.sync.set({
    dailyGoal: Number(e.target.value),
  });
});

chrome.storage.sync.get(
  [
    "dailyGoal",
    "countDays",
    "todayCount",
    "postCount",
    "timeSpent",
    "timeSpentToday",
    "showTodayCount",
    "showOverallCount",
    "showDailyAverage",
    "showTodayTime",
    "showAverageTime",
    "showTimePerTweet",
  ],
  (data) => {
    const dailyGoal = data.dailyGoal || 0;
    const countDays = data.countDays || 1;
    const todayCount = data.todayCount || 0;
    const postCount = data.postCount || 0;
    const timeSpent = data.timeSpent || 0;
    const timeSpentToday = data.timeSpentToday || 0;
    const showTodayCount = !!data.showTodayCount ? "true" : "false";
    const showOverallCount = !!data.showOverallCount ? "true" : "false";
    const showDailyAverage = !!data.showDailyAverage ? "true" : "false";
    const showTodayTime = !!data.showTodayTime ? "true" : "false";
    const showAverageTime = !!data.showAverageTime ? "true" : "false";
    const showTimePerTweet = !!data.showTimePerTweet ? "true" : "false";

    dailyGoalEl.value = dailyGoal;
    todayCountEl.textContent = todayCount;
    overallCountEl.textContent = postCount;
    dailyAverageEl.textContent = (postCount / countDays).toFixed(1);
    // todayTimeEl.textContent = timeSpentToday;
    // averageTimeEl.textContent = Math.round(timeSpent / countDays);
    // timePerTweetEl.textContent = (timeSpent / postCount).toFixed(1);
    showTodayCountEl.checked = showTodayCount === "true";
    showOverallCountEl.checked = showOverallCount === "true";
    showDailyAverageEl.checked = showDailyAverage === "true";
    // showTodayTimeEl.checked = showTodayTime === "true";
    // showAverageTimeEl.checked = showAverageTime === "true";
    // showTimePerTweetEl.checked = showTimePerTweet === "true";
  }
);
