import React from "react";

const habilidades = [
  { nombre: "HTML", imagen: "/html.png" },
  { nombre: "CSS", imagen: "/css.png" },
  { nombre: "JavaScript", imagen: "/js.png" },
  { nombre: "React", imagen: "/react.png" },
  { nombre: "Tailwind CSS", imagen: "/tailwind.png" },
  { nombre: "Vite", imagen: "/vite.svg" },
];

const Habilidades = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
        <p className="text-gray-600 mb-8">
          Estas son algunas de las tecnologías que manejo:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {habilidades.map((hab, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={hab.imagen}
                  alt={hab.nombre}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{hab.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;






  