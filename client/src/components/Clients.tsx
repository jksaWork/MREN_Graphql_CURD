import { useMutation, useQuery } from "@apollo/client";
import { RevolvingDot } from "react-loader-spinner";
import { FETCH_CLIENT_QUERY } from "../graphql/query/clientQuery";
import { DELETE_CLIENT_MUTATION } from "../graphql/mutation/clientMutaions";
interface ClientInterface {
  email: string;
  id: string;
  name: string;
  phone: string;
}
type ClientRowProps = {
  clientIdx: number;
  client: ClientInterface;
};
const ClientRow = ({ clientIdx, client }: ClientRowProps) => {
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    variables: { id: client.id },
    refetchQueries: [{ query: FETCH_CLIENT_QUERY }],
  });
  //   console.log(deleteClient);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {clientIdx + 1}
      </th>
      <td className="px-6 py-4">{client.email}</td>
      <td className="px-6 py-4">{client.name}</td>
      <td className="px-6 py-4">{client.phone}</td>
      <td className="px-6 py-4">
        <button
          type="button"
          onClick={() => deleteClient()}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

function Clients() {
  const { loading, error, data } = useQuery(FETCH_CLIENT_QUERY);
  //   console.log()
  if (loading)
    return (
      <div className="w-full h-screen flex m-auto">
        <RevolvingDot
          height="400"
          width="400"
          radius={5}
          color="#4fa94d"
          secondaryColor=""
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (error)
    return <div className="text-5xl">Error Somete Thind Whent Wong</div>;

  const clients = data.clients as ClientInterface[];
  console.log(clients);

  return (
    !loading &&
    !error &&
    data && (
      <div className="mt-4">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {clients &&
                clients.map((client, clientIdx) => (
                  <ClientRow
                    key={clientIdx}
                    client={client}
                    clientIdx={clientIdx}
                  />
                ))}
            </tbody>
          </table>
        </div>

        {/*  */}
        {/*  */}
      </div>
    )
  );
}

export default Clients;
