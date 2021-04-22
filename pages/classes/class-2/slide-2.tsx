import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from 'UI/Box/Box'
import { GlassCard } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class1Slide2 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12}>
                    <Box display="flex" justifyContent="center">
                        <motion.div
                            initial="hidden"
                            layoutId="whatineed"
                            animate={controls}
                            variants={variants}
                            custom={0}
                            transition={transition}
                        >
                            <H2>Java: Programación Orientada a Objetos</H2>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            {/* <H3 shadow mt={4} mb={2}>
                                Mentalidad abierta
                            </H3> */}
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                        >
                            {/* @ts-ignore */}
                            <GlassCard mt={4}>
                                Según su página web:{" "}
                                <i>
                                    Java es un lenguaje de programación y una
                                    plataforma informática comercializada por
                                    primera vez en 1995 por Sun Microsystems
                                </i>
                                <br />
                                <br />
                                Nació con el objetivo de ser un lenguaje de
                                programación de estructura sencilla que pudiera
                                ser ejecutado en diversos sistemas operativos.
                                <br />
                                <br />
                                Java sirve para crear aplicaciones y procesos en
                                una gran diversidad de dispositivos. Se base en
                                programación orientada a objetivos, permite
                                ejecutar un mismo programa en diversos sistemas
                                operativos y ejecutar el código en sistemas
                                remotos de manera segura.
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
                            custom={3}
                            transition={transition}
                        >
                            <RoundedImageContainer>
                                <RoundedImage
                                    src={"/images/class-2/java.svg"}
                                    width={420}
                                    height={420}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
}
export default Class1Slide2;