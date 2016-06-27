declare module "notc" {
    function notc<T>(dir: string, options?: {
        parentConf: string
    }): T;
    namespace notc { }
    export = notc;
}