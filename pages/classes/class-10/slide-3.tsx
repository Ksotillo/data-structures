import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class10Slide3 = () => {
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
                            <H1 shadow>¿Qué son las Pilas?</H1>
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
                                        Una Pila es una estructura lineal que
                                        sigue el principio de Last In First Out
                                        (LIFO), esto significa que el último
                                        elemento insertado en la pila es el
                                        primero que se elimina.
                                        <br />
                                        <br />
                                        Siguiendo la analogía de la pila de
                                        ropa, aquí tu puedes:
                                        <br />
                                        <br />
                                        <ul>
                                            <li>
                                                Agregar un elemento en la cima
                                            </li>
                                            <li>
                                                Quitar un elemento de la cima
                                            </li>
                                        </ul>
                                        Si quieres el elemento que está al fondo
                                        de la pila, primero debes de eliminar
                                        todos los que están por encima. Así es
                                        como funciona esta estructura.
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
                                    src={"/images/class-10/stack_.png"}
                                    width={586}
                                    height={395}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class10Slide3;
