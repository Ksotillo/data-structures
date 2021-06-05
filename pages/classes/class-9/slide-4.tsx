import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";

const Class8Slide6 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12}>
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
                                Métodos de las Listas Enlazadas Circulares
                            </H1>
                        </motion.div>
                    </Box>
                    <Box>
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
                                        Los métodos no varían con respecto a los
                                        de las listas enlazadas simples, sin
                                        embargo, las implementaciones están
                                        adaptadas al hecho de que se tiene que
                                        manejar un apuntador más por cada nodo.
                                        <ul
                                            style={{
                                                columns: 2,
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <li>
                                                <b>Prepend: </b> Agregar un Nodo
                                                al inicio
                                            </li>
                                            <li>
                                                <b>Append: </b> Agregar un Nodo
                                                al final
                                            </li>
                                            <li>
                                                <b>Lookup/search: </b> Buscar un
                                                Nodo
                                            </li>
                                            <li>
                                                <b>Insert: </b> Insertar un Nodo
                                                en una posición dada de la lista
                                            </li>
                                            <li>
                                                <b>Delete: </b> Borrar un Nodo
                                                de la lista
                                            </li>
                                        </ul>
                                    </p>
                                </GlassCardContent>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={12}>
                    <Box display="flex" justifyContent="flex-end" pt={2}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                            style={{ width: "100%" }}
                        >
                            <iframe
                                src="https://visualgo.net/en/list"
                                height="350px"
                                width="100%"
                            ></iframe>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class8Slide6;
