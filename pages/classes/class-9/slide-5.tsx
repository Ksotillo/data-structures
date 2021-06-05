import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from "styled-components";
import { H4, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { useState } from "react";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const dataTypes = [
    {
        title: "Listas Circulares Simples",
        content: (
            <>
                Los nodos de la lista circulares se guardan aleatoriamente en la
                memoria, y no hay problema con esto porque cada nodo tiene
                referencia al nodo que le sigue.
            </>
        ),
        // @ts-ignore
        frame: (
            <RoundedImageContainer mt={4}>
                <RoundedImage
                    src={"/images/class-9/list.png"}
                    width={677}
                    height={644}
                />
            </RoundedImageContainer>
        ),
    },
    {
        title: "Listas Circulares Dobles",
        content: (
            <>
                Los nodos de la lista circulares dobles funcionan basicamente
                igual, pero al tener estos un nuevo apuntador a otra dirección
                de memoria que hace referencia al nodo anterior, ocupa más
                espacio en la memoria.
            </>
        ),
        // @ts-ignore
        frame: (
            <RoundedImageContainer mt={4}>
                <RoundedImage
                    src={"/images/class-9/doubly_list.png"}
                    width={677}
                    height={644}
                />
            </RoundedImageContainer>
        ),
    },
];

const Class9Slide5 = () => {
    const controls = useSlideAnimationControls();
    const [currentType, setCurrentType] = useState(0);
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={0}
                        transition={transition}
                    >
                        <H1 shadow>
                            Veamoslo desde el punto de vista de memoria
                        </H1>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={1}
                            transition={transition}
                        >
                            <GlassCardForTabs>
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                    custom={2}
                                    transition={transition}
                                >
                                    <Box
                                        display="flex"
                                        justifyContent="space-around"
                                    >
                                        {dataTypes.map((item, index) => (
                                            <WhiteBox
                                                className={
                                                    currentType === index
                                                        ? "selected"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setCurrentType(index)
                                                }
                                            >
                                                <ColoredTextOnHover
                                                    py={3}
                                                    px={4}
                                                >
                                                    {item.title}
                                                </ColoredTextOnHover>
                                            </WhiteBox>
                                        ))}
                                    </Box>
                                    <Box className="definition-content" p={4}>
                                        <motion.div
                                            initial="hidden"
                                            animate={"visible"}
                                            variants={variants}
                                            custom={2}
                                            transition={transition}
                                        >
                                            <H4>
                                                {dataTypes[currentType].content}
                                            </H4>
                                        </motion.div>
                                    </Box>
                                </motion.div>
                            </GlassCardForTabs>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        py={3}
                    >
                        {dataTypes[currentType].frame}
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

const GlassCardForTabs = styled(GlassCard)`
    padding: 0 !important;

    ${WhiteBox} {
        margin: 0;
        width: 50%;
        text-align: center;
        transform: none !important;
        box-shadow: none !important;
        border-bottom-right-radius: 0 !important;
        border-bottom-left-radius: 0 !important;

        ${ColoredTextOnHover} {
            font-size: 1rem !important;
        }

        &:first-child {
            border-top-right-radius: 0 !important;
        }
        &:last-child {
            border-top-left-radius: 0 !important;
        }
    }

    .definition-content {
        background-color: white;
        border-bottom-right-radius: 10px !important;
        border-bottom-left-radius: 10px !important;
        font-size: 1rem;

        ${H4} {
            color: #1a4551 !important;
        }

        ul {
            padding-left: 1rem;
        }

        li,
        b {
            color: #454545;
        }
    }
`;

export default Class9Slide5;
