import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";

const complexityCodeBlock = `
// O(2ⁿ) -> cuadrática.
// Todas las sentencias a continuación son O(2ⁿ).
int fibonacciSum(int number) {
    if (number <= 1) return number;

    return  fibonacciSum(number - 2) + fibonacciSum(number - 1);
}
`;

const Class4Slide12 = () => {
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
                        <H2 shadow>O(2ⁿ): Complejidad Exponencial</H2>
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
                                Cuando un algoritmo tiene complejidad
                                exponencial, su rendimiento se incrementa al
                                doble cada vez que se agregue un nuevo dato al
                                valor de entrada, por ende, incrementando su
                                tamaño de manera exponencial. Esto quiere decir
                                que si tenemos un arreglo con 1 elemento y nos
                                toma 10 segundos ejecutar el algoritmo, con 2
                                elementos nos deberá tomar 20 segundos, con 3
                                nos deberá tomar 30 y así de manera sucesiva.
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

export default Class4Slide12;
