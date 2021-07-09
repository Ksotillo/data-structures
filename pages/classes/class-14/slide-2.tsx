import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class14Slide2 = () => {
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
                            <H1 shadow>Árbol</H1>
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
                                        Un árbol es una estructura de datos
                                        jerárquica no lineal que consta de nodos
                                        conectados.
                                    </p>
                                    <br />
                                    <br />
                                    <h3>¿Por qué una Estructura de Arbol?</h3>
                                    <p>
                                        Otras estructuras de datos como
                                        matrices, listas enlazadas, pilas y
                                        colas son estructuras de datos lineales
                                        que almacenan datos de forma secuencial.
                                        Para realizar cualquier operación en una
                                        estructura de datos lineal, la
                                        complejidad del tiempo aumenta con el
                                        aumento del tamaño de los datos. Pero no
                                        es aceptable en el mundo computacional
                                        actual. 
                                        <br />
                                        <br />
                                        Las diferentes estructuras de
                                        datos de árbol permiten un acceso más
                                        rápido y sencillo a los datos, ya que es
                                        una estructura de datos no lineal.
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
                            <RoundedImageContainer mt={3}>
                                <RoundedImage
                                    src={"/images/class-14/tree.png"}
                                    width={536}
                                    height={393}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class14Slide2;
