import { UserDTO } from "./UserDTO";

export interface ProjectDTO {
  owner: UserDTO;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  tags_url: string;
  collaborators_url: string;
  homepage?: string;
  created_at: string;
  updated_at: string
  fork: boolean;
}