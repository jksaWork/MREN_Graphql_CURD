import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_CLIENT_QUERY } from "../graphql/query/clientQuery";
import { HashLoader } from "react-spinners";
import editImage from "../assets/EditIcon.png";
import { t, noramalOption, ProjectFormType } from "../common.types";
import { MySelect, Input } from "./CustomForm";
import {
  CREATE_PROJECT_MUTATION,
  EDIT_PROJECT_MUTATION,
} from "../graphql/mutation/projectMutation";
import { FETCH_PROJECT_QUERY } from "../graphql/query/ProjectQuery";
const options = [
  { value: "new", label: "Not Started" },
  { value: "progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

export default function AddProject({
  project,
  type = "create",
}: {
  project?: ProjectFormType;
  type?: string;
}) {
  const [showModal, setShowModal] = React.useState(false);
  const initalFrom: ProjectFormType = project
    ? project
    : {
        name: "",
        description: "",
        status: "",
        clientId: "",
      };
  const [Form, setForm] = useState<ProjectFormType>(initalFrom);
  const handelFromChange = (name: t, value: string) => {
    //     e.target.value;
    const newForm = { ...Form };
    newForm[name] = value;
    setForm(newForm);
  };

  const [addProject] = useMutation(CREATE_PROJECT_MUTATION, {
    variables: {
      name: Form.name,
      description: Form.description,
      status: Form.status,
      clientId: Form.clientId,
    },
    refetchQueries: [{ query: FETCH_PROJECT_QUERY }],
  });

  const [EditProject] = useMutation(EDIT_PROJECT_MUTATION, {
    variables: {
      id: project?.id,
      description: Form.description,
      status: Form.status,
      name: Form.name,
    },
    refetchQueries: [{ query: FETCH_PROJECT_QUERY }],
  });
  //   console.log(createClient);
  const { loading, data } = useQuery(FETCH_CLIENT_QUERY);
  if (loading && !data) return <HashLoader color="#36d7b7" />;
  const clients: noramalOption[] | null = data.clients.map((el: any) => {
    return { value: el.id, label: el.name };
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(Form);
          type == "create" ? addProject() : EditProject();
          setForm(initalFrom);
          setShowModal(false);
        }}
      >
        {project == null ? (
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Project
          </button>
        ) : (
          <span className="bg-gray-200  flex items-center justify-center rounded-md py-2 px-3">
            <img
              onClick={() => setShowModal(true)}
              src={editImage}
              className="w-[20px]"
            />
          </span>
        )}
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Project</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="w-[450px]">
                      <Input
                        name="name"
                        value={Form.name}
                        handelChange={handelFromChange}
                      />
                      <Input
                        name="description"
                        value={Form.description}
                        handelChange={handelFromChange}
                      />
                      <MySelect
                        value={Form.description}
                        handelChange={handelFromChange}
                        name="status"
                        options={options}
                      />

                      {type != "edit" && (
                        <MySelect
                          value={Form.clientId}
                          handelChange={handelFromChange}
                          name="clientId"
                          options={clients || []}
                        />
                      )}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </form>
    </>
  );
}
