import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class12Slide6 = () => {
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
                            <H1 shadow>Hashing (Función Hash)</H1>
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
                                <GlassCardContent
                                    whiteStyle
                                    style={{
                                        maxHeight: "100%",
                                        padding: "0rem",
                                    }}
                                >
                                    <p>
                                        Según la definición de Kaspersky:
                                        <br />
                                        <br />
                                        “Una función criptográfica hash-
                                        usualmente conocida como “hash”- es un
                                        algoritmo matemático que transforma
                                        cualquier bloque arbitrario de datos en
                                        una nueva serie de caracteres con una
                                        longitud fija. Independientemente de la
                                        longitud de los datos de entrada, el
                                        valor hash de salida tendrá siempre la
                                        misma longitud.”.
                                        <br />
                                        <br />
                                        En pocas palabras, un hash es un valor
                                        aleatorio que se genera a partir de un
                                        valor otorgado, este valor que se genera
                                        tendrá una longitud fija, no importa si
                                        el valor que nosotros le pasamos es muy
                                        largo.
                                        <br />
                                        <br />
                                        El hash se suele usar mucho al momento
                                        de encriptar contraseñas o en las criptomonedas, y la forma de
                                        calcularlos es mediante un algoritmo
                                        matemático 😉
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
                            <RoundedImageContainer mt={4}>
                                <RoundedImage
                                    src={"/images/class-12/hashing.png"}
                                    width={1391}
                                    height={1208}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class12Slide6;
