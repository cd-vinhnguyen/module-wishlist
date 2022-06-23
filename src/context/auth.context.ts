import { APIError, AuthResolver, SecureContext, SecureProperty } from "@heronjs/common";
import { StatusCodes } from "http-status-codes";
import { Observable, of } from "rxjs";

type AuthProps = {
    sub?: string;
    roles?: string[];
};

class AuthContext implements SecureContext<AuthProps, SecureProperty> {
    OnGuard(data: AuthProps): Observable<SecureProperty> {
        if (!data) throw new APIError(StatusCodes.UNAUTHORIZED, 'Invalid Token!');
        return of(data || { roles: ['admin', 'moderator'], permissions: ['add-user'] });
    }

    static Resolver: AuthResolver<AuthProps> = {
        http: ['header', 'authorization'], ws: ['handshake', 'token'],

        resolve: async (data?: string): Promise<AuthProps> => {
            // hanle authorization data
            return {};
        }
    };
}

export { AuthContext };