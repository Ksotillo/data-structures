import React from 'react';
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from 'UI/Card/Card'
import ItemsSlide from 'components/ItemsSlide/ItemsSlide';

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
    return (
        <ItemsSlide
            title='Hablemos un poco de la materia...'
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
        />
    )
}




export default Class1Slide3;