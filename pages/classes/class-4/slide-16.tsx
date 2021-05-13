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
        title: "En el estudio de algoritmos",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-4/algorithm-studies.svg"}
                    width={366}
                    height={348}
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
                    Esto puede sonar evidente, pero a lo que me refiero es que nos ayuda a tener una 
                    mejor compresión y a facilitar el estudio de algoritmos ya existentes o que estemos haciendo, 
                    para poder evaluar su eficiencia cuando se trabaja con grandes conjuntos de datos, 
                    de manera de que se pueda tener un buen sentido de dónde las mayores relancizaciones pueden 
                    estar causando cuellos de botella, y dónde se debe de poner más atención para lograr las mayores mejoras.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Poder escoger el algoritmos ideal para una tarea especifico",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-4/choice.svg"}
                    width={875}
                    height={566}
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
                    Si sabemos que algoritmos rinden mejor, esto definitvamente nos puede ayudar a tener una mejor toma de decisiones a la hora de escoger un código más eficiente o mejorar la eficiencia de cierto código.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Entrevistas con grandes compañías",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-4/big_companies.svg"}
                    width={560}
                    height={486}
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
                    Es común que en entrevistas para grandes compañías te pidan analizar un algoritmo, o que señales un problema en algún algoritmo relacionados a su eficiencia, en este sentido tener los conocimientos de la Big-O nos puede ayudar mucho.
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class4Slide16 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Okay fino... Ahora bien, seamos honestos ¿Esto realmente se usa?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class4Slide16;
