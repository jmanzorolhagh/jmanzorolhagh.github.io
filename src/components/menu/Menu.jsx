import "./menu.scss"
import { useEffect } from "react";

export default function Menu({open, setOpen}) {
  useEffect(() => {
      document.body.classList.toggle("menu-open", open);
      return () => document.body.classList.remove("menu-open");
  }, [open]);

  return <nav className={open ? "menu active" : "menu"} aria-hidden={!open}>
      <ul>
          <li onClick={() => setOpen(false)}>
              <a href="#intro">Intro</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#works">Portfolio</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#exploring">Exploring</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setOpen(false)}>
              <a href="#contact">Contact</a>
          </li>
      </ul>
  </nav>;
}
