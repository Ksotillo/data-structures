import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";

const complexityCodeBlock = `
// O(log n) -> logarítmica.
// Todas las sentencias a continuación son O(log n).
for (int i = 0; i < array.length; i*=2) {
    // Pretty hard code
}

for (int i = array.length; i > 0; i/=2) {
    // Pretty hard code
}

int binarySearch(int arr[], int left, int right, int x) {
    if (right >= left) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == x)
            return mid;

        if (arr[mid] > x)
            return binarySearch(arr, left, mid - 1, x);

        return binarySearch(arr, mid + 1, r, x);
    }

    return -1;
}
`;

const Class4Slide10 = () => {
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
                        <H2 shadow>O(log n): Complejidad Logarítmica</H2>
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
                                La complejidad logarítmica es dada cuando el
                                tiempo de ejecución o uso de recursos es
                                directamente proporcional al resultado
                                logarítmico del tamaño del valor de entrada. Es
                                decir, si tenemos un dato de entrada cuyo tamaño
                                es 10 y nos toma 1 segundo en la implementación
                                del algoritmo, significa que por un valor de
                                entrada cuyo tamaño es 100, nos debe tomar 2
                                segundos en realizar el algoritmo, un valor de
                                1000 nos debe tomar 3 segundos y así
                                consecuentemente.
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

export default Class4Slide10;
