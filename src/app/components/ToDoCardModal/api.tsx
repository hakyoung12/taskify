import axios from 'axios';
import instance from '@/app/api/axios';

const getDashBoard = async () => {
  try {
    const res = await instance.get('dashboards', {
      params: { navigationMethod: 'pagination' },
    });
  } catch (error) {
    console.log(error);
  }
};

const getColumnsByDashBoardId = async (dashboardid: number) => {
  try {
    const res = await instance.get(`columns`, {
      params: { dashboardId: `${dashboardid}` },
    });
    return await res.data;
  } catch (error) {
    console.error(error);
  }
};

const postNewColumnData = async (title: string, dashboardid: number) => {
  const data = {
    title: title,
    dashboardId: dashboardid,
  };

  const res = await instance.post(`columns`, data);
};

const getCardsList = async (
  columnId: number,
  size: number,
  cursorId: number,
) => {
  const params = {
    columnId: `${columnId}`,
    size: `${size}`,
    cursorId: `${cursorId}`,
  };

  try {
    const res = await instance.get('cards', { params });
  } catch (error) {
    console.log(error);
  }
};

const deleteColumnByID = async (columnId: number) => {
  try {
    const res = await instance.delete(`columns/${columnId}`);
  } catch (error) {
    console.log(error);
  }
};

const putColumnByID = async (columnId: number, title: string) => {
  const data = { title: title };
  try {
    const res = await instance.put(`columns/${columnId}`, data);
  } catch (error) {
    console.log(axios.isAxiosError(error));
  }
};

export {
  getDashBoard,
  getColumnsByDashBoardId,
  postNewColumnData,
  getCardsList,
  deleteColumnByID,
  putColumnByID,
};
