import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDTO } from './dto/CreateProject.dto';
import { Project } from './classes/Project';
import { Validate, isValidationOptions } from 'class-validator';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    this.projectsService.create(createProjectDTO);
    return createProjectDTO;
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }
}
