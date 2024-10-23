"use client";
import Image from 'next/image';

const workdata = [{
    imgSrc: '/images/Work/nanaHead.png',
    heading: 'Crear una Cuenta',
    subheading: 'Únete a Nana en su aventura ecológica y comienza a explorar un mundo lleno de naturaleza y maravillas.',
    hiddenpara: 'Al crear una cuenta, podrás acceder a misiones emocionantes, coleccionar recursos y aprender sobre la conservación ambiental. Forma parte de nuestra comunidad y ayuda a preservar el planeta desde el primer momento.',
},
{
    imgSrc: '/images/Work/nanaHead.png',
    heading: 'Descubre los Recursos Naturales',
    subheading: 'Explora diversos entornos y encuentra recursos que te ayudarán en tu viaje de conservación.',
    hiddenpara: 'Cada recurso que recolectes contribuirá a proyectos de sostenibilidad y restauración. Aprende sobre la flora y fauna de cada región mientras te diviertes y te conectas con la naturaleza.',
},
{
    imgSrc: '/images/Work/nanaHead.png',
    heading: 'Participa en Actividades de Conservación',
    subheading: 'Involúcrate en diversas actividades que fomentan la protección del medio ambiente.',
    hiddenpara: 'Desde plantar árboles hasta limpiar playas, cada actividad que realices no solo te enseñará sobre ecología, sino que también tendrá un impacto positivo en el mundo real. ¡Sé un héroe ecológico junto a Nana!',
},

];

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Acerca de nosotros</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>En **Nana's Eco Adventure**, nuestra misión es inspirar y educar a las nuevas generaciones sobre la importancia de la conservación del medio ambiente. A través de un juego interactivo y emocionante, combinamos la diversión con el aprendizaje, permitiendo a los jugadores explorar un mundo vibrante mientras adquieren conocimientos sobre la naturaleza y el respeto por nuestro planeta.</p> <p className='text-bluish md:text-lg font-normal leading-8'>Nuestro proyecto busca fomentar valores de sostenibilidad y responsabilidad ecológica, haciendo que cada jugador se sienta parte de una comunidad que trabaja en conjunto para proteger y preservar los recursos naturales. Únete a Nana en su aventura y descubre cómo puedes hacer la diferencia en el mundo que te rodea.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>
                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.heading} width={60} height={60} />
                            </div>
                            <div>
                                <Image src='/images/Work/bg-arrow.svg' alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
