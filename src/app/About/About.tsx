import React, { ReactNode } from "react";
import { AboutContainer } from "./About.style";

export class About extends React.Component {
  render() {
    const subtitle: ReactNode = (
      <i>
        Um bom sistema <span>é aquele que entendemos</span> como funciona e
        continuamos entendendo mesmo depois de anos de atualizações, e{" "}
        <span>não aquele que simplesmente funciona</span>.
      </i>
    );

    return (
      <AboutContainer sectionTitle="Sobre mim" subtitle={subtitle} reverseHeader>
        <p>
          Sempre fui <span>apaixonado por criar</span> coisas, e apesar de ter
          mais afinidade com áreas de <span>tecnologia e artísticas</span>, não
          gosto de me prender apenas à elas.
        </p>
        <p>
          Acredito que tudo possa ser aprendido, desde que haja{" "}
          <span>estudo</span>, <span>prática</span>,<span>foco</span> e{" "}
          <span>disciplina</span>. Quanto ao <span>interesse</span>, acredito
          que seja algo que
          <span>ajuda a impulsionar o aprendizado</span>, tornando-o mais
          agradável e até mais rico e mais rápido.{" "}
          <span>Sem ele, o aprendizado demora</span>
          muito mais, <span>mas não o torna impossível</span>.
        </p>
        <p>
          Não gosto de depender de outros para finalizar algum projeto. Por
          isso, <span>sempre procuro dar o meu melhor</span> e venho me
          aprofundando cada vez mais em cada área,{" "}
          <span>seja em planejamento</span>, <span>design</span>,{" "}
          <span>controle de qualidade</span>, <span>desenvolvimento</span>,{" "}
          <span>deploy</span> ou <span>monitoramento</span>. Além disso, sempre
          <span>ofereço ajuda</span> quando vejo que outra pessoa do time está
          “agarrado” em uma tarefa, mesmo que eu não entenda sobre o assunto no
          momento.
        </p>
        <p>
          Também <span>busco aprender e aplicar</span> as melhores{" "}
          <span>práticas de arquitetura</span>,<span>design</span>,{" "}
          <span>documentação</span> e <span>organização para o projeto</span> em
          que estou inserido. Focando em desenvolver{" "}
          <span>sistemas escaláveis com baixo custo de manutenção</span> e
          expansão, e que possuam <span>baixa complexidade</span> tanto para
          outros desenvolvedores, quanto para o hardware onde ele irá ser
          executado.
        </p>
      </AboutContainer>
    );
  }
}
