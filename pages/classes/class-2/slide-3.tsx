import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
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
                            <H2>¿Qué es Programación Orientada a Objetos?</H2>
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
                            <GlassCard mt={4} whiteStyle>
                                <p>
                                    La programación orientada a objetos (OOP,
                                    por sus siglas en inglés) se refiere al
                                    lenguaje de programación en el que los
                                    programadores / desarrolladores definen
                                    explícitamente los tipos de datos, las
                                    estructuras de datos y también los tipos de
                                    funciones que se pueden aplicar a las
                                    estructuras de datos.
                                    <br />
                                    <br />
                                    Así, las estructuras de datos se convierten
                                    en "objetos" que incorporan tanto datos como
                                    funciones. En el lenguaje OOP, los programas
                                    están organizados y construidos alrededor de
                                    objetos y no alrededor de lógica y
                                    funciones.
                                    <br />
                                    <br />
                                    Esto es contrario al enfoque de programación
                                    histórica que se centra en cómo se escribe
                                    la lógica en lugar de definir los datos
                                    dentro de la lógica.
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
                            custom={3}
                            transition={transition}
                        >
                            <RoundedImageContainer mt={3}>
                                <RoundedImage
                                    src={"/images/class-2/OOP.jpg"}
                                    width={588}
                                    height={420}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class1Slide2;
