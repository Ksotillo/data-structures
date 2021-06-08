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
        title: "Organización de ejecución: CPU y Disco",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/scheduling.jpg"}
                    width={538}
                    height={347}
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
                    Las colas son utilizadas para definir la organización de los
                    procesos a ejecturse en el CPU o en el Disco (en este último
                    operaciones de lectura y escritura)
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Traspaso de Data de forma asíncrona",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/buffering.png"}
                    width={456}
                    height={143}
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
                    Cuando cierta información es transferida de manera asincrona
                    entre dos procesos, entonces una cola puede ser usada para
                    su sincronización. Por ejemplo: I/O Buffers, pipes, file
                    I/O, etc.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Manejo de interrupciones",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/unamed.gif"}
                    width={500}
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
                    Manejo de interrupciones en sistemas en tiempo real.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "En un Call Center",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/call_center.jpg"}
                    width={512}
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
                    Los telefonos en los Call Center usan un sistema de colas
                    para mantener en orden a las personas que están llamando
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class11Slide8 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Okay y entonces... ¿Esto pa' qué?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class11Slide8;
