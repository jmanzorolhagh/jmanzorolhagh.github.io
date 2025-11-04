import "./menu.scss"

export default function Menu({open, setOpen}) {
  return <div className={"menu " + (open && 'active')}>
      <ul>
          <li onClick={() => setOpen(false)}>
              <a href="#intro">Intro</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#works">Portfolio</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#contact">Contact</a>
          </li>
      </ul>
  </div>;
}