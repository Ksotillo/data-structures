import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { ColoredText } from "UI/Button/Button";
import { WhiteBox } from "UI/Box/Box";

const Class4Slide17 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12} style={{ marginBottom: "2rem" }}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={0}
                        transition={transition}
                    >
                        <H2 shadow textAlign="center">
                            ¿Te interesa este tema? Acá tienes más recursos:
                        </H2>
                    </motion.div>
                </Col>
                <Col
                    col={6}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <WhiteBox
                        active
                        p={3}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ColoredText>For Dummies</ColoredText>
                        <iframe
                            width="420"
                            height="237"
                            src="https://www.youtube.com/embed/MyAiCtuhiqQ"
                            title="YouTube video player"
                            // @ts-ignore
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </WhiteBox>
                </Col>
                <Col
                    col={6}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <WhiteBox
                        active
                        p={3}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ColoredText>Advanced</ColoredText>
                        <iframe
                            width="420"
                            height="237"
                            src="https://www.youtube.com/embed/IZgOEC0NIbw"
                            title="YouTube video player"
                            // @ts-ignore
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </WhiteBox>
                </Col>
                <Col col={12} style={{ paddingTop: "1.5rem" }}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={1}
                        transition={transition}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <WhiteBox
                            active
                            p={2}
                            display="flex"
                            justifyContent="center"
                        >
                            <ColoredText>
                                <a
                                    href="https://classroom.google.com/u/0/c/MzI1MzEzMjg3MDgy/m/MzI1MzIwMTYxMjk5/details"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Libro de la materia (Página 9, sección 1.4)
                                </a>
                            </ColoredText>
                        </WhiteBox>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide17;
