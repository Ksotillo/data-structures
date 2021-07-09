import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { WhiteBox } from "UI/Box/Box";
import { ColoredText } from "UI/Button/Button";

// bigger_picture.jpeg
const items = [
    {
        title: "BST o BTS uwu",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/BST.png"}
                    width={1194}
                    height={614}
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
                    Los Binary Search Trees(BSTs) o Árboles de Búsqueda Binarios
                    son utilizados para rápidamente saber si un elemento está
                    presente en un conjunto o no.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Tries",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/trie-data-structure.png"}
                    width={651}
                    height={541}
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
                    Una versión modificada de los árboels llamada "Tries" es
                    usado en los routers modernos para guardar la información de
                    enrutamientos
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Bases de Datos",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/btreeDB.jpg"}
                    width={508}
                    height={254}
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
                    Las bases de datos más populares utilizan B-Trees y T-Trees,
                    que son variantes de la estructura de árbol que aprendimos
                    anteriormente para almacenar sus datos.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "HTML Document Object Model (DOM)",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={
                        "/images/class-14/representacion-grafica-de-un-dom-tree.png"
                    }
                    width={1920}
                    height={1080}
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
                    Todos los tags HTML y sus atributos son almacenados en un
                    árbolllamado Document Object Model (DOM)
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Validación en Compiladores",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/compilador-interprete-988x640.png"}
                    width={988}
                    height={640}
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
                    Ciertos compiladores utilizan un árbol para válidad la
                    sintaxis de cada programa.
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class12Slide12 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Harry Potter y el misterio de pa qué se usa esto"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class12Slide12;
