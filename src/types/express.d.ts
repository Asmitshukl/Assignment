// types/express.d.ts
declare global {
    namespace Express {
        interface Request {
            userid?: string,
            email?:string
        }
    }
}
export {}