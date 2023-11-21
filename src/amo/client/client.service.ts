import { Injectable } from '@nestjs/common';
import { AbstractClientService } from '../abstract-client/abstract-client.service';

@Injectable()
export class ClientService extends AbstractClientService {
  readonly basePath = '/api';
}
