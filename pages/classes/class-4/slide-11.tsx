import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";

const complexityCodeBlock = `
// O(n²) -> cuadrática.
// Todas las sentencias a continuación son O(n²).
void printMatrix(int[][] matrix) {
    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix.length; j++) {
            System.out.print("| " + matrix[i][j] + "\t");
            if (j == matrix[0].length - 1) System.out.print("|");
        }
        System.out.println("");
    }
}

// Todas las sentencias a continuación son O(n³).
void printCubicMatrix(int[][][] matrix) {
    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix.length; j++) {
            for (int k = 0; k < matrix.length; k++) {
                System.out.println(matrix[i][j][k]);
            }
        }
    }
}
`;

const Class4Slide11 = () => {
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
                        <H2 shadow>O(n²): Complejidad Cuadrática</H2>
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
                                Encontramos complejidad cuadrática en los
                                algoritmos, cuando su rendimiento es
                                directamente proporcional al cuadrado del tamaño
                                del valor de entrada. Es decir, si tenemos como
                                dato de entrada un arreglo con un tamaño de 4
                                elementos que queremos comparar para ver si hay
                                elementos repetidos, tendremos que hacer 16
                                comparaciones en total para completar nuestro
                                algoritmo. Esta complejidad es común encontrarla
                                en algoritmos de ordenamiento de datos como el
                                método de la burbuja, el de inserción y el
                                método de selección, entre algunos otros.
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

export default Class4Slide11;
