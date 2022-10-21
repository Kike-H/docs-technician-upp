import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"Svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Base de Datos",
    Svg: require("@site/static/img/database.svg").default,
    description: (
      <>
        La base de datos usada para este proyecto es una base de datos
        relacional, la cual es MySQL.
      </>
    ),
  },
  {
    title: "Backend",
    Svg: require("@site/static/img/server.svg").default,
    description: (
      <>
        El backend está hecho con python y el framework de fastapi, para
        complementar la arquitectura cliente servidor.
      </>
    ),
  },
  {
    title: "Frontend",
    Svg: require("@site/static/img/computer.svg").default,
    description: (
      <>
        El Frontend está hecho con typescript y la librería de react js, usando vite.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
