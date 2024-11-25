/* import Image from "next/image"; */
import styles from "./page.module.css";
import Image from "next/image";
import header from "@/components/Header";

export default function Home() {
  
  return (
    <div>
      <header />
      <h1>
        Bem-vindo
      </h1>
      
      <Image 
        className={styles.imagem}
        src={"/imagens/39774-flexibilidade-olimpica-a-relacao-entre-a-ginastica-ritmica-e-ballet-1.jpg"} 
        alt={"Imagem de ginástica"} 
        layout="responsive" 
        width={450} 
        height={250} 
      />
      
    </div>
  );
}
