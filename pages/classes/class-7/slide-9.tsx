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
import { CodeBlock, dracula } from "react-code-blocks";

const javaCodeBlock = `
    int[] array = new int[10];
    int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
`;

const forCodeBlock = `
array = []
array.extend([ 1, 2,3,4,5 ])
array.extend([ 6,7,8 ])
array.extend([ 9 ])
`;

const dataTypes = [
    {
        title: "Estáticos",
        content: (
            <>
                Los arreglos estáticos tienen un espacio definido en memoria por
                lo que una vez que es declarado un arreglo estático no puede
                cambiarse su tamaño.
                <br />
                <br />
                Esto se hace en Java por ejemplo:
                <CodeBlock
                    text={javaCodeBlock}
                    language={"java"}
                    showLineNumbers
                    wrapLines
                    theme={dracula}
                />
            </>
        ),
        // @ts-ignore
        frame: (
            <RoundedImageContainer mt={4}>
                <RoundedImage
                    src={"/images/class-7/static-array.png"}
                    width={846}
                    height={759}
                />
            </RoundedImageContainer>
        ),
    },
    {
        title: "Dinámicos",
        content: (
            <>
                Un arreglo dinámico reserva el doble de slots en memoria por si
                llega a crecer Si nosotros nos excedemos los slots reservados
                inicialmente, la computadora copia el arreglo a un espacio en
                memoria que tenga el doble del tamaño reservado en la memoria
                inicialmente. Es decir, si inicalmente tenemos un arreglo de 3
                posiciones, entonces tendremos 6 espacios reservados en memoria,
                pero si nos excedemos de los 6 reservados, la computadora copia
                el array a un espacio con 12 slots y libera lo reservado
                inicialmente.
                <br />
                <br />
                Esto se hace Python por ejemplo:
                <CodeBlock
                    text={forCodeBlock}
                    language={"python"}
                    showLineNumbers
                    wrapLines
                    theme={dracula}
                />
            </>
        ),
        // @ts-ignore
        frame: (
            <RoundedImageContainer mt={4}>
                <RoundedImage
                    src={"/images/class-7/dynamic-array.png"}
                    width={846}
                    height={759}
                />
            </RoundedImageContainer>
        ),
    },
];

const Class7Slide9 = () => {
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
                            Existen dos tipos de arreglos
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

export default Class7Slide9;
