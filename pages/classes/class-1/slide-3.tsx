import { useState } from 'react';
import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from 'styled-components';
import { Text, H4, H1, H2 } from "UI/Typography/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from 'UI/Box/Box';
import { GlassCard } from 'UI/Card/Card'

const schedule = [
    `
👉 Presentación del curso.
👉 Cronograma de clases. 
👉 Metodología a utilizar. 
👉 Herramientas
👉 Introducción a Java.
👉 Ejercicios básicos para familiarizarnos con Java
    `,
    `
👉 Complejidad
👉 Introducción a las Estructuras de Datos
    `,
    `
👉Listas enlazadas
👉Ejercicios con listas enlazadas
    `,
    `
👉 Listas Dobles
👉 Listas Circulares
    `,
    `
👉 Practica y ejercicios.
    `,
    `
👉 Pilas
👉 Colas
    `,
    `
👉 Practica y ejercicios.
👉 Hash Tables
    `,
    `
👉 Árboles Generales
👉 Árboles Binarios de Búsqueda
    `,
    `
👉 Árboles-B
    `,
    `
👉 Grafos
    `,
    `
👉 Repaso, consultas y ejercicios
    `,
`👉Revisión y Notas Finales`,
];

const evaluations = [
    {
        evaluation: 'Quiz #1',
        date: '21-05',
        percentage: 20,
        value: 4
    },
    {
        evaluation: 'Parcial #1',
        date: '04-06',
        percentage: 20,
        value: 4
    },
    {
        evaluation: 'Entrega Proyecto #1',
        date: '11-06',
        percentage: 10,
        value: 2
    },
    {
        evaluation: 'Quiz #2',
        date: '25-06',
        percentage: 15,
        value: 3
    },
    {
        evaluation: 'Parcial #2',
        date: '07-07',
        percentage: 20,
        value: 4
    },
    {
        evaluation: 'Entrega Proyecto #2',
        date: '09-07',
        percentage: 15,
        value: 3
    },
]

