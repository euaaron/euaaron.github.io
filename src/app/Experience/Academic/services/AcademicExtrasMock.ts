export interface IExperienceExtras {
  owner: string;
  name: string;
  content: [
    {
      title: string;
      description: string;
      activities?: [
        {
          title: string;
          description: string;
          result?: string;
        }
      ];
    }
  ];
}

export const AcademicExtrasMock: IExperienceExtras[] = [
  {
    owner: "information-systems",
    name: "Disciplinas",
    content: [
      {
        title: "Interação Humano-Computador",
        description:
          "Disciplina voltada para as nuances da interação entre o ser humano e o computador, como questões relacionadas à acessibilidade, mídia digital como áudio e vídeo, a interface de usuário, entre outros.",
        activities: [
          {
            title: "Atividade de Áudio",
            description:
              "O objetivo da atividade foi desenvolver uma mídia de áudio com efeitos especiais simples, bem como trabalhar o áudio para que não houvessem ruídos.",
            result: `<audio controls> 
                      <source src='https://euaaron-simple-cdn.herokuapp.com/file?name=ihc-audio-ad-aaron-intro&type=audio/ogg' type='audio/ogg'>
                      <source src='https://euaaron-simple-cdn.herokuapp.com/file?name=ihc-audio-ad-aaron-intro&type=audio/mpeg' type='audio/mpeg'>
                   </audio>
                  `,
          },
        ],
      },
    ],
  },
];
