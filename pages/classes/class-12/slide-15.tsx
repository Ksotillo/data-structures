import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { WhiteBox } from "UI/Box/Box";
import { ColoredText } from "UI/Button/Button";

// bigger_picture.jpeg
const items = [
    {
        title: "Message Digest",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/message-digest.jpg"}
                    width={1024}
                    height={768}
                />
                <br />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    Un Message Digest es una función hash criptográfica que
                    contiene una cadena de dígitos creada por una fórmula hash
                    unidireccional. Los Message Digest están diseñados para
                    proteger la integridad de un dato o medio para detectar
                    cambios y alteraciones en cualquier parte de un mensaje.
                    <br />
                    <br />
                    Por ejemplo: suponga que desea almacenar un archivo en
                    cualquiera de los espacios abiertos en la nube, pero no
                    desea que nadie modifique su archivo. Si alguien ha alterado
                    o modificado su archivo, debe saberlo. Este problema se
                    resuelve utilizando Message Digest. Message Digest calcula
                    un valor hash con respecto a su archivo y puede almacenar
                    ese valor hash en su archivo local. Ahora, si descarga su
                    archivo de la nube, puede verificarlo con su hash. Si se
                    modifica, el hash no coincidirá.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Sistema de Archivos",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/file-system.jpg"}
                    width={404}
                    height={404}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    El hash se utiliza para vincular el nombre del archivo a la
                    ruta del archivo. Cuando interactúa con un sistema de
                    archivos como usuario, ve el nombre del archivo, tal vez la
                    ruta al archivo. Pero para almacenar realmente la
                    correspondencia entre el nombre del archivo y la ruta, y la
                    ubicación física de ese archivo en el disco, el sistema usa
                    un mapa, y ese mapa generalmente se implementa como una
                    tabla hash.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Verificación de Contraseñas",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/storing_salted_passwords.png"}
                    width={711}
                    height={415}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    Cuando usa algún servicio web e ingresa sus credenciales
                    para iniciar sesión, no enviará su contraseña en texto plano
                    a través de la red al servidor para verificar si las
                    credenciales son correctas o no, porque en ese caso el
                    mensaje podría ser interceptado y entonces alguien sabrá tu
                    contraseña. En su lugar, se calcula un valor hash de su
                    contraseña en el lado del cliente y luego se envía al
                    servidor, que luego compara ese valor hash con el valor hash
                    de la contraseña almacenada. Y si son iguales, te
                    autenticas. Se utilizan funciones especiales de hash
                    criptográficas para este propósito. Significa que es casi
                    imposible encontrar otra cadena que tenga el mismo valor
                    hash que su contraseña. Entonces estás seguro. En realidad,
                    nadie puede construir una cadena diferente que tenga el
                    mismo valor hash que su contraseña y luego iniciar sesión en
                    su sistema, incluso si interceptó el mensaje con el valor
                    hash de su contraseña que va al servidor.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Comparación de patrones",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/pattern-matching.png"}
                    width={704}
                    height={384}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    El hash también se usa para buscar patrones en las cadenas.
                    Uno de los algoritmos famosos que utiliza hash para la
                    búsqueda de un patrón en una cadena es el{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm"
                        target="_blank"
                    >
                        algoritmo de Rabin-Karp
                    </a>{" "}
                    . La coincidencia de patrones también se utiliza para
                    detectar plagio.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Lenguajes de Programación",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={
                        "/images/class-12/hashtables-in-other-programming-languages.png"
                    }
                    width={662}
                    height={662}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    En la mayoría de los lenguajes de programación, hay tipos de
                    datos integrados o estructuras de datos en la biblioteca
                    estándar que se basan en tablas hash. Por ejemplo, dict o
                    dictionary en Python o HashMap en Java.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Compiladores",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-12/compilers.png"}
                    width={346}
                    height={364}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    Para identificar las palabras clave en los lenguajes de
                    programación, el compilador usa la tabla hash para almacenar
                    estas palabras clave y otros identificadores para compilar
                    el programa.
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class12Slide12 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Creo que ya sé para dónde van los tiros, aún así... ¿Para qué se usa esta vaina?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class12Slide12;
