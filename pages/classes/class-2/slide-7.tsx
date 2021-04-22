import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box, WhiteBox } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { ColoredText } from "UI/Button/Button";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class1Slide7 = () => {
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
                            <H2>
                                ¿Qué necesitamos para empezar a programar en
                                Java y ver nuestras Estructuras de Datos
                            </H2>
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
                                {/* @ts-ignore */}
                                <GlassCardContent>
                                    Necesitamos
                                    <ul>
                                        {[
                                            "Tener el JDK de Java",
                                            "Instalar Apache Netbeans como nuestro IDE",
                                        ].map((value, index) => (
                                            <motion.li
                                                initial="hidden"
                                                animate="visible"
                                                variants={variants}
                                                exit="exits"
                                                custom={index + 2}
                                                transition={transition}
                                            >
                                                {value}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <br />
                                    Pueden descargarlo desde acá:
                                    <motion.div
                                        initial="hidden"
                                        animate={controls}
                                        variants={variants}
                                        custom={3}
                                        transition={transition}
                                    >
                                        <WhiteBox p={2} active>
                                            <ColoredText>
                                                <a
                                                    href="https://drive.google.com/folderview?id=1BPJS-GBGDLnXh3-Hh_Lxotm32_C43mxn"
                                                    target="_blank"
                                                >
                                                    Descargar JDK y Apache
                                                    Netbeans
                                                </a>
                                            </ColoredText>
                                        </WhiteBox>
                                    </motion.div>
                                    <br />
                                    Tutoriales de como instalar ambos programas:
                                    <motion.div
                                        initial="hidden"
                                        animate={controls}
                                        variants={variants}
                                        custom={3}
                                        transition={transition}
                                    >
                                        <WhiteBox p={2} active>
                                            <ColoredText>
                                                <a
                                                    href="https://youtu.be/3A046AsPfUU"
                                                    target="_blank"
                                                >
                                                    Tutorial para instalarlo en
                                                    Windows
                                                </a>
                                            </ColoredText>
                                        </WhiteBox>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        animate={controls}
                                        variants={variants}
                                        custom={3}
                                        transition={transition}
                                    >
                                        <WhiteBox p={2} active>
                                            <ColoredText>
                                                <a
                                                    href="https://youtu.be/jh2_dGSxDfw"
                                                    target="_blank"
                                                >
                                                    Tutorial para instalarlo en
                                                    MacOS
                                                </a>
                                            </ColoredText>
                                        </WhiteBox>
                                    </motion.div>
                                </GlassCardContent>
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
                                    src={"/images/class-2/apache.png"}
                                    width={666}
                                    height={666}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class1Slide7;
