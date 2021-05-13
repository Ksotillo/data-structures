import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from "UI/Button/GlassButton";

import styled from "styled-components";
import { Text, H3, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";
import { RoundedImage } from "UI/Image/Image";
import { ColoredText } from "UI/Button/Button";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const customVariants = {
    visible: variants.visible,
    hidden: variants.hidden,
};

const Class4Slide2 = () => {
    const controls = useSlideAnimationControls();

    return (
        <Container>
            <Row>
                <Col col={12}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={customVariants}
                        custom={0}
                        transition={transition}
                    >
                        <H1 shadow>¿Por que analizar nuestros algoritmos?</H1>
                    </motion.div>
                </Col>
                <Col col={6}>
                    <Box mt={4} pr={3}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={customVariants}
                            custom={1}
                            transition={transition}
                        >
                            <GlassCard whiteStyle>
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={customVariants}
                                    custom={2}
                                    transition={transition}
                                >
                                    <p>
                                        Raramente existe un único algoritmo para
                                        resolver un problema determinado. Cuando
                                        se comparan dos algoritmos diferentes
                                        que resuelven el mismo problema,
                                        normalmente se encontrará que un
                                        algoritmo es un orden de magnitud más
                                        eficiente que el otro. En este sentido,
                                        lo importante es que el programador sea
                                        capaz de reconocer y elegir el algoritmo
                                        más eficiente.
                                    </p>
                                    <p>
                                        El rendimiento de nuestro algoritmo
                                        permitirá ayudar a que el usuario
                                        (dígase usuario común o un profesional
                                        en el ámbito tecnológico) no tenga que
                                        esperar durante horas a que la tarea
                                        para la que nuestro software fue
                                        desarrollado, se cumpla, sin importar
                                        que las computadoras y dispositivos de
                                        hoy en día sean lo más capaces para
                                        desarrollar una larga lista de tareas
                                        medianamente complejas y otra lista un
                                        poco menos larga de tareas complejas.
                                    </p>
                                </motion.div>
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
                                    src={
                                        "/images/class-4/algoritm-analysis.svg"
                                    }
                                    width={391}
                                    height={317}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide2;
