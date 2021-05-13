import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";

const complexityCodeBlock = `
// Implementación de Insertion Sort
void sort(int arr[]) {
    int n = arr.length;                                                                   // 1
    for (int i = 1; i < n; ++i) {                                                        // n
        int current = arr[i];                                                           // n
        int j = i - 1;                                                                           // n

        /* Mover los elementos de arr[0... i-1], 
        que son mayores que el elemento 
        actuala una posición antes de la 
        que tiene actualmente */
        while (j >= 0 && arr[j] > current) {                                  // n * n
            arr[j + 1] = arr[j];                                                             // n * n
            j = j - 1;                                                                              // n * n
        }
        arr[j + 1] = current;                                                            // n
    }
}
`;

const Class4Slide14 = () => {
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
                        <H2 shadow>Analizando Insertion Sort con Big-O</H2>
                    </motion.div>
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
                            custom={1}
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
                <Col col={6}>
                    {/* @ts-ignore */}
                    <GlassCard mt={4} pr={3} whiteStyle>
                        <motion.div
                            initial="hidden"
                            animate={"visible"}
                            variants={variants}
                            custom={2}
                            transition={transition}
                        >
                            <H3>
                                Entonces la complejidad de Insertion Sort sería
                                de 3n² + 4n + 1, pero en realidad todas las
                                constantes no nos interesan, y realmente los
                                demás términos a parte del primero tampoco, por
                                lo que tomariamos que la complejidad de este
                                algoritmos es de O(n²)
                                <br />
                                <br />
                                Al final la idea de usar la notación Big-O es de simplificar y tener un estandar bastante comprensible, aunque esto también tiene una explicación matemática
                            </H3>
                        </motion.div>
                    </GlassCard>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide14;
