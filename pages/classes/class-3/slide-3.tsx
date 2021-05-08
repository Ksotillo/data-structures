import { useState } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box, WhiteBox, ColoredTextOnHover } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";


const arrayCodeBlock = `
char arrayCaracteres[];
arrayCaracteres = new char[10];

// Tenemos un array de 5 elementos.
char array[] = {'a','b','c','d','e'};

// Lectura de su valor.
char x = arrayCaracteres[2];

// Asignación de un valor.
// Como se puede comprobar se pone el  número dos,
// que coincide con el tercer elemento.
// Ya que como dijimos anteriormente 
// el primer elemento es el cero.
arrayCaracteres[2] = 'b';

// Con length obtenemos la longitud y 
// recorremos el arreglo con un for
for (int i=0; i<array.length; i++) {
    System.out.printnln(array[i]);
}
`;

const matrixCodeBlock = `
int matriz[][];
matriz = new int[2][2];

// Tenemos una matriz de 4x4 elementos.
int array[][] = { {1,2,3,4}, {5,6,7,8}};

int x = matriz[1][1]; // Para leer el contenido de un elemento
matriz[1][1] = x;     // Para asignar un valor.

// Usamos doble bucle para recorrer la matriz,
// donde i se usa para ir fila por fila,
// mientras j se usa para ir columna por columna.
// Cantidad de filas: matrix.length
// Cantidad de columnas: matriz[i].length
for (int i=0; i < matrix.length; i++) {
    for (int j=0; j < matriz[i].length; j++) {
        System.out.println (matriz[i][j]);
    }
}
`;

const Class3Slide2 = () => {
    const controls = useSlideAnimationControls();
    const [arrayTab, setArrayTab] = useState(true);
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
                        <H2 shadow>
                            Los arreglos de una sola dimensión son vectores y los de dos dimensiones son matrices.
                        </H2>
                    </motion.div>
                    <Box mt={4} pr={3}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={1}
                            transition={transition}
                        >
                            <GlassCardForTabs>
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                    custom={2}
                                    transition={transition}
                                >
                                    <Box
                                        display="flex"
                                        justifyContent="space-around"
                                    >
                                        <WhiteBox
                                            className={
                                                arrayTab ? "selected" : ""
                                            }
                                            onClick={() => setArrayTab(true)}
                                        >
                                            <ColoredTextOnHover py={3} px={4}>
                                                Vectores
                                            </ColoredTextOnHover>
                                        </WhiteBox>
                                        <WhiteBox
                                            className={
                                                !arrayTab ? "selected" : ""
                                            }
                                            onClick={() => setArrayTab(false)}
                                        >
                                            <ColoredTextOnHover py={3} px={4}>
                                                Matrices
                                            </ColoredTextOnHover>
                                        </WhiteBox>
                                    </Box>
                                    <Box className="definition-content" p={4}>
                                        {arrayTab && (
                                            <motion.div
                                                initial="hidden"
                                                animate={"visible"}
                                                variants={variants}
                                                custom={2}
                                                transition={transition}
                                            >
                                                <H3>
                                                    La declaración de un array
                                                    en Java y su inicialización
                                                    se realiza de la siguiente
                                                    manera:
                                                    <br />
                                                    <br />
                                                    <code>
                                                        tipo_dato
                                                        nombre_array[];
                                                        <br />
                                                        nombre_array = new
                                                        tipo_dato[tamanio];
                                                    </code>
                                                </H3>
                                            </motion.div>
                                        )}
                                        {!arrayTab && (
                                            <motion.div
                                                initial="hidden"
                                                animate={"visible"}
                                                variants={variants}
                                                custom={2}
                                                transition={transition}
                                            >
                                                <H3>
                                                    La declaración de una matriz
                                                    en Java y su inicialización
                                                    se realiza de la siguiente
                                                    manera:
                                                    <br />
                                                    <br />
                                                    <code>
                                                        tipo_dato
                                                        nombre_array[][];
                                                        <br />
                                                        nombre_array = new
                                                        tipo_dato[tamanio][tamanio];
                                                    </code>
                                                    <br />
                                                    <br />
                                                    Hay que tener en cuenta que
                                                    para mostrar su contenido
                                                    tendremos que utilizar dos
                                                    bucles. Para saber el número
                                                    de columnas lo haremos igual
                                                    que antes mediante la
                                                    variable .length, pero para
                                                    saber el numero de filas que
                                                    contiene cada columna lo
                                                    tendremos que realizar de la
                                                    siguiente manera:
                                                    <br />
                                                    <br />
                                                    <code>
                                                        matriz[numero_elemento].lenght;
                                                    </code>
                                                </H3>
                                            </motion.div>
                                        )}
                                    </Box>
                                </motion.div>
                            </GlassCardForTabs>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        py={3}
                    >
                        {arrayTab ? (
                            <CodeBlock
                                text={arrayCodeBlock}
                                language={"java"}
                                showLineNumbers
                                wrapLines
                                theme={dracula}
                            />
                        ) : (
                            <CodeBlock
                                text={matrixCodeBlock}
                                language={"java"}
                                showLineNumbers
                                wrapLines
                                theme={dracula}
                            />
                        )}
                    </Box>
                </Col>
            </Row>
        </Container>
    );
}

const GlassCardForTabs = styled(GlassCard)`
    padding: 0!important;

    ${WhiteBox} {
        margin: 0;
        width: 50%;
        text-align: center;
        transform: none!important;
        box-shadow: none!important;
        border-bottom-right-radius: 0!important;
        border-bottom-left-radius: 0!important;

        &:first-child {
            border-top-right-radius: 0!important;
        }
        &:last-child {
            border-top-left-radius: 0!important;
        }
    }

    .definition-content {
        background-color: white;
        border-bottom-right-radius: 10px!important;
        border-bottom-left-radius: 10px!important;
        
        ${H3}, code {
            color: #1a4551!important;
        }
    }

`

export default Class3Slide2;

