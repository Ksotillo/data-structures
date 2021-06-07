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
        title: "Cola Circular",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/circular_queue.png"}
                    width={742}
                    height={91}
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
                    En una cola circular, el último elemento de la cola apunta al primero, creando un enlace circular.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Cola de prioridad",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/priority_queue.png"}
                    width={482}
                    height={232}
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
                    Una cola de prioridad es un tipo especial de cola en el cual
                    cada elemento está asociado a cierta prioridad y se sirve
                    de acuerdo con su prioridad. Si ocurre que dos elementos
                    tienen la misma prioridad, se sirve conforme a su posición en la cola
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Dequeue (Double Ended Queue)",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-11/dequeue.png"}
                    width={657}
                    height={107}
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
                    En una bicola (o cola doblemente terminada), las acciones de añadir y eliminar
                    elementos puede ser llevada a cabo tanto al principio como al final. Debido a
                    como funciona, este tipo de cola no sigue el principio de First In First Out (FIFO)
                </motion.p>
            </GlassCardContent>
        ),
    }
];

const Class11Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Existen algunas variaciones de las colas como:"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class11Slide7;
