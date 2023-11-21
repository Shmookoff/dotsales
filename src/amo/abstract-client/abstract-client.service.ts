export abstract class AbstractClientService {
  abstract readonly basePath: string;

  protected constructUrl(address: string, path: string) {
    return 'https://' + address + this.basePath + path;
  }
}
