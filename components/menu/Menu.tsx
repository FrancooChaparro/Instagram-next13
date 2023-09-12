import React from "react";
import styles from "./Menu.module.css";
import { Suggestions } from "../Suggestions/Suggestions";
import { MenuFooter } from "../MenuFooter/MenuFooter";
import model from "@/app/api/model.json"

 
const Menu = () => {

  
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <img src="/images/Googleplay.png" alt="Googleplay" />
        </div>
        <div className={styles.containerInfo}>
          <strong>
            <span>Franco</span>
          </strong>
          <span>Franco Chaparro</span>
        </div>
        <div className={styles.containerElipsis}>
          <span>Swith</span>
        </div>
      </div>
      <div className={styles.containerSuggestionsHeader}>
        <span className={styles.spanA}>Suggestions For You</span>
        <span className={styles.spanB}>See All</span>
      </div>
      <div className={styles.containerSuggestions}>
        {model.suggestions.map(e=> {
          return <Suggestions username={e.username}
          name={e.name}
          imagen={e.imagen}
          />
        })}
      </div>
      <MenuFooter />
    </div>
  );
};

export default Menu;
