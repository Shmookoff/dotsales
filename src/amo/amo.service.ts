import { Injectable } from '@nestjs/common';
import { Oauth2Service } from './oauth2/oauth2.service';

@Injectable()
export class AmoService {
  constructor(readonly oauth2: Oauth2Service) {}
}
