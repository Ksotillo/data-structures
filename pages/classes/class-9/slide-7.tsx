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
        title: "Complejidad",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/complexity.png"}
                    width={500}
                    height={344}
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
                    Las listas circulaes son un pelo más complejas de manejar y ocupan más espacio en memoria
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Invertirla no sería una buena idea",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/rewind.jpg"}
                    width={380}
                    height={434}
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
                    Invertir una lista circular es una tarea compleja comprador con inveritr una lista simple o doble
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "⚠️∞⚠️",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-9/loop.jpg"}
                    width={500}
                    height={328}
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
                    Si no se recorren con cuidado, podríamos terminar en un loop infinito
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class9Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="No todo puede ser bueno, ¿Hay desventajas?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class9Slide7;
