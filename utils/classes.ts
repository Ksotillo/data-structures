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
        date: "12/05/2021",
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
        totalSlides: 6,
        date: "18/05/2021",
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
        date: "18/05/2020",
        description:
            "En esta clase revisaremos los operadores lógicos y de comparación, usados comunmente para expresar operaciones lógicas",
        colors: {
            gradientColor1: "#72147e",
            gradientColor2: "#f21170",
            gradientColor3: "#fa9905",
            gradientColor4: "#ff5200",
        },
    },
    "class-7": {
        title: "Listas Enlazadas Simples",
        classNumber: 7,
        totalSlides: 11,
        date: "23/05/2021",
        description:
            "En esta clase revisaremos lo que son las listas enlazadas simples, sus funciones y beneficios sobre los arreglos convencionales",
        colors: {
            gradientColor1: "#23049d",
            gradientColor2: "#aa2ee6",
            gradientColor3: "#ff79cd",
            gradientColor4: "#ffdf6b",
        },
    },
    "class-8": {
        title: "Listas Doblemente Enlazadas",
        classNumber: 8,
        totalSlides: 10,
        date: "31/05/2021",
        description:
            "En esta clase revisaremos lo que son las listas doblemente enlazadas, sus funciones y beneficios sobre las listas simples",
        colors: {
            gradientColor1: "#f5f7b2",
            gradientColor2: "#1cc5dc",
            gradientColor3: "#890596",
            gradientColor4: "#cf0000",
        },
    },
    "class-9": {
        title: "Listas Ciculares",
        classNumber: 9,
        totalSlides: 8,
        date: "06/06/2021",
        description:
            "En esta clase revisaremos lo que son las listas enlazadas circulares, sus funciones y beneficios sobre las listas simples",
        colors: {
            gradientColor1: "#393e46",
            gradientColor2: "#00adb5",
            gradientColor3: "#aad8d3",
            gradientColor4: "#eeeeee",
        },
    },
    "class-10": {
        title: "Pilas",
        classNumber: 10,
        totalSlides: 7,
        date: "06/06/2021",
        description:
            "En esta clase veremos lo que son los Stack o Pilas, unas estructuras bastante sencillas pero muy útiles y utilizadas en el mundo de la programación",
        colors: {
            gradientColor1: "#ffc996",
            gradientColor2: "#ff8474",
            gradientColor3: "#9f5f80",
            gradientColor4: "#583d72",
        },
    },
    "class-11": {
        title: "Colas",
        classNumber: 11,
        totalSlides: 8,
        date: "07/06/2021",
        description:
            "En esta clase veremos lo que son los Queue o Colas, unas estructuras bastante sencillas pero muy útiles y utilizadas en el mundo de la programación",
        colors: {
            gradientColor1: "#04009a",
            gradientColor2: "#77acf1",
            gradientColor3: "#3edbf0",
            gradientColor4: "#c0fefc",
        },
    },
    "class-12": {
        title: "Hash Tables",
        classNumber: 12,
        totalSlides: 15,
        description:
            "En esta clase veremos lo que son las Hash Table o Tablas de Dispersión, unas estructuras bastante prevalentes y utilizadas en el mundo de la programación",
        date: "28/06/2021",
        colors: {
            gradientColor1: "#766161",
            gradientColor2: "#87A7B3",
            gradientColor3: "#CDC7BE",
            gradientColor4: "#E1F1DD",
        },
    },
    "class-13": {
        title: "Diagramas UML",
        classNumber: 13,
        totalSlides: 10,
        description:
            "En esta clase veremos lo que es UML o Unified Modeling Lenguage (Lenguaje de modelado unificado), el cual nos permite a través de sus elementos gráficos representar flujos de trabajo diversos para proyectos de tecnología informática, hardware, electrónica, robótica, hidráulica, procesos industriales, empresariales y gerenciales de cualquier nivel en una organización sin importar su tamaño o naturaleza",
        date: "07/07/2021",
        colors: {
            gradientColor1: "#DE8971",
            gradientColor2: "#7B6079",
            gradientColor3: "#A7D0CD",
            gradientColor4: "#FFE9D6",
        },
    },
    "class-14": {
        title: "Árboles",
        classNumber: 14,
        totalSlides: 10,
        description:
            "En esta clase veremos lo que son los Árboles, unas estructuras bastante prevalentes y utilizadas en el mundo de la programación",
        date: "07/07/2021",
        colors: {
            gradientColor1: "#F0EBCC",
            gradientColor2: "#3D84B8",
            gradientColor3: "#344FA1",
            gradientColor4: "#3F3697",
        },
    },
};

export default classes;
