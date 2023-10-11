import { news } from "./data.js";
let root = document.querySelector(".root");
let allNews = "";
for (let i = 0; i < news.length; i++) {
  const oneNews = news[i];
  const newsTitle = `<p class="news_title">${oneNews.title}</p>`;
  const newsText = `<p class="news_text">${oneNews.text}</p>`;
  const newsDate = `<p>${oneNews.date}</p>`;
  const newsView = `<p>${oneNews.view_count}</p>`;
  const newsImage = `<img class="newsImage" src="${oneNews.image}"/>`;
  allNews =
    allNews +
    `<div class="news">${newsImage}<div class="newsInfo">${newsTitle}${newsText}<div class="bottom_text">${newsView}${newsDate}</div></div></div>`;
}
root.innerHTML = allNews;
