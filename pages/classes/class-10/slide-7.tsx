import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { WhiteBox } from "UI/Box/Box"
import { ColoredText } from "UI/Button/Button";

// bigger_picture.jpeg
const items = [
    {
        title: "Eficiencia Máxima",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-10/simple_stack.png"}
                    width={180}
                    height={270}
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
                    Debido a su naturaleza, el proceso de almacenar y obtener
                    información usando una pila es muy muy <b>muy</b> rápido, ya
                    que no hay que buscar, simplemente la información se
                    almacena y recupera del bloque en la cima de la pila.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "En compiladores",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-10/compileProcess.jpg"}
                    width={461}
                    height={154}
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
                    Los compiladores usan las pilas para calcular el valor de
                    expresiones como{" "}
                    <code style={{ color: "#1a4551" }}>
                        2 + 4 / 5 * (7 - 9)
                    </code>{" "}
                    convirtiendo la expresión en forma de prefijo o sufijo.
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
    {
        title: "Manejo de memoria",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-10/heap.png"}
                    width={538}
                    height={382}
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
                    Es utilizado por varios compiladores en múltiples lenguajes
                    de programación para poder almancenar la información en
                    memoria de manera sencilla y poder recuperar y limpiar la
                    información de manera eficaz.
                    <WhiteBox
                        active
                        p={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <ColoredText>
                            <a
                                href="https://deepu.tech/memory-management-in-programming/"
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

const Class10Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Mmmmm ya, y entonces ¿Esto para que sirve realmente?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class10Slide7;
