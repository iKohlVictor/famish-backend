import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, password }) {
    return this.authService.validateUser(email, password);
  }

  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
