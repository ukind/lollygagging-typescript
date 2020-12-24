interface menu {
  label: string;
  id: number;
  className: string;
  // force to set key of interface must string or number
  [key: string]: string | number;
}

const footerMenu : menu = {
    className: 'footer__menu',
    id: 0,
    label: 'Hello'
}