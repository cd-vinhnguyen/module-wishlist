import { Get, Rest } from "@heronjs/common";
import { Observable, of } from "rxjs";

type OutputProps = {
    status: string;
};

@Rest('/healthz')
class HealthApi {

    @Get({ uri: '/liveness' })
    liveness(): Observable<OutputProps> {
        return of({ status: 'live' });
    }

    @Get({ uri: '/readiness' })
    readiness(): Observable<OutputProps> {
        return of({ status: 'ready' });
    }
}

export { HealthApi };
