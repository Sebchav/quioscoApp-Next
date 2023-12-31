import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria";

const Sidebar = () => {

  const {categorias} = useQuiosco();

  return (
    <>
        <Image
         width={120}
         height={100}
         src="/assets/img/logo.svg"
         alt="Imagen logotipo"
         className="mx-auto mt-5"
        />

        <nav className="mt-10">
          {categorias?.map(categoria => (
            <Categoria 
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
        
    </>
  )
}

export default Sidebar