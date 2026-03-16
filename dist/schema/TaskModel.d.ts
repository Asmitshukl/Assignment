import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    status: "Done" | "Not Done";
    Title: string;
    Description: string;
    user?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=TaskModel.d.ts.map