import { Card } from "../../components/card/card";
import "./sobre-mi.scss";

export function PageSobreMi() {
  const portafolio = [
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

  return (
    <div className="page-sobre-mi">
      <h1>SOBRE MI</h1>
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
      <div className="grid">
        {portafolio.map((portafolio) => (
          <Card
            image={portafolio.image}
            title={portafolio.title}
            description={portafolio.description}
          />
        ))}
      </div>
    </div>
  );
}
