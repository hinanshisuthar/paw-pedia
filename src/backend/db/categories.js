import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Healthcare",
    img: "https://static.seekingalpha.com/uploads/2017/4/18/748328-14925485604978452_origin.png",
  },
  {
    _id: uuid(),
    categoryName: "Training",
    img: "https://blog.smartanimaltraining.com/wp-content/uploads/2020/10/winpro-1008499438.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Adoption",
    img:"https://dentonhumanesociety.org/wp-content/uploads/2015/10/allyouneed.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Make My Day",
    img:"https://i.pinimg.com/originals/7f/64/3f/7f643f0db514d7971349c416e29e42a8.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Films and Animation",
    img: "https://i.ytimg.com/vi/07d2dXHYb94/maxresdefault.jpg",
  },
];
