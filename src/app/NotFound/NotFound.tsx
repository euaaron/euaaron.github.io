import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi";
import { PillButton } from "../shared/components/PillButton/PillButton";
import { NotFoundPage } from "./NotFound.styles";

export function NotFound() {
  return (
    <NotFoundPage>
      <header>
        <FiAlertTriangle size={48} />
        <aside>
          <h1>Erro 404</h1>
          <p>A página solicitada não existe ou foi removida.</p>
          <PillButton to="/" text="Voltar ao início" animate>
            <FiArrowLeft />
          </PillButton>
        </aside>
      </header>
    </NotFoundPage>
  );
}
