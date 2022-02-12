import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "../../components/card/card";
import "./sobre-mi.scss";

export function PageSobreMi() {
  let history = useHistory();
  let portafolio = [
    {
      image:
        "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
      title: "LEON COLOR",
      description: "Leon colorido de logo",
      url: "",
    },
    {
      image:
        "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
      title: "Twitter logo",
      description: "Logo de twitter para usa",
      url: "",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
      title: "Logo fedex",
      description: "Logo de empresa fedex",
      url: "",
    },
    {
      image:
        "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
      title: "Starbucks",
      description: "Logo de starbucks",
      url: "",
    },
  ];

  const [datosPortafolio, setDatosPortafolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.auth.isLogin);

  // ME VA DAR EL ESTADO INICIAL DEL COMPONENTE
  useEffect(() => {
    axios
      .get("https://61ef3d0cd593d20017dbb393.mockapi.io/portafolio")
      .then((respuesta) => {
        setIsLoading(false);
        portafolio = respuesta.data;
        setDatosPortafolio(respuesta.data);
        // setDatosPortafolio(respuesta.data);
      });
  }, []);

  return !isLoading ? (
    <div className="page-sobre-mi">
      <h1>SOBRE MI </h1>
      <button
        onClick={() => {
          console.log("click!!");
          history.push("experiencia");
        }}
      >
        INGRESAR
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        adipisci voluptatibus doloremque atque magni perferendis delectus modi
        hic. Fugit obcaecati pariatur nostrum sint praesentium quia tempora sunt
        veritatis, reiciendis quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        adipisci voluptatibus doloremque atque magni perferendis delectus modi
        hic. Fugit obcaecati pariatur nostrum sint praesentium quia tempora sunt
        veritatis, reiciendis quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        adipisci voluptatibus doloremque atque magni perferendis delectus modi
        hic. Fugit obcaecati pariatur nostrum sint praesentium quia tempora sunt
        veritatis, reiciendis quis?
      </p>
      {datosPortafolio.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {datosPortafolio.map((portafolio, id) => (
            <Card
              key={id}
              image={portafolio.image}
              title={portafolio.title}
              description={portafolio.description}
              id={portafolio.id}
              isLogin={isLogin}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-4xl font-bold bg-red-300 p-10 rounded-xl text-center text-white">
          NO HAY DATOS AUN
        </h2>
      )}
    </div>
  ) : (
    <h1>ESTA CARGANDO</h1>
  );
}
