import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class12Slide2 = () => {
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
                            <H1 shadow>
                                ¿Cómo funcionan los Árboles Binarios de Búsqueda?
                            </H1>
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
                                    <motion.p
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                        exit="exits"
                                        custom={1}
                                        transition={transition}
                                        style={{ marginTop: ".5rem" }}
                                    >
                                        El árbol de búsqueda binaria es una
                                        estructura de datos que permite
                                        rápidamente nosotros para mantener una
                                        lista ordenada de números.
                                    </motion.p>
                                    <motion.ul
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                        exit="exits"
                                        custom={2}
                                        style={{ color: "#1a4551" }}
                                    >
                                        <li>
                                            Se llama árbol binario porque cada
                                            nodo de árbol tiene un máximo de dos
                                            hijos.
                                        </li>
                                        <li>
                                            Se llama árbol de búsqueda porque se
                                            puede utilizar para busque la
                                            presencia de un número en un tiempo
                                            de O(log(n)).
                                        </li>
                                    </motion.ul>
                                    <motion.p
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                        exit="exits"
                                        custom={3}
                                        transition={transition}
                                        style={{ marginTop: ".5rem" }}
                                    >
                                        Las propiedades que separan un árbol de
                                        búsqueda binario de un árbol binario
                                        normal son:
                                    </motion.p>
                                    <motion.ul
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                        exit="exits"
                                        custom={2}
                                        style={{ color: "#1a4551" }}
                                    >
                                        <li>
                                            Todos los nodos del subárbol
                                            izquierdo son menores que el nodo
                                            raíz
                                        </li>
                                        <li>
                                            Todos los nodos del subárbol derecho
                                            son más que el nodo raíz
                                        </li>
                                        <li>
                                            Ambos subárboles de cada nodo
                                            también son BST, es decir, tienen
                                            las dos propiedades anteriores
                                        </li>
                                    </motion.ul>
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
                                    src={
                                        "/images/class-14/BTS.png"
                                    }
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
export default Class12Slide2;
