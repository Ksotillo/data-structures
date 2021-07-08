import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class13Slide2 = () => {
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
                            <H1 shadow>UML</H1>
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
                                        El Lenguaje Unificado de Modelado o UML
                                        (“Unified Modeling Language”) es un
                                        lenguaje estandarizado de modelado. Está
                                        especialmente desarrollado para ayudar a
                                        todos los intervinientes en el
                                        desarrollo y modelado de un sistema o un
                                        producto software a describir, diseñar,
                                        especificar, visualizar, construir y
                                        documentar todos los artefactos que lo
                                        componen, sirviéndose de varios tipos de
                                        diagramas. UML es un lenguaje para
                                        visualizar los elementos de un gran
                                        sistemasoftware, facilitando:
                                        <br />
                                        <br />
                                        <ul>
                                            <li>
                                                La comunicación entre los
                                                participantes (incluidas
                                                herramientas) en el desarrollo.
                                            </li>
                                            <li>
                                                La comprensión de las soluciones
                                                (notación gráfica).
                                            </li>
                                            <li>
                                                El mantenimiento de las
                                                soluciones conceptuales a lo
                                                largo del tiempo
                                                (documentación).
                                            </li>
                                        </ul>
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
                                    src={"/images/class-13/UML.png"}
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
export default Class13Slide2;
