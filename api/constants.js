const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = {
  homePage: `${apiUrl}Home/GetAllCategory`,
  homeSettings: `${apiUrl}Home/HomeSettings`,
  slugData: `${apiUrl}Home/GetPostBySlug`,
  postsByAuthor: `${apiUrl}Home/GetPostsByAuthor`,
  postsByTag: `${apiUrl}Home/GetPostsByTag`,
  newsletter: `${apiUrl}Home/PostEmailBYSubscriber`,
  rssCategories: `${apiUrl}Home/GetCatRSSFeeds`,
  rssFeed: `${apiUrl}Home/GetRssFeed`,
};
