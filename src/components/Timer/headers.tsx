import Button from "../ui/customButton";
import { useTimersContext, timerType } from "../store/context";
import CustomInput from "../ui/customInput";
import Form from "../ui/form";
import { formHandle } from "../ui/form";
import { useRef } from "react";
import Timers from "./Timers";

export default function Header() {
  const ctx = useTimersContext();
  const formRef = useRef<formHandle>(null);
  const handleSave = (data: unknown) => {
    console.log("Save Clicked");
    const modifiedData = data as timerType;
    ctx.addTimer(modifiedData);
    console.log({ data });
    formRef.current?.reset();
  };
  return (
    <>
      <div>
        <h1>ReactTimer</h1>
        <Form ref={formRef} onSave={handleSave}>
          <div>
            <CustomInput id="name" label="Name" type="text" />
            <CustomInput id="duration" label="Duration" type="text" />
            <Button type="submit">Save</Button>
          </div>
        </Form>
        <Button onClick={ctx.isRunning ? ctx.stopTimer : ctx.startTimer}>
          {ctx.isRunning ? "Stop" : "Start"} Timers{" "}
        </Button>
      </div>
      <Timers />

      {/* onClick={ctx.isRunning ? ctx.stopTimer : ctx.stopTimer} */}
    </>
  );
}
