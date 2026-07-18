import Divider from "./Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "../assets/profile.jpeg";

export function Profile() {
  return (
    <>
      <div className="mb-8 flex flex-col items-center">
        <img
          src={profilePhoto}
          alt="Foto de perfil"
          className="mb-4 h-25 w-25 rounded-full object-cover grayscale"
        />
        <h1 className="mb-2 text-subtitle text-primary">Bruno Eiji</h1>

        <div className="mb-4 flex flex-col items-center rounded-2xl bg-badge px-3 py-1">
          <p className="flex items-center gap-2 text-[13px] text-badge-fg">
            <span className="relative inline-block h-2 w-2 rounded-full bg-badge-fg before:absolute before:inset-0 before:animate-[status-pulse_1.5s_ease-out_infinite] before:rounded-full before:bg-badge-fg before:content-['']" />
            Disponível
          </p>
        </div>

        <p className="mb-4 text-paragraph text-secondary">
          <FontAwesomeIcon className="text-role" icon={faCode} /> Desenvolvedor Front-End · UI/UX{" "}
        </p>
        <p className="text-center text-paragraph text-secondary">
          Crio experiências web rápidas, acessíveis e com um design impecável. Sou apaixonado por
          código limpo, sistemas de design e por tornar a web um lugar melhor — um componente de
          cada vez. 🚀
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <div className="flex items-center gap-2 whitespace-nowrap rounded-2xl bg-card px-3 py-1">
          <p className="flex items-center gap-1.5 whitespace-nowrap text-[13px] text-secondary">
            <FontAwesomeIcon className="text-[14px] text-secondary" icon={faMapPin} /> Barretos - SP
          </p>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap rounded-2xl bg-card px-3 py-1">
          <p className="flex items-center gap-1.5 whitespace-nowrap text-[13px] text-secondary">
            <FontAwesomeIcon className="text-[14px] text-secondary" icon={faBriefcase} /> Mais de 4
            anos de experiência
          </p>
        </div>
      </div>
      <Divider text="Links" />
    </>
  );
}
