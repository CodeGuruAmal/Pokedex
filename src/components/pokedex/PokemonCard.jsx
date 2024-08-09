import React from "react";
import { useDetail } from "../../contexts/DetailContext";
import { FaHeart } from "react-icons/fa6";
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
          <div className="h-48 max-[592px]:h-28" key={index}>
            <div className="w-[12.9rem] max-[592px]:w-[90vw] max-[592px]:h-full bg-[#f4f4f4] max-[592px]:mx-auto max-[592px]:overflow-hidden h-36 shadow-custom px-4 py-3 relative rounded-xl">
              <div className="w-full max-[592px]:w-[38vw] absolute top-0 right-0 z-1 h-1/2 max-[592px]:h-full rounded-lg" style={cardStyle}></div>
              <div className="flex items-center relative z-5 text-white justify-between">
                <h1 className="max-[592px]:text-[#F45741] text-xs">#{p_item.id.toString().padStart(3, "0")}</h1>
                  <FaHeart className="cursor-pointer" />
              </div>

              <div className="flex max-[592px]:flex-row max-[592px]:items-center flex-col-reverse h-4/5 justify-between max-[592px]:w-[90%] max-[592px]:absolute max-[592px]:px-3  top-3">
                <div className="detail flex max-[592px]:flex-row flex-col gap-1 max-[592px]:justify-between items-center max-[592px]:text-sm text-lg">
                  <h1 className="capitalize">{p_item.name}</h1>
                  <div className="type flex gap-2">
                  {types.map((t_item, index) => {
                    return (
                      <img
                        key={index}
                        className="w-5"
                        alt=""
                        srcSet={`./assets/type/${t_item}.svg`}
                      />
                    );
                  })}
                </div>
                </div>

                <div className="">
                  <img
                    className="max-[592px]:static max-[592px]:translate-x-0 max-[592px]:w-[6.4rem] absolute -top-16 left-1/2 -translate-x-1/2 w-28"
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
