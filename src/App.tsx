import { Route, Routes } from "react-router";
import { MainLayout } from "./pages/MainLayout";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/users" />
        <Route path="/users/:userId" />
        <Route path="/users/:userId/books/:bookId" />
        <Route path="/users/:userId/articles/:articleId" />
        <Route path="/books" />
        <Route path="/articles" />
      </Route>
    </Routes>
  );
}

export default App;
