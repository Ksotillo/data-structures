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
        title: "A true King",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={
                        "/images/class-7/i-know-chad-meme-yes-chad01601860089.jpg"
                    }
                    width={400}
                    height={225}
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
                    La verdad es que las listas enlazadas es una de las
                    Estructuras de Datos más popular y eficiente, con
                    implementaciones en muchos lenguajes de programación, como
                    en C, C++, Python, Java y C#.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Dinamismo en memoria",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-7/list.png"}
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
        title: "Genial para empezar a aprender",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-7/cover-page-logo.png"}
                    width={240}
                    height={240}
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
                    Las listas enlazadas son un geniales para aprender como
                    funcionan los apuntadores. Al practicar manipulando listas
                    enlazadas uno se puede preparar más fácilmente para manejar
                    estructuras de datos más avanzadas como grafos y árboles.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Ctrl + Z",
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
                    Típicamente la funcionalidad de deshacer en los programa se
                    implementan con una lista enlazada 👨‍💻
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class7Slide11 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Okay to' cool, to' gucci... pero, ¿En qué situaciones se utilizan las Listas Enlazadas o cuando nos son útiles?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class7Slide11;
