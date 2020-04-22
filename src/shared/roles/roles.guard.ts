import { Injectable, CanActivate, ExecutionContext,Request } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    // console.log('%c⧭ request ', 'color: #f2ceb6', request);
    // const hasRole = () => request.user.data.roles.some((role) => roles.includes(role));
    const hasRole = roles.includes(request.user.data.role)
    return request && !!request.user.data.role && hasRole;
  }
}