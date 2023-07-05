import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";

export default function PlayGround() {
  return (
    <div className="flex flex-col bg-gray-800 relative overflow-x-hidden">
      <PreferenceNav />

      <Split
        className="h-[calc(100vh-105px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value="const a = 1;"
            theme={tokyoNightStorm}
            extensions={[javascript()]}
            className="bg-gray-800"
            style={{ fontSize: 16 }}
          />
        </div>
        <div>Text cases</div>
      </Split>
    </div>
  );
}
