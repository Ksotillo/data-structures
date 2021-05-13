import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class4Slide6 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={0}
                            transition={transition}
                        >
                            <H1 shadow>Notación Big-O (O-notation)</H1>
                        </motion.div>
                    </Box>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            {/* @ts-ignore */}
                            <GlassCard mt={4} whiteStyle>
                                <p>
                                    La notación Big O es una herramienta muy
                                    funcional para determinar la complejidad de
                                    un algoritmo que estemos utilizando.
                                    <br />
                                    <br />
                                    Este factor se define como “O grande”, que
                                    representa “está en el orden de” y se
                                    expresa como O(n), es decir, “en el orden de
                                    n”.
                                    <br />
                                    <br />
                                    La notación O indica la cota superior del
                                    tiempo de ejecución de un algoritmo o
                                    programa.
                                    <br />
                                    <br />
                                    Así, en lugar de decir que un algoritmo
                                    emplea un tiempo de 4n-1 en procesar un
                                    array de longitud n, se dirá que emplea un
                                    tiempo O(n) que se lee “O grande de n”, o
                                    bien “O de n” y que informalmente significa
                                    “algunos tiempos constantes n”
                                </p>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box display="flex" justifyContent="flex-end">
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                        >
                            <RoundedImageContainer mt={3}>
                                <RoundedImage
                                    src={
                                        "/images/class-4/big0Complexity.png"
                                    }
                                    width={500}
                                    height={500}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class4Slide6;
