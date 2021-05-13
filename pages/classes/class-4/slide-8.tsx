import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";

const complexityCodeBlock = `
// O(1) -> constante.
// Todas las sentencias a continuación son O(1).
int x = 10;

if (professor == "Kevin Sotillo") {
    System.out.println("Hola profe no me raspe jaja salu2");
}

int getLastItemFromArray(int[] array) {
    int length = array.length;
    
    return array[length - 1];
}
`;


const Class4Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={6}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={0}
                        transition={transition}
                    >
                        <H2 shadow>O(1): Complejidad Constante</H2>
                    </motion.div>
                    {/* @ts-ignore */}
                    <GlassCard mt={4} pr={3} whiteStyle>
                        <motion.div
                            initial="hidden"
                            animate={"visible"}
                            variants={variants}
                            custom={1}
                            transition={transition}
                        >
                            <H3>
                                La complejidad constante nos indica que, sin
                                importar el tamaño de entrada o salida, el
                                tiempo de ejecución y recursos utilizados por
                                nuestro algoritmo siempre será el mismo. Podemos
                                verlas como funciones “estáticas” debido a que
                                siempre se comportarán de la misma manera, no
                                importa las veces que sea ejecutada ni donde.
                            </H3>
                        </motion.div>
                    </GlassCard>
                </Col>
                <Col col={6}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        py={3}
                    >
                        <motion.div
                            initial="hidden"
                            animate={"visible"}
                            variants={variants}
                            custom={2}
                            transition={transition}
                        >
                            <CodeBlock
                                text={complexityCodeBlock}
                                language={"java"}
                                showLineNumbers
                                wrapLines
                                theme={dracula}
                            />
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide7;
