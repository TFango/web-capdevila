"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Por qué yo", href: "#difference" },
  { label: "Servicios", href: "#services" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Image
            src="/images/logos/logo.svg"
            alt="Capdevila Soldadura"
            width={120}
            height={40}
            className={styles.logo}
          />
          <button
            className={styles.btn}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            <Image
              src={open ? "/images/logos/close.svg" : "/images/logos/menu.svg"}
              alt=""
              width={24}
              height={24}
              className={styles.menu}
            />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <nav className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerTop}>
          <span className={styles.drawerLabel}>Menú</span>
        </div>

        <ul className={styles.navList}>
          {links.map((link, i) => (
            <li key={i} className={styles.navItem}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={handleLink}
                style={{ transitionDelay: open ? `${i * 0.05}s` : "0s" }}
              >
                <span className={styles.navNum}>0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.drawerBottom}>
          <a
            href="https://wa.me/5492236000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerWpp}
            onClick={handleLink}
          >
            Pedir presupuesto gratis
          </a>
          <span className={styles.drawerCopy}>Mar del Plata, Buenos Aires</span>
        </div>
      </nav>
    </>
  );
}
