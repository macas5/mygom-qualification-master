import {IItem} from "~/services/getUserItems";

const itemIsOld = (item: IItem) => {
  //If item is older than 30days
  const oldDateThreshold = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString();
  if (item.createdAt < oldDateThreshold)
    return true;
  else
    return false;
};

export default itemIsOld;