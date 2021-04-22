import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { CodeBlock, dracula } from "react-code-blocks";


const inheritanceCodeBlock = `
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

`;

const encapsulationCodeBlock = `
class Person:
  def __init__(self, fname, lname, password):
    self.firstname = fname
    self.lastname = lname
    self._password = password

  def printname(self):
    print(self.firstname, self.lastname)

  def showPassword(self):
    print(self._password)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

`;

const abstractionCodeBlock = `
from abc import ABC
class Shape(ABC): #abstract class
  def calculate_area(self): #abstract methodpass

class Rectangle(Shape):
  length = 5
  breadth = 3
  
  def calculate_area(self):
    return self.length * self.breadth

class Circle(Shape):
  radius = 4
  def calculate_area(self):
    return 3.14 * self.radius * self.radius

`;

const polymorphismCodeBlock = `
class India():
     def capital(self):
       print("New Delhi")
 
     def language(self):
       print("Hindi and English")
 
class USA():
     def capital(self):
       print("Washington, D.C.")
 
     def language(self):
       print("English")
 
obj_ind = India()
obj_usa = USA()
for country in (obj_ind, obj_usa):
    country.capital()
    country.language()

`;

const items = [
    {
        title: "Herencia",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La herencia se refiere a las relaciones y subclases entre
                    diferentes objetos que permiten a los programadores usar y
                    reutilizar una lógica común, al mismo tiempo que mantienen
                    una jerarquía única. En este proceso, los datos se limpian,
                    transforman y visualizan minimizando la redundancia del
                    código para permitir un análisis de datos más completo y
                    preciso.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={inheritanceCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
    {
        title: "Encapsulación",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La encapsulación se refiere al proceso de yuxtaponer
                    diferentes elementos para construir una entidad única. En
                    este proceso, la implementación y el estado de cada objeto
                    se retienen de forma privada dentro de una clase definida,
                    de modo que otros objetos no pueden realizar cambios en la
                    clase; solo pueden declarar una lista de funciones públicas.
                    La encapsulación o la ocultación de datos mejora la
                    seguridad del código y también previene la corrupción de
                    datos.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={encapsulationCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
    {
        title: "Abstracción",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La abstracción se define como el proceso de ocultar la
                    implementación de las funcionalidades y exponer solo
                    aquellas interfaces o métodos de acceso necesarios para
                    activar los métodos de la clase de implementación. En otras
                    palabras, los objetos solo regalan aquellas funcionalidades
                    que son relevantes para el uso de otros objetos.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={abstractionCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
    {
        title: "Polimorfismo",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    Como sugiere su nombre, el polimorfismo se refiere al
                    proceso en el que los objetos pueden tomar más de una forma
                    dependiendo de la demanda de las circunstancias. Determina
                    el uso o significado necesario para cada ejecución de ese
                    objeto, eliminando así la necesidad de duplicar el código.
                    Los dos métodos de polimorfismo son: sobrecarga de métodos y
                    anulación de métodos.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={polymorphismCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
];

const Class1Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Principios de la programación orientada a objetos"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class1Slide4;
