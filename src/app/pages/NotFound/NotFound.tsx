import { AlertTriangle, ArrowLeft } from "react-feather";
import { PillButton } from "../../shared/components/PillButton/PillButton";
import { NotFoundPage } from "./NotFound.styles";

export function NotFound() {
  return (
    <NotFoundPage>
      <header>
        <AlertTriangle size={48} />
        <aside>
          <h1>Erro 404</h1>
          <p>A página solicitada não existe ou foi removida.</p>
          <PillButton to="/" text="Voltar ao início" animate>
            <ArrowLeft />
          </PillButton>
        </aside>
      </header>
    </NotFoundPage>
  );
}
