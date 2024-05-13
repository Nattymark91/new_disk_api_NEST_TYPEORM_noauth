import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('lessons')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateLessonDto })
  @ApiResponse({
    status: 201,
    description: 'The lesson has been added'
  })
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get all lessons'
  })
  findAll() {
    return this.lessonsService.findAll();
  }
}
