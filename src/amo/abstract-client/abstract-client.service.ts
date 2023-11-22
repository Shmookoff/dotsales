export abstract class AbstractClientService {
  protected abstract basePath: string;

  protected constructUrl(address: string, path: string) {
    return 'https://' + address + this.basePath + path;
  }

  protected async _fetch<T>(
    address: string,
    path: string,
    init?: RequestInit | undefined,
  ): Promise<T> {
    const response = await fetch(this.constructUrl(address, path), init);

    const text = await response.text();
    if (!response.ok) throw Error(text);
    console.log(text);
    console.log(text.length);
    const data = text ? JSON.parse(text) : null;
    return data;
  }
}
