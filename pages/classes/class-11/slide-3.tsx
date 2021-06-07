import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class11Slide3 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={7}>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={0}
                            transition={transition}
                        >
                            <H1 shadow>¿Qué son las Colas?</H1>
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
                                <GlassCardContent whiteStyle>
                                    <p>
                                        Una Cola es una estructura lineal que
                                        sigue el principio de First In First Out
                                        (FIFO), esto significa que el primer
                                        elemento insertado en la pila es el
                                        primero que se elimina.
                                        <br />
                                        <br />
                                        Siguiendo la analogía de la cola de
                                        supermercado, aquí tu puedes:
                                        <br />
                                        <br />
                                        <ul>
                                            <li>
                                                Agregar un elemento al final de la cola
                                            </li>
                                            <li>
                                                Quitar un elemento del principio de la cola
                                            </li>
                                        </ul>
                                        Si quieres el elemento que está en el intermedio,
                                        debes de desencolar varios elementos para poder
                                        llegar a dicho elemento.
                                    </p>
                                </GlassCardContent>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={5}>
                    <Box display="flex" justifyContent="flex-end">
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                        >
                            <RoundedImageContainer mt={4}>
                                <RoundedImage
                                    src={"/images/class-11/queue.png"}
                                    width={453}
                                    height={212}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class11Slide3;
