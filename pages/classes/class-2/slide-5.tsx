import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";

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
                            <H2>Ajá y... ¿Todo eso no lo tiene Python?</H2>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={12}>
                    <Box pr={0}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            <H3 shadow mt={2} mb={2}>
                                I mean yeah, but not really...
                            </H3>
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
                            <GlassCard mt={2} whiteStyle>
                                <p>
                                    Honestamente, no podemos clasificar Python
                                    como un lenguaje de programación
                                    estrictamente orientado a objetos. Es un
                                    lenguaje de programación intuitivo, de alto
                                    nivel y de múltiples paradigmas (admite
                                    múltiples enfoques de programación) que
                                    combina las características de la
                                    programación orientada a objetos y la
                                    programación orientada a aspectos. Si bien
                                    se basa en gran medida en el lenguaje de
                                    programación orientada a objetos, también es
                                    funcional, procedimental, imperativo y
                                    reflexivo al mismo tiempo. Esto se debe a
                                    que está muy influenciado por una
                                    combinación de muchos otros lenguajes de
                                    programación, incluidos JavaScript,
                                    CoffeeScript, Ruby, Swift, Groovy y Go.
                                    <br />
                                    <br />
                                    Java, Objective C, C ++, Ruby, Smalltalk,
                                    Visual Basic.NET, Simula y JavaScript son
                                    algunos ejemplos de lenguajes de
                                    programación orientada a objetos. Y al igual
                                    que cualquier otro lenguaje de programación
                                    orientada a objetos, Python también utiliza
                                    los fundamentos de programación orientada a
                                    objetos. Por ejemplo, en Python,{" "}
                                    <code style={{ color: "#1a4551" }}>
                                        Class
                                    </code>{" "}
                                    significa lo mismo que para otros lenguajes
                                    de programación orientada a objetos.
                                    Entonces, Python también conserva el
                                    mecanismo de herencia de OOP. Para colmo,
                                    Python se puede integrar con otros lenguajes
                                    de programación orientada a objetos como
                                    Java para desarrollar aplicaciones en ambos
                                    lenguajes que incorporarán las
                                    funcionalidades de ambos y puedes llamar a
                                    ambos lenguajes entre sí para ejecutar la
                                    aplicación con éxito.
                                    <br />
                                    <br />
                                    Sin embargo, Python no es un lenguaje de
                                    programación orientada a objetos de
                                    principio a fin, ya que no permite una
                                    encapsulación sólida. Esto se debe a que su
                                    creador, Guido van Rossum, tenía como
                                    objetivo mantener las cosas simples y eso
                                    significaba no ocultar datos en el sentido
                                    más estricto del término. En lugar de
                                    encapsulación, en Python, existe una
                                    convención para la ocultación de datos en la
                                    que puede prefijar los miembros de datos con
                                    dos guiones bajos. Aparte de esto, Python es
                                    compatible con todas las características
                                    básicas del lenguaje OOP.
                                </p>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class1Slide2;
