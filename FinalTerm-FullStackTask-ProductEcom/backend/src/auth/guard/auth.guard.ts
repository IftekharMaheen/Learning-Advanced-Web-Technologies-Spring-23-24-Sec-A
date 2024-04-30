import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { jwtSecrets } from "../strategy/jwt.strategy";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService: JwtService,private reflactor: Reflector){}

    async canActivate(context: ExecutionContext): Promise<boolean>
    {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if(!token) {
                throw new UnauthorizedException('Unauthorized Access');
            }

            try {
                const payload = await this.jwtService.verifyAsync(token,{
                        secret: jwtSecrets.secret
                    }
                );

                request['user'] = payload;

                const requiredRoles = this.reflactor.get<string[]>('roles', context.getHandler());
                console.log('requiredRoles', requiredRoles);

                if(!requiredRoles || requiredRoles.length == 0) {
                    return true;
                }


                const userRoles: string[] = payload.role;
                console.log('userRoles', userRoles);
                const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
                console.log('hasRequiredRole', hasRequiredRole);
                if(!hasRequiredRole){
                    throw new UnauthorizedException('Unauthorized Access');
                }
            }

            catch{
                throw new UnauthorizedException('Unauthorized Access');
            }
            return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type,token] = request.headers.authorization?.split(' ')??[];
        return type === 'Bearer' ? token : undefined;
    }
}