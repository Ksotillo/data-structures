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
        title: "Dinamismo en memoria",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-8/doubly_list.png"}
                    width={339}
                    height={322}
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
                    El hecho de que pueda organizarse de manera distribuida y
                    dinámica en memoria hace que tenga muchas aplicaciones
                    útiles para casos en los que prioridad sea el uso eficiente
                    de la memoria
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "⬅➡",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-8/backward_forward.jpg"}
                    width={320}
                    height={180}
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
                    La funcionalidad de ir tanto hacia la página anterior como
                    la siguiente en los navegadores se implementado con este
                    tipo estructura de datos.
                    <br />
                    <br />Y en general, para cualquier sistema de navegación
                    dónde la navegación hacia adelante y hacia atrás sea
                    requerida, es posible que se vea la implementación de esta
                    estructua.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Ctrl + Z & Ctrl + Y",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-7/the-not-using-a-computer-problem.jpg"}
                    width={250}
                    height={270}
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
                    Típicamente la funcionalidad de deshacer y rehacer en los
                    programa se implementan con una listas doblemente enlazadas
                    👨‍💻
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class8Slide10 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Vale, ahora, ¿Cuales son algunos ejemplos de uso para las Listas Doblemente Enlazadas?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class8Slide10;
