import { TestClient } from "@/components/TestClient";
import { TestServer } from "@/components/TestServer";

const Homepage = () => {
  return (
    <div>
      <h2>Inside PAGE</h2>
      <TestServer />
      <TestClient />
    </div>
  );
};
export default Homepage;
