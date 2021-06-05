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
        title: "Sin null",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/null.png"}
                    width={324}
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
                    No necesitamos apuntar a <i>NULL</i> 
                    porque un nodo siempre está apuntando
                    a otro
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Empieza donde quieras",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/start.png"}
                    width={320}
                    height={320}
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
                    Puede asignar el punto inicial de la lista en cualquier nodo.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Los extremos se tocan",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/extremos.png"}
                    width={500}
                    height={348}
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
                    Podemos pasar del primero de la lista al último rápidamente.
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class9Slide6 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="¿Qué beneficios tienen las listas circulares sobre la lineales?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class9Slide6;
