import { LeftViewPanel } from "@/components/active/LeftViewPanel";
import { RightViewPanel } from "@/components/active/RightViewPanel";
import { InfoDialog } from "@/components/active/InfoDialog";
import { useState } from "react";

function App() {
  const [showInfoDialog, setShowInfoDialog] = useState(true);
  return (
    <>
      <header className="flex flex-col w-full items-start justify-between border-b-2 border-primary">
        <div className="flex w-full items-baseline justify-between ">
          <h1 className="text-2xl font-normal font-[Farringdon_Bold]">
            Canvas Forge
          </h1>
          <InfoDialog
            showInfoDialog={showInfoDialog}
            setShowInfoDialog={setShowInfoDialog}
          />
        </div>
        <h2 className="text-xl">The visual first Canvas API playground</h2>
      </header>
      <main>
        <LeftViewPanel />
        <RightViewPanel />
      </main>
    </>
  );
}

export default App;
