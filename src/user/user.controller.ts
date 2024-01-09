import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  @Get('/all/:id')
  getAll(@Param() id: string){
    return this.userService.getAll(id);
  }

  @Post('change/:id')
  changeStatus(@Param() token: any, @Query() data: any) {
    console.log(data)
    return this.userService.changeStatus(token, data);
  }
}
