import React from "react";
import style from "./style.module.scss";
const MoonContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>What is a Moon?</h2>
        <p className={style.fieldset_description}>
          Moons – also known as natural satellites – orbit planets and asteroids
          in our solar system. Earth has one moon, and there are more than 200
          moons in our solar system. Most of the major planets – all except
          Mercury and Venus – have moons. Pluto and some other dwarf planets, as
          well as many asteroids, also have small moons. Saturn and Jupiter have
          the most moons, with dozens orbiting each of the two giant planets.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          Moons come in many shapes, sizes, and types. A few have atmospheres
          and even hidden oceans beneath their surfaces. Most planetary moons
          probably formed from the discs of gas and dust circulating around
          planets in the early solar system, though some are "captured" objects
          that formed elsewhere and fell into orbit around larger worlds.
        </p>
      </div>
    </div>
  );
};

export default MoonContent;
