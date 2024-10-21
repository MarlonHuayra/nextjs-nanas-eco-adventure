"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqdata = [
  {
    heading: "1. ¿Qué es 'Nana's Eco Adventure'?",
    subheading:
      "Nana's Eco Adventure es un juego educativo que te lleva a explorar y aprender sobre la protección del medio ambiente mientras te diviertes con Nana y sus amigos. ¡Únete a ella en su misión para salvar la naturaleza!",
  },
  {
    heading: "2. ¿Cuáles son los objetivos del juego?",
    subheading:
      "Los objetivos del juego incluyen completar misiones que enseñan sobre la conservación del medio ambiente, recolectar recursos, y ayudar a la fauna y flora del entorno. A medida que avanzas, aprenderás sobre prácticas sostenibles.",
  },
  {
    heading: "3. ¿Es 'Nana's Eco Adventure' adecuado para todas las edades?",
    subheading:
      "Sí, el juego está diseñado para ser accesible y educativo para jugadores de todas las edades. Los conceptos están presentados de manera divertida y fácil de entender, promoviendo el aprendizaje sobre la ecología.",
  },
  {
    heading: "4. ¿Cómo puedo apoyar a Nana en su aventura?",
    subheading:
      "Puedes apoyar a Nana completando misiones, recolectando objetos especiales, y compartiendo el juego con amigos y familiares. ¡Cada pequeño esfuerzo cuenta para proteger nuestro planeta!",
  },
  {
    heading:
      "5. ¿El juego tiene alguna opción para aprender más sobre el medio ambiente?",
    subheading:
      "Sí, el juego incluye secciones educativas donde los jugadores pueden aprender sobre diferentes temas ecológicos, como el reciclaje, la conservación del agua, y la biodiversidad mientras juegan.",
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Preguntas Frecuentes
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        Aquí encontrarás respuestas a las preguntas más comunes sobre 'Nana's
        Eco Adventure'. Aprenderás cómo jugar, los objetivos del juego y cómo
        contribuir a la conservación del medio ambiente mientras te diviertes en
        esta emocionante aventura con Nana. ¡Sumérgete y descubre más!
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="mt-20">
            <Image
              src={"/img/magicSeed.png"}
              alt="faq-image"
              width={900}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
