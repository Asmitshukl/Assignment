import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Userschema = new mongoose.Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});
export default mongoose.model('User', Userschema);
//# sourceMappingURL=UserModels.js.map