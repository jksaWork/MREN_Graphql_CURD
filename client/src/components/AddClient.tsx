import React, { useState } from "react";
import { CREATE_CLIENT_MUTATION } from "../graphql/mutation/clientMutaions";
import { useMutation } from "@apollo/client";
import { FETCH_CLIENT_QUERY } from "../graphql/query/clientQuery";
type inputProps = {
  name: string;
  handelChange: (a: t, b: any) => void;
  value: string | number;
};
type FormType = {
  name: string;
  email: string;
  phone: string;
};

type t = keyof FormType;

const Input = ({ name, value, handelChange }: inputProps) => {
  return (
    <div className="mb-3 pt-0">
      <label htmlFor="email" className="text-2xl mb-2 capitalize">
        {name}
      </label>
      <input
        type="text"
        value={value}
        placeholder="Placeholder"
        onChange={(e) => handelChange(name as t, e.target.value)}
        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
};

export default function AddClient() {
  const [showModal, setShowModal] = React.useState(false);
  const initalFrom: FormType = {
    name: "",
    email: "",
    phone: "",
  };
  const [Form, setForm] = useState<FormType>(initalFrom);
  const handelFromChange = (name: t, value: string) => {
    //     e.target.value;
    const newForm = { ...Form };
    newForm[name] = value;
    setForm(newForm);
  };

  const [createClient] = useMutation(CREATE_CLIENT_MUTATION, {
    variables: {
      name: Form.name,
      email: Form.email,
      phone: Form.phone,
    },
    refetchQueries: [{ query: FETCH_CLIENT_QUERY }],
  });
  //   console.log(createClient);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createClient();
          setForm(initalFrom);
          setShowModal(false);
        }}
      >
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Client
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Client</h3>
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
                        name="email"
                        value={Form.email}
                        handelChange={handelFromChange}
                      />
                      <Input
                        name="phone"
                        value={Form.phone}
                        handelChange={handelFromChange}
                      />
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
