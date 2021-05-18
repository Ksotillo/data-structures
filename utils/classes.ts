const classes: {
    [x: string]: {
        title: string;
        classNumber: number;
        totalSlides: number;
        date: string;
        description: string;
        colors?: {
            gradientColor1: string;
            gradientColor2: string;
            gradientColor3: string;
            gradientColor4: string;
        };
    };
} = {
    "class-1": {
        title: "Introducción a la materia",
        classNumber: 1,
        totalSlides: 3,
        date: "21/04/2021",
        description:
            "Presentación del profesor y de como iremos llevando la materia",
    },
    "class-2": {
        title: "Programación Orientada a Objetos con Java",
        classNumber: 2,
        totalSlides: 7,
        date: "22/04/2021",
        description:
            "Explicación de porque se tiene Java como lenguaje de programación en el curso y como instalarlo",
        colors: {
            gradientColor1: "#5b6d5b",
            gradientColor2: "#ca8a8b",
            gradientColor3: "#e2bcb7",
            gradientColor4: "#e9c3be",
        },
    },
    "class-3": {
        title: "Vectores y Matrices",
        classNumber: 3,
        totalSlides: 3,
        date: "07/05/2021",
        description:
            "En esta clase revisaremos las primeras Estructuras de Datos que tenemos en Java las cuales son vectores y matrices",
        colors: {
            gradientColor1: "#fcecdd",
            gradientColor2: "#ffc288",
            gradientColor3: "#fea82f",
            gradientColor4: "#ff6701",
        },
    },
    "class-4": {
        title: "Complejidad: análisis de algoritmos",
        classNumber: 4,
        totalSlides: 17,
        date: "12/05/2020",
        description:
            "En esta clase revisaremos como se analizan los algotimos utilizando la notación de la big O",
        colors: {
            gradientColor1: "#999b84",
            gradientColor2: "#926e6f",
            gradientColor3: "#ca8a8b",
            gradientColor4: "#e6c4c0",
        },
    },
    "class-5": {
        title: "Introducción a las Estructuras de Datos",
        classNumber: 5,
        totalSlides: 7,
        date: "18/05/2020",
        description:
            "En esta clase daremos una breve introducción a las Estructuras de Datos que estaremos viendo a lo largo de la materia",
        colors: {
            gradientColor1: "#02475e",
            gradientColor2: "#687980",
            gradientColor3: "#f3bda1",
            gradientColor4: "#fefecc",
        },
    },
    "class-6": {
        title: "Memoria y como se guardas los datos",
        classNumber: 6,
        totalSlides: 5,
        date: "05/02/2020",
        description:
            "En esta clase revisaremos los operadores lógicos y de comparación, usados comunmente para expresar operaciones lógicas",
        colors: {
            gradientColor1: "#72147e",
            gradientColor2: "#f21170",
            gradientColor3: "#fa9905",
            gradientColor4: "#ff5200",
        },
    },
    // "class-7": {
    //     title: "Estructuras de control: estructuras selectivas",
    //     classNumber: 7,
    //     totalSlides: 3,
    //     date: "05/02/2020",
    //     description:
    //         "En esta clase revisaremos las estructuras selectivas, las cuales nos permiten construir el camino de un programa mediante condicionales",
    //     colors: {
    //         gradientColor1: "#fcd1d1",
    //         gradientColor2: "#ece2e1",
    //         gradientColor3: "#d3e0dc",
    //         gradientColor4: "#aee1e1",
    //     },
    // },
    // "class-8": {
    //     title: "Estructuras de control: estructuras repetitivas",
    //     classNumber: 8,
    //     totalSlides: 3,
    //     date: "16/02/2020",
    //     description:
    //         "En esta clase revisaremos las estructuras repetitivas, los cuales nos permiten repeitr código mediante los bucles",
    //     colors: {
    //         gradientColor1: "#ff5f5f",
    //         gradientColor2: "#ff8181",
    //         gradientColor3: "#ffa9a9",
    //         gradientColor4: "#ffb5b5",
    //     },
    // },
    // "class-9": {
    //     title: "Estructura de Datos: Listas",
    //     classNumber: 9,
    //     totalSlides: 4,
    //     date: "19/02/2020",
    //     description:
    //         "En esta clase revisaremos las estructuras repetitivas, los cuales nos permiten repeitr código mediante los bucles",
    //     colors: {
    //         gradientColor1: "#dcdcdc",
    //         gradientColor2: "#94ffb4",
    //         gradientColor3: "#71d2cb",
    //         gradientColor4: "#161d6f",
    //     },
    // },
    // "class-10": {
    //     title: "Funciones",
    //     classNumber: 10,
    //     totalSlides: 2,
    //     date: "24/03/2020",
    //     description:
    //         "En esta clase revisaremos las funciones, las cuales nos permite modularizar",
    //     colors: {
    //         gradientColor1: "#53354a",
    //         gradientColor2: "#903749",
    //         gradientColor3: "#e84545",
    //         gradientColor4: "#2b2e4a",
    //     },
    // },
    // "class-11": {
    //     title: "Estructura de Datos:  Diccionarios",
    //     classNumber: 11,
    //     totalSlides: 2,
    //     date: "25/03/2020",
    //     description:
    //         "En esta clase revisaremos las estructuras repetitivas, los cuales nos permiten repeitr código mediante los bucles",
    //     colors: {
    //         gradientColor1: "#9e9d89",
    //         gradientColor2: "#e4d3cf",
    //         gradientColor3: "#e2bcb7",
    //         gradientColor4: "#b67162",
    //     },
    // },
};

export default classes;
