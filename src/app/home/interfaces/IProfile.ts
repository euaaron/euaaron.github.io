import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IPlatform {
  icon: IconDefinition,
  platform: string,
  url: string
}

interface ICollege {
  abbr: string,
  name: string,
  course: string,
  ingressYear: number,
  graduationYear: number
}

export interface IProfile {
  user: {
    name: string,
    age: number,
  },
  education?: ICollege[],
  social?: IPlatform[]
}
