import React from "react";
import { useDetail } from "../../contexts/DetailContext";
import { FaRegHeart } from "react-icons/fa";
import TypeColor from "../../utils/TypeColors";

const PokemonCard = () => {
  const { pokemon } = useDetail();
  const getGradientStyle = (type) => {
    if(type.length === 1) {
      return { backgroundColor: TypeColor[type[0]] }
    }else if (type.length === 2) {
      return {
        background: `linear-gradient(90deg, ${TypeColor[type[0]]}, ${
          TypeColor[type[1]]
        })`,
      };
    }
  }
  return (
    <>
      {pokemon.map((p_item, index) => {
        const types = p_item.types.map((info) => info.type.name);
        const cardStyle = getGradientStyle(types);

        return (
          <div className="h-48 max-[550px]:h-32 px-6 py-2" key={index}>
            <div className="w-52 max-[550px]:w-[90vw] max-[550px]:h-full max-[550px]:mx-auto max-[550px]:overflow-hidden h-36 shadow-custom px-4 py-1 relative rounded-xl">
              <div className="flex items-center text-sm justify-between text-white">
                <h1 className="max-[550px]:text-black">#{p_item.id.toString().padStart(4, "0")}</h1>
                  <FaRegHeart />
              </div>
              <div className="w-full max-[550px]:w-[40vw] absolute top-0 right-0 -z-10 h-1/2 max-[550px]:h-full rounded-lg" style={cardStyle}></div>

              <div className="flex max-[550px]:flex-row max-[550px]:items-center flex-col-reverse h-4/5 justify-between max-[550px]:w-[90%] max-[550px]:absolute max-[550px]:px-3  top-3">
                <div className="detail flex max-[550px]:flex-row flex-col gap-1 max-[550px]:justify-between items-center max-[550px]:text-base text-lg">
                  <h1 className="capitalize">{p_item.name}</h1>
                  <div className="type flex gap-3">
                  {types.map((t_item, index) => {
                    return (
                      <img
                        key={index}
                        className="w-6"
                        alt=""
                        srcSet={`./assets/type/${t_item}.svg`}
                      />
                    );
                  })}
                </div>
                </div>

                <div className="">
                  <img
                    className="max-[550px]:static max-[550px]:translate-x-0 max-[550px]:w-28 absolute -top-16 left-1/2 -translate-x-1/2 w-32"
                    src={p_item.sprites.other["official-artwork"].front_default}
                    alt={p_item.name}
                  />
                </div>

                
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PokemonCard;
