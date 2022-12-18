import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/common/encrypt/bcrypt';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    if (!email || !password) throw new UnauthorizedException();

    const user = await this.userService.findByEmail(email);

    const isPasswordValid = await comparePassword(password, user.password);

    if (user && isPasswordValid) {
      return this.login(user);
    }

    return null;
  }

  async login(user: User) {
    // const payload = { email: user.email, sub: user.id };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
    return true;
  }
}
