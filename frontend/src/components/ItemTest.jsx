import React from "react";
import { filmes } from "../assets/data/filmes";
import { category } from "../assets/data/category";

const Item = () => {
  return (
    <>
      {category.map((cat, key) => (
        <div key={key}>
          <p className="text-xl font-bold text-black">{cat}</p>
          <div className="overflow-x-auto max-w-7xl flex m-auto">
            <div className="flex flex-row flex-nowrap">
              {filmes
                .filter((filme) => filme.category.includes(cat))
                .map((filme, index) => (
                  <div
                    key={index}
                    className="min-w-50 max-w-50 max-h-80 bg-gray-600 p-2 flex flex-col justify-center items-center mx-1"
                  >
                    <img
                      className=" object-cover max-h-60"
                      src={filme.poster}
                      alt={`Imagem do Filme ${filme.title}`}
                    />
                    <div className="truncate text-white font-bold">
                      {filme.title}
                    </div>
                    <div className="text-white truncate max-w-50">
                      {filme.category.join(", ")}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