const items = [
    {
        title: "Cronograma",
        Component: () => (
            <GlassCardContent>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    Cronograma de actividades
                </motion.h2>
                <table>
                    <tr>
                        <motion.th
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                        >
                            Semana
                        </motion.th>
                        <motion.th
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            exit="exits"
                            custom={3}
                            transition={transition}
                        >
                            Contenido
                        </motion.th>
                    </tr>
                    {schedule.map((content, index) => (
                        <tr>
                            <motion.td
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                exit="exits"
                                custom={index + 2}
                                transition={transition}
                            >
                                {`Semana ${index + 1} ${
                                    index === 7 ? `    🔥🔥🔥🔥🔥` : ""
                                }`}
                            </motion.td>
                            <motion.td
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                exit="exits"
                                custom={index + 2}
                                transition={transition}
                            >
                                {content}
                            </motion.td>
                        </tr>
                    ))}
                </table>
            </GlassCardContent>
        ),
    },
    {
        title: "Evaluaciones",
        Component: () => (
            <GlassCardContent>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    Evaluaciones
                </motion.h2>
                <table>
                    <tr>
                        <motion.th
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            Actividad
                        </motion.th>
                        <motion.th
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            Fecha Tentativa
                        </motion.th>
                        <motion.th
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            Ponderación
                        </motion.th>
                        <motion.th
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            Valor
                        </motion.th>
                    </tr>
                    {evaluations.map(
                        ({ evaluation, date, percentage, value }, index) => (
                            <tr>
                                <motion.td
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    exit="exits"
                                    custom={index + 2}
                                    transition={transition}
                                >
                                    {evaluation}
                                </motion.td>
                                <motion.td
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    exit="exits"
                                    custom={index + 2}
                                    transition={transition}
                                >
                                    {date}
                                </motion.td>
                                <motion.td
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    exit="exits"
                                    custom={index + 2}
                                    transition={transition}
                                >
                                    {percentage}
                                </motion.td>
                                <motion.td
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    exit="exits"
                                    custom={index + 2}
                                    transition={transition}
                                >
                                    {value}
                                </motion.td>
                            </tr>
                        )
                    )}
                </table>
            </GlassCardContent>
        ),
    },
    {
        title: "Metodología",
        Component: () => (
            <GlassCardContent>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    Metodología
                </motion.h2>
                <ul>
                    {[
                        "Async",
                        "Videos y material",
                        "Evaluaciones sincronas",
                        "Java como lenguaje de programación principal",
                        "Pregunten tanto como puedan",
                        `Let's keep it chill`,
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
            </GlassCardContent>
        ),
    },
    {
        title: "Preparadurías",
        Component: () => (
            <GlassCardContent>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    Preparadurías
                </motion.h2>
                <ul>
                    {[
                        "Tendrán 3 preparadores",
                        "Hay un grupo de WhatsApp con los preparadores",
                        "Las prepas serán los viernes",
                        "Ellos les darán material complementario y ejercicios",
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
            </GlassCardContent>
        ),
    },
];

const Class1Slide3 = () => {
    const controls = useSlideAnimationControls();
    const [itemSelected, setItemSelected] = useState(null);
    return (
        <Container >
            <Row>
                <motion.div  initial='hidden' animate={controls} variants={variants} custom={0} transition={transition}>
                    <H1 shadow fontSize={'3rem'}>
                        Hablemos un poco de la materia...
                    </H1>
                </motion.div>
                <Col col={6}>
                    {items.map((item, index) => 
                        <motion.div initial='hidden' animate={controls} variants={variants} custom={index + 2} transition={transition}>
                            <WhiteBox tabIndex={ 0 } className={item === itemSelected ? 'selected' : ''} onClick={() => setItemSelected(item)} >
                                {/* onBlur={() => item === itemSelected ? setItemSelected(null) : ''} */}
                                <ColoredTextOnHover p={3}>
                                        {`${index + 1}. ${item.title}`}
                                </ColoredTextOnHover>
                            </WhiteBox>
                        </motion.div>
                    )}
                </Col>
                <Col col={6}>
                    <AnimatePresence>
                        {itemSelected &&
                        <motion.div initial='hidden' animate='visible' variants={variants} exit='exits' custom={1} transition={transition}>
                            <GlassCard>
                                <itemSelected.Component/>
                            </GlassCard>
                        </motion.div>}
                    </AnimatePresence>
                </Col>
            </Row>

        </Container>
    )
}


const GlassCardContent = styled.div`
    overflow: auto;
    max-height: 400px;
    padding: 1rem;
    h2 {
        text-align: center;
    }

    table {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    }

    th {
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        padding: 1rem;
    }

    tr {
        &:nth-child(2) {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            td {
                &:first-child {
                    border-top-left-radius: 10px;
                }
                &:last-child {
                    border-top-right-radius: 10px;
                }
            }
        }
        &:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            td {
                &:first-child {
                    border-bottom-left-radius: 10px;
                }
                &:last-child {
                    border-bottom-right-radius: 10px;
                }
            }
        }
        &:not(:first-child) {

            td {
                background: rgba( 255, 255, 255, 0.25 );
                backdrop-filter: blur( 4px );
                -webkit-backdrop-filter: blur( 4px );
                padding: 1rem;
                white-space: break-spaces;
            }
        }
    }

    ul {
        list-style: '👉  ';

        li {
            margin: 0 0 10px 0;
        }
    }

`

const ColoredTextOnHover = styled(Box)`
    text-shadow: ${({ shadow, theme }) => shadow ? theme.textShadow : null};
    font-size: 1.5rem;
    font-weight: bold;

`


const WhiteBox = styled(Box)`
    width: fit-content;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);
    font-weight: bold;
    margin: 1rem;
    cursor: pointer;
    outline: none;

    &:hover, &.selected {
        background-color: white;
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);

        ${ColoredTextOnHover} {
            background: linear-gradient(90deg, ${({ theme }) => theme.gradientColors.gradientColor1} 0%, ${({ theme }) => theme.gradientColors.gradientColor2} 33%, ${({ theme }) => theme.gradientColors.gradientColor3} 66%,  ${({ theme }) => theme.gradientColors.gradientColor4} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: GradientAnimator 7s ease infinite;
            background-size: 400% 400%;
        }
    }
`

//     background-color: #272c36;
const Modal = styled.div`
    position: fixed;
    overflow: auto;
    z-index: 1050;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    .modal {
        display: block;
        overflow: visible;
        outline: 0;
        margin: 30px auto 0 auto;
        position: relative;
        width: auto;
        z-index: 1050;
        width: 600px;
    }

    .content {
        position: relative;
        background-color: #fff;
        border-radius: 6px;
        outline: 0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06);
        padding: 20px;
    }

    .header {
        padding-right: 20px;
    }

    .header-close {
        outline: 0;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 12px;
        line-height: 1.66666667;
        color: #575757;
        width: 20px;
        padding: 0 8px/2;
        background: none;
        border-style: none;
    }

    .body {
        position: relative;
        margin-top: 30px;
        padding-bottom: 30px;
    }

`

export default Class1Slide3;