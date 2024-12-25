
function FooterIconItem({link, icon, color}) {

  return (
    <a className={`m-1 text-${color}`} href={link}>
      {icon}
    </a>
  )
}

export default FooterIconItem