import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class7Slide2 = () => {
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
                                ¿Qué son las Listas Enlazadas Simples?
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
                                <p>
                                    Una lista enlazada es una estructura de
                                    datos que consiste en una serie de nodos
                                    conectados.
                                    <br />
                                    <br />
                                    Aquí, cada uno de estos nodos lleva consigo
                                    cierto tipo de datos y una dirección que
                                    apunta al siguiente Nodo.
                                    <br />
                                    <br />
                                    En este tipo de estructuras hay que empezar
                                    por algún lado, por ello es que le damos
                                    a la dirección del primer nodo un nombre
                                    especial llamado <i>cabeza (HEAD)</i>.
                                    <br />
                                    <br />
                                    También, el último nodo de una lista
                                    enlazada(la <i> cola o TAIL</i>) puedes ser
                                    identificado por que su apuntador a la
                                    siguiente dirección está dirigido a{" "}
                                    <i>NULL</i>
                                    <br />
                                    <br />
                                    Si alguna vez jugaste el juego de Busqueda
                                    del tesoro, dónde cada una de las pistas que
                                    consigue contiene información acerca de la
                                    siguiente pista, pues así es más o menos
                                    como funcionan las listas enlazadas.
                                </p>
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
                            <RoundedImageContainer mt={6}>
                                <RoundedImage
                                    src={"/images/class-7/singly_linked_list.png"}
                                    width={638}
                                    height={367}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class7Slide2;
