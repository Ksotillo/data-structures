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

const differences = [
    ["Cada nodo consiste en la información del nodo y un apuntador al siguiente nodo", "Cada nodo consiste en la información del nodo, un apuntador al siguiente nodo, y un apuntador al anterior nodo" ],,
    ["Se puede recorrer en un sólo sentido", "Se puede recorrer en doble sentido "],
    [ "Requiere menos espacio en memoria", "Requiere más espacio porque tiene apuntador extra" ],
];

const Class8Slide9 = () => {
    const controls = useSlideAnimationControls();
    // const [currentType, setCurrentType] = useState(0);
    return (
        <Container>
            <Row>
                <Col col={12}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={0}
                        transition={transition}
                    >
                        <H1 shadow textAlign="center">
                            Listas Enlazadas Simples vs Listas Enlazadas Dobles
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
                                        {[
                                            "Lista Enlazadas",
                                            "Listas Doblemente Enlazadas",
                                        ].map((item, index) => (
                                            <WhiteBox className={"selected"}>
                                                <ColoredTextOnHover
                                                    py={3}
                                                    px={4}
                                                >
                                                    {item}
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
                                                <table>
                                                    {differences.map(
                                                        (
                                                            [singly, doubly],
                                                            index
                                                        ) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    👉 {singly}
                                                                </td>
                                                                <td>
                                                                    👉 {doubly}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </table>
                                            </H4>
                                        </motion.div>
                                    </Box>
                                </motion.div>
                            </GlassCardForTabs>
                        </motion.div>
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
            * {
                color: #1a4551 !important;
            }
            table tr td {
                padding: 1rem;
                width: 50%;
            }
            table tr td:nth-child(odd) {
                border-right: 1px solid #ada8a87d;
            }
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

export default Class8Slide9;
