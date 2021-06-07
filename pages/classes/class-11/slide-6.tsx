import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";

const Class11Slide6 = () => {
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
                            <H1 shadow>Métodos de las Colas</H1>
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
                                        Los métodos con los que podemos
                                        manipular nuestas colas son:
                                        <ul
                                            style={{
                                                columns: 2,
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <li>
                                                <b>Enqueue: </b> Agregar un
                                                elemento al final.
                                            </li>
                                            <li>
                                                <b>Dequeue: </b> Eliminar el primer
                                                elemento.
                                            </li>
                                            <li>
                                                <b>Peek: </b> Tomar el primer
                                                elemento de la cola.
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
export default Class11Slide6;
