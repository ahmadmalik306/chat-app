import { ApolloProvider } from "@apollo/client";
import { client } from "../config";
interface Props {
  children: React.ReactNode;
}
export const Providers: React.FC<Props> = ({ children }) => (
  <ApolloProvider client={client}>
    {/* <LoaderProvider> */}
    {/* <Router
            basename={basePath}
            getUserConfirmation={(message, callback) => {
              const allowTransition = window.confirm(message);
              callback(allowTransition);
            }}
          > */}
    {/* <ModalProvider>
              <GlobalProvider>
                <AuthProvider> */}
    {children}
    {/* </AuthProvider>
              </GlobalProvider>
            </ModalProvider> */}
    {/* </Router> */}
    {/* </LoaderProvider> */}
  </ApolloProvider>
);
