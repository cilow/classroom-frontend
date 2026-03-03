import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import { dataProvider } from "./providers/data";
import Dashboard from "@/pages/dashboard.tsx";
import { Book, Home } from "lucide-react";
import { Layout } from "@/components/refine-ui/layout/layout.tsx";
import SubjectList from "./pages/subjects/list";
import CreateSubject from "./pages/subjects/creatSubject";
import SubjectShow from "./pages/subjects/subjectShow";

function App() {
  return (
    <BrowserRouter>
      {/*<GitHubBanner />*/}
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "yK1aXq-6J8GdO-mNPyHe",
              }}
              resources={[
                {
                  name: "Dashboard",
                  list: "/",
                  meta: { label: "Home", icon: <Home /> },
                },
                {
                  name: "Subjects",
                  list: "/subjects",
                  show: "/subjects/:id",
                  create: "/subjects/create",
                  meta: { label: "Subjects", icon: <Book /> },
                },
              ]}
            >
              <Routes>
                <Route
                  element={
                    <Layout>
                      <Outlet />
                    </Layout>
                  }
                >
                  <Route path={"/"} element={<Dashboard />} />
                  <Route path={"/subjects"}>
                    <Route index element={<SubjectList />} />
                    <Route path="create" element={<CreateSubject />} />
                    <Route path=":id" element={<SubjectShow />} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
