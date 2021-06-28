import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";

// bigger_picture.jpeg
const items = [
    {
        title: "Resolución de colisiones por encadenamiento",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/chaining.png"}
                    width={809}
                    height={627}
                />
                <br />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    En encadenamiento, si una función Hash produce un mismo
                    índice para múltiples elementos, esos elementos son
                    guardados en el mismo índice usando una lista enlazada.
                    <br />
                    <br />
                    Si <code style={{ color: "#1a4551" }}>j</code> es el slot
                    para múltiples elementos, entonces contiene el apuntado a la
                    cabeza de la lista deelemtnos. Si no hay ningún elemento
                    presente, <code style={{ color: "#1a4551" }}>j</code>{" "}
                    contiene <code style={{ color: "#1a4551" }}>NULL</code>
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Direccionamiento Abierto",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/open-addresing.png"}
                    width={458}
                    height={376}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    A diferencia del encadenamiento, direccionamiento abierto no
                    guarda múltiples elementos dentro de un mismo slot, aquí
                    cada slot es: o bien ocupado por una sola key o dejado con
                    un <code style={{ color: "#1a4551" }}>NULL</code>.
                    <br />
                    <br />
                    En esta categoría se tienen diferentes técnicas usadas como:
                </motion.p>
                <motion.ul style={{ color: "#1a4551" }}>
                    <li>Linear Probing</li>
                    <li>Quadratic Probing</li>
                    <li>Double hashing</li>
                </motion.ul>
            </GlassCardContent>
        ),
    },
];

const Class12Slide10 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Podemos resolver las colisiones usando cualquiera de las siguientes ténicas:"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class12Slide10;
