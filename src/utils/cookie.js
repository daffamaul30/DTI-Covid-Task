function getCookie(name) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(`${name}=`);
    if (cStart !== -1) {
      cStart = cStart + name.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) {
        cEnd = document.cookie.length;
      }
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  const domain = process.env.REACT_APP_DOMAIN ?? 'localhost';
  // console.log(expires);
  document.cookie = `${cname}=${cvalue};${expires};domain=${domain};path=/`;
}

function deleteCookie(name) {
  const cookie = document.cookie.split('; ').find((row) => {
    return row.startsWith(name);
  });
  document.cookie = `${cookie}=;expires=${new Date(0).toUTCString()}`;
}

const isUserAuthenticated = () => {
  if (getCookie('tokenn')) return true;
  return false;
};

export { isUserAuthenticated, getCookie, setCookie, deleteCookie };
