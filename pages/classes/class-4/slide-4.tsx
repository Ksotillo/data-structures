import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { CodeBlock, dracula } from "react-code-blocks";

const items = [
    {
        title: "Uso de memoria",
        Component: () => (
            <GlassCardContent>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <Image
                        src={"/images/class-4/memory.svg"}
                        width={428}
                        height={305}
                    />
                </motion.div>
                <br />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La complejidad del espacio de un programa es la cantidad de
                    memoria que se necesita para ejecutarlo hasta la compleción
                    (terminación). El avance tecnológico proporciona hoy en día
                    memoria abundante; por esa razón, el análisis de algoritmos
                    se centra fundamentalmente en el tiempo de ejecución
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Velocidad de ejecución",
        Component: () => (
            <GlassCardContent>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <Image
                        src={"/images/class-4/speed.svg"}
                        width={444}
                        height={355}
                    />
                </motion.div>
                <br />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La complejidad del tiempo de un programa es la cantidad de
                    tiempo de computadora que se necesita para ejecutarlo
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class4Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Ok... pero ¿analizar nuestros algoritmos con respecto a qué?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class4Slide4;
