import { creatApi } from '@reduxjs/toolkit/query/react';

const albumsApi = creatApi({
  reducerPath: 'albums'
})