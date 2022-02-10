import "./menu.scss"

export default function Menu({open, setOpen}) {
  return <div className={"menu " + (open && 'active')}>
      <ul>
          <li onClick={() => setOpen(false)}>
              <a href="#intro">intro</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#works">portfolio</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#contact">contact</a>
          </li>

      </ul>

  </div>;
}
