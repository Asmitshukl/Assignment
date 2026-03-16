import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=UserModels.d.ts.map