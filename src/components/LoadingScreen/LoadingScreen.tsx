import {FC} from 'react';
import './loadingScreen-style.scss';

interface ILoadingScreen {
  isLoading: boolean;
}

const LoadingScreen: FC<ILoadingScreen> = ({isLoading}) => {
  if (isLoading) {
    return (
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  } else
    return (null);
};

export default LoadingScreen;
