export class HttpHelpers {
  public build<filter>(params: filter): string {
    return (Object.keys(params) as Array<keyof filter>)
      .filter((key) => params[key] !== undefined)
      .map((key) => `${String(key)}=${params[key]}`)
      .join("&");
  }
}
