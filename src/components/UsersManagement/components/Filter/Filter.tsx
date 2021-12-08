import { FC } from 'react';
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import FilterTab from "./components/FilterTab"
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemIsOld from '~/utils/itemIsOld';

import './filter-style.scss';

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({items}) => {
  const weakItemsCount = items.filter((item) => 
  itemHasWeakPassword(item)).reduce((count, item) => (
     (count + 1) 
  ), 0)

  const reusedItemsCount = items.filter((item) => 
  itemHasReusedPassword(item, items)).reduce((count, item) => (
    (count + 1)
  ), 0)

  const oldItemsCount = items.filter((item) => 
  itemIsOld(item)).reduce((count, item) => (
    (count + 1)
  ), 0)

  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users}/>
      <FilterTab title="Wrong" count={weakItemsCount} path={Routes.Weak}/>
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused}/>
      <FilterTab title="Old" count={oldItemsCount} path={Routes.Old}/>
    </div>
  );
};

export default Filter;
