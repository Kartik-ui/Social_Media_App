import Post from "../models/Post.js";
import User from "../models/User.js";

export const createComment = async (req, res) => {
  const { id: userId } = req.user;
  const { firstName: userName } = await User.findOne({ _id: userId });
  const { postId, comment } = req.body;

  const body = { userName, userId, comment };
  try {
    const post = await Post.findOneAndUpdate(
      { _id: postId },
      {
        $push: {
          comments: {
            $each: [body],
          },
        },
      },
      { new: true }
    );

    res.status(200).json({ post, msg: "comment added successfully" });
  } catch (e) {
    res.status(400).json({ msg: "kya kr rha bhai" });
  }
};

// const removeComment = () => {};
