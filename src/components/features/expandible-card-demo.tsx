"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../ui/use-outside-click";

export function ExpandableCardDemo() {
  /*active guarda el estado actual de la tarjeta activa (la expandida). Puede ser un objeto de cards, false o null. */
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  /*
  ref: referencia a la tarjeta expandida (para saber si haces clic fuera de ella).
  id: ID único para animaciones entre elementos usando framer-motion.
 */
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false); // cerrar con ESC
      }
    }
    // Desactiva el scroll del body si hay una tarjeta activas
    if (active && typeof active === "object") {
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  //Usa el hook personalizado para cerrar la tarjeta si haces clic fuera del área expandida (ref).
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Fondo oscuro detrás de la tarjeta expandida */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      {/* Tarjeta expandida */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  z-[100] grid place-items-center">
            {/*Opción cerrar pero en dispositivos pequeños */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            {/*Muestra imagen del artista (animada) */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              // estilos de la tarjeta expandida
              className="w-full max-w-[500px] max-h-[500px]  md:h-auto overflow-auto flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  //Estilo tarjeta expandida
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              {/*Título, descripción y botón CTA (“Reservar”) que lleva a un enlace externo. */}
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                {/* Sección de contenido expandido. Puede ser un texto o una función que devuelve JSX. */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // contenido expandido con scroll
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : /*Cierra el bloque de tarjeta expandida. */
        null}
      </AnimatePresence>
      {/* Lista de tarjetas */}
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-4">
        {/* Recorre cada tarjeta del array cards y las muestra en la lista. Al hacer clic se expande. */}
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            // estilo de cada tarjeta
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#848282] dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-black"
          >
            {/*Dentro de cada tarjeta: imagen, título, descripción y botón. */}
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-10 w-10 md:h-10 md:w-10 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-black  dark:text-neutral-600 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p className="text-black text-[14px] dark:text-neutral-400 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              style={{ backgroundColor: "rgba(29, 28, 27, 0.4)" }}
              className="px-4 py-2 text-sm rounded-full  hover:bg-[#2F2D2D] hover:text-white text-black mt-4 md:mt-0 cursor-pointer border border-black"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
// Icono de cierre (X)
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Paquete",
    title: "Plato 1",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Reservar",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Paquete",
    title: "Plato 2",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Reservar",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Paquete",
    title: "Plato 3",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Reservar",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Paquete",
    title: "Plato 4",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Reservar",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Paquete",
    title: "Plato 5",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Reservar",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
  {
    description: "Paquete",
    title: "Plato 5",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Reservar",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];
