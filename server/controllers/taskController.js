import Task from '../model/Task.js'

export const addTask = async (req, res) => {
    // console.log(req.body);
    try {
        let { data } = req.body;
        const newTask = await Task.create({
            data: data,
            createdAt: Date.now()
        });

        await newTask.save();
        res.status(200).json(newTask)

    } catch (err) {
        return res.status(500).json(err.message)
    }
}


export const getAllTasks = async (req, res) => {
    try {
        let tasks = await Task.find({}).sort({ 'createdAt': -1 })

        return res.status(200).json(tasks)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

export const toggleTask = async (req, res) => {
    try {
        let taskClicked = await Task.findById(req.params.id)
        let task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            { done: !taskClicked.done }
        )

        await task.save()
        return res.status(200).json(task)

    } catch (err) {
        return res.status(500).json(err.message)
    }
}

export const updateTask = async (req, res) => {
    try {
        await Task.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

        let task = await Task.findById(req.params.id)

        return res.status(200).json(task)

    } catch (err) {
        return res.status(500).json(err.message)
    }
}

export const deleteTask = async (req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id)

        return res.status(200).json(task)

    } catch (err) {
        return res.status(500).json(err.message)
    }
}