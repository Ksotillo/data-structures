import Image from "next/image";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box, WhiteBox } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";
import { ColoredText } from "UI/Button/Button";

const items = [
    {
        title: "Diagrama de clases zoológico",
        imagePath: "/images/class-13/diagrama-zoologico.jpg",
    },
    {
        title: "Diagrama de clases de una tienda",
        imagePath: "/images/class-13/diagrama-tienda.png",
    },
];

const Class13Slide8 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12}>
                    <Box display="flex" justifyContent="center">
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={0}
                            transition={transition}
                        >
                            <H2>Ejemplos de Diagramas de Clases</H2>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={12} style={{ justifyContent: "center", display: "flex" }}>
                    <WhiteBox
                        active
                        p={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <ColoredText>
                            <a
                                href="https://diagramasuml.com/diagrama-de-clases/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Puedes ver más ejemplos acá
                            </a>
                        </ColoredText>
                    </WhiteBox>
                </Col>
                {items.map((item, index) => (
                    <Col col={6}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={index + 1}
                            transition={transition}
                        >
                            <WhiteBox
                                p={2}
                                active
                                display="flex"
                                justifyContent="center"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                    custom={index + 2}
                                    transition={transition}
                                >
                                    <H3>
                                        <ColoredText>{item.title}</ColoredText>
                                    </H3>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                    custom={index + 3}
                                    transition={transition}
                                >
                                    <Image
                                        src={item.imagePath}
                                        width={886}
                                        height={962}
                                    />
                                </motion.div>
                            </WhiteBox>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Class13Slide8;
