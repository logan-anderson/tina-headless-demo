import TinaCMS, { TinaAdmin } from "tinacms";
import { TinaEditProvider, setEditing } from "tinacms/dist/edit-state";

function App() {
  setEditing(true);

  return (
    <TinaEditProvider
      editMode={
        <TinaCMS
          data={{}}
          branch="main"
          // populate a .env file with VITE_CLIENT_URL=***
          clientId={process.env.VITE_CLIENT_URL}
          // in production this would be changed to isLocalClient={false}
          isLocalClient={true}
          cmsCallback={(cms) => {
            cms.flags.set("tina-admin", true);
            return cms;
          }}
        >
          {/* @ts-ignore */}
          {(_livePageProps) => <TinaAdmin />}
        </TinaCMS>
      }
    >
      <div>Need to be in edit mode!</div>
    </TinaEditProvider>
  );
}

export default App;
