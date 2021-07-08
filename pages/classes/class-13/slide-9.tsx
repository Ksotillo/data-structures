import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { ColoredText } from "UI/Button/Button";
import { WhiteBox } from "UI/Box/Box";

// bigger_picture.jpeg
const items = [
    {
        title: "StarUML",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/starUML.jpeg"}
                    width={380}
                    height={243}
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
                    Un modelador de software sofisticado para un modelado ágil y
                    conciso.
                    <WhiteBox
                        active
                        p={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <ColoredText>
                            <a
                                href="https://staruml.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Página oficial de StarUML
                            </a>
                        </ColoredText>
                    </WhiteBox>
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "LucidChart",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/logo-lucidchart.jpg"}
                    width={2454}
                    height={614}
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
                    Lucidchart es una herramienta de diagramación basada en la
                    web, que permite a los usuarios colaborar y trabajar juntos
                    en tiempo real, creando diagramas de flujo, organigramas,
                    esquemas de sitios web, diseños UML, mapas mentales,
                    prototipos de software y muchos otros tipos de diagrama.
                    <WhiteBox
                        active
                        p={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <ColoredText>
                            <a
                                href="https://www.lucidchart.com/pages/es"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Página oficial de LucidChart
                            </a>
                        </ColoredText>
                    </WhiteBox>
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Draw.io",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/draw-io.png"}
                    width={776}
                    height={398}
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
                    draw.io es un software de diagramas en línea gratuito para
                    hacer diagramas de flujo, diagramas de procesos,
                    organigramas, UML, ER y diagramas de red.
                    <WhiteBox
                        active
                        p={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <ColoredText>
                            <a
                                href="https://draw.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Página oficial de Draw.io
                            </a>
                        </ColoredText>
                    </WhiteBox>
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class13Slide9 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Softwares para creación de Diagramas UML"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class13Slide9;
