function FooterIconItem({ link, icon, color }) {
  return (
    <a className={`m-1 fs-3 text-${color}`} href={link}>
      {icon}
    </a>
  );
}

export default FooterIconItem;
