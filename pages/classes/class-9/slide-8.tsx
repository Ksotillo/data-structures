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
        title: "En un one-by-one loop",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/one-by-one.png"}
                    width={425}
                    height={250}
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
                    Las listas circulaes son usadas en aplicaciones dónde la
                    lista entera es accedida en un ciclo uno por uno{" "}
                    <i>(one-by-one loop)</i>
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "En el Sistema Operativo",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/round-robin.jpg"}
                    width={425}
                    height={250}
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
                    Es usado por el sistema operativo para compartir tiempo
                    entre distintos usuarios, generalmente usa un mecanismo de
                    Round-Robin para dividir el tiempo
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "En juegos",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/warzone.jpg"}
                    width={320}
                    height={341}
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
                    Los juegos multijugador usan una lista circular para cambiar entre jugadores en un ciclo.
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class9Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Ajá, ¿Y esto pa' que se usa?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class9Slide7;

