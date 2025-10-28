import { ProfilePicture } from "../functions/ProfilePicture";

const user = !localStorage.getItem('user') ? "" : JSON.parse(localStorage.getItem('user'));
const profile = ProfilePicture(user);


export const left = [
  {
    text: `${user.lastname} ${user.firstname}`,
    img: profile,
  },
  {
    text: "Find friends",
    img: "/images/friends.png",
  },
  {
    text: "Memories",
    img: "/images/memories.png",
  },
  {
    text: "Groups",
    img: "/images/groups.png",
    notification: "5 new",
  },
  {
    text: "Marketplace",
    img: "/images/marketplace.png",
  },
  {
    text: "Watch",
    img: "/images/watch.png",
    notification: "9 new videos",
  },
  {
    text: "Saved",
    img: "/images/saved.png",
  },
  {
    text: "Pages",
    img: "/images/pages.png",
  },
  {
    text: "Events",
    img: "/images/events.png",
  },
  {
    text: "Ad Center",
    img: "/images/ad.png",
  },
  {
    text: "Ads Manager",
    img: "/images/ads.png",
  },
  {
    text: "Campus",
    img: "/images/campus.png",
  },
  {
    text: "Climate science center",
    img: "climate",
  },
  {
    text: "Community Help",
    img: "/images/community.png",
  },
  {
    text: "COVID-19 Information Centrer",
    img: "/images/covid.png",
  },
  {
    text: "Emotional health",
    img: "/images/emotional.png",
  },
  {
    text: "Facebook Pay",
    img: "/images/pay.png",
  },
  {
    text: "Favorites",
    img: "/images/fav.png",
  },
  {
    text: "Fundraisers",
    img: "/images/fund.png",
  },
  {
    text: "Gaming Video",
    img: "/images/gaming.png",
  },
  {
    text: "Jobs",
    img: "/images/jobs.png",
  },
  {
    text: "Live videos",
    img: "/images/live.png",
  },
  {
    text: "Messenger",
    img: "/images/messenger.png",
  },
  {
    text: "Messenger Kids",
    img: "/images/messkids.png",
  },
  {
    text: "Most recent",
    img: "/images/recent.png",
  },
  {
    text: "Play Games",
    img: "/images/play.png",
  },
  {
    text: "Recent ad activity",
    img: "/images/recentad.png",
  },
  {
    text: "Weather",
    img: "/images/weather.png",
  },
];
export const stories = [
  {
    profile_picture: "/stories/profile1.jpg",
    profile_name: "Elon Musk",
    image: "/stories/1.jpg",
  },
  {
    profile_picture: "/stories/profile2.jpg",
    profile_name: "South park",
    image: "/stories/2.png",
  },
  {
    profile_picture: "/stories/profile3.png",
    profile_name: "The Sopranos",
    image: "/stories/3.jpg",
  },
  {
    profile_picture: "/stories/profile4.jfif",
    profile_name: "Football World",
    image: "/stories/4.jpg",
  },
  {
    profile_picture: "/stories/profile5.png",
    profile_name: "The Witcher Wild Hunt",
    image: "/stories/5.jfif",
  },
];
