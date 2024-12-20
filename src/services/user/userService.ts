import CustomFetch from '../../components/fetch/CustomFetch';
import cookieCutter from '@boiseitguru/cookie-cutter';
import { getCookies, logout } from '../../lib/utils';

const { get, post } = CustomFetch();

const BASE_URL = '/users';

const getUsersSrv = async (ctx, uid) => {
  const url = BASE_URL + (uid ? `/${uid}/info` : '');
  const data = await get(ctx, url);
  return data;
};

const loginSrv = async (ctx: any, phone: string, code: number, name: string) => {
  const path = BASE_URL + '/login';
  try {
    const data = await post(ctx, path, { code, phone, name });
    const { token, uid } = data.data;
    cookieCutter.set('X-Auth-Token', token);
    cookieCutter.set('User-ID', uid);
    return data;
  } catch (err) {
    return {
      data: null,
      status: 400,
      message: 'Error al iniciar sesión',
    };
  }
};

const validateTokenSrv = async (ctx) => {
  // Valida el token que esta en el navegador así mismo el UserId, si alguno de estos dos no se encuentra, cierra la session.
  const path = BASE_URL + '/validate-token';
  const headers = getCookies(ctx);
  if (!headers['User-ID'] || !headers['X-Auth-Token']) {
    logout();
    return {
      code: 403,
      data: {},
    };
  }
  // const data = await post(ctx, path, {});
  return {
    code: 200,
    data: {},
  };
};

const sendCodeSrv = async (ctx, phone) => {
  const path = BASE_URL + '/login';
  const data = await post(ctx, path, { phone });
  return data;
};

const updateProfileSrv = async (ctx, uid, data) => {
  const path = BASE_URL + `/${uid}/update`;
  const response = await post(ctx, path, data);
  return response;
};

const getExperiencesSrv = async (ctx) => {
  try {
    const { code, data: experiences } = await get(ctx, `${BASE_URL}/experiences`);
    const expTotal = experiences.reduce((total, obj) => total + obj.value, 0);
    return {
      expTotal,
      experiences,
    };
  } catch (err) {
    // TODO - Implementar un logger
    console.error('Error al obtener las experiencias del usuario', err);
    return {
      expTotal: 0,
      experiences: [],
    };
  }
};

const getNotificationsSrv = async (uid) => {
  const data = await get(null, BASE_URL + `/${uid}/notifications`);
  return data;
};

export { getExperiencesSrv, getNotificationsSrv, getUsersSrv, loginSrv, sendCodeSrv, validateTokenSrv, updateProfileSrv };
