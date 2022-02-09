interface IRelationship {
  id: string, 
  type: 'academic' | 'professional' | 'personal' | 'other',
  name: string,
  description: string,
  url: string,
}

export interface ISkillModel {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  name: string;
  relatedTo?: IRelationship[];
}