import FiguraConductor from "../../../assets/FiguraConductor.png";
import { ButtonSolicitar } from "../../../components/Driver/ButtonSolicitar";

export const SolicitarRutaCon = () => {
    return (
        <section className="p-5 h-full pb-44">
            <h3 className="text-4xl font-bold pb-2">Rutas</h3>
            <div className="w-full h-px bg-white mb-6"></div>
            <h3 className="text-2xl text-center">Sin rutas asignadas actualmente</h3>
            <section className="col-span-3  h-full flex flex-col justify-center items-center">
                <img
                    src={FiguraConductor}
                    alt="FiguraConductor"
                    className="h-80 w-80 object-contain mb-4"
                />
                <ButtonSolicitar></ButtonSolicitar>
            </section>
        </section>
    )
}
