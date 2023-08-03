import { Injectable } from '@nestjs/common';
import { Project } from './classes/Project';
import { CreateProjectDTO } from './dto/CreateProject.dto';

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = [];

  create(createProjectDTO: CreateProjectDTO) {
    const newProject = new Project(
      createProjectDTO.name,
      createProjectDTO.imageUrl,
      createProjectDTO.details,
      createProjectDTO.deployedUrl,
      createProjectDTO.githubUrl,
    );
    this.projects.push(newProject);
  }

  async findAll(): Promise<Project[]> {
    return this.projects;
  }
}
