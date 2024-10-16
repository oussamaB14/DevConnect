import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik ,Form} from "formik";
import { usePost } from "../../Services/posts/postContext";
// Import the model for the post types

const CreatePostModal = ({ isOpen, onClose }) => {
  const { createPost } = usePost();
  const PostType = {
    PROJECT: "PROJECT",
    POST: "POST",
  };
  const initialValues = {
    title: "",
    content: "",
    type: PostType.POST,
    linkUrl: "",
  };
  // Convert PostType enum to a plain JavaScript object

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    type: Yup.mixed()
      .oneOf([PostType.PROJECT, PostType.POST])
      .required("Type is required"),
    linkUrl: Yup.string().when("type", (type, schema) => {
      // Conditional validation
      return type === PostType.PROJECT
        ? schema.required("Link URL is required for projects")
        : schema.notRequired();
    }),
  });

  // Initial form values

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Make a POST request to the backend to create a new post
      await createPost(values);
      console.log(values);
      // Reset the form after successful submission
      resetForm();
      alert("Post created successfully!");
      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Post
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, isSubmitting }) => (
                <Form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="type"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Post Type:
                      </label>
                      <Field
                        as="select"
                        name="type"
                        id="type"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option value={PostType.POST}>Post</option>
                        <option value={PostType.PROJECT}>Project</option>
                      </Field>
                      <ErrorMessage
                        name="type"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <Field
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type post title"
                        required
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="content"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Post Content
                      </label>
                      <Field
                        as="textarea"
                        id="content"
                        rows="4"
                        name="content"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your post content here"
                      ></Field>
                      <ErrorMessage
                        name="content"
                        component="div"
                        className="error"
                      />
                    </div>
                    {values.type === PostType.PROJECT && (
                      <div>
                        <label htmlFor="linkUrl">Link URL:</label>
                        <Field type="text" id="linkUrl" name="linkUrl" />
                        <ErrorMessage
                          name="linkUrl"
                          component="div"
                          className="error"
                        />
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                    {isSubmitting ? "Creating..." : "Create Post"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default CreatePostModal;
