import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "/public/img/magicTree.png";
import benefitTwoImg from "/public/img/magicTree2.png";

const benefitOne = {
  title: "Destaca tus ventajas con 3D Hub",
  desc: "En 3D Hub, ofrecemos una extensa colección de modelos 3D de primera calidad para satisfacer tus necesidades creativas. Desde objetos detallados hasta diseños únicos, nuestra plataforma te brinda un acceso sin igual a recursos de alta calidad.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Comprende a tus clientes",
      desc: "Facilita la búsqueda de modelos 3D de alta calidad para satisfacer las necesidades de tus proyectos y creaciones.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Mejora la adquisición",
      desc: "Accede a una amplia variedad de modelos 3D de forma gratuita, lo que simplifica la adquisición de recursos para tus diseños.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Fomenta la retención de clientes",
      desc: "Nuestra plataforma te brinda la posibilidad de colaborar y conectarte con una comunidad de creadores, lo que fomenta la retención de clientes y la participación en proyectos 3D a largo plazo.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Explora más ventajas con 3D Hub",
  desc: "Más allá de los modelos 3D, en 3D Hub encontrarás una comunidad de apasionados creadores con quienes podrás colaborar, aprender y crecer. Comparte tus conocimientos, busca inspiración y forma parte de una red global de mentes creativas.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Plantilla Adaptable para Dispositivos Móviles",
      desc: "3D Hub está diseñado como una plantilla móvil de respuesta prioritaria, lo que significa que nuestros servicios están optimizados para funcionar perfectamente en dispositivos móviles. Ya no tendrás que preocuparte por la compatibilidad con tus dispositivos móviles.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Potenciado por Next.js y TailwindCSS",
      desc: "Nuestra plantilla se apoya en las últimas tecnologías y herramientas disponibles. Con Next.js y TailwindCSS, puedes confiar en la calidad y eficiencia de tu experiencia en 3D Hub.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Modo Claro y Oscuro",
      desc: "3D Hub incluye un modo claro y oscuro sin necesidad de configuración. Puedes disfrutar de la plataforma en el modo que más te convenga, ya sea durante el día o la noche. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
