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
        title: "Diagrama de Clases",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/class-diagram.png"}
                    width={518}
                    height={322}
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
                    Muestra una colección de elementos de modelado declarativo
                    (estáticos), tales como clases, tipos y sus contenidos y
                    relaciones.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Diagrama de Actividades",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/EN-UML-activity-diagram.png"}
                    width={1280}
                    height={720}
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
                    Representa los procesos de negocios de alto nivel, incluidos
                    el flujo de datos. Tambien puede utilizarse para modelar
                    lógica compleja y/o paralela dentro de un sistema.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Diagrama de Secuencias",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/sequence-diagram.png"}
                    width={500}
                    height={349}
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
                    Un diagrama que representa, una interacción, poniendo el
                    foco en la secuencia de los mensajes que se intercambian,
                    junto con sus correspondientes ocurrencias de eventos en las
                    Líneas de Vida.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Y muchos más...",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/others.jpg"}
                    width={637}
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
                    Hay muchos otros diagramas más que se utilizan para
                    múltiples cosas puedes leer un poco más de ellos en este
                    articulo que cuenta con un breve resumen:
                    <WhiteBox
                        active
                        p={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <ColoredText>
                            <a
                                href="https://platzi.com/tutoriales/1629-java-oop/4373-introduccion-a-uml/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Puedes leer más al respecto aquí
                            </a>
                        </ColoredText>
                    </WhiteBox>
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class13Slide3 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Tipos de Diagramas UML:"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class13Slide3;
