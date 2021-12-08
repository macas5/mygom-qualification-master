import {SyntheticEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Routes} from '~/constants';

import {API} from '~/constants';
import getUrl from '../utils/getUrl';

const logout = async (token: string) => {
  const url = getUrl(API.Logout);
  

  const response = await fetch(url, {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Bearer '+token
    })
  });

  localStorage.removeItem('token');
};

export default logout;