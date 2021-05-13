import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";

const complexityCodeBlock = `
// O(n) -> lineal.
// Todas las sentencias a continuación son O(n).
void printArray(int[] array) {
    for (int i = 0; i < array.length; i++) {
        System.out.println(array[i]);
    }
}

boolean arrayContainsElement(int[] array, int searchElement) {
    for (int element : array) {
        if (element == searchElement) return true;
    }
    return false;
}

// La siguiente sentencia NO es O(n) sino O(1),
// porque siempre se ejecuta 10 veces
void printFirstTenPositiveNumbers(...data) {
    // Code
    for (int i = 0; i < 11; i++) {
        System.out.println(array[i]);
    }
    //More Code
}
`;

const Class4Slide9 = () => {
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
                        <H2 shadow>O(n): Complejidad Lineal</H2>
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
                                Decimos que un algoritmo tiene complejidad
                                lineal, cuando su tiempo de ejecución y/o uso de
                                recursos es directamente proporcional (es decir
                                que se incrementa linealmente) al tamaño del
                                valor de entrada necesario para la ejecución del
                                algoritmo.
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

export default Class4Slide9;
