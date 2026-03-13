import mongoose from "mongoose";

const getSequence = async (model) => {
    const counterDoc = await mongoose.connection
        .collection("counters")
        .findOne({ id: `${model}_id_counter` });

    return (counterDoc?.seq || 0) + 1;
}

export default getSequence