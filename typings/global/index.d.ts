declare const ROOT_DIR: string;

// tslint:disable-next-line:no-namespace
declare namespace NodeJS {
  interface Global {
    ROOT_DIR: string;
  }
}
